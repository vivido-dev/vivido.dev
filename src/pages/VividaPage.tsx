import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import TerminalWindow from '../components/TerminalWindow'
import MediaSurface from '../components/MediaSurface'
import SectionHeading from '../components/SectionHeading'
import CopyCommand from '../components/CopyCommand'
import GithubButton from '../components/GithubButton'
import Reveal from '../components/Reveal'

const FEATURES = [
  ['01', 'A place for every project', 'Group your work into named workspaces. Move between projects from the sidebar, with tabs and splits keeping each task close at hand.'],
  ['02', 'More than a wall of text', 'Built on Vivido, your panes can show images, play video, and render audio alongside terminal output. Keep the preview next to the work.'],
  ['03', 'Agents with eyes and hands', 'Built-in automation lets agents inspect panes, take screenshots, type, press keys, and use the mouse to check the results of their work.'],
  ['04', 'Room to find your flow', 'Open tabs, split panes, and arrange your workspace from the keyboard. GPU rendering keeps everything smooth and readable.'],
]

const SHORTCUTS = [
  ['Mod T', 'New tab'],
  ['Mod D', 'Split left and right'],
  ['Mod Shift D', 'Split top and bottom'],
  ['Mod Shift N', 'New workspace'],
  ['Mod Shift B', 'Cycle sidebar size'],
  ['Mod 1–9', 'Switch workspace'],
]

export default function VividaPage() {
  return (
    <div>
      <PageHero
        backTo={{ to: '/', label: 'The Vivido suite' }}
        eyebrow="Vivida · terminal workspace"
        title={<>A shared home for you and <span className="text-gradient">your agents.</span></>}
        lede={
          <>
            Bring projects, terminals, and AI agents into one window. Vivida combines workspaces,
            tabs, and split panes with everything Vivido can render — and the automation an agent
            needs to work in the same panes you are looking at, not a hidden sandbox.
          </>
        }
        actions={
          <>
            <GithubButton repo="vivida" />
            <a href="#workspace" className="btn btn-ghost">
              Explore the workspace
              <span aria-hidden="true">↓</span>
            </a>
          </>
        }
        aside={
          <TerminalWindow title="vivida — api · web · agent" tabs={['api', 'web', 'agent']}>
            <p className="text-xs"><span className="term-prompt">~/api</span> <span className="term-path">$</span> vvrd architecture.pdf</p>
            <div className="my-3">
              <MediaSurface kind="document" badge="PDF · page 7" ratio="16/9" />
            </div>
            <p className="term-out text-xs">agent: read pane 1, waiting on the test run</p>
            <p className="term-out text-xs">agent: screenshot saved, diagram matches the spec</p>
            <p className="text-xs"><span className="term-prompt">~/api</span> <span className="term-path">$</span> <span className="term-caret" /></p>
          </TerminalWindow>
        }
      />

      <section id="workspace" className="hairline px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Less window juggling, more making"
            title="Everything in its place."
          />
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {FEATURES.map(([number, title, description], index) => (
              <Reveal key={number} delay={index * 70}>
                <article className="card h-full p-7 sm:p-8">
                  <span className="font-mono text-xs text-accent-400">{number} /</span>
                  <h3 className="mt-5 text-xl font-semibold text-zinc-100">{title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-400">{description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="spotlight grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
            <TerminalWindow title="vivida — agent driving pane 2">
              <p className="term-out text-xs">$ vivida msg list-panes</p>
              <p className="term-out text-xs">{'{"pane":2,"workspace":"api","title":"tests"}'}</p>
              <p className="mt-2 text-xs"><span className="term-prompt">agent</span> <span className="term-path">$</span> vivida msg typing --pane 2 'cargo test'</p>
              <p className="mt-2 text-xs"><span className="term-prompt">agent</span> <span className="term-path">$</span> vivida msg wait text 'test result: ok'</p>
              <p className="term-out text-xs">{'{"matched":true,"screen_sequence":2043}'}</p>
              <p className="mt-2 text-xs"><span className="term-prompt">agent</span> <span className="term-path">$</span> vivida msg screenshot --pane 2</p>
              <p className="term-out text-xs">/tmp/vivida-pane2-2043.png</p>
            </TerminalWindow>

            <div>
              <p className="eyebrow">
                <span className="eyebrow-dot" aria-hidden="true" />
                See. Act. Verify.
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-100">
                Work alongside your agents.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-zinc-400">
                Agents can locate the right pane, inspect output, arrange tabs and splits, and take a
                screenshot to verify their work. You share the same workspace and follow along as it
                happens — which also means you can take over mid-task.
              </p>
              <a
                href="https://github.com/vivido-dev/vivida/blob/dev/docs/automation.md"
                className="mt-6 inline-block text-sm text-accent-400 transition-colors hover:text-accent-300"
              >
                Read the automation guide <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="hairline px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto grid grid-cols-1 max-w-7xl items-start gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Stay at the keyboard"
              title="Make room in a keystroke."
              lede="Mod is Cmd on macOS and Ctrl everywhere else. The gear in the tab bar has the full list."
            />
            <div className="mt-8">
              <CopyCommand command="cargo install vivida" />
            </div>
            <Link
              to="/vivido"
              className="mt-6 inline-block text-sm text-accent-400 transition-colors hover:text-accent-300"
            >
              Meet Vivido, the terminal inside <span aria-hidden="true">→</span>
            </Link>
          </div>

          <dl className="card divide-y divide-zinc-800 px-5">
            {SHORTCUTS.map(([keys, action]) => (
              <div key={keys} className="flex flex-wrap items-center justify-between gap-3 py-3.5">
                <dt className="text-sm text-zinc-300">{action}</dt>
                <dd><kbd>{keys}</kbd></dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </div>
  )
}
