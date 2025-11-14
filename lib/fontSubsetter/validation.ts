import {
  DEFAULT_OUTPUT_FORMAT,
  isOutputFormat,
  type OutputFormat,
} from "@/lib/outputFormats";
import {
  MAX_CHARACTERS,
  MAX_FONT_BYTES,
  SUPPORTED_FONT_EXTENSIONS,
} from "./constants";
import { getCharacterCount } from "./characterUtils";

const SUPPORTED_EXTENSIONS_SET = new Set(
  SUPPORTED_FONT_EXTENSIONS.map((ext) => ext.toLowerCase()),
);

export function isSupportedFontName(name?: string | null): boolean {
  if (!name) {
    return false;
  }
  const lowered = name.toLowerCase();
  return Array.from(SUPPORTED_EXTENSIONS_SET).some((ext) =>
    lowered.endsWith(ext),
  );
}

export function validateFontBeforeSubmit(font: File | null): string | null {
  if (!font || font.size === 0) {
    return "请先上传要子集化的字体文件";
  }

  if (!isSupportedFontName(font.name)) {
    return "暂不支持该字体格式，请选择 TTF/OTF/WOFF/WOFF2";
  }

  if (font.size > MAX_FONT_BYTES) {
    return "字体文件过大，请选择 20MB 以内的文件";
  }

  return null;
}

export function validateCharactersInput(characters: string): string | null {
  const trimmed = characters.trim();

  if (trimmed.length === 0) {
    return "请输入或选择要保留的字符";
  }

  const count = getCharacterCount(trimmed);
  if (count > MAX_CHARACTERS) {
    return "字符数量过多，请控制在 50,000 个以内";
  }

  return null;
}

export function resolveOutputFormat(
  value: FormDataEntryValue | null,
): OutputFormat {
  if (typeof value === "string" && isOutputFormat(value)) {
    return value;
  }
  return DEFAULT_OUTPUT_FORMAT;
}
