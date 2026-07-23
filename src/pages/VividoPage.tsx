import ScreenshotPlaceholder from '../components/ScreenshotPlaceholder'
import { Link } from 'react-router-dom'

export default function VividoPage() {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 max-w-4xl mx-auto">
      <div className="mb-4">
        <Link to="/" className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors">
          &larr; Home
        </Link>
      </div>

      <h1 className="text-3xl sm:text-4xl font-bold text-zinc-100 tracking-tight mb-3">
        Vivido
      </h1>
      <p className="text-lg text-zinc-400 mb-8">
        A fast, cross-platform GPU terminal emulator and the reference Vivid Protocol 1.0 presenter.
      </p>

      <ScreenshotPlaceholder label="Vivido terminal screenshot" aspectRatio="16/9" className="mb-10" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
        <div>
          <h2 className="text-lg font-semibold text-zinc-200 mb-3">Key Features</h2>
          <ul className="space-y-2 text-sm text-zinc-400">
            <li className="flex items-start gap-2">
              <span className="text-purple-400 mt-0.5 shrink-0">&rarr;</span>
              GPU rendering via Vello + wgpu — Metal, DirectX 12, Vulkan
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-400 mt-0.5 shrink-0">&rarr;</span>
              Vivid Protocol 1.0: inline images, video, audio via side channels
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-400 mt-0.5 shrink-0">&rarr;</span>
              Authenticated media anchors with replay-resistant markers
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-400 mt-0.5 shrink-0">&rarr;</span>
              SSH media forwarding with vvssh
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-400 mt-0.5 shrink-0">&rarr;</span>
              Agent automation IPC for scripting and testing
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-400 mt-0.5 shrink-0">&rarr;</span>
              Source-scoped backpressure — slow media never blocks terminal I/O
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-zinc-200 mb-3">Deliberate Differences</h2>
          <ul className="space-y-2 text-sm text-zinc-400">
            <li className="flex items-start gap-2">
              <span className="text-purple-400 mt-0.5 shrink-0">&rarr;</span>
              Linux is Wayland-only — no X11, Xlib, or GLX
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-400 mt-0.5 shrink-0">&rarr;</span>
              No vi mode, vi search, or vi cursor actions
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-400 mt-0.5 shrink-0">&rarr;</span>
              Simplified mouse selection — drag only
            </li>
          </ul>
        </div>
      </div>

      <div className="code-block mb-8">
        <div className="text-xs text-zinc-500 mb-2">Install</div>
        <code>$ cargo install vivido</code>
      </div>

      <div className="flex flex-wrap gap-4">
        <a
          href="https://github.com/vivido-dev/vivido"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-800 text-sm text-zinc-300 hover:bg-zinc-700 transition-colors"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
          </svg>
          GitHub
        </a>
        <Link
          to="/config"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-800 text-sm text-zinc-300 hover:bg-zinc-700 transition-colors"
        >
          Configuration Guide &rarr;
        </Link>
      </div>
    </div>
  )
}
