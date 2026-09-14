import { useState } from 'react'

export interface CodeSample {
  label: string
  /** Shown in the block header, e.g. "main.rs". */
  filename?: string
  code: string
}

interface CodeTabsProps {
  samples: CodeSample[]
  className?: string
}

export default function CodeTabs({ samples, className = '' }: CodeTabsProps) {
  const [active, setActive] = useState(0)
  const sample = samples[active]

  return (
    <div className={`code-block ${className}`}>
      <div className="code-block-head">
        <div role="tablist" aria-label="Choose a language" className="flex gap-1 -ml-1">
          {samples.map((item, index) => (
            <button
              key={item.label}
              role="tab"
              type="button"
              aria-selected={index === active}
              onClick={() => setActive(index)}
              className={`rounded-md px-2.5 py-1 font-mono text-[11px] uppercase tracking-widest transition-colors ${
                index === active ? 'bg-zinc-800 text-accent-200' : 'text-zinc-500 hover:text-zinc-300'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
        {sample.filename && <span className="shrink-0 normal-case tracking-normal">{sample.filename}</span>}
      </div>
      <pre><code>{sample.code}</code></pre>
    </div>
  )
}
