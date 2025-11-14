import { NextResponse } from 'next/server'
import { getPresetMetadata } from '@/lib/presetCharsetService'

export async function GET() {
  const presets = getPresetMetadata()
  return NextResponse.json({ presets })
}
