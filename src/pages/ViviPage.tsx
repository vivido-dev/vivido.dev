import PageHero from '../components/PageHero'
import TerminalWindow from '../components/TerminalWindow'
import MediaSurface from '../components/MediaSurface'
import SectionHeading from '../components/SectionHeading'
import FeatureList from '../components/FeatureList'
import CopyCommand from '../components/CopyCommand'
import GithubButton from '../components/GithubButton'
import Reveal from '../components/Reveal'

const FEATURES = [
  'Any image: PNG and JPEG ride as original bytes, everything else converts to RGBA',
  'Video: H.264 and HEVC Annex B, VP9, and AV1, with a linked audio clock',
  'Audio: MP3, AAC, ALAC, Opus, Vorbis, FLAC, PCM, and WAV',
  'Canonical Opus, Vorbis, and FLAC initialisation — no container ambiguity',
  'Works directly in Vivido, inside a vvmux pane, or remotely over vvssh',
  'Flow control, visibility pause and resume, prebuffering, and keyframe recovery',
]

const FORMATS = [
  ['Video', 'H.264 · HEVC · VP9 · AV1'],
  ['Audio', 'MP3 · AAC · ALAC · Opus · Vorbis · FLAC · PCM · WAV'],
  ['Images', 'PNG · JPEG · WebP · BMP · TIFF · GIF'],
]

const USAGE = [
  { command: 'vivi photo.png', caption: 'One image, placed inline in the grid.' },
  { command: 'vivi clip.mkv', caption: 'Video with its audio track, clocked together.' },
  { command: 'vivi song.mp3', caption: 'Audio only — no window, no player.' },
  { command: 'vivi -z 1.5 photo.webp clip.mp4', caption: 'A playlist, scaled to 150%.' },
]

export default function ViviPage() {
  return (
    <div>
      <PageHero
        backTo={{ to: '/', label: 'The Vivido suite' }}
        eyebrow="Vivi · Vivid 1.5 producer"
        title={<>The shortest path from a file to <span className="text-gradient">your terminal.</span></>}
        lede={
          <>
            Vivi inspects images and any FFmpeg-supported media, then submits it to a Vivid
            presenter. It handles full-duplex control, flow control, prebuffering, visibility, and
            keyframe recovery, so all you type is a filename.
          </>
        }
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
          <SectionHeading eyebrow="Usage" title="Four ways you will actually use it." />
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {USAGE.map((item, index) => (
              <Reveal key={item.command} delay={index * 70}>
                <div className="card h-full p-5">
                  <CopyCommand command={item.command} size="sm" />
                  <p className="mt-4 text-sm leading-relaxed text-zinc-400">{item.caption}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="hairline px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto grid grid-cols-1 max-w-7xl gap-12 lg:grid-cols-2">
          <Reveal>
            <FeatureList heading="What it handles" items={FEATURES} />
          </Reveal>
          <Reveal delay={80}>
            <h2 className="font-mono text-[11px] uppercase tracking-widest text-zinc-500">
              Supported formats
            </h2>
            <dl className="mt-4 space-y-3">
              {FORMATS.map(([label, list]) => (
                <div key={label} className="card-inset p-4">
                  <dt className="text-sm font-medium text-zinc-200">{label}</dt>
                  <dd className="mt-1.5 font-mono text-xs leading-relaxed text-accent-300">{list}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-8">
              <CopyCommand command="cargo install vivi" />
            </div>
            <p className="mt-4 text-xs leading-relaxed text-zinc-600">
              Vivi needs FFmpeg development libraries at build time. On macOS that is{' '}
              <code className="font-mono text-accent-300">brew install ffmpeg pkg-config</code>.
            </p>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
