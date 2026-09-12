import { Link } from 'react-router-dom'
import { SUITE, SUITE_GROUPS, STATUS_LABEL, type SuiteTool } from '../lib/suite'

const STATUS_CLASS: Record<SuiteTool['status'], string> = {
  stable: 'text-signal-green border-signal-green/25 bg-signal-green/10',
  new: 'text-accent-300 border-accent-400/25 bg-accent-400/10',
  preview: 'text-signal-amber border-signal-amber/25 bg-signal-amber/10',
}

function ToolCard({ tool }: { tool: SuiteTool }) {
  const external = tool.href.startsWith('http')
  const body = (
    <>
      <div className="flex items-center gap-2.5">
        <h3 className="font-mono text-sm font-semibold text-accent-300 transition-colors group-hover:text-accent-200">
          {tool.name}
        </h3>
        <span
          className={`rounded-full border px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider ${STATUS_CLASS[tool.status]}`}
        >
          {STATUS_LABEL[tool.status]}
        </span>
        {external && (
          <svg className="ml-auto h-3 w-3 shrink-0 text-zinc-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        )}
      </div>
      <p className="mt-2.5 flex-1 text-sm leading-relaxed text-zinc-400">{tool.summary}</p>
      <p className="mt-4 truncate rounded-lg border border-zinc-800 bg-zinc-950/70 px-3 py-2 font-mono text-xs text-zinc-500">
        <span className="text-signal-green">$</span> {tool.command}
      </p>
    </>
  )

  const className = 'card card-hover group flex flex-col p-5'

  return external ? (
    <a href={tool.href} target="_blank" rel="noopener noreferrer" className={className}>
      {body}
    </a>
  ) : (
    <Link to={tool.href} className={className}>
      {body}
    </Link>
  )
}

export default function SuiteGrid({ className = '' }: { className?: string }) {
  return (
    <div className={`space-y-10 ${className}`}>
      {SUITE_GROUPS.map((group) => (
        <div key={group.id}>
          <div className="mb-4 flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <h3 className="text-sm font-semibold tracking-tight text-zinc-200">{group.label}</h3>
            <p className="text-sm text-zinc-600">{group.blurb}</p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {SUITE.filter((tool) => tool.group === group.id).map((tool) => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
