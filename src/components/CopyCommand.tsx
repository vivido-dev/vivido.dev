import { useEffect, useRef, useState } from 'react'

interface CopyCommandProps {
  command: string
  /** Shown before the command; defaults to a shell prompt. */
  prompt?: string
  className?: string
  size?: 'sm' | 'md'
}

/** A shell command with a copy button. The prompt is never copied. */
export default function CopyCommand({ command, prompt = '$', className = '', size = 'md' }: CopyCommandProps) {
  const [copied, setCopied] = useState(false)
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)

  useEffect(() => () => clearTimeout(timer.current), [])

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(command)
      setCopied(true)
      clearTimeout(timer.current)
      timer.current = setTimeout(() => setCopied(false), 1600)
    } catch {
      // Clipboard unavailable (insecure context or denied) — leave the text selectable.
    }
  }

  const pad = size === 'sm' ? 'px-3 py-2 text-xs' : 'px-4 py-3 text-sm'

  return (
    <div
      className={`group flex items-center gap-3 rounded-xl border border-zinc-800 bg-zinc-950/80 font-mono ${pad} ${className}`}
    >
      <span className="text-signal-green select-none shrink-0" aria-hidden="true">{prompt}</span>
      <code className="min-w-0 flex-1 truncate text-zinc-200">{command}</code>
      <button
        type="button"
        onClick={copy}
        className="shrink-0 rounded-md p-1.5 text-zinc-500 transition-colors hover:bg-zinc-800 hover:text-accent-300"
        aria-label={copied ? 'Copied' : `Copy "${command}" to the clipboard`}
      >
        {copied ? (
          <svg className="w-4 h-4 text-signal-green" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
          </svg>
        ) : (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.7} viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184" />
          </svg>
        )}
      </button>
    </div>
  )
}
