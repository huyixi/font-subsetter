"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type {
  PresetCharsetId,
  PresetCharsetMeta,
} from "@/lib/presetCharsets";
import {
  DEFAULT_OUTPUT_FORMAT,
  buildSubsetFilename,
  type OutputFormat,
} from "@/lib/outputFormats";
import {
  getCharacterCount,
  mergeCharacters,
  hasCharacters,
} from "@/lib/fontSubsetter/characterUtils";
import {
  validateCharactersInput,
  validateFontBeforeSubmit,
} from "@/lib/fontSubsetter/validation";

type Status =
  | { type: "idle" }
  | { type: "processing" }
  | { type: "success"; message: string }
  | { type: "error"; message: string };

const INITIAL_STATUS: Status = { type: "idle" };

type PresetState = Record<PresetCharsetId, boolean>;

const buildPresetState = (presetList: PresetCharsetMeta[]): PresetState =>
  presetList.reduce<PresetState>((acc, preset) => {
    acc[preset.id] = false;
    return acc;
  }, {} as PresetState);

interface UseFontSubsetterResult {
  characters: string;
  characterCount: number;
  uploadedFont: File | null;
  outputFormat: OutputFormat;
  addedPresets: PresetState;
  status: Status;
  isProcessing: boolean;
  canGenerate: boolean;
  selectFont: (file: File) => void;
  updateCharacters: (value: string) => void;
  applyPreset: (presetId: PresetCharsetId) => Promise<void>;
  setOutputFormat: (format: OutputFormat) => void;
  generateSubset: () => Promise<void>;
}

export function useFontSubsetter(
  presets: PresetCharsetMeta[],
): UseFontSubsetterResult {
  const [characters, setCharacters] = useState("");
  const [uploadedFont, setUploadedFont] = useState<File | null>(null);
  const [outputFormat, setOutputFormat] =
    useState<OutputFormat>(DEFAULT_OUTPUT_FORMAT);
  const [addedPresets, setAddedPresets] = useState<PresetState>(() =>
    buildPresetState(presets),
  );
  const [status, setStatus] = useState<Status>(INITIAL_STATUS);

  const presetCache = useRef<Map<PresetCharsetId, string>>(new Map());

  useEffect(() => {
    setAddedPresets(buildPresetState(presets));
    presetCache.current.clear();
  }, [presets]);

  const characterCount = useMemo(
    () => getCharacterCount(characters),
    [characters],
  );

  const canGenerate = Boolean(uploadedFont && hasCharacters(characters));
  const isProcessing = status.type === "processing";

  const resetStatus = useCallback(() => {
    setStatus((prev) => (prev.type === "idle" ? prev : INITIAL_STATUS));
  }, []);

  const selectFont = useCallback(
    (file: File) => {
      const errorMessage = validateFontBeforeSubmit(file);
      if (errorMessage) {
        setStatus({ type: "error", message: errorMessage });
        return;
      }
      setUploadedFont(file);
      resetStatus();
    },
    [resetStatus],
  );

  const updateCharacters = useCallback(
    (value: string) => {
      setCharacters(value);
      resetStatus();
    },
    [resetStatus],
  );

  const applyPreset = useCallback(
    async (presetId: PresetCharsetId) => {
      resetStatus();
      try {
        const cached = presetCache.current.get(presetId);
        let charactersToAdd = cached;

        if (!charactersToAdd) {
          const response = await fetch(`/api/presets/${presetId}`);
          if (!response.ok) {
            throw new Error(`Failed to load preset ${presetId}`);
          }

          const data = (await response.json()) as { characters?: string };
          charactersToAdd = data.characters?.trim() ?? "";
          presetCache.current.set(presetId, charactersToAdd);
        }

        if (!charactersToAdd) {
          throw new Error("预设字符集为空");
        }

        const resolvedCharacters = charactersToAdd;

        setCharacters((prev) => mergeCharacters(prev, resolvedCharacters));
        setAddedPresets((prev) => ({
          ...prev,
          [presetId]: true,
        }));
      } catch (error) {
        console.error(error);
        setStatus({
          type: "error",
          message: "加载预设字符集失败，请稍后重试",
        });
      }
    },
    [resetStatus],
  );

  const downloadSubset = useCallback(
    async (blob: Blob, fontName: string, format: OutputFormat) => {
      const downloadName = buildSubsetFilename(fontName, format);
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = downloadName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    },
    [],
  );

  const generateSubset = useCallback(async () => {
    const fontError = validateFontBeforeSubmit(uploadedFont);
    if (fontError) {
      setStatus({ type: "error", message: fontError });
      return;
    }

    const characterError = validateCharactersInput(characters);
    if (characterError) {
      setStatus({ type: "error", message: characterError });
      return;
    }

    if (!uploadedFont) {
      return;
    }

    setStatus({ type: "processing" });

    try {
      const formData = new FormData();
      formData.append("font", uploadedFont);
      formData.append("characters", characters);
      formData.append("format", outputFormat);

      const response = await fetch("/api/subset", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        let errorMessage = "字体子集生成失败";
        try {
          const errorData = (await response.json()) as { error?: string };
          if (errorData?.error) {
            errorMessage = errorData.error;
          }
        } catch {
          // ignore
        }
        throw new Error(errorMessage);
      }

      const blob = await response.blob();
      await downloadSubset(blob, uploadedFont.name, outputFormat);

      setStatus({
        type: "success",
        message: `字体子集（${outputFormat.toUpperCase()}）已生成并下载`,
      });
    } catch (error) {
      console.error(error);
      setStatus({
        type: "error",
        message: error instanceof Error ? error.message : "生成字体子集时出错",
      });
    }
  }, [characters, downloadSubset, outputFormat, uploadedFont]);

  const handleFormatChange = useCallback(
    (format: OutputFormat) => {
      setOutputFormat(format);
      resetStatus();
    },
    [resetStatus],
  );

  return {
    characters,
    characterCount,
    uploadedFont,
    outputFormat,
    addedPresets,
    status,
    isProcessing,
    canGenerate,
    selectFont,
    updateCharacters,
    applyPreset,
    setOutputFormat: handleFormatChange,
    generateSubset,
  };
}
