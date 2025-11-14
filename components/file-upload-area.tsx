import { useRef, useState } from 'react'
import { Upload, CheckCircle2 } from 'lucide-react'

interface FileUploadAreaProps {
  onFontUpload: (file: File) => void
  uploadedFont: File | null
}

export default function FileUploadArea({ onFontUpload, uploadedFont }: FileUploadAreaProps) {
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [isDragActive, setIsDragActive] = useState(false)

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setIsDragActive(true)
    } else if (e.type === 'dragleave') {
      setIsDragActive(false)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragActive(false)

    const files = e.dataTransfer.files
    if (files && files[0]) {
      const file = files[0]
      if (
        file.name.endsWith('.ttf') ||
        file.name.endsWith('.otf') ||
        file.name.endsWith('.woff2') ||
        file.name.endsWith('.woff')
      ) {
        onFontUpload(file)
      }
    }
  }

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      onFontUpload(e.target.files[0])
    }
  }

  return (
    <div
      onDragEnter={handleDrag}
      onDragLeave={handleDrag}
      onDragOver={handleDrag}
      onDrop={handleDrop}
      onClick={() => fileInputRef.current?.click()}
      className={`relative border border-border rounded-md p-8 md:p-12 text-center cursor-pointer transition-all duration-300 ${
        isDragActive
          ? 'border-accent-primary bg-accent-soft/20'
          : uploadedFont
            ? 'border-accent-primary bg-accent-soft/10'
            : 'border-border hover:border-accent-primary hover:bg-secondary'
      }`}
    >
      <input
        ref={fileInputRef}
        type="file"
        accept=".ttf,.otf,.woff2,.woff"
        onChange={handleFileSelect}
        className="hidden"
      />

      <div className="flex flex-col items-center gap-3">
        {uploadedFont ? (
          <>
            <CheckCircle2 className="w-10 h-10 text-accent-primary" />
            <div>
              <p className="text-xs text-fg-muted mb-1">已上传</p>
              <p className="text-base font-medium text-fg-primary font-mono">{uploadedFont.name}</p>
              <p className="text-xs text-fg-muted mt-2">
                {(uploadedFont.size / 1024).toFixed(1)} KB
              </p>
            </div>
          </>
        ) : (
          <>
            <Upload className="w-10 h-10 text-accent-primary" />
            <div>
              <p className="text-base font-medium text-fg-primary mb-1">上传字体文件</p>
              <p className="text-sm text-fg-muted">支持 TTF、OTF、WOFF2、WOFF 格式 · 点击或拖放上传</p>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
