import type { ReactNode } from 'react'

interface TerminalWindowProps {
  /** Text shown in the title bar, e.g. "vivido — zsh". */
  title?: string
  /** Optional tab strip above the body. First entry renders as active. */
  tabs?: string[]
  children: ReactNode
  className?: string
}

const DOTS = ['#e06c6c', '#e0c46c', '#7ec97e']

/**
 * Rendered terminal chrome. This is an illustration of the UI drawn in the
 * browser, not a captured screenshot — it keeps the marketing pages honest
 * while still showing the shape of the product.
 */
export default function TerminalWindow({ title = 'vivido', tabs, children, className = '' }: TerminalWindowProps) {
  return (
    <div className={`term ${className}`}>
      <div className="term-bar">
        <div className="flex gap-2" aria-hidden="true">
          {DOTS.map((color) => (
            <span key={color} className="term-dot" style={{ background: color }} />
          ))}
        </div>
        <span className="term-title mx-auto pr-12 truncate">{title}</span>
      </div>

      {tabs && tabs.length > 0 && (
        <div className="flex items-stretch border-b border-zinc-800 bg-zinc-950/50 overflow-x-auto">
          {tabs.map((tab, index) => (
            <span
              key={tab}
              className={`px-4 py-2 text-xs font-mono whitespace-nowrap border-r border-zinc-800 ${
                index === 0
                  ? 'text-accent-200 bg-zinc-900/80 border-b border-b-accent-400'
                  : 'text-zinc-500'
              }`}
            >
              {tab}
            </span>
          ))}
        </div>
      )}

      <div className="term-body">{children}</div>
    </div>
  )
}
