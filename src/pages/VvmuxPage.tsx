import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import TerminalWindow from '../components/TerminalWindow'
import MediaSurface from '../components/MediaSurface'
import SectionHeading from '../components/SectionHeading'
import FeatureList from '../components/FeatureList'
import CopyCommand from '../components/CopyCommand'
import GithubButton from '../components/GithubButton'
import Reveal from '../components/Reveal'

const FEATURES = [
  'Detachable named sessions backed by a persistent server',
  'Tabs, tiled and floating panes, zoom, copy mode, and mouse resize',
  'A virtual Vivid presenter per pane — media survives detach and re-attach',
  'Fragment-aware pane media occlusion and stable snapshot reconciliation',
  'Scriptable pane automation through vvmux msg',
  'A plugin system with an agent navigator that reports idle, working, or blocked',
]

const KEYS = [
  ['Ctrl+b %', 'Split left and right'],
  ['Ctrl+b "', 'Split top and bottom'],
  ['Ctrl+b ←→↑↓', 'Move focus between panes'],
  ['Ctrl+b z', 'Toggle zoom on the focused pane'],
  ['Ctrl+b d', 'Detach, leaving everything running'],
  ['Ctrl+b c / n / p', 'New tab, next tab, previous tab'],
  ['Ctrl+b [', 'Copy mode'],
]

export default function VvmuxPage() {
  return (
    <div>
      <PageHero
        backTo={{ to: '/', label: 'The Vivido suite' }}
        eyebrow="vvmux · detachable multiplexer"
        title={<>Detach the session.<br /><span className="text-gradient">Keep the media.</span></>}
        lede={
          <>
            vvmux is tmux-shaped and Vivid-aware. Its background server owns panes, PTYs, layout, and
            scrollback; the foreground client bridges only currently visible media into the attached
            Vivido window. Detaching never hands the daemon your window token.
          </>
        }
        actions={
          <>
            <Link to="/vvmux/plugins" className="btn btn-primary">
              Browse plugins
              <span aria-hidden="true">→</span>
            </Link>
            <GithubButton repo="vvmux" />
          </>
        }
        aside={
          <TerminalWindow title="vvmux — build · logs · media" tabs={['build', 'logs', 'media']}>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div>
                <p className="text-xs"><span className="term-prompt">pane 0</span></p>
                <p className="term-out text-xs">cargo build --release</p>
                <p className="term-out text-xs">Compiling vivido v0.4.7</p>
                <p className="term-out text-xs">Finished in 84.2s</p>
              </div>
              <div>
                <p className="text-xs"><span className="term-prompt">pane 1</span></p>
                <MediaSurface kind="video" badge="live" ratio="16/10" className="mt-1" />
              </div>
            </div>
            <p className="mt-4 text-xs"><span className="term-prompt">~</span> <span className="term-path">$</span> vvmux detach</p>
            <p className="term-out text-xs">[detached from session build]</p>
            <p className="mt-2 text-xs"><span className="term-prompt">~</span> <span className="term-path">$</span> vvmux attach build</p>
            <p className="term-out text-xs">media rehydrated · 2 panes · 1 track</p>
          </TerminalWindow>
        }
      />

      <section className="hairline px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto grid grid-cols-1 max-w-7xl gap-12 lg:grid-cols-2">
          <Reveal>
            <FeatureList heading="What it does" items={FEATURES} />
            <div className="mt-8">
              <CopyCommand command="cargo install vvmux" />
            </div>
          </Reveal>

          <Reveal delay={80}>
            <h2 className="font-mono text-[11px] uppercase tracking-widest text-zinc-500">
              Default keys
            </h2>
            <p className="mt-2 text-xs text-zinc-600">The prefix is Ctrl+b, as you would expect.</p>
            <dl className="card mt-4 divide-y divide-zinc-800 px-5">
              {KEYS.map(([keys, action]) => (
                <div key={keys} className="flex flex-wrap items-center justify-between gap-3 py-3.5">
                  <dt className="text-sm text-zinc-300">{action}</dt>
                  <dd><kbd>{keys}</kbd></dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      <section className="hairline px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="The security shape"
            title="A daemon that outlives your window should not hold its keys."
            lede="This is the part that makes a media-aware multiplexer different from a text one, and it is worth understanding before you trust it with a long-running session."
          />
          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
            {[
              ['The server owns state', 'Panes, PTYs, layout, and scrollback live in a background process that survives detach.'],
              ['The client owns authority', 'Only the attached foreground client holds the outer Vivido window token. Detaching releases it.'],
              ['The bridge is narrow', 'Visible media is relayed through source-scoped writers, reconciled from stable snapshots.'],
            ].map(([title, blurb], index) => (
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
    </div>
  )
}
