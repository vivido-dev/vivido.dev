import { createContext, useContext } from 'react'
import en from './en'

export type Messages = typeof en
export type Lang = 'en' | 'zh-Hant' | 'zh-Hans' | 'ja'

/** Switcher order. Each name is written in its own language. */
export const LANGS: { id: Lang; name: string; short: string }[] = [
  { id: 'en', name: 'English', short: 'EN' },
  { id: 'zh-Hant', name: '繁體中文', short: '繁中' },
  { id: 'zh-Hans', name: '简体中文', short: '简中' },
  { id: 'ja', name: '日本語', short: '日本語' },
]

const STORAGE_KEY = 'vivido.lang'

/** The reader's saved choice. English until they pick something else. */
export function storedLang(): Lang {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    return LANGS.find((item) => item.id === saved)?.id ?? 'en'
  } catch {
    return 'en'
  }
}

export function storeLang(lang: Lang) {
  try {
    localStorage.setItem(STORAGE_KEY, lang)
  } catch {
    // Storage unavailable (private mode or denied) — the choice lasts for this visit.
  }
}

// English ships in the main bundle; the others load only when chosen.
const LOADERS: Record<Exclude<Lang, 'en'>, () => Promise<{ default: Messages }>> = {
  'zh-Hant': () => import('./zh-Hant'),
  'zh-Hans': () => import('./zh-Hans'),
  ja: () => import('./ja'),
}

export async function loadMessages(lang: Lang): Promise<Messages> {
  return lang === 'en' ? en : (await LOADERS[lang]()).default
}

export interface Language {
  lang: Lang
  t: Messages
  setLang: (lang: Lang) => void
}

export const ENGLISH: Pick<Language, 'lang' | 't'> = { lang: 'en', t: en }

export const LanguageContext = createContext<Language>({ ...ENGLISH, setLang: () => {} })

export const useLanguage = () => useContext(LanguageContext)
export const useT = () => useContext(LanguageContext).t

/** Prefixes each line of a localised comment, so a sample keeps one copy of its code. */
export const comment = (prefix: string, text: string) =>
  text.split('\n').map((line) => prefix + line).join('\n')
