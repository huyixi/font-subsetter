interface CharacterInputProps {
  value: string
  onChange: (value: string) => void
}

export default function CharacterInput({ value, onChange }: CharacterInputProps) {
  return (
    <div className="space-y-3">
      <div className="flex items-baseline justify-between px-1">
        <label htmlFor="characters" className="text-xs font-medium text-fg-muted uppercase tracking-widest">
          输入框
        </label>
        <span className="text-xs text-fg-muted font-mono">{value.length} 字符</span>
      </div>
      <textarea
        id="characters"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="输入或粘贴字符，或使用上方预设..."
        className="w-full h-40 md:h-48 bg-card border border-border rounded-md p-4 text-fg-primary placeholder-fg-muted focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary/30 transition-all duration-300 font-mono text-sm resize-none"
      />
    </div>
  )
}
