import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import TerminalWindow from '../components/TerminalWindow'
import MediaSurface from '../components/MediaSurface'
import SectionHeading from '../components/SectionHeading'
import FeatureList from '../components/FeatureList'
import CopyCommand from '../components/CopyCommand'
import GithubButton from '../components/GithubButton'
import Reveal from '../components/Reveal'

const KEY_FEATURES = [
  'GPU rendering through Vello and wgpu — Metal on macOS, DirectX 12 on Windows, Vulkan on Linux',
  'Vivid Protocol 1.5: inline images, H.264/HEVC/VP9/AV1 video, and seven audio codecs',
  'Exact-PTS playback with a linked audio/video clock and buffered startup',
  'Authenticated media anchors with replay-resistant markers',
  'vvssh for secure remote Vivid forwarding, with an optional separate media transport',
  'Deterministic automation over vivido msg, plus headless named sessions',
  'Source-scoped backpressure — a slow media source never blocks terminal I/O',
]

const DELIBERATE = [
  'Linux is Wayland-only. No X11, no Xlib, no GLX.',
  'No vi mode, vi search, or vi cursor actions.',
  'Simplified mouse selection — drag only.',
  'Media bytes never travel through the PTY. Only a bounded, authenticated anchor marker does.',
]

const PERFORMANCE = [
  ['Terminal core', 'The Alacritty lineage, so throughput and correctness start from a known-good base.'],
  ['Renderer', 'Vello computes vector and glyph work on the GPU; wgpu targets whatever backend the platform gives it.'],
  ['Isolation', 'Media decode and playback are per-track. Saturation is contained to the track that caused it.'],
]

export default function VividoPage() {
  return (
    <div>
      <PageHero
        backTo={{ to: '/', label: 'The Vivido suite' }}
        eyebrow="Vivido · GPU terminal emulator"
        title={<>A terminal that renders <span className="text-gradient">pictures and sound.</span></>}
        lede={
          <>
            Vivido is a fast, cross-platform GPU terminal emulator and the reference Vivid Protocol
            1.5 presenter. It authenticates producers, decodes and renders images and video, plays
            linked audio, and manages scene placement and visibility — while the PTY stays ordinary
            terminal I/O.
          </>
        }
        actions={
          <>
            <GithubButton repo="vivido" />
            <Link to="/config" className="btn btn-ghost">
              Configuration reference
              <span aria-hidden="true">→</span>
            </Link>
          </>
        }
        aside={
          <TerminalWindow title="vivido — zsh — 110x32">
            <p><span className="term-prompt">~/media</span> <span className="term-path">$</span> vivi orbit.mkv</p>
            <p className="term-out">h264 1920x1080 · opus 48 kHz stereo</p>
            <p className="term-out">prebuffer 480 ms · clock linked</p>
            <div className="my-3">
              <MediaSurface kind="video" badge="H.264 · exact-PTS" ratio="16/9" />
            </div>
            <p><span className="term-prompt">~/media</span> <span className="term-path">$</span> <span className="term-caret" /></p>
          </TerminalWindow>
        }
      />

      <section className="hairline px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto grid grid-cols-1 max-w-7xl gap-12 lg:grid-cols-2">
          <Reveal>
            <FeatureList heading="What it does" items={KEY_FEATURES} />
          </Reveal>
          <Reveal delay={80}>
            <FeatureList heading="Deliberate differences" items={DELIBERATE} tone="muted" />
            <p className="mt-6 text-xs leading-relaxed text-zinc-600">
              These are choices, not gaps. Each one removes a class of compatibility surface that
              Vivido would otherwise have to carry forever.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="hairline px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Why it stays fast"
            title="Speed is not a feature you add later."
            lede="Three separate decisions keep a media-capable terminal as responsive as a text-only one."
          />
          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
            {PERFORMANCE.map(([title, blurb], index) => (
              <Reveal key={title} delay={index * 80}>
                <div className="card h-full p-6">
                  <h3 className="text-base font-semibold text-zinc-100">{title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-zinc-400">{blurb}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="hairline px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto grid grid-cols-1 max-w-7xl items-start gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Install"
              title="One crate installs the terminal and vvssh."
              lede="Needs Rust 1.95 or newer, plus your platform's FFmpeg and audio development packages. Signed installers for macOS and Windows are on the releases page."
            />
            <div className="mt-8 space-y-3">
              <CopyCommand command="cargo install vivido" />
              <CopyCommand command="vivido --version" />
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="https://github.com/vivido-dev/vivido/releases/latest" className="btn btn-primary">
                Signed installers
                <span aria-hidden="true">↓</span>
              </a>
              <Link to="/tutorials" className="btn btn-ghost">
                First steps
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          <div className="card p-6 sm:p-8">
            <h3 className="text-base font-semibold text-zinc-100">Where to go next</h3>
            <ul className="mt-5 divide-y divide-zinc-800">
              {[
                { to: '/config', label: 'vivido.toml reference', blurb: 'Every section, with its built-in defaults.' },
                { to: '/docs', label: 'The automation surface', blurb: 'What vivido msg can observe and drive.' },
                { to: '/vvmux', label: 'vvmux', blurb: 'Detach a session and keep the media.' },
                { to: '/vivi', label: 'Vivi', blurb: 'The quickest way to put media on screen.' },
              ].map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="group flex items-center justify-between gap-4 py-4">
                    <span>
                      <span className="block text-sm font-medium text-zinc-200 group-hover:text-accent-200">
                        {item.label}
                      </span>
                      <span className="mt-0.5 block text-xs text-zinc-500">{item.blurb}</span>
                    </span>
                    <span className="text-zinc-600 transition-transform group-hover:translate-x-0.5 group-hover:text-accent-300" aria-hidden="true">
                      →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}
