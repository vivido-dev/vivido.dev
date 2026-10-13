import type { Messages } from '../i18n/context'

interface PageMeta {
  title: string
  description: string
}

export function metaFor(meta: Messages['meta'], pathname: string): PageMeta {
  const routes: Record<string, PageMeta | string> = meta
  const page = routes[pathname]
  return typeof page === 'object' ? page : { ...meta['/'], title: meta.fallbackTitle }
}
