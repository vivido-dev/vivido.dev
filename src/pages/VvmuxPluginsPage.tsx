import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import plugins from '../data/vvmux-plugins.json'
import { useT } from '../i18n/context'
import Rich from '../i18n/Rich'

type Plugin = (typeof plugins)[number]

export default function VvmuxPluginsPage() {
  const t = useT().plugins
  const [query, setQuery] = useState('')
  const [kind, setKind] = useState('all')
  const normalized = query.trim().toLowerCase()
  const kinds = [...new Set(plugins.flatMap((plugin) => plugin.kinds))].sort()
  const visible = useMemo(
    () => plugins.filter((plugin) => {
      const matchesKind = kind === 'all' || plugin.kinds.includes(kind)
      const haystack = `${plugin.id} ${plugin.name} ${plugin.description} ${plugin.repository}`.toLowerCase()
      return matchesKind && (!normalized || haystack.includes(normalized))
    }),
    [kind, normalized],
  )

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 max-w-6xl mx-auto">
      <Link to="/vvmux" className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors">
        &larr; vvmux
      </Link>
      <div className="mt-6 mb-10">
        <p className="eyebrow">
          <span className="eyebrow-dot" aria-hidden="true" />
          {t.eyebrow}
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-zinc-100 sm:text-5xl">{t.title}</h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-zinc-400">
          {t.lede}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-3 mb-8">
        <input
          aria-label={t.search}
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder={t.search}
          className="rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-2.5 text-zinc-200 outline-none focus:border-accent-500"
        />
        <select
          aria-label={t.filter}
          value={kind}
          onChange={(event) => setKind(event.target.value)}
          className="rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-2.5 text-zinc-300"
        >
          <option value="all">{t.allTypes}</option>
          {kinds.map((value) => <option key={value} value={value}>{value}</option>)}
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {visible.map((plugin: Plugin) => <PluginCard key={plugin.id} plugin={plugin} />)}
      </div>
      {visible.length === 0 && <p className="text-zinc-500 py-12 text-center">{t.empty}</p>}

      <div className="card mt-12 p-5 text-sm text-zinc-400">
        <Rich text={t.publish} codeClass="text-accent-300" />
      </div>
    </div>
  )
}

function PluginCard({ plugin }: { plugin: Plugin }) {
  const t = useT().plugins
  const command = `vvmux plugin install ${plugin.repository}`
  return (
    <article className="card card-hover flex flex-col p-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="font-semibold text-zinc-100">{plugin.name}</h2>
          <p className="text-xs text-zinc-500 mt-1">{plugin.id} · {plugin.version}</p>
        </div>
        {plugin.verified && <span className="text-xs rounded-full border border-accent-400/25 bg-accent-400/10 text-accent-300 px-2 py-1">{t.firstParty}</span>}
      </div>
      <p className="text-sm text-zinc-400 mt-4 flex-1">{plugin.description}</p>
      <div className="flex flex-wrap gap-2 mt-4">
        {plugin.kinds.map((value) => <span key={value} className="text-xs text-zinc-400 bg-zinc-800 rounded px-2 py-1">{value}</span>)}
      </div>
      <p className="text-xs text-zinc-500 mt-4">
        {t.permissions} <span className="text-zinc-400">{plugin.permissions.length > 0 ? plugin.permissions.join(', ') : t.none}</span>
      </p>
      <div className="mt-5 rounded-lg bg-zinc-950 px-3 py-2 flex items-center gap-3 overflow-hidden">
        <code className="text-xs text-zinc-300 truncate flex-1">{command}</code>
        <button
          type="button"
          onClick={() => void navigator.clipboard?.writeText(command)}
          className="text-xs text-accent-400 hover:text-accent-300"
        >{t.copy}</button>
      </div>
      <a href={`https://github.com/${plugin.repository}`} target="_blank" rel="noreferrer" className="text-xs text-zinc-500 hover:text-zinc-300 mt-3">
        {t.viewSource} &rarr;
      </a>
    </article>
  )
}
