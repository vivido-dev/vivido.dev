import { Link } from 'react-router-dom'

export default function Documents() {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 max-w-3xl mx-auto">
      <div className="mb-4">
        <Link to="/" className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors">
          &larr; Home
        </Link>
      </div>

      <h1 className="text-3xl sm:text-4xl font-bold text-zinc-100 tracking-tight mb-3">
        Documentation
      </h1>
      <p className="text-lg text-zinc-400 mb-8">
        Comprehensive guides and references for the Vivido ecosystem.
      </p>

      <div className="border border-dashed border-zinc-700 rounded-xl p-8 text-center">
        <svg className="w-10 h-10 text-zinc-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
        </svg>
        <h2 className="text-xl font-semibold text-zinc-300 mb-2">Coming Soon</h2>
        <p className="text-zinc-500 max-w-md mx-auto">
          Full API references, protocol documentation, and architecture guides are being written.
          Check the GitHub repos for READMEs and inline docs in the meantime.
        </p>
      </div>
    </div>
  )
}
