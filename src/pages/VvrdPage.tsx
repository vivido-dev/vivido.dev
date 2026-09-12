import PageHero from '../components/PageHero'
import TerminalWindow from '../components/TerminalWindow'
import MediaSurface from '../components/MediaSurface'
import SectionHeading from '../components/SectionHeading'
import FeatureList from '../components/FeatureList'
import CopyCommand from '../components/CopyCommand'
import GithubButton from '../components/GithubButton'
import Reveal from '../components/Reveal'

const FEATURES = [
  'PDF and EPUB through MuPDF — search, table of contents, links, zoom and pan, rotation, and PNG export',
  'Markdown rendered by a built-in paginator: GFM tables, task lists, code, and local or data-URI images',
  'Mermaid diagrams fenced in Markdown, or on their own, centred on the page',
  'PPTX, DOCX, ODP, and ODT converted to PDF by headless LibreOffice, cached per content hash',
  'Reading position saved per document in the platform cache',
  'The same binary locally or in a remote shell over vvssh',
]

const USAGE = [
  { command: 'vvrd paper.pdf', caption: 'A PDF, full-screen in the terminal.' },
  { command: 'vvrd book.epub', caption: 'An EPUB, paginated like print.' },
  { command: 'vvrd guide.md', caption: 'Markdown with tables and code, theme-aware.' },
  { command: 'vvrd --page 12 paper.pdf', caption: 'Jump straight to page twelve.' },
]

const KEYS = [
  ['← / → · Space', 'Previous / next page'],
  ['↑ / ↓', 'Scroll, turning at page boundaries'],
  ['g', 'Go to page'],
  ['/ · n / N', 'Search; next / previous match'],
  ['t · M · f', 'Table of contents, metadata, links'],
  ['e', 'Export the current page as PNG'],
  ['R / F5', 'Reread and repaginate'],
]

const FORMATS = [
  ['Fixed layout', 'PDF · EPUB (MuPDF)'],
  ['Markup', 'Markdown (GFM) · Mermaid'],
  ['Office', 'PPTX · DOCX · ODP · ODT — via LibreOffice'],
]

export default function VvrdPage() {
  return (
    <div>
      <PageHero
        backTo={{ to: '/', label: 'The Vivido suite' }}
        eyebrow="vvrd · document reader"
        title={<>Every document, <span className="text-gradient">in your terminal.</span></>}
        lede={
          <>
            vvrd is a full-screen document reader for Vivido: PDF, EPUB, Markdown, Mermaid, and
            Office documents, paginated and rendered as pixels on the Vivid side channel — never as
            terminal escape sequences.
          </>
        }
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
          <SectionHeading eyebrow="Usage" title="One command per document." />
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
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
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <Reveal>
            <FeatureList heading="What it does" items={FEATURES} />
            <div className="mt-8">
              <CopyCommand command="cargo install vvrd" />
            </div>
            <p className="mt-4 text-xs leading-relaxed text-zinc-600">
              Office conversion additionally needs LibreOffice on your PATH (override with{' '}
              <code className="font-mono text-accent-300">VVRD_SOFFICE</code>). The signed Vivido
              Suite installer ships <code className="font-mono text-accent-300">vvrd.exe</code> on
              Windows.
            </p>
          </Reveal>

          <Reveal delay={80}>
            <h2 className="font-mono text-[11px] uppercase tracking-widest text-zinc-500">
              Keys
            </h2>
            <dl className="card mt-4 divide-y divide-zinc-800 px-5">
              {KEYS.map(([keys, action]) => (
                <div key={keys} className="flex flex-wrap items-center justify-between gap-3 py-3.5">
                  <dt className="text-sm text-zinc-300">{action}</dt>
                  <dd><kbd>{keys}</kbd></dd>
                </div>
              ))}
            </dl>

            <h2 className="mt-10 font-mono text-[11px] uppercase tracking-widest text-zinc-500">
              Formats
            </h2>
            <dl className="mt-4 space-y-3">
              {FORMATS.map(([label, list]) => (
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
