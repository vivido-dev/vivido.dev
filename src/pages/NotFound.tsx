import { Link } from 'react-router-dom'
import TerminalWindow from '../components/TerminalWindow'

export default function NotFound() {
  return (
    <div className="page-glow px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-xl text-center">
        <TerminalWindow title="vivido — zsh" className="text-left">
          <p><span className="term-prompt">~</span> <span className="term-path">$</span> cd {window.location.pathname}</p>
          <p className="term-out">cd: no such file or directory</p>
          <p className="mt-2"><span className="term-prompt">~</span> <span className="term-path">$</span> <span className="term-caret" /></p>
        </TerminalWindow>

        <h1 className="mt-10 text-2xl font-semibold tracking-tight text-zinc-100">Page not found</h1>
        <p className="mt-3 text-sm leading-relaxed text-zinc-500">
          That route does not exist. It may have moved, or it may never have been here.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link to="/" className="btn btn-primary">Back to the home page</Link>
          <Link to="/docs" className="btn btn-ghost">Read the docs</Link>
        </div>
      </div>
    </div>
  )
}
