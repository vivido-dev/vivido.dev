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
import { comment, useT, type Messages } from '../i18n/context'
import Rich from '../i18n/Rich'

const PLATFORMS = [
  ['macOS', 'Metal'],
  ['Windows', 'DirectX 12'],
  ['Linux', 'Vulkan · Wayland'],
]

type Notes = Messages['home']['samples']

const rustSample = (notes: Notes) => `use vivid_sdk::PaneSession;

fn main() -> std::io::Result<()> {
${comment('    // ', notes.rust)}
    let mut pane = PaneSession::from_env()?;

    pane.show_encoded_image(&std::fs::read("ridgeline.png")?)?;

    println!("press Enter to remove the image");
    std::io::stdin().read_line(&mut String::new())?;
    Ok(())
}`

const pythonSample = (notes: Notes) => `import vivid_sdk

${comment('# ', notes.python)}
presentation = vivid_sdk.display_image("ridgeline.png")

input("press Enter to remove the image")
presentation.close()`

const shellSample = (notes: Notes) => `${comment('# ', notes.shell)}
eval "$(vivido --headless --session ci)"

vivido msg create-window --command ./run-tests.sh
vivido msg wait text 'all tests passed' --timeout 5m
vivido msg screenshot --json`

export default function Home() {
  const t = useT()
  const home = t.home
  const caps = home.caps
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
              <Rich text={home.heroTitle} />
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg">
              {home.heroLede}
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <DownloadCta className="w-full max-w-xs sm:w-auto" />
              <a href="#install" className="btn btn-ghost w-full max-w-xs sm:w-auto">
                {home.otherInstall}
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
              alt={home.heroAlt}
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
                {home.watch}
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
            eyebrow={home.proof.eyebrow}
            title={home.proof.title}
            lede={home.proof.lede}
          />

          <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3">
            {Object.entries(home.proof.captions).map(([command, caption], index) => (
              <Reveal key={command} delay={index * 90}>
                <div className="card h-full p-5">
                  <CopyCommand command={command} size="sm" className="!border-zinc-800/80" />
                  <p className="mt-4 text-sm leading-relaxed text-zinc-400">{caption}</p>
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
            eyebrow={home.pty.eyebrow}
            title={home.pty.title}
            lede={home.pty.lede}
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
            eyebrow={caps.eyebrow}
            title={caps.title}
            lede={caps.lede}
          />

          <div className="mt-12 grid grid-cols-1 gap-4 lg:grid-cols-3">
            <Reveal className="lg:col-span-2">
              <div className="card h-full p-6 sm:p-8">
                <h3 className="text-lg font-semibold text-zinc-100">{caps.media.title}</h3>
                <p className="mt-2.5 max-w-xl text-sm leading-relaxed text-zinc-400">
                  {caps.media.body}
                </p>
                <dl className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
                  {[
                    [t.common.video, 'H.264 · HEVC · VP9 · AV1'],
                    [t.common.audio, 'MP3 · AAC · ALAC · Opus · Vorbis · FLAC · PCM'],
                    [t.common.images, 'PNG · JPEG · WebP · BMP · TIFF · GIF'],
                  ].map(([label, list]) => (
                    <div key={list} className="card-inset p-4">
                      <dt className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">{label}</dt>
                      <dd className="mt-2 font-mono text-xs leading-relaxed text-accent-300">{list}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <div className="card h-full p-6 sm:p-8">
                <h3 className="text-lg font-semibold text-zinc-100">{caps.gpu.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-zinc-400">
                  {caps.gpu.body}
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
                <h3 className="text-lg font-semibold text-zinc-100">{caps.ssh.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-zinc-400">
                  <Rich text={caps.ssh.body} codeClass="font-mono text-accent-300" />
                </p>
                <p className="mt-5 text-xs leading-relaxed text-zinc-600">
                  {caps.ssh.note}
                </p>
              </div>
            </Reveal>

            <Reveal className="lg:col-span-2" delay={80}>
              <div className="card h-full p-6 sm:p-8">
                <h3 className="text-lg font-semibold text-zinc-100">{caps.automation.title}</h3>
                <p className="mt-2.5 max-w-xl text-sm leading-relaxed text-zinc-400">
                  <Rich text={caps.automation.body} codeClass="font-mono text-accent-300" />
                </p>
                <div className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {Object.entries(caps.automation.commands).map(([name, blurb]) => (
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
                <h3 className="text-lg font-semibold text-zinc-100">{caps.headless.title}</h3>
                <p className="mt-2.5 max-w-xl text-sm leading-relaxed text-zinc-400">
                  {caps.headless.body}
                </p>
                <div className="mt-6">
                  <CopyCommand command='eval "$(vivido --headless --session ci)"' size="sm" />
                </div>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <div className="card h-full p-6 sm:p-8">
                <h3 className="text-lg font-semibold text-zinc-100">{caps.wayland.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-zinc-400">
                  {caps.wayland.body}
                </p>
                <p className="mt-5 text-xs leading-relaxed text-zinc-600">
                  {caps.wayland.note}
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
            eyebrow={home.suite.eyebrow}
            title={home.suite.title}
            lede={home.suite.lede}
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
                {home.vivida.eyebrow}
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-100 sm:text-4xl">
                <Rich text={home.vivida.title} />
              </h2>
              <p className="mt-5 text-base leading-relaxed text-zinc-400">
                {home.vivida.body}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/vivida" className="btn btn-primary">
                  {home.vivida.explore}
                  <span aria-hidden="true">→</span>
                </Link>
                <Link to="/vvmux" className="btn btn-ghost">
                  {home.vivida.detach}
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
                eyebrow={home.own.eyebrow}
                title={home.own.title}
                lede={home.own.lede}
              />

              <ul className="mt-8 space-y-4">
                {home.own.points.map(([title, blurb]) => (
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
                  {home.own.readSpec}
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>

            <CodeTabs
              samples={[
                { label: 'Rust', filename: 'src/main.rs', code: rustSample(home.samples) },
                { label: 'Python', filename: 'show.py', code: pythonSample(home.samples) },
                { label: 'Shell', filename: 'ci.sh', code: shellSample(home.samples) },
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
              eyebrow={home.install.eyebrow}
              title={home.install.title}
              lede={home.install.lede}
            />
            <p className="mt-6 text-sm leading-relaxed text-zinc-500">
              {home.install.body}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="https://github.com/vivido-dev/vivido" className="btn btn-ghost">
                {home.install.browse}
                <span aria-hidden="true">↗</span>
              </a>
              <Link to="/tutorials" className="btn btn-ghost">
                {t.common.firstSteps}
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
            <Rich text={home.closing.title} />
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-zinc-400">
            {home.closing.body}
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <DownloadCta className="w-full max-w-xs sm:w-auto" />
            <Link to="/vivido" className="btn btn-ghost w-full max-w-xs sm:w-auto">
              {home.closing.fast}
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
