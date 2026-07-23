import ScreenshotPlaceholder from '../components/ScreenshotPlaceholder'
import { Link } from 'react-router-dom'

export default function ViviPage() {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 max-w-4xl mx-auto">
      <div className="mb-4">
        <Link to="/" className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors">
          &larr; Home
        </Link>
      </div>

      <h1 className="text-3xl sm:text-4xl font-bold text-zinc-100 tracking-tight mb-3">
        Vivi
      </h1>
      <p className="text-lg text-zinc-400 mb-8">
        The Vivid Protocol 1.0 CLI producer — play images, video, and audio from your terminal.
      </p>

      <ScreenshotPlaceholder label="Vivi playing video in Vivido" aspectRatio="16/9" className="mb-10" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
        <div>
          <h2 className="text-lg font-semibold text-zinc-200 mb-3">Key Features</h2>
          <ul className="space-y-2 text-sm text-zinc-400">
            <li className="flex items-start gap-2">
              <span className="text-purple-400 mt-0.5 shrink-0">&rarr;</span>
              Play any image: PNG, JPEG (original bytes), others auto-convert to RGBA
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-400 mt-0.5 shrink-0">&rarr;</span>
              Video: H.264/HEVC Annex B, VP9, AV1 with linked audio clock
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-400 mt-0.5 shrink-0">&rarr;</span>
              Audio: MP3, AAC, ALAC, Opus, Vorbis, FLAC, PCM, WAV
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-400 mt-0.5 shrink-0">&rarr;</span>
              Canonical Opus/Vorbis/FLAC initialization — no container ambiguity
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-400 mt-0.5 shrink-0">&rarr;</span>
              Works locally or remotely via vvssh
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-400 mt-0.5 shrink-0">&rarr;</span>
              Flow control, visibility pause/resume, keyframe recovery
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-zinc-200 mb-3">Usage</h2>
          <div className="space-y-3">
            <div className="code-block">
              <code>$ vivi photo.png</code>
            </div>
            <div className="code-block">
              <code>$ vivi clip.mkv</code>
            </div>
            <div className="code-block">
              <code>$ vivi song.mp3</code>
            </div>
            <div className="code-block">
              <code>$ vivi -z 1.5 photo.webp clip.mp4</code>
            </div>
          </div>
        </div>
      </div>

      <h2 className="text-lg font-semibold text-zinc-200 mb-3">Supported Media Formats</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        <div className="p-4 rounded-lg border border-zinc-800 bg-zinc-900/50">
          <div className="text-sm font-medium text-zinc-300 mb-2">Video</div>
          <p className="text-xs text-zinc-500 font-mono">H.264, HEVC, VP9, AV1</p>
        </div>
        <div className="p-4 rounded-lg border border-zinc-800 bg-zinc-900/50">
          <div className="text-sm font-medium text-zinc-300 mb-2">Audio</div>
          <p className="text-xs text-zinc-500 font-mono">MP3, AAC, ALAC, Opus, Vorbis, FLAC, PCM, WAV</p>
        </div>
        <div className="p-4 rounded-lg border border-zinc-800 bg-zinc-900/50">
          <div className="text-sm font-medium text-zinc-300 mb-2">Images</div>
          <p className="text-xs text-zinc-500 font-mono">PNG, JPEG, WebP, BMP, TIFF, GIF</p>
        </div>
      </div>

      <div className="code-block mb-8">
        <div className="text-xs text-zinc-500 mb-2">Install</div>
        <code>$ cargo install vivi</code>
      </div>

      <div className="flex flex-wrap gap-4">
        <a
          href="https://github.com/vivido-dev/vivi"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-800 text-sm text-zinc-300 hover:bg-zinc-700 transition-colors"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
          </svg>
          GitHub
        </a>
      </div>
    </div>
  )
}
