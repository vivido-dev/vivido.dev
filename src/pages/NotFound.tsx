import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-20 max-w-lg mx-auto text-center">
      <div className="text-6xl font-bold text-zinc-800 mb-4">404</div>
      <h1 className="text-xl font-semibold text-zinc-300 mb-2">Page not found</h1>
      <p className="text-zinc-500 mb-8">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-800 text-sm text-zinc-300 hover:bg-zinc-700 transition-colors"
      >
        &larr; Back to Home
      </Link>
    </div>
  )
}
