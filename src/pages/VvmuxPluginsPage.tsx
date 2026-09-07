import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import plugins from '../data/vvmux-plugins.json'

type Plugin = (typeof plugins)[number]

export default function VvmuxPluginsPage() {
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
      <div className="mt-5 mb-8">
        <p className="text-xs font-semibold tracking-widest uppercase text-purple-400 mb-2">Marketplace</p>
        <h1 className="text-3xl sm:text-4xl font-bold text-zinc-100 tracking-tight">vvmux plugins</h1>
        <p className="text-zinc-400 mt-3 max-w-2xl">
          Discover manifest-driven agent providers, integrations, panes, and workflows. vvmux shows
          each package's permissions before installation and does not run marketplace code.
        </p>
      </div>

      <div className="grid sm:grid-cols-[1fr_auto] gap-3 mb-8">
        <input
          aria-label="Search plugins"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search plugins"
          className="rounded-lg border border-zinc-800 bg-zinc-900 px-4 py-2.5 text-zinc-200 outline-none focus:border-purple-500"
        />
        <select
          aria-label="Filter plugin type"
          value={kind}
          onChange={(event) => setKind(event.target.value)}
          className="rounded-lg border border-zinc-800 bg-zinc-900 px-4 py-2.5 text-zinc-300"
        >
          <option value="all">All types</option>
          {kinds.map((value) => <option key={value} value={value}>{value}</option>)}
        </select>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        {visible.map((plugin: Plugin) => <PluginCard key={plugin.id} plugin={plugin} />)}
      </div>
      {visible.length === 0 && <p className="text-zinc-500 py-12 text-center">No plugins match that filter.</p>}

      <div className="mt-12 rounded-xl border border-zinc-800 bg-zinc-900/50 p-5 text-sm text-zinc-400">
        Publish a public GitHub repository with a root <code className="text-purple-300">vvmux-plugin.toml</code>
        {' '}and the <code className="text-purple-300">vvmux-plugin</code> topic to be considered for the index.
      </div>
    </div>
  )
}

function PluginCard({ plugin }: { plugin: Plugin }) {
  const command = `vvmux plugin install ${plugin.repository}`
  return (
    <article className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-5 flex flex-col">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="font-semibold text-zinc-100">{plugin.name}</h2>
          <p className="text-xs text-zinc-500 mt-1">{plugin.id} · {plugin.version}</p>
        </div>
        {plugin.verified && <span className="text-xs rounded-full bg-purple-500/15 text-purple-300 px-2 py-1">First-party</span>}
      </div>
      <p className="text-sm text-zinc-400 mt-4 flex-1">{plugin.description}</p>
      <div className="flex flex-wrap gap-2 mt-4">
        {plugin.kinds.map((value) => <span key={value} className="text-xs text-zinc-400 bg-zinc-800 rounded px-2 py-1">{value}</span>)}
      </div>
      <p className="text-xs text-zinc-500 mt-4">
        Permissions: <span className="text-zinc-400">{plugin.permissions.length > 0 ? plugin.permissions.join(', ') : 'none'}</span>
      </p>
      <div className="mt-5 rounded-lg bg-zinc-950 px-3 py-2 flex items-center gap-3 overflow-hidden">
        <code className="text-xs text-zinc-300 truncate flex-1">{command}</code>
        <button
          type="button"
          onClick={() => void navigator.clipboard?.writeText(command)}
          className="text-xs text-purple-400 hover:text-purple-300"
        >Copy</button>
      </div>
      <a href={`https://github.com/${plugin.repository}`} target="_blank" rel="noreferrer" className="text-xs text-zinc-500 hover:text-zinc-300 mt-3">
        View source &rarr;
      </a>
    </article>
  )
}
