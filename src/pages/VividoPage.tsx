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

const NEXT = [
  { id: 'config', to: '/config' },
  { id: 'docs', to: '/docs' },
  { id: 'vvmux', to: '/vvmux' },
  { id: 'vivi', to: '/vivi' },
] as const

export default function VividoPage() {
  const { common, vivido: t } = useT()
  return (
    <div>
      <PageHero
        backTo={{ to: '/', label: common.suiteBack }}
        eyebrow={t.eyebrow}
        title={<Rich text={t.title} />}
        lede={t.lede}
        actions={
          <>
            <GithubButton repo="vivido" />
            <Link to="/config" className="btn btn-ghost">
              {t.configReference}
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
            <FeatureList heading={common.whatItDoes} items={t.features} />
          </Reveal>
          <Reveal delay={80}>
            <FeatureList heading={t.deliberateHeading} items={t.deliberate} tone="muted" />
            <p className="mt-6 text-xs leading-relaxed text-zinc-600">
              {t.deliberateNote}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="hairline px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow={t.speed.eyebrow}
            title={t.speed.title}
            lede={t.speed.lede}
          />
          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
            {t.speed.points.map(([title, blurb], index) => (
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
              eyebrow={t.install.eyebrow}
              title={t.install.title}
              lede={t.install.lede}
            />
            <div className="mt-8 space-y-3">
              <CopyCommand command="cargo install vivido" />
              <CopyCommand command="vivido --version" />
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="https://github.com/vivido-dev/vivido/releases/latest" className="btn btn-primary">
                {t.install.installers}
                <span aria-hidden="true">↓</span>
              </a>
              <Link to="/tutorials" className="btn btn-ghost">
                {common.firstSteps}
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          <div className="card p-6 sm:p-8">
            <h3 className="text-base font-semibold text-zinc-100">{t.next.title}</h3>
            <ul className="mt-5 divide-y divide-zinc-800">
              {NEXT.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="group flex items-center justify-between gap-4 py-4">
                    <span>
                      <span className="block text-sm font-medium text-zinc-200 group-hover:text-accent-200">
                        {t.next[item.id].label}
                      </span>
                      <span className="mt-0.5 block text-xs text-zinc-500">{t.next[item.id].blurb}</span>
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
