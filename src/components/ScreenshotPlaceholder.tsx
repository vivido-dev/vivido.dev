interface ScreenshotPlaceholderProps {
  label: string
  aspectRatio?: string
  className?: string
}

export default function ScreenshotPlaceholder({
  label,
  aspectRatio = '16/9',
  className = '',
}: ScreenshotPlaceholderProps) {
  return (
    <div
      className={`border-2 border-dashed border-zinc-700 rounded-xl bg-zinc-900/50 flex flex-col items-center justify-center gap-3 group hover:border-zinc-600 transition-colors ${className}`}
      style={{ aspectRatio, minHeight: '180px' }}
    >
      <svg
        className="w-8 h-8 text-zinc-600 group-hover:text-zinc-500 transition-colors"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z"
        />
      </svg>
      <span className="text-xs text-zinc-500">{label}</span>
    </div>
  )
}
