import { createFont, woff2 as woff2Module } from "fonteditor-core";
import type { OutputFormat } from "@/lib/outputFormats";

const ensureWoff2Ready = (() => {
  let promise: Promise<unknown> | null = null;
  return () => {
    if (!promise) {
      promise = woff2Module.init();
    }
    return promise;
  };
})();

const toBuffer = (output: ArrayBuffer | Buffer | Uint8Array): Buffer => {
  if (Buffer.isBuffer(output)) {
    return output;
  }
  return Buffer.from(output instanceof ArrayBuffer ? new Uint8Array(output) : output);
};

export async function reconvertFont(ttfBuffer: Buffer, format: OutputFormat): Promise<Buffer> {
  if (format === "woff2") {
    await ensureWoff2Ready();
  }

  const font = createFont(ttfBuffer, {
    type: "ttf",
    hinting: true,
    kerning: true,
  });

  const written = font.write({
    type: format,
    hinting: true,
    kerning: true,
    toBuffer: true,
  });

  return toBuffer(written);
}
