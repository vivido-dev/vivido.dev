import { useCallback, useEffect, useMemo, useRef, useState, type ReactNode } from 'react'
import { LanguageContext, loadMessages, storeLang, type Lang, type Language } from './context'

export default function LanguageProvider({
  initial,
  children,
}: {
  initial: Pick<Language, 'lang' | 't'>
  children: ReactNode
}) {
  const [current, setCurrent] = useState(initial)
  const wanted = useRef(initial.lang)

  const setLang = useCallback((lang: Lang) => {
    wanted.current = lang
    loadMessages(lang).then(
      (t) => {
        // A slow earlier request must not overwrite a later choice.
        if (wanted.current !== lang) return
        storeLang(lang)
        setCurrent({ lang, t })
      },
      () => {
        // The locale chunk failed to load — keep showing the current language.
      },
    )
  }, [])

  // Browsers pick Han glyph variants and line breaking from the document language.
  useEffect(() => {
    document.documentElement.lang = current.lang
  }, [current.lang])

  const value = useMemo(() => ({ ...current, setLang }), [current, setLang])
  return <LanguageContext value={value}>{children}</LanguageContext>
}
