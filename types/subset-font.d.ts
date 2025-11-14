declare module "subset-font" {
  type TargetFormat = "sfnt" | "woff" | "woff2" | "truetype";

  type VariationAxisValue =
    | number
    | {
        min: number;
        max: number;
        default?: number;
      };

  interface SubsetFontOptions {
    targetFormat?: TargetFormat;
    preserveNameIds?: number[];
    variationAxes?: Record<string, VariationAxisValue>;
    noLayoutClosure?: boolean;
  }

  export default function subsetFont(
    fontBuffer: ArrayBuffer | ArrayBufferView | Buffer,
    text: string,
    options?: SubsetFontOptions,
  ): Promise<Buffer>;
}
