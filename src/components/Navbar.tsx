import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

const PRODUCTS = [
  { to: '/vivido', name: 'Vivido', blurb: 'The GPU terminal emulator' },
  { to: '/vivida', name: 'Vivida', blurb: 'Workspaces for you and your agents' },
  { to: '/vvmux', name: 'vvmux', blurb: 'Detachable, media-aware multiplexer' },
  { to: '/vivi', name: 'Vivi', blurb: 'Play media from the command line' },
  { to: '/vvrd', name: 'vvrd', blurb: 'Read PDFs and documents in the terminal' },
  { to: '/vvmux/plugins', name: 'Plugins', blurb: 'The vvmux marketplace' },
]

const LEARN = [
  { to: '/docs', label: 'Docs' },
  { to: '/tutorials', label: 'Tutorials' },
  { to: '/config', label: 'Config' },
]

const GITHUB_ORG = 'https://github.com/vivido-dev'
const X_LINK = 'https://x.com/vivido_dev'

const XMark = ({ className = 'h-4 w-4' }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)

const GithubMark = ({ className = 'h-5 w-5' }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
)

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)
  const productsRef = useRef<HTMLDivElement>(null)
  const { pathname } = useLocation()

  // Close both menus on navigation. Adjusting during render rather than in an
  // effect avoids rendering the open menu for a frame on the new route.
  const [lastPath, setLastPath] = useState(pathname)
  if (pathname !== lastPath) {
    setLastPath(pathname)
    setMobileOpen(false)
    setProductsOpen(false)
  }

  // Dismiss the products menu on outside click or Escape.
  useEffect(() => {
    if (!productsOpen) return
    const onClick = (event: MouseEvent) => {
      if (!productsRef.current?.contains(event.target as Node)) setProductsOpen(false)
    }
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setProductsOpen(false)
    }
    document.addEventListener('mousedown', onClick)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onClick)
      document.removeEventListener('keydown', onKey)
    }
  }, [productsOpen])

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `rounded-md px-3 py-2 text-sm font-medium transition-colors ${
      isActive ? 'text-accent-300' : 'text-zinc-400 hover:bg-zinc-900/60 hover:text-zinc-100'
    }`

  const productsActive = PRODUCTS.some((item) => pathname.startsWith(item.to))

  return (
    <nav className="sticky top-0 z-50 border-b border-zinc-800/80 bg-zinc-950/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-3 px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex shrink-0 items-center gap-2.5">
          <img src="/vivido_cropped.png" alt="" className="brand-logo" width="30" height="30" />
          <span className="text-[17px] font-semibold tracking-tight text-zinc-100">Vivido</span>
        </Link>

        <div className="ml-4 hidden items-center gap-0.5 md:flex">
          <div ref={productsRef} className="relative">
            <button
              type="button"
              onClick={() => setProductsOpen((open) => !open)}
              aria-expanded={productsOpen}
              className={`flex items-center gap-1.5 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                productsActive ? 'text-accent-300' : 'text-zinc-400 hover:bg-zinc-900/60 hover:text-zinc-100'
              }`}
            >
              Products
              <svg
                className={`h-3.5 w-3.5 transition-transform ${productsOpen ? 'rotate-180' : ''}`}
                fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>
            </button>

            {productsOpen && (
              <div className="absolute left-0 top-full mt-2 w-72 overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900 shadow-2xl shadow-black/60">
                {PRODUCTS.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    className="block border-b border-zinc-800/70 px-4 py-3 transition-colors last:border-b-0 hover:bg-zinc-800/60"
                  >
                    <span className="text-sm font-medium text-zinc-100">{item.name}</span>
                    <span className="mt-0.5 block text-xs text-zinc-500">{item.blurb}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {LEARN.map((item) => (
            <NavLink key={item.to} to={item.to} className={linkClass}>
              {item.label}
            </NavLink>
          ))}
          <a
            href="https://github.com/vivido-dev/vivid_protocol/blob/dev/vivid-protocol-1.5-spec.md"
            className="rounded-md px-3 py-2 text-sm font-medium text-zinc-400 transition-colors hover:bg-zinc-900/60 hover:text-zinc-100"
          >
            Protocol
          </a>
        </div>

        <div className="ml-auto flex items-center gap-2">
          <a
            href={GITHUB_ORG}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md p-2 text-zinc-400 transition-colors hover:bg-zinc-900/60 hover:text-zinc-100"
            aria-label="Vivido on GitHub"
          >
            <GithubMark />
          </a>
          <a
            href={X_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md p-2 text-zinc-400 transition-colors hover:bg-zinc-900/60 hover:text-zinc-100"
            aria-label="Vivido on X"
          >
            <XMark />
          </a>
          <button
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
            className="rounded-md p-2 text-zinc-400 transition-colors hover:bg-zinc-900/60 hover:text-zinc-100 md:hidden"
            aria-label="Toggle navigation"
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div id="mobile-navigation" className="border-t border-zinc-800 bg-zinc-950 px-4 pb-5 pt-3 md:hidden">
          <p className="px-1 pb-2 font-mono text-[10px] uppercase tracking-widest text-zinc-600">Products</p>
          {PRODUCTS.map((item) => (
            <NavLink key={item.to} to={item.to} className="block rounded-md px-3 py-2 text-sm text-zinc-300 hover:bg-zinc-900">
              {item.name}
            </NavLink>
          ))}
          <p className="px-1 pb-2 pt-4 font-mono text-[10px] uppercase tracking-widest text-zinc-600">Learn</p>
          {LEARN.map((item) => (
            <NavLink key={item.to} to={item.to} className="block rounded-md px-3 py-2 text-sm text-zinc-300 hover:bg-zinc-900">
              {item.label}
            </NavLink>
          ))}
          <a href="/#install" className="btn btn-primary mt-4 w-full">Install</a>
        </div>
      )}
    </nav>
  )
}
