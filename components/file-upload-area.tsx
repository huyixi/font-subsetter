import { useRef, useState } from "react";
import { Upload, CheckCircle2 } from "lucide-react";
import { SUPPORTED_FONT_EXTENSIONS } from "@/lib/fontSubsetter/constants";

interface FileUploadAreaProps {
  onFontUpload: (file: File) => void;
  uploadedFont: File | null;
}

const ACCEPT_ATTR = SUPPORTED_FONT_EXTENSIONS.join(",");

export default function FileUploadArea({
  onFontUpload,
  uploadedFont,
}: FileUploadAreaProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isDragActive, setIsDragActive] = useState(false);

  const handleDrag = (event: React.DragEvent) => {
    event.preventDefault();
    event.stopPropagation();
    if (event.type === "dragenter" || event.type === "dragover") {
      setIsDragActive(true);
    } else if (event.type === "dragleave") {
      setIsDragActive(false);
    }
  };

  const handleDrop = (event: React.DragEvent) => {
    event.preventDefault();
    event.stopPropagation();
    setIsDragActive(false);

    const files = event.dataTransfer.files;
    if (files && files[0]) {
      onFontUpload(files[0]);
    }
  };

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      onFontUpload(event.target.files[0]);
    }
  };

  const fileSize =
    uploadedFont && uploadedFont.size >= 1024 * 1024
      ? `${(uploadedFont.size / (1024 * 1024)).toFixed(2)} MB`
      : uploadedFont
        ? `${(uploadedFont.size / 1024).toFixed(1)} KB`
        : null;

  return (
    <div
      onDragEnter={handleDrag}
      onDragLeave={handleDrag}
      onDragOver={handleDrag}
      onDrop={handleDrop}
      onClick={() => fileInputRef.current?.click()}
      className={`relative border border-border rounded-md p-8 md:p-12 text-center cursor-pointer transition-all duration-300 ${
        isDragActive
          ? "border-accent-primary bg-accent-soft/20"
          : uploadedFont
            ? "border-accent-primary bg-accent-soft/10"
            : "border-border hover:border-accent-primary hover:bg-secondary"
      }`}
    >
      <input
        ref={fileInputRef}
        type="file"
        accept={ACCEPT_ATTR}
        onChange={handleFileSelect}
        className="hidden"
      />

      <div className="flex flex-col items-center gap-3">
        {uploadedFont ? (
          <>
            <CheckCircle2 className="w-10 h-10 text-accent-primary" />
            <div>
              <p className="text-xs text-fg-muted mb-1">已上传</p>
              <p className="text-base font-medium text-fg-primary font-mono">
                {uploadedFont.name}
              </p>
              {fileSize && (
                <p className="text-xs text-fg-muted mt-2">{fileSize}</p>
              )}
            </div>
          </>
        ) : (
          <>
            <Upload className="w-10 h-10 text-accent-primary" />
            <div>
              <p className="text-base font-medium text-fg-primary mb-1">
                上传字体文件
              </p>
              <p className="text-sm text-fg-muted">
                支持 TTF、OTF、WOFF2、WOFF 格式 · 点击或拖放上传
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
