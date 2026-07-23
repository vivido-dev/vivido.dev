import { Link } from 'react-router-dom'

export default function Tutorials() {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 max-w-3xl mx-auto">
      <div className="mb-4">
        <Link to="/" className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors">
          &larr; Home
        </Link>
      </div>

      <h1 className="text-3xl sm:text-4xl font-bold text-zinc-100 tracking-tight mb-3">
        Tutorials
      </h1>
      <p className="text-lg text-zinc-400 mb-8">
        Step-by-step guides for getting the most out of Vivido.
      </p>

      <div className="border border-dashed border-zinc-700 rounded-xl p-8 text-center">
        <svg className="w-10 h-10 text-zinc-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
        </svg>
        <h2 className="text-xl font-semibold text-zinc-300 mb-2">Coming Soon</h2>
        <p className="text-zinc-500 max-w-md mx-auto">
          Tutorials covering SSH setup with vvssh, vvmux workflows, Vivi media playback,
          Veston desktop streaming, agent automation, and more are being prepared.
        </p>
      </div>
    </div>
  )
}
