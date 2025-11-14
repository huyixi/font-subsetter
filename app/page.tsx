import FontSubsetter from '@/components/font-subsetter'
import { getPresetMetadata } from '@/lib/presetCharsetService'

export default function Page() {
  const presets = getPresetMetadata()

  return (
    <main className="min-h-screen bg-background font-sans">
      <FontSubsetter presets={presets} />
    </main>
  )
}
