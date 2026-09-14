import { Link } from 'react-router-dom'
import TerminalWindow from '../components/TerminalWindow'
import heroScreenshot from '../assets/vivida_screenshot_01.png'
import MediaSurface from '../components/MediaSurface'
import ProtocolDiagram from '../components/ProtocolDiagram'
import SectionHeading from '../components/SectionHeading'
import SuiteGrid from '../components/SuiteGrid'
import InstallPanel from '../components/InstallPanel'
import CopyCommand from '../components/CopyCommand'
import { DownloadCta } from '../components/DownloadCta'
import CodeTabs from '../components/CodeTabs'
import Reveal from '../components/Reveal'

const PLATFORMS = [
  ['macOS', 'Metal'],
  ['Windows', 'DirectX 12'],
  ['Linux', 'Vulkan · Wayland'],
]

const SIXTY_SECONDS = [
  { command: 'vivi photo.jpg', caption: 'An image, inline, at full resolution.' },
  { command: 'vivi clip.mkv', caption: 'H.264 video with linked audio, playing in the grid.' },
  { command: 'vvssh user@host', caption: 'Then run vivi there. The picture arrives here.' },
]

const RUST_SAMPLE = `use vivid_sdk::PaneSession;

fn main() -> std::io::Result<()> {
    // Discovers VIVID_ENDPOINT_CONTROL and authenticates with the
    // root secret Vivido exported into this shell.
    let mut pane = PaneSession::from_env()?;

    pane.show_encoded_image(&std::fs::read("ridgeline.png")?)?;

    println!("press Enter to remove the image");
    std::io::stdin().read_line(&mut String::new())?;
    Ok(())
}`

const PYTHON_SAMPLE = `import vivid_sdk

# Connects using the inherited Vivid discovery environment.
presentation = vivid_sdk.display_image("ridgeline.png")

input("press Enter to remove the image")
presentation.close()`

const SHELL_SAMPLE = `# A full Vivido runtime with no window, driven over IPC.
eval "$(vivido --headless --session ci)"

vivido msg create-window --command ./run-tests.sh
vivido msg wait text 'all tests passed' --timeout 5m
vivido msg screenshot --json`

export default function Home() {
  return (
    <div>
      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="page-glow grid-veil relative overflow-hidden px-4 pb-16 pt-16 sm:px-6 sm:pt-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="pill mx-auto">
              <span className="eyebrow-dot" aria-hidden="true" />
              Vivid Protocol 1.5 · Apache-2.0 · Rust
            </p>

            <h1 className="mt-7 text-[2.6rem] font-semibold leading-[1.05] tracking-tight text-zinc-100 sm:text-6xl lg:text-[4.25rem]">
              The GPU terminal
              <br />
              <span className="text-gradient">that plays video.</span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg">
              Vivido is a fast, cross-platform terminal emulator where images, video, and audio
              render right inside the window. Media rides authenticated side channels, so your PTY
              stays ordinary terminal I/O — locally, over SSH, or through a multiplexer.
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <DownloadCta className="w-full max-w-xs sm:w-auto" />
              <a href="#install" className="btn btn-ghost w-full max-w-xs sm:w-auto">
                Other installation options
                <span aria-hidden="true">↓</span>
              </a>
            </div>

            <ul className="mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
              {PLATFORMS.map(([name, backend]) => (
                <li key={name} className="text-xs text-zinc-500">
                  <span className="text-zinc-300">{name}</span>
                  <span className="mx-1.5 text-zinc-700">·</span>
                  <span className="font-mono">{backend}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mx-auto mt-14 max-w-5xl">
            <img
              src={heroScreenshot}
              alt="Vivida window showing Vivido panes playing media inline"
              width={1915}
              height={1077}
              className="h-auto w-full rounded-[14px] border border-[#24384e] bg-[#0a1119] shadow-[0_40px_90px_-40px_rgba(0,0,0,0.9)]"
            />
            <p className="mt-4 text-center">
              <a
                href="https://youtu.be/wiVmHJg4e2E"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-accent-300"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-4 w-4">
                  <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.6V8.4L15.8 12l-6.2 3.6Z" />
                </svg>
                Watch it in action on YouTube
                <span aria-hidden="true">↗</span>
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* ── Sixty-second proof ────────────────────────────────────────────── */}
      <section className="hairline px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            align="center"
            eyebrow="Prove it in sixty seconds"
            title="Three commands. No configuration."
            lede="Install Vivido, open it, and run one of these. There is no setup step, no escape-sequence probing, and nothing to enable."
          />

          <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3">
            {SIXTY_SECONDS.map((item, index) => (
              <Reveal key={item.command} delay={index * 90}>
                <div className="card h-full p-5">
                  <CopyCommand command={item.command} size="sm" className="!border-zinc-800/80" />
                  <p className="mt-4 text-sm leading-relaxed text-zinc-400">{item.caption}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Clean PTY ─────────────────────────────────────────────────────── */}
      <section id="architecture" className="hairline px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="The technical wedge"
            title="Your PTY stays clean."
            lede="Every other terminal that shows a picture does it by pushing the picture through the PTY as an escape sequence. Vivid does not. Terminal text goes where terminal text has always gone, and media gets its own authenticated, flow-controlled lane."
          />

          <Reveal className="mt-12">
            <ProtocolDiagram />
          </Reveal>
        </div>
      </section>

      {/* ── Capabilities ──────────────────────────────────────────────────── */}
      <section className="hairline px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="What you get"
            title="Built for people who do more than read text."
            lede="Fast where a terminal has to be fast, and capable where terminals have never been."
          />

          <div className="mt-12 grid grid-cols-1 gap-4 lg:grid-cols-3">
            <Reveal className="lg:col-span-2">
              <div className="card h-full p-6 sm:p-8">
                <h3 className="text-lg font-semibold text-zinc-100">Media that is actually media</h3>
                <p className="mt-2.5 max-w-xl text-sm leading-relaxed text-zinc-400">
                  Not a mosaic of coloured cells. Real decoders, exact-PTS playback, and a linked
                  audio/video clock, with per-track flow control so one stalled stream stays its own
                  problem.
                </p>
                <dl className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
                  {[
                    ['Video', 'H.264 · HEVC · VP9 · AV1'],
                    ['Audio', 'MP3 · AAC · ALAC · Opus · Vorbis · FLAC · PCM'],
                    ['Images', 'PNG · JPEG · WebP · BMP · TIFF · GIF'],
                  ].map(([label, list]) => (
                    <div key={label} className="card-inset p-4">
                      <dt className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">{label}</dt>
                      <dd className="mt-2 font-mono text-xs leading-relaxed text-accent-300">{list}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <div className="card h-full p-6 sm:p-8">
                <h3 className="text-lg font-semibold text-zinc-100">GPU-rendered, everywhere</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-zinc-400">
                  Vello and wgpu draw every frame on a platform-native backend, inheriting the
                  Alacritty terminal core's throughput.
                </p>
                <ul className="mt-6 space-y-2.5">
                  {PLATFORMS.map(([name, backend]) => (
                    <li key={name} className="flex items-center justify-between gap-3 border-b border-zinc-800/70 pb-2.5 text-sm last:border-b-0">
                      <span className="text-zinc-300">{name}</span>
                      <span className="font-mono text-xs text-accent-300">{backend}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal>
              <div className="card h-full p-6 sm:p-8">
                <h3 className="text-lg font-semibold text-zinc-100">Media over SSH</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-zinc-400">
                  <code className="font-mono text-accent-300">vvssh</code> forwards your Vivid
                  endpoint into the remote shell. Run <code className="font-mono text-accent-300">vivi</code>{' '}
                  on the server; the picture appears on your laptop. No X forwarding, no copying files.
                </p>
                <p className="mt-5 text-xs leading-relaxed text-zinc-600">
                  The root secret moves over a protected stdin channel into an owner-only file. It
                  never appears in an SSH or remote-shell argument.
                </p>
              </div>
            </Reveal>

            <Reveal className="lg:col-span-2" delay={80}>
              <div className="card h-full p-6 sm:p-8">
                <h3 className="text-lg font-semibold text-zinc-100">Automation an agent can trust</h3>
                <p className="mt-2.5 max-w-xl text-sm leading-relaxed text-zinc-400">
                  <code className="font-mono text-accent-300">vivido msg</code> is a deterministic
                  IPC surface, not a screen-scraper. Agents and CI wait on facts — a monotonic screen
                  sequence, a settled screen, a presented frame — instead of sleeping and hoping.
                </p>
                <div className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {[
                    ['wait text', 'block until the grid contains it'],
                    ['wait screen-stable', 'block until output settles'],
                    ['get-grid', 'every cell, style, and hyperlink as JSON'],
                    ['screenshot', 'the real presented frame, as a PNG'],
                  ].map(([name, blurb]) => (
                    <div key={name} className="card-inset flex flex-col gap-1 px-4 py-3">
                      <code className="font-mono text-xs text-accent-300">vivido msg {name}</code>
                      <span className="text-xs text-zinc-500">{blurb}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal className="lg:col-span-2">
              <div className="card h-full p-6 sm:p-8">
                <h3 className="text-lg font-semibold text-zinc-100">Headless named sessions</h3>
                <p className="mt-2.5 max-w-xl text-sm leading-relaxed text-zinc-400">
                  The complete runtime — terminal core, Vivid presenter, and the Vello renderer —
                  with no window and no compositor. Everything observable in a window is observable
                  here, including real rendered screenshots. Linux, macOS, and Windows.
                </p>
                <div className="mt-6">
                  <CopyCommand command='eval "$(vivido --headless --session ci)"' size="sm" />
                </div>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <div className="card h-full p-6 sm:p-8">
                <h3 className="text-lg font-semibold text-zinc-100">Wayland-only, on purpose</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-zinc-400">
                  No X11, no Xlib, no GLX. Vivido also skips vi mode and vi-style cursor actions, and
                  keeps mouse selection to a single drag. Fewer surfaces, clearer behaviour.
                </p>
                <p className="mt-5 text-xs leading-relaxed text-zinc-600">
                  These are documented, deliberate differences rather than gaps — they are listed on
                  the Vivido page.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── The suite ─────────────────────────────────────────────────────── */}
      <section id="suite" className="hairline px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="One protocol, a whole suite"
            title="Everything speaks Vivid 1.5."
            lede="Each of these is a separate program doing one job well. They interoperate because they share a wire format, not a codebase — which is also why you can write your own."
          />

          <Reveal className="mt-12">
            <SuiteGrid />
          </Reveal>
        </div>
      </section>

      {/* ── Vivida spotlight ──────────────────────────────────────────────── */}
      <section className="px-4 pb-16 sm:px-6 sm:pb-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="spotlight grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
            <div>
              <p className="eyebrow">
                <span className="eyebrow-dot" aria-hidden="true" />
                Meet Vivida
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-100 sm:text-4xl">
                Your projects. Your agents.
                <br />
                One window.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-zinc-400">
                Give every project a workspace, every task a pane, and your agents the tools to see
                and act alongside you. Vivida arranges native Vivido panes into workspaces, tabs, and
                splits — so an agent can read a pane, run a command, and screenshot the result in the
                same window you are looking at.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/vivida" className="btn btn-primary">
                  Explore Vivida
                  <span aria-hidden="true">→</span>
                </Link>
                <Link to="/vvmux" className="btn btn-ghost">
                  Or detach with vvmux
                </Link>
              </div>
            </div>

            <TerminalWindow title="vivida — api · docs · agent" tabs={['api', 'docs', 'agent']}>
              <p><span className="term-prompt">~/api</span> <span className="term-path">$</span> cargo test --workspace</p>
              <p className="term-out">test result: ok. 412 passed; 0 failed</p>
              <p className="mt-2"><span className="term-prompt">~/api</span> <span className="term-path">$</span> vvrd design.pdf</p>
              <div className="my-3">
                <MediaSurface kind="document" badge="PDF · page 4 of 18" ratio="16/9" />
              </div>
              <p className="term-out">agent: screenshotted pane 2, diagram matches the spec</p>
            </TerminalWindow>
          </div>
        </div>
      </section>

      {/* ── Build your own producer ───────────────────────────────────────── */}
      <section className="hairline px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading
                eyebrow="Write your own"
                title="Vivid is a spec, not a private trick."
                lede="The protocol is published and versioned, with a full-duplex SDK for both roles in Rust and Python. If you can produce pixels or audio, you can put them in a terminal."
              />

              <ul className="mt-8 space-y-4">
                {[
                  ['A normative specification', 'Framing, bounded CBOR, typed control messages, media validation, and authenticated text anchors — all written down.'],
                  ['Both roles in one SDK', 'Be a producer, or terminate a session and be a presenter yourself.'],
                  ['Honest negotiation', 'Coherent named profiles. Unknown registry entries survive a relay byte-for-byte; recognised-but-unsupported entries are rejected rather than silently dropped.'],
                ].map(([title, blurb]) => (
                  <li key={title} className="card-inset p-4">
                    <h3 className="text-sm font-semibold text-zinc-200">{title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-zinc-500">{blurb}</p>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="https://github.com/vivido-dev/vivid_protocol/blob/dev/vivid-protocol-1.5-spec.md"
                  className="btn btn-ghost"
                >
                  Read the 1.5 specification
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>

            <CodeTabs
              samples={[
                { label: 'Rust', filename: 'src/main.rs', code: RUST_SAMPLE },
                { label: 'Python', filename: 'show.py', code: PYTHON_SAMPLE },
                { label: 'Shell', filename: 'ci.sh', code: SHELL_SAMPLE },
              ]}
            />
          </div>
        </div>
      </section>

      {/* ── Install ───────────────────────────────────────────────────────── */}
      <section id="install" className="hairline px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto grid grid-cols-1 max-w-7xl items-start gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Get started"
              title="Install the suite."
              lede="Vivido ships with vvssh. On Windows and macOS the signed installer brings Vivida, vvmux, vivi, vvrd, and vvpaint along with it."
            />
            <p className="mt-6 text-sm leading-relaxed text-zinc-500">
              Everything is free and Apache-2.0 licensed. If you would rather build from source, the
              repository is a set of Cargo projects — each one builds on its own.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="https://github.com/vivido-dev/vivido" className="btn btn-ghost">
                Browse the source
                <span aria-hidden="true">↗</span>
              </a>
              <Link to="/tutorials" className="btn btn-ghost">
                First steps
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          <InstallPanel />
        </div>
      </section>

      {/* ── Closing ───────────────────────────────────────────────────────── */}
      <section className="hairline px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-100 sm:text-4xl">
            The terminal has been text-only
            <br />
            <span className="text-gradient">for fifty years.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-zinc-400">
            See it. Hear it. Without leaving your shell.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <DownloadCta className="w-full max-w-xs sm:w-auto" />
            <Link to="/vivido" className="btn btn-ghost w-full max-w-xs sm:w-auto">
              What makes it fast
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
