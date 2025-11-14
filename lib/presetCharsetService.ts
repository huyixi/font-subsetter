import { promises as fs } from 'node:fs'
import path from 'node:path'
import {
  PRESET_CHARSET_META,
  inlineCharsetMap,
  type PresetCharsetId,
  type PresetCharsetMeta,
} from './presetCharsets'

interface LoadPresetCharsetOptions {
  baseUrl?: string
}

const isHttpUrl = (value: string) => value.startsWith('http://') || value.startsWith('https://')

async function fetchCharset(id: PresetCharsetId, url: string): Promise<string | null> {
  try {
    const response = await fetch(url)
    if (!response.ok) {
      console.error(
        `Failed to fetch charset file for ${id} from ${url}: ${response.status} ${response.statusText}`,
      )
      return null
    }
    const content = await response.text()
    return content.trim()
  } catch (error) {
    console.error(`Failed to fetch charset file for ${id} from ${url}:`, error)
    return null
  }
}

export function getPresetMetadata(): PresetCharsetMeta[] {
  return PRESET_CHARSET_META
}

export async function loadPresetCharset(
  id: PresetCharsetId,
  options: LoadPresetCharsetOptions = {},
): Promise<string | null> {
  const inlineCharset = inlineCharsetMap[id]
  if (inlineCharset) {
    return inlineCharset
  }

  const meta = PRESET_CHARSET_META.find((item) => item.id === id)
  if (!meta || meta.type !== 'remote' || !meta.path) {
    return null
  }

  if (isHttpUrl(meta.path)) {
    return fetchCharset(id, meta.path)
  }

  const normalizedPath = meta.path.startsWith('/') ? meta.path : `/${meta.path}`
  const relativePath = normalizedPath.slice(1)
  const filePath = path.join(process.cwd(), 'public', relativePath)

  try {
    const content = await fs.readFile(filePath, 'utf8')
    return content.trim()
  } catch (error) {
    if (options.baseUrl) {
      const fallbackUrl = new URL(normalizedPath, options.baseUrl).toString()
      const remoteContent = await fetchCharset(id, fallbackUrl)
      if (remoteContent) {
        return remoteContent
      }
    }

    console.error(`Failed to load charset file for ${id}:`, error)
    return null
  }
}
