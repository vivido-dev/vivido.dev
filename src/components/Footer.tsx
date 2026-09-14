import { Link } from 'react-router-dom'

const COLUMNS: { heading: string; links: { label: string; to: string }[] }[] = [
  {
    heading: 'Products',
    links: [
      { label: 'Vivido', to: '/vivido' },
      { label: 'Vivida', to: '/vivida' },
      { label: 'vvmux', to: '/vvmux' },
      { label: 'Vivi', to: '/vivi' },
      { label: 'vvrd', to: '/vvrd' },
      { label: 'vvmux plugins', to: '/vvmux/plugins' },
    ],
  },
  {
    heading: 'Learn',
    links: [
      { label: 'Documentation', to: '/docs' },
      { label: 'Tutorials', to: '/tutorials' },
      { label: 'Configuration', to: '/config' },
    ],
  },
  {
    heading: 'Protocol',
    links: [
      {
        label: 'Vivid 1.5 specification',
        to: 'https://github.com/vivido-dev/vivid_protocol/blob/dev/vivid-protocol-1.5-spec.md',
      },
      { label: 'Vivid SDK (Rust, Python, TS)', to: 'https://github.com/vivido-dev/vivid_sdk' },
      { label: 'vivido on crates.io', to: 'https://crates.io/crates/vivido' },
    ],
  },
  {
    heading: 'Project',
    links: [
      { label: 'GitHub', to: 'https://github.com/vivido-dev/vivido' },
      { label: 'Releases', to: 'https://github.com/vivido-dev/vivido/releases' },
      { label: 'Issues', to: 'https://github.com/vivido-dev/vivido/issues' },
      { label: 'Apache-2.0 licence', to: 'https://github.com/vivido-dev/vivido/blob/dev/LICENSE' },
    ],
  },
]

function FooterLink({ label, to }: { label: string; to: string }) {
  const className = 'text-sm text-zinc-500 transition-colors hover:text-accent-300'
  return to.startsWith('http') ? (
    <a href={to} target="_blank" rel="noopener noreferrer" className={className}>
      {label}
    </a>
  ) : (
    <Link to={to} className={className}>
      {label}
    </Link>
  )
}

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-zinc-800">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.4fr_repeat(4,1fr)]">
          <div>
            <Link to="/" className="flex items-center gap-2.5">
              <img src="/vivido_cropped.png" alt="" className="brand-logo" width="30" height="30" />
              <span className="text-base font-semibold tracking-tight text-zinc-100">Vivido</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-zinc-500">
              A terminal suite built on Vivid Protocol 1.5. Images, video, and audio on authenticated
              side channels — the PTY stays a PTY.
            </p>
          </div>

          {COLUMNS.map((column) => (
            <div key={column.heading}>
              <h2 className="font-mono text-[10px] uppercase tracking-widest text-zinc-600">
                {column.heading}
              </h2>
              <ul className="mt-4 space-y-2.5">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <FooterLink {...link} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-zinc-800 pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-zinc-600">
            Free and open source under Apache-2.0.
          </p>
          <p className="font-mono text-xs text-zinc-700">vivido.dev</p>
        </div>
      </div>
    </footer>
  )
}
