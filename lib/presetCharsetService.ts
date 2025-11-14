import { promises as fs } from 'node:fs'
import path from 'node:path'
import {
  PRESET_CHARSET_META,
  inlineCharsetMap,
  type PresetCharsetId,
  type PresetCharsetMeta,
} from './presetCharsets'

export function getPresetMetadata(): PresetCharsetMeta[] {
  return PRESET_CHARSET_META
}

export async function loadPresetCharset(id: PresetCharsetId): Promise<string | null> {
  const inlineCharset = inlineCharsetMap[id]
  if (inlineCharset) {
    return inlineCharset
  }

  const meta = PRESET_CHARSET_META.find((item) => item.id === id)
  if (!meta || meta.type !== 'remote' || !meta.path) {
    return null
  }

  const relativePath = meta.path.startsWith('/') ? meta.path.slice(1) : meta.path
  const filePath = path.join(process.cwd(), 'public', relativePath)

  try {
    const content = await fs.readFile(filePath, 'utf8')
    return content.trim()
  } catch (error) {
    console.error(`Failed to load charset file for ${id}:`, error)
    return null
  }
}
