import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import TerminalWindow from '../components/TerminalWindow'
import MediaSurface from '../components/MediaSurface'
import SectionHeading from '../components/SectionHeading'
import FeatureList from '../components/FeatureList'
import CopyCommand from '../components/CopyCommand'
import GithubButton from '../components/GithubButton'
import Reveal from '../components/Reveal'
import { useT } from '../i18n/context'
import Rich from '../i18n/Rich'

export default function VvmuxPage() {
  const { common, vvmux: t } = useT()
  return (
    <div>
      <PageHero
        backTo={{ to: '/', label: common.suiteBack }}
        eyebrow={t.eyebrow}
        title={<Rich text={t.title} />}
        lede={t.lede}
        actions={
          <>
            <Link to="/vvmux/plugins" className="btn btn-primary">
              {t.browsePlugins}
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
            <FeatureList heading={common.whatItDoes} items={t.features} />
            <div className="mt-8">
              <CopyCommand command="cargo install vvmux" />
            </div>
          </Reveal>

          <Reveal delay={80}>
            <h2 className="font-mono text-[11px] uppercase tracking-widest text-zinc-500">
              {t.keysHeading}
            </h2>
            <p className="mt-2 text-xs text-zinc-600">{t.keysNote}</p>
            <dl className="card mt-4 divide-y divide-zinc-800 px-5">
              {Object.entries(t.keys).map(([keys, action]) => (
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
            eyebrow={t.security.eyebrow}
            title={t.security.title}
            lede={t.security.lede}
          />
          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
            {t.security.points.map(([title, blurb], index) => (
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
