import { useRef, useState } from 'react'
import { LANGS, useLanguage } from '../i18n/context'
import { useDismiss } from '../lib/useDismiss'

export default function LanguageSwitcher() {
  const { lang, t, setLang } = useLanguage()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  useDismiss(ref, open, setOpen)

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-label={t.nav.language}
        aria-haspopup="menu"
        aria-expanded={open}
        className="flex items-center gap-1.5 rounded-md p-2 text-zinc-400 transition-colors hover:bg-zinc-900/60 hover:text-zinc-100"
      >
        <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.7} viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802" />
        </svg>
        <span className="hidden text-xs font-medium sm:inline">
          {LANGS.find((item) => item.id === lang)?.short}
        </span>
      </button>

      {open && (
        <div
          role="menu"
          aria-label={t.nav.language}
          className="absolute right-0 top-full mt-2 w-40 overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900 py-1 shadow-2xl shadow-black/60"
        >
          {LANGS.map((item) => {
            const active = item.id === lang
            return (
              <button
                key={item.id}
                type="button"
                role="menuitemradio"
                aria-checked={active}
                lang={item.id}
                onClick={() => {
                  setLang(item.id)
                  setOpen(false)
                }}
                className={`flex w-full items-center justify-between gap-3 px-4 py-2 text-left text-sm transition-colors hover:bg-zinc-800/60 ${
                  active ? 'text-accent-300' : 'text-zinc-300'
                }`}
              >
                {item.name}
                {active && (
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                )}
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}
