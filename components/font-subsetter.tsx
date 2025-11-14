"use client";

import { useEffect, useState } from "react";
import type { PresetCharsetMeta } from "@/lib/presetCharsets";
import { OUTPUT_FORMATS } from "@/lib/outputFormats";
import { useFontSubsetter } from "@/hooks/use-font-subsetter";
import CharacterPresets from "./character-presets";
import FileUploadArea from "./file-upload-area";
import CharacterInput from "./character-input";
import GenerateButton from "./generate-button";

interface FontSubsetterProps {
  presets: PresetCharsetMeta[];
}

export default function FontSubsetter({ presets }: FontSubsetterProps) {
  const {
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
    setOutputFormat,
    generateSubset,
  } = useFontSubsetter(presets);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const shouldShowStatus =
    status.type === "success" || status.type === "error";
  const statusTone =
    status.type === "success" ? "success" : status.type === "error" ? "error" : null;

  return (
    <div
      className={`transition-opacity duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}
    >
      <div className="min-h-screen bg-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <div
            className="absolute top-20 left-10 w-96 h-96 rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(196,30,58,0.03) 0%, transparent 70%)",
              animation: "waterInk 8s ease-in-out infinite alternate",
            }}
          />
          <div
            className="absolute bottom-32 right-20 w-80 h-80 rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(139,111,71,0.02) 0%, transparent 70%)",
              animation: "waterInk 10s ease-in-out infinite alternate 1s",
            }}
          />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 py-12 md:py-20">
          <div
            className={`mb-16 transform transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0"
            }`}
            style={{
              animation: isVisible
                ? "brushStrokeIn 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards"
                : "none",
            }}
          >
            <h1 className="font-serif-cn text-5xl md:text-6xl font-bold text-fg-primary mb-1 tracking-tight leading-tight">
              字体子集
            </h1>
            <p className="text-lg text-fg-secondary font-light max-w-2xl leading-relaxed mb-2">
              精简字体文件，只保留所需字符，降低文件体积。
            </p>
            <div className="h-px w-12 bg-accent-primary opacity-60 mt-4" />
          </div>

          <div className="space-y-8">
            {/* Upload section */}
            <div
              className={`transform transition-all duration-1000 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }`}
              style={{
                animation: isVisible
                  ? "brushStrokeIn 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.1s forwards"
                  : "none",
                opacity: 0,
              }}
            >
              <div className="text-xs font-semibold text-fg-muted uppercase tracking-widest mb-4 pl-1">
                第一步 · 上传字体
              </div>
              <FileUploadArea onFontUpload={selectFont} uploadedFont={uploadedFont} />
            </div>

            {/* Presets and character input in two column layout */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div
                className={`lg:col-span-2 transform transition-all duration-1000 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-4 opacity-0"
                }`}
                style={{
                  animation: isVisible
                    ? "brushStrokeIn 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s forwards"
                    : "none",
                  opacity: 0,
                }}
              >
                <div className="text-xs font-semibold text-fg-muted uppercase tracking-widest mb-4 pl-1">
                  第二步 · 字符选择
                </div>
                <div className="space-y-6 rounded-lg p-8  from-bg/50 to-bg-alt/30 border border-line">
                  <div>
                    <div className="text-xs font-medium text-fg-muted uppercase tracking-widest mb-3 pl-1 opacity-75">
                      预设字符集
                    </div>
                    <CharacterPresets
                      presets={presets}
                      onPresetAdd={applyPreset}
                      addedPresets={addedPresets}
                    />
                  </div>
                  <div className="h-px bg-line" />
                  <div>
                    <CharacterInput
                      value={characters}
                      onChange={updateCharacters}
                    />
                  </div>
                </div>
              </div>

              <div
                className={`transform transition-all duration-1000 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-4 opacity-0"
                }`}
                style={{
                  animation: isVisible
                    ? "brushStrokeIn 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.3s forwards"
                    : "none",
                  opacity: 0,
                }}
              >
                <div className="text-xs font-semibold text-fg-muted uppercase tracking-widest mb-4 pl-1">
                  状态面板
                </div>
                <div className="bg-bg/60 border border-line/50 rounded-md p-6 space-y-4">
                  <div className="space-y-3">
                    <div>
                      <p className="text-xs text-fg-muted mb-2 select-none">
                        字体文件
                      </p>
                      <p className="text-sm text-fg-secondary font-mono font-medium select-none">
                        {uploadedFont ? uploadedFont.name : "未选择"}
                      </p>
                    </div>
                    <div className="h-px bg-line opacity-25" />
                    <div>
                      <p className="text-xs text-fg-muted mb-2 select-none">
                        字符数
                      </p>
                      <p className="text-sm text-fg-secondary font-mono font-medium select-none">
                        {characterCount} 字符
                      </p>
                    </div>
                    <div className="h-px bg-line opacity-25" />
                    <div>
                      <p className="text-xs text-fg-muted mb-2 select-none">
                        输出格式
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {OUTPUT_FORMATS.map((format) => {
                          const isActive = outputFormat === format.id;
                          return (
                            <button
                              key={format.id}
                              type="button"
                              onClick={() => setOutputFormat(format.id)}
                              className={`px-3 py-1.5 text-xs font-semibold rounded-sm border transition-all duration-200 ${
                                isActive
                                  ? "border-accent-primary bg-accent-soft/30 text-accent-primary shadow-sm"
                                  : "border-line/60 bg-transparent text-fg-muted hover:text-fg-primary hover:border-accent-primary/60"
                              }`}
                            >
                              {format.label}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                  {shouldShowStatus && (
                    <>
                      <div className="h-px bg-line opacity-25" />
                      <div
                        className={`p-3 rounded-sm text-sm font-medium transition-all duration-300 ${
                          statusTone === "success"
                            ? "bg-accent-soft/30 text-accent-primary border border-accent-soft"
                            : "bg-red-50 text-red-700 border border-red-200 dark:bg-red-900/20 dark:text-red-400 dark:border-red-900"
                        }`}
                      >
                        {status.type === "success" || status.type === "error"
                          ? status.message
                          : ""}
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Generate button */}
            <div
              className={`flex justify-center pt-4 transform transition-all duration-1000 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }`}
              style={{
                animation: isVisible
                  ? "brushStrokeIn 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.4s forwards"
                  : "none",
                opacity: 0,
              }}
            >
              <GenerateButton
                isLoading={isProcessing}
                disabled={!canGenerate}
                onClick={generateSubset}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
