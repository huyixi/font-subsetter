import { NextResponse } from "next/server";
import subsetFont from "subset-font";
import { createFont, woff2 as woff2Module } from "fonteditor-core";
import {
  DEFAULT_OUTPUT_FORMAT,
  OUTPUT_MIME_TYPES,
  buildSubsetFilename,
  isOutputFormat,
  type OutputFormat,
} from "@/lib/outputFormats";

export const runtime = "nodejs";

const MAX_CHARACTERS = 50000;
const MAX_FONT_BYTES = 20 * 1024 * 1024; // 20MB safety limit
const PRESERVE_NAME_IDS = Array.from({ length: 512 }, (_, index) => index);
const SUBSET_TARGET_FORMAT = "sfnt";

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

async function reconvertFont(ttfBuffer: Buffer, format: OutputFormat): Promise<Buffer> {
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

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const fontEntry = formData.get("font");
    const characters = String(formData.get("characters") ?? "").trim();
    const formatEntry = formData.get("format");

    if (!(fontEntry instanceof File) || fontEntry.size === 0) {
      return NextResponse.json(
        { error: "请上传要子集化的字体文件" },
        { status: 400 },
      );
    }

    if (fontEntry.size > MAX_FONT_BYTES) {
      return NextResponse.json(
        { error: "字体文件过大，请选择 20MB 以内的文件" },
        { status: 400 },
      );
    }

    if (!characters) {
      return NextResponse.json(
        { error: "请输入或选择要保留的字符" },
        { status: 400 },
      );
    }

    if (characters.length > MAX_CHARACTERS) {
      return NextResponse.json(
        { error: "字符数量过多，请控制在 50,000 个以内" },
        { status: 400 },
      );
    }

    let outputFormat: OutputFormat = DEFAULT_OUTPUT_FORMAT;
    if (typeof formatEntry === "string" && isOutputFormat(formatEntry)) {
      outputFormat = formatEntry;
    }

    const fontBuffer = Buffer.from(await fontEntry.arrayBuffer());
    const subsetBuffer = await subsetFont(fontBuffer, characters, {
      targetFormat: SUBSET_TARGET_FORMAT,
      preserveNameIds: PRESERVE_NAME_IDS,
    });

    const outputBuffer = await reconvertFont(Buffer.from(subsetBuffer), outputFormat);

    const filename = buildSubsetFilename(fontEntry.name, outputFormat);
    const encodedFilename = encodeURIComponent(filename);

    return new NextResponse(outputBuffer, {
      headers: {
        "Content-Type": OUTPUT_MIME_TYPES[outputFormat],
        "Content-Length": String(outputBuffer.length),
        "Cache-Control": "no-store",
        "Content-Disposition": `attachment; filename="${encodedFilename}"; filename*=UTF-8''${encodedFilename}`,
      },
    });
  } catch (error) {
    console.error("Font subset failed", error);
    return NextResponse.json(
      { error: "字体子集生成失败，请稍后再试" },
      { status: 500 },
    );
  }
}
