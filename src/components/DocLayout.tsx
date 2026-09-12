import { useEffect, useState, type ReactNode } from 'react'

export interface DocSection {
  id: string
  label: string
}

interface DocLayoutProps {
  eyebrow: string
  title: string
  lede: string
  sections: DocSection[]
  children: ReactNode
}

/** Two-column documentation shell with a sticky, scroll-synced table of contents. */
export default function DocLayout({ eyebrow, title, lede, sections, children }: DocLayoutProps) {
  const [active, setActive] = useState(sections[0]?.id ?? '')

  useEffect(() => {
    // Pick the last heading that has passed the reading line. This is more
    // predictable than an observer, which leaves no section active whenever a
    // long section's heading has scrolled past the top of the viewport.
    const onScroll = () => {
      const line = 140
      let current = sections[0]?.id ?? ''
      for (const section of sections) {
        const node = document.getElementById(section.id)
        if (node && node.getBoundingClientRect().top <= line) current = section.id
      }
      // At the very bottom, the last section is what you are looking at.
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 8) {
        current = sections[sections.length - 1]?.id ?? current
      }
      setActive(current)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [sections])

  return (
    <div>
      <section className="page-glow grid-veil relative overflow-hidden px-4 pb-10 pt-12 sm:px-6 sm:pt-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="eyebrow">
            <span className="eyebrow-dot" aria-hidden="true" />
            {eyebrow}
          </p>
          <h1 className="mt-5 max-w-3xl text-4xl font-semibold tracking-tight text-zinc-100 sm:text-5xl">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg">{lede}</p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="gap-12 lg:grid lg:grid-cols-[200px_minmax(0,1fr)]">
          <nav aria-label="On this page" className="hidden lg:block">
            <div className="sticky top-24">
              <p className="font-mono text-[10px] uppercase tracking-widest text-zinc-600">
                On this page
              </p>
              <ul className="mt-4 space-y-1 border-l border-zinc-800">
                {sections.map((section) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className={`-ml-px block border-l-2 py-1.5 pl-4 text-sm transition-colors ${
                        active === section.id
                          ? 'border-accent-400 text-accent-300'
                          : 'border-transparent text-zinc-500 hover:border-zinc-600 hover:text-zinc-300'
                      }`}
                    >
                      {section.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>

          <div className="min-w-0 max-w-3xl">{children}</div>
        </div>
      </div>
    </div>
  )
}
