import { Link } from 'react-router-dom'
import ScreenshotPlaceholder from '../components/ScreenshotPlaceholder'

const features = [
  ['01', 'A place for every project', 'Group your work into named workspaces. Move between projects from the sidebar, with tabs and splits keeping each task close at hand.'],
  ['02', 'More than a wall of text', 'Built on Vivido, your panes can show images, play video, and render audio alongside terminal output. Keep the preview next to the work.'],
  ['03', 'Agents with eyes and hands', 'Built-in automation lets agents inspect panes, take screenshots, type, press keys, and use the mouse to check the results of their work.'],
  ['04', 'Room to find your flow', 'Open tabs, split panes, and arrange your workspace from the keyboard. GPU rendering keeps your terminal smooth and readable.'],
]
const shortcuts = [
  ['Mod T', 'New tab'],
  ['Mod D', 'Split left and right'],
  ['Mod Shift D', 'Split top and bottom'],
  ['Mod Shift N', 'New workspace'],
  ['Mod Shift B', 'Cycle sidebar size'],
  ['Mod 1–9', 'Switch workspace'],
]

export default function VividaPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
      <section className="product-hero grid lg:grid-cols-2 gap-12 items-center py-16 sm:py-24">
        <div>
          <Link to="/" className="text-sm text-zinc-400 hover:text-zinc-100">← The Vivido family</Link>
          <p className="eyebrow mt-10">VIVIDA · TERMINAL WORKSPACE</p>
          <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight text-zinc-100 leading-tight mt-5">A shared home for you and <span className="brand-text-gradient">your agents.</span></h1>
          <p className="text-lg text-zinc-400 leading-relaxed mt-6">Bring projects, terminals, and AI agents into one window. Vivida combines workspaces, tabs, and split panes with the media capabilities of Vivido.</p>
          <div className="flex flex-wrap gap-3 mt-8">
            <a href="https://github.com/vivido-dev/vivida" className="primary-button">View on GitHub <span aria-hidden="true">↗</span></a>
            <a href="#workspace" className="secondary-button">Explore the workspace <span aria-hidden="true">↓</span></a>
          </div>
        </div>
        <ScreenshotPlaceholder label="Vivida workspace with an agent and terminal panes" aspectRatio="5/4" />
      </section>

      <section id="workspace" className="border-t border-zinc-800 py-16">
        <p className="eyebrow">LESS WINDOW JUGGLING. MORE MAKING.</p>
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-zinc-100 mt-4 mb-10">Everything in its place.</h2>
        <div className="grid sm:grid-cols-2 gap-5">
          {features.map(([number, title, description]) => (
            <article key={number} className="feature-card p-7 sm:p-9 rounded-xl border border-zinc-800 bg-zinc-900/50">
              <span className="text-sky-300 text-xs font-mono">{number} /</span>
              <h3 className="text-xl font-semibold text-zinc-100 mt-5 mb-3">{title}</h3>
              <p className="text-zinc-400 leading-relaxed">{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="spotlight grid md:grid-cols-2 gap-10 items-center mb-16">
        <ScreenshotPlaceholder label="An agent inspecting and controlling a Vivida pane" aspectRatio="16/10" />
        <div>
          <p className="eyebrow">SEE. ACT. VERIFY.</p>
          <h2 className="text-3xl font-semibold text-zinc-100 mt-4">Work alongside your agents.</h2>
          <p className="text-zinc-400 leading-relaxed mt-5 mb-6">Agents can locate the right pane, inspect output, arrange tabs and splits, and take a screenshot to verify their work. You share the same workspace and can follow along as it happens.</p>
          <a href="https://github.com/vivido-dev/vivida/blob/main/docs/automation.md" className="text-sky-300 hover:text-sky-200">Read the automation guide <span aria-hidden="true">↗</span></a>
        </div>
      </section>

      <section className="grid md:grid-cols-2 gap-10 border-t border-zinc-800 pt-16">
        <div>
          <p className="eyebrow">STAY AT THE KEYBOARD</p>
          <h2 className="text-3xl font-semibold text-zinc-100 mt-4">Make room in a keystroke.</h2>
          <p className="text-zinc-400 leading-relaxed mt-5">Mod is Cmd on macOS and Ctrl elsewhere. Open the gear in the tab bar for the full shortcut list.</p>
          <Link to="/vivido" className="inline-block text-sky-300 hover:text-sky-200 mt-6">Meet Vivido, the terminal inside <span aria-hidden="true">→</span></Link>
        </div>
        <dl className="rounded-xl border border-zinc-800 bg-zinc-900/50 px-6 divide-y divide-zinc-800">
          {shortcuts.map(([keys, action]) => (
            <div key={keys} className="flex flex-wrap justify-between items-center gap-3 py-4">
              <dt className="text-sm text-zinc-300">{action}</dt>
              <dd><kbd className="text-xs text-sky-200 bg-sky-400/10 border border-sky-300/15 rounded px-2 py-1">{keys}</kbd></dd>
            </div>
          ))}
        </dl>
      </section>
    </div>
  )
}
