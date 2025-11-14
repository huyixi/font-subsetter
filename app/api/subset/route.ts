import "server-only";

import { NextResponse } from "next/server";
import subsetFont from "subset-font";
import {
  buildSubsetFilename,
  OUTPUT_MIME_TYPES,
  type OutputFormat,
} from "@/lib/outputFormats";
import {
  PRESERVE_NAME_IDS,
  SUBSET_TARGET_FORMAT,
} from "@/lib/fontSubsetter/constants";
import { reconvertFont } from "@/lib/fontSubsetter/fontConversion";
import { FontSubsetError, isFontSubsetError } from "@/lib/fontSubsetter/errors";
import {
  resolveOutputFormat,
  validateCharactersInput,
  validateFontBeforeSubmit,
} from "@/lib/fontSubsetter/validation";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const fontEntry = formData.get("font");
    const charactersInput = String(formData.get("characters") ?? "");
    const outputFormat = resolveOutputFormat(formData.get("format"));

    if (!(fontEntry instanceof File)) {
      throw new FontSubsetError(400, "请上传要子集化的字体文件");
    }

    const fontValidationError = validateFontBeforeSubmit(fontEntry);
    if (fontValidationError) {
      throw new FontSubsetError(400, fontValidationError);
    }

    const characterValidationError = validateCharactersInput(charactersInput);
    if (characterValidationError) {
      throw new FontSubsetError(400, characterValidationError);
    }

    const characters = charactersInput.trim();
    const fontBuffer = Buffer.from(await fontEntry.arrayBuffer());
    const subsetBuffer = await subsetFont(fontBuffer, characters, {
      targetFormat: SUBSET_TARGET_FORMAT,
      preserveNameIds: PRESERVE_NAME_IDS,
    });

    const outputBuffer = await reconvertFont(
      Buffer.from(subsetBuffer),
      outputFormat,
    );

    return createDownloadResponse(outputBuffer, fontEntry.name, outputFormat);
  } catch (error) {
    if (isFontSubsetError(error)) {
      return NextResponse.json(
        { error: error.message },
        { status: error.statusCode },
      );
    }

    console.error("Font subset failed", error);
    return NextResponse.json(
      { error: "字体子集生成失败，请稍后再试" },
      { status: 500 },
    );
  }
}

function createDownloadResponse(
  data: Buffer,
  originalName: string,
  format: OutputFormat,
) {
  const filename = buildSubsetFilename(originalName, format);
  const encodedFilename = encodeURIComponent(filename);

  return new NextResponse(data, {
    headers: {
      "Content-Type": OUTPUT_MIME_TYPES[format],
      "Content-Length": String(data.length),
      "Cache-Control": "no-store",
      "Content-Disposition": `attachment; filename="${encodedFilename}"; filename*=UTF-8''${encodedFilename}`,
    },
  });
}
