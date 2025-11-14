export type PresetCharsetId = "digits" | "latin" | "cn-3500" | "cn-7000";

export interface PresetCharsetMeta {
  id: PresetCharsetId;
  label: string;
  sizeHint: number;
  type: "inline" | "remote";
  path?: string;
}

export const PRESET_CHARSET_META: PresetCharsetMeta[] = [
  {
    id: "cn-3500",
    label: "常用汉字 3500",
    sizeHint: 3500,
    type: "remote",
    path: "/charsets/cn-3500.txt",
  },
  {
    id: "cn-7000",
    label: "常用汉字 7000",
    sizeHint: 7000,
    type: "remote",
    path: "/charsets/cn-7000.txt",
  },
  {
    id: "digits",
    label: "数字 0-9",
    sizeHint: 10,
    type: "inline",
  },
  {
    id: "latin",
    label: "英文 A-Z a-z",
    sizeHint: 52,
    type: "inline",
  },
];

export const inlineCharsetMap: Record<PresetCharsetId, string | undefined> = {
  digits: "0123456789",
  latin: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
  "cn-3500": undefined,
  "cn-7000": undefined,
};

export function isPresetCharsetId(value: string): value is PresetCharsetId {
  return PRESET_CHARSET_META.some((preset) => preset.id === value);
}
