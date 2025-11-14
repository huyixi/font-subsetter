import type { OutputFormat } from "@/lib/outputFormats";

export const SUPPORTED_FONT_EXTENSIONS = [".ttf", ".otf", ".woff", ".woff2"] as const;

export const MAX_CHARACTERS = 50_000;
export const MAX_FONT_BYTES = 20 * 1024 * 1024; // 20MB

export const PRESERVE_NAME_IDS = Array.from({ length: 512 }, (_, index) => index);
export const SUBSET_TARGET_FORMAT: OutputFormat | "sfnt" = "sfnt";
