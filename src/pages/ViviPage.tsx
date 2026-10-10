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

export default function ViviPage() {
  const { common, vivi: t } = useT()
  const formats = [
    [common.video, 'H.264 · HEVC · VP9 · AV1'],
    [common.audio, 'MP3 · AAC · ALAC · Opus · Vorbis · FLAC · PCM · WAV'],
    [common.images, 'PNG · JPEG · WebP · BMP · TIFF · GIF'],
  ]
  return (
    <div>
      <PageHero
        backTo={{ to: '/', label: common.suiteBack }}
        eyebrow={t.eyebrow}
        title={<Rich text={t.title} />}
        lede={t.lede}
        actions={<GithubButton repo="vivi" />}
        aside={
          <TerminalWindow title="vivido — vivi">
            <p><span className="term-prompt">~/pics</span> <span className="term-path">$</span> vivi ridgeline.png</p>
            <div className="my-3">
              <MediaSurface kind="image" badge="PNG · original bytes" ratio="16/9" />
            </div>
            <p><span className="term-prompt">~/pics</span> <span className="term-path">$</span> vivi song.flac</p>
            <p className="term-out">flac 44.1 kHz stereo · canonical init</p>
            <p className="term-out">playing — 0:42 / 3:18</p>
          </TerminalWindow>
        }
      />

      <section className="hairline px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow={common.usage} title={t.usageTitle} />
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
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
        <div className="mx-auto grid grid-cols-1 max-w-7xl gap-12 lg:grid-cols-2">
          <Reveal>
            <FeatureList heading={t.featuresHeading} items={t.features} />
          </Reveal>
          <Reveal delay={80}>
            <h2 className="font-mono text-[11px] uppercase tracking-widest text-zinc-500">
              {t.formatsHeading}
            </h2>
            <dl className="mt-4 space-y-3">
              {formats.map(([label, list]) => (
                <div key={list} className="card-inset p-4">
                  <dt className="text-sm font-medium text-zinc-200">{label}</dt>
                  <dd className="mt-1.5 font-mono text-xs leading-relaxed text-accent-300">{list}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-8">
              <CopyCommand command="cargo install vivi" />
            </div>
            <p className="mt-4 text-xs leading-relaxed text-zinc-600">
              <Rich text={t.buildNote} codeClass="font-mono text-accent-300" />
            </p>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
