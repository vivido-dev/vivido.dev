interface FeatureListProps {
  heading: string
  items: string[]
  tone?: 'accent' | 'muted'
  className?: string
}

export default function FeatureList({ heading, items, tone = 'accent', className = '' }: FeatureListProps) {
  return (
    <div className={className}>
      <h2 className="font-mono text-[11px] uppercase tracking-widest text-zinc-500">{heading}</h2>
      <ul className="mt-4 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-zinc-400">
            <span
              className={`mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full ${
                tone === 'accent' ? 'bg-accent-400' : 'bg-zinc-600'
              }`}
              aria-hidden="true"
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
