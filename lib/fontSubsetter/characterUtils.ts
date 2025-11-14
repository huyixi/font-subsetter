export function getCharacterCount(value: string): number {
  return Array.from(value).length;
}

export function mergeCharacters(base: string, addition: string): string {
  if (!addition) {
    return base;
  }
  return dedupeCharacters(base + addition);
}

export function dedupeCharacters(value: string): string {
  const seen = new Set<string>();
  const result: string[] = [];
  for (const char of value) {
    if (!seen.has(char)) {
      seen.add(char);
      result.push(char);
    }
  }
  return result.join("");
}

export function hasCharacters(value: string): boolean {
  return getCharacterCount(value.trim()) > 0;
}
