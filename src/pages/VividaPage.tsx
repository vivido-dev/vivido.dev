import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import TerminalWindow from '../components/TerminalWindow'
import MediaSurface from '../components/MediaSurface'
import SectionHeading from '../components/SectionHeading'
import CopyCommand from '../components/CopyCommand'
import GithubButton from '../components/GithubButton'
import Reveal from '../components/Reveal'
import { useT } from '../i18n/context'
import Rich from '../i18n/Rich'

export default function VividaPage() {
  const { common, vivida: t } = useT()
  return (
    <div>
      <PageHero
        backTo={{ to: '/', label: common.suiteBack }}
        eyebrow={t.eyebrow}
        title={<Rich text={t.title} />}
        lede={t.lede}
        actions={
          <>
            <GithubButton repo="vivida" />
            <a href="#workspace" className="btn btn-ghost">
              {t.explore}
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
            eyebrow={t.place.eyebrow}
            title={t.place.title}
          />
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {t.place.features.map(([title, description], index) => (
              <Reveal key={index} delay={index * 70}>
                <article className="card h-full p-7 sm:p-8">
                  <span className="font-mono text-xs text-accent-400">0{index + 1} /</span>
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
                {t.agents.eyebrow}
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-100">
                {t.agents.title}
              </h2>
              <p className="mt-5 text-base leading-relaxed text-zinc-400">
                {t.agents.body}
              </p>
              <a
                href="https://github.com/vivido-dev/vivida/blob/dev/docs/automation.md"
                className="mt-6 inline-block text-sm text-accent-400 transition-colors hover:text-accent-300"
              >
                {t.agents.guide} <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="hairline px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto grid grid-cols-1 max-w-7xl items-start gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow={t.keys.eyebrow}
              title={t.keys.title}
              lede={t.keys.lede}
            />
            <div className="mt-8">
              <CopyCommand command="cargo install vivida" />
            </div>
            <Link
              to="/vivido"
              className="mt-6 inline-block text-sm text-accent-400 transition-colors hover:text-accent-300"
            >
              {t.keys.meetVivido} <span aria-hidden="true">→</span>
            </Link>
          </div>

          <dl className="card divide-y divide-zinc-800 px-5">
            {Object.entries(t.keys.shortcuts).map(([keys, action]) => (
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
