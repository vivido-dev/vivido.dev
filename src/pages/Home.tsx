import ScreenshotPlaceholder from '../components/ScreenshotPlaceholder'
import DownloadButton from '../components/DownloadButton'
import { Link } from 'react-router-dom'

const features = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
      </svg>
    ),
    title: 'GPU Accelerated',
    description: 'Vello + wgpu on Metal, DirectX 12, or Vulkan. Every frame rendered by the GPU — your terminal stays fast even with inline media.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Inline Media',
    description: 'Images, video, and audio rendered natively via Vivid Protocol 1.0. Media rides authenticated side channels — no base64 bloat, no escape sequence hacks.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
      </svg>
    ),
    title: 'SSH Media Forwarding',
    description: 'vvssh securely forwards your Vivid endpoint, so remote images and video appear inline just like local ones. Tokens never touch command arguments.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
      </svg>
    ),
    title: 'Wayland Native',
    description: 'Linux is Wayland-only. No X11, no Xlib, no legacy display server overhead. Clean, modern, purpose-built for the Linux desktop.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
      </svg>
    ),
    title: 'Agent Automation',
    description: 'vivido msg IPC for scripting, testing, and AI agents. Structured grid snapshots, key injection, state waits, and screenshots from the command line.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
      </svg>
    ),
    title: 'Cross-Platform',
    description: 'macOS (Metal), Linux (Vulkan/Wayland), and Windows (DirectX 12). Platform-native GPU backends with a consistent terminal experience.',
  },
]

const ecosystem = [
  {
    name: 'Vivi',
    description: 'Play images, video, and audio from the command line. vivi photo.png, vivi clip.mkv, vivi song.mp3.',
    link: '/vivi',
  },
  {
    name: 'vvmux',
    description: 'Detachable terminal multiplexer with Vivid media passthrough. Panes, tabs, scrollback, and automation.',
    link: '/vvmux',
  },
  {
    name: 'Veston',
    description: 'Run an isolated Weston desktop and stream it as live H.264 video into your Vivido terminal.',
    link: 'https://github.com/vivido-dev/veston',
  },
  {
    name: 'vvrd',
    description: 'Read PDFs and EPUBs rendered in-terminal. MuPDF-powered, no escape sequences.',
    link: 'https://github.com/vivido-dev/vvrd',
  },
]

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="px-4 sm:px-6 lg:px-8 pt-16 pb-12 sm:pt-24 sm:pb-20 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-medium mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
            v0.2.1 — early access
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-zinc-100 tracking-tight leading-tight">
            <span className="brand-text-gradient">Vivido</span>
            <br />
            <span className="text-zinc-200">The GPU Enhanced Terminal</span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-zinc-400 leading-relaxed max-w-2xl mx-auto">
            A fast, cross-platform terminal emulator with native inline media. Images, video, and audio
            rendered directly between your text and backgrounds — through authenticated side channels,
            never through escape sequences.
          </p>

          {/* Screenshot placeholders */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            <ScreenshotPlaceholder
              label="Vivido terminal with inline image"
              aspectRatio="16/10"
            />
            <ScreenshotPlaceholder
              label="Vivido with vvmux tiled panes"
              aspectRatio="16/10"
            />
          </div>

          {/* Download buttons */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <DownloadButton os="windows" href="https://github.com/vivido-dev/vivido/releases" />
            <DownloadButton os="macos" href="https://github.com/vivido-dev/vivido/releases" />
            <DownloadButton os="linux" />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-100 tracking-tight">
              Why Vivido
            </h2>
            <p className="mt-3 text-zinc-400 max-w-xl mx-auto">
              Built from the ground up for performance and media. Not just another terminal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="p-6 rounded-xl border border-zinc-800 bg-zinc-900/50 hover:border-zinc-700 transition-colors"
              >
                <div className="w-9 h-9 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-base font-semibold text-zinc-200 mb-2">{feature.title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ecosystem */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-100 tracking-tight">
              The Vivido Ecosystem
            </h2>
            <p className="mt-3 text-zinc-400 max-w-xl mx-auto">
              A growing family of tools built on Vivid Protocol 1.0.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {ecosystem.map((tool) => {
              const baseClass = "p-5 rounded-xl border border-zinc-800 bg-zinc-900/50 hover:border-zinc-700 transition-colors group block"
              const content = (
                <>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-mono text-sm font-semibold text-purple-400 group-hover:text-purple-300 transition-colors">
                      {tool.name}
                    </span>
                    {tool.link.startsWith('http') && (
                      <svg className="w-3 h-3 text-zinc-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    )}
                  </div>
                  <p className="text-sm text-zinc-400 leading-relaxed">{tool.description}</p>
                </>
              )

              return tool.link.startsWith('http') ? (
                <a key={tool.name} href={tool.link} target="_blank" rel="noopener noreferrer" className={baseClass}>
                  {content}
                </a>
              ) : (
                <Link key={tool.name} to={tool.link} className={baseClass}>
                  {content}
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Get Started */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 border-t border-zinc-800">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-100 tracking-tight">
            Get Started
          </h2>
          <p className="mt-3 text-zinc-400 mb-8">
            Install Vivido on your platform. Requires Rust 1.88+.
          </p>

          <div className="space-y-4 text-left">
            <div className="code-block">
              <div className="text-xs text-zinc-500 mb-2">macOS</div>
              <code>$ brew install vivido</code>
            </div>
            <div className="code-block">
              <div className="text-xs text-zinc-500 mb-2">Linux (Wayland)</div>
              <code>$ cargo install vivido</code>
            </div>
            <div className="code-block">
              <div className="text-xs text-zinc-500 mb-2">Windows</div>
              <code>{'>'} winget install vivido</code>
            </div>
          </div>

          <p className="mt-6 text-sm text-zinc-500">
            See the{' '}
            <a
              href="https://github.com/vivido-dev/vivido/blob/main/INSTALL.md"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-purple-300 underline underline-offset-2"
            >
              full installation guide
            </a>
            {' '}for build dependencies and detailed instructions.
          </p>
        </div>
      </section>
    </div>
  )
}
