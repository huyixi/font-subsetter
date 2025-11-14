export class FontSubsetError extends Error {
  constructor(
    public statusCode: number,
    message: string,
    public cause?: unknown,
  ) {
    super(message);
    this.name = "FontSubsetError";
  }
}

export function isFontSubsetError(error: unknown): error is FontSubsetError {
  return error instanceof FontSubsetError;
}
