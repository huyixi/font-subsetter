import { useState, useEffect } from "react";
import type { PresetCharsetId, PresetCharsetMeta } from "@/lib/presetCharsets";

interface CharacterPresetsProps {
  presets: PresetCharsetMeta[];
  onPresetAdd: (preset: PresetCharsetId) => Promise<void> | void;
  addedPresets: Record<PresetCharsetId, boolean>;
}

export default function CharacterPresets({
  presets,
  onPresetAdd,
  addedPresets,
}: CharacterPresetsProps) {
  const [visiblePresets, setVisiblePresets] = useState<string[]>([]);

  useEffect(() => {
    const timeouts: ReturnType<typeof setTimeout>[] = [];
    setVisiblePresets([]);

    presets.forEach((preset, index) => {
      const timeout = setTimeout(() => {
        setVisiblePresets((prev) => [...prev, preset.id]);
      }, index * 80);
      timeouts.push(timeout);
    });

    return () => {
      timeouts.forEach((timeout) => clearTimeout(timeout));
    };
  }, [presets]);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
      {presets.map((preset) => (
        <button
          key={preset.id}
          onClick={() => onPresetAdd(preset.id)}
          className={
            "relative group transition-all duration-500 transform hover:cursor-pointer"
          }
        >
          <div
            className={`relative border border-border rounded-md p-3 md:p-4 text-left transition-all duration-300 ${
              addedPresets[preset.id]
                ? "border-accent-primary bg-accent-soft/20"
                : "border-border bg-card hover:border-accent-primary hover:bg-secondary"
            }`}
          >
            <div className="text-sm font-medium text-fg-primary">
              {preset.label}
            </div>
          </div>
        </button>
      ))}
    </div>
  );
}
