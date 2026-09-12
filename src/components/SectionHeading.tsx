import type { ReactNode } from 'react'

interface SectionHeadingProps {
  eyebrow?: string
  title: ReactNode
  lede?: ReactNode
  align?: 'left' | 'center'
  className?: string
}

export default function SectionHeading({
  eyebrow,
  title,
  lede,
  align = 'left',
  className = '',
}: SectionHeadingProps) {
  const centered = align === 'center'
  return (
    <div className={`${centered ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'} ${className}`}>
      {eyebrow && (
        <p className="eyebrow">
          <span className="eyebrow-dot" aria-hidden="true" />
          {eyebrow}
        </p>
      )}
      <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-100 sm:text-4xl">{title}</h2>
      {lede && <p className="mt-4 text-base leading-relaxed text-zinc-400">{lede}</p>}
    </div>
  )
}
