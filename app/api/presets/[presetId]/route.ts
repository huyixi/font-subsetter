import { NextResponse } from 'next/server'
import { loadPresetCharset } from '@/lib/presetCharsetService'
import { isPresetCharsetId } from '@/lib/presetCharsets'

export const runtime = 'nodejs'

interface RouteContext {
  params: Promise<{
    presetId: string
  }>
}

export async function GET(request: Request, context: RouteContext) {
  const { presetId } = await context.params

  if (!isPresetCharsetId(presetId)) {
    return NextResponse.json({ error: 'Preset not found' }, { status: 404 })
  }

  const baseUrl = new URL(request.url).origin
  const characters = await loadPresetCharset(presetId, { baseUrl })

  if (characters === null) {
    return NextResponse.json({ error: 'Preset not found' }, { status: 404 })
  }

  return NextResponse.json({ id: presetId, characters, count: characters.length })
}
