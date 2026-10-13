import { Link } from 'react-router-dom'
import TerminalWindow from '../components/TerminalWindow'
import { useT } from '../i18n/context'

export default function NotFound() {
  const t = useT().notFound
  return (
    <div className="page-glow px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-xl text-center">
        <TerminalWindow title="vivido — zsh" className="text-left">
          <p><span className="term-prompt">~</span> <span className="term-path">$</span> cd {window.location.pathname}</p>
          <p className="term-out">cd: no such file or directory</p>
          <p className="mt-2"><span className="term-prompt">~</span> <span className="term-path">$</span> <span className="term-caret" /></p>
        </TerminalWindow>

        <h1 className="mt-10 text-2xl font-semibold tracking-tight text-zinc-100">{t.title}</h1>
        <p className="mt-3 text-sm leading-relaxed text-zinc-500">
          {t.body}
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link to="/" className="btn btn-primary">{t.home}</Link>
          <Link to="/docs" className="btn btn-ghost">{t.docs}</Link>
        </div>
      </div>
    </div>
  )
}
