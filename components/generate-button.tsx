import { Download, Loader2 } from "lucide-react";

interface GenerateButtonProps {
  isLoading: boolean;
  onClick: () => void;
}

export default function GenerateButton({
  isLoading,
  onClick,
}: GenerateButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={isLoading}
      className="relative px-8 md:px-12 py-3 md:py-4 rounded-sm transition-all duration-700 disabled:opacity-50 disabled:cursor-not-allowed group overflow-hidden"
      style={{
        boxShadow:
          "0 2px 12px rgba(196,30,58,0.2), inset 0 1px 0 rgba(255,255,255,0.12)",
      }}
    >
      {/*<div
        className="absolute inset-0 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, rgba(255,255,255,0.06) 0%, transparent 70%)',
        }}
      />

      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-700"
        style={{
          background: 'linear-gradient(135deg, rgba(255,255,255,0.05), transparent)',
        }}
      />*/}

      <div className="relative flex items-center justify-center gap-2.5 text-sm md:text-base font-light tracking-wide">
        {isLoading ? (
          <>
            <Loader2
              className="w-4 h-4 md:w-5 md:h-5 animate-spin"
              style={{ animationDuration: "2s" }}
            />
            <span>生成中...</span>
          </>
        ) : (
          <>
            <Download className="w-4 h-4 md:w-5 md:h-5 transition-transform duration-700 group-hover:translate-y-1" />
            <span>生成并下载</span>
          </>
        )}
      </div>
    </button>
  );
}
