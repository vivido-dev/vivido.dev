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

export default function VvrdPage() {
  const { common, vvrd: t } = useT()
  return (
    <div>
      <PageHero
        backTo={{ to: '/', label: common.suiteBack }}
        eyebrow={t.eyebrow}
        title={<Rich text={t.title} />}
        lede={t.lede}
        actions={<GithubButton repo="vvrd" />}
        aside={
          <TerminalWindow title="vivido — vvrd">
            <p><span className="term-prompt">~/papers</span> <span className="term-path">$</span> vvrd --page 12 architecture.pdf</p>
            <div className="my-3">
              <MediaSurface kind="document" badge="PDF · page 12 of 31" ratio="16/9" />
            </div>
            <p className="term-out">mupdf · search on · toc loaded</p>
            <p className="text-xs"><span className="term-prompt">~/papers</span> <span className="term-path">$</span> <span className="term-caret" /></p>
          </TerminalWindow>
        }
      />

      <section className="hairline px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow={common.usage} title={t.usageTitle} />
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {Object.entries(t.usage).map(([command, caption], index) => (
              <Reveal key={command} delay={index * 70}>
                <div className="card h-full p-5">
                  <CopyCommand command={command} size="sm" />
                  <p className="mt-4 text-sm leading-relaxed text-zinc-400">{caption}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="hairline px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <Reveal>
            <FeatureList heading={common.whatItDoes} items={t.features} />
            <div className="mt-8">
              <CopyCommand command="cargo install vvrd" />
            </div>
            <p className="mt-4 text-xs leading-relaxed text-zinc-600">
              <Rich text={t.officeNote} codeClass="font-mono text-accent-300" />
            </p>
          </Reveal>

          <Reveal delay={80}>
            <h2 className="font-mono text-[11px] uppercase tracking-widest text-zinc-500">
              {t.keysHeading}
            </h2>
            <dl className="card mt-4 divide-y divide-zinc-800 px-5">
              {Object.entries(t.keys).map(([keys, action]) => (
                <div key={keys} className="flex flex-wrap items-center justify-between gap-3 py-3.5">
                  <dt className="text-sm text-zinc-300">{action}</dt>
                  <dd><kbd>{keys}</kbd></dd>
                </div>
              ))}
            </dl>

            <h2 className="mt-10 font-mono text-[11px] uppercase tracking-widest text-zinc-500">
              {t.formatsHeading}
            </h2>
            <dl className="mt-4 space-y-3">
              {t.formats.map(([label, list]) => (
                <div key={label} className="card-inset p-4">
                  <dt className="text-sm font-medium text-zinc-200">{label}</dt>
                  <dd className="mt-1.5 font-mono text-xs leading-relaxed text-accent-300">{list}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
