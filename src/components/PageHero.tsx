import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

interface PageHeroProps {
  eyebrow: string
  title: ReactNode
  lede: ReactNode
  actions?: ReactNode
  /** Rendered to the right of the copy on large screens. */
  aside?: ReactNode
  backTo?: { to: string; label: string }
}

export default function PageHero({ eyebrow, title, lede, actions, aside, backTo }: PageHeroProps) {
  return (
    <section className="page-glow grid-veil relative overflow-hidden px-4 pb-12 pt-12 sm:px-6 sm:pb-16 sm:pt-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {backTo && (
          <Link to={backTo.to} className="text-sm text-zinc-500 transition-colors hover:text-accent-300">
            ← {backTo.label}
          </Link>
        )}
        <div className={aside ? 'mt-8 grid items-center gap-12 lg:grid-cols-2' : 'mt-8 max-w-3xl'}>
          <div>
            <p className="eyebrow">
              <span className="eyebrow-dot" aria-hidden="true" />
              {eyebrow}
            </p>
            <h1 className="mt-5 text-4xl font-semibold leading-[1.08] tracking-tight text-zinc-100 sm:text-5xl">
              {title}
            </h1>
            <div className="mt-6 text-base leading-relaxed text-zinc-400 sm:text-lg">{lede}</div>
            {actions && <div className="mt-8 flex flex-wrap gap-3">{actions}</div>}
          </div>
          {aside}
        </div>
      </div>
    </section>
  )
}
