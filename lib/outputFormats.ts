export const OUTPUT_FORMATS = [
  { id: "woff2", label: "WOFF2" },
  { id: "woff", label: "WOFF" },
  { id: "ttf", label: "TTF" },
] as const;

export type OutputFormat = (typeof OUTPUT_FORMATS)[number]["id"];

export const OUTPUT_MIME_TYPES: Record<OutputFormat, string> = {
  woff2: "font/woff2",
  woff: "font/woff",
  ttf: "font/ttf",
};

export const DEFAULT_OUTPUT_FORMAT: OutputFormat = "ttf";

export function isOutputFormat(value: string): value is OutputFormat {
  return OUTPUT_FORMATS.some((format) => format.id === value);
}

const EXTENSION_REGEX = /\.[^.]+$/;

export function buildSubsetFilename(
  sourceName: string,
  format: OutputFormat,
): string {
  const base =
    (sourceName?.replace(EXTENSION_REGEX, "") || "font").trim() || "font";
  return `subset-${base}.${format}`;
}
