import { Link } from 'react-router-dom'
import { useT, type Messages } from '../i18n/context'

const columns = ({ nav, footer }: Messages): { heading: string; links: { label: string; to: string }[] }[] => [
  {
    heading: nav.products,
    links: [
      { label: 'Vivido', to: '/vivido' },
      { label: 'Vivida', to: '/vivida' },
      { label: 'vvmux', to: '/vvmux' },
      { label: 'Vivi', to: '/vivi' },
      { label: 'vvrd', to: '/vvrd' },
      { label: footer.vvmuxPlugins, to: '/vvmux/plugins' },
    ],
  },
  {
    heading: nav.learn,
    links: [
      { label: footer.documentation, to: '/docs' },
      { label: nav.tutorials, to: '/tutorials' },
      { label: footer.configuration, to: '/config' },
    ],
  },
  {
    heading: nav.protocol,
    links: [
      {
        label: footer.spec,
        to: 'https://github.com/vivido-dev/vivid_protocol/blob/dev/vivid-protocol-1.5-spec.md',
      },
      { label: footer.sdk, to: 'https://github.com/vivido-dev/vivid_sdk' },
      { label: footer.crate, to: 'https://crates.io/crates/vivido' },
    ],
  },
  {
    heading: footer.project,
    links: [
      { label: 'GitHub', to: 'https://github.com/vivido-dev/vivido' },
      { label: footer.releases, to: 'https://github.com/vivido-dev/vivido/releases' },
      { label: footer.issues, to: 'https://github.com/vivido-dev/vivido/issues' },
      { label: footer.licence, to: 'https://github.com/vivido-dev/vivido/blob/dev/LICENSE' },
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
  const t = useT()
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
              {t.footer.tagline}
            </p>
          </div>

          {columns(t).map((column) => (
            <div key={column.heading}>
              <h2 className="font-mono text-[10px] uppercase tracking-widest text-zinc-600">
                {column.heading}
              </h2>
              <ul className="mt-4 space-y-2.5">
                {column.links.map((link) => (
                  <li key={link.to}>
                    <FooterLink {...link} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-zinc-800 pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-zinc-600">
            {t.footer.free}
          </p>
          <p className="font-mono text-xs text-zinc-700">vivido.dev</p>
        </div>
      </div>
    </footer>
  )
}
