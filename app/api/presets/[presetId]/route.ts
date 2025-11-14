import { NextResponse } from 'next/server'
import { loadPresetCharset } from '@/lib/presetCharsetService'

export const runtime = 'nodejs'

interface Params {
  params: {
    presetId: string
  }
}

export async function GET(_request: Request, { params }: Params) {
  const characters = await loadPresetCharset(params.presetId)

  if (!characters) {
    return NextResponse.json({ error: 'Preset not found' }, { status: 404 })
  }

  return NextResponse.json({ id: params.presetId, characters, count: characters.length })
}
