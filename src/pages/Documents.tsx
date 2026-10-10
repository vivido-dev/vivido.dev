import { useMemo } from 'react'
import DocLayout from '../components/DocLayout'
import { DocSectionBlock, RefTable } from '../components/DocBlock'
import CopyCommand from '../components/CopyCommand'
import CodeTabs from '../components/CodeTabs'
import { comment, useT, type Messages } from '../i18n/context'
import Rich from '../i18n/Rich'

type Copy = Messages['docs']

const SECTION_IDS = ['quickstart', 'model', 'automation', 'headless', 'remote', 'projects', 'spec'] as const

const quickstartSample = (notes: Copy['quickstart']['sample']) => `${comment('# ', notes.install)}
cargo install vivido

${comment('# ', notes.check)}
test -n "$VIVID_ENDPOINT_CONTROL" && echo "Vivid is available"

${comment('# ', notes.show)}
cargo install vivi
vivi photo.png`

const remoteSample = (notes: Copy['remote']['sample']) => `${comment('# ', notes.remote)}
vvssh user@host

${comment('# ', notes.onHost)}
vivi screenshot.png     # ${notes.appears}

${comment('# ', notes.separate)}
vvssh --separate-media-transport user@host`

const nestedSample = (notes: Copy['remote']['sample']) => `${comment('# ', notes.nested)}
vvmux new -s build
vivi clip.mkv           # ${notes.renders}

${comment('# ', notes.detach)}
vvmux detach
vvmux attach build      # ${notes.rehydrated}`

export default function Documents() {
  const t = useT().docs
  const titles = t.sections
  const sections = useMemo(() => SECTION_IDS.map((id) => ({ id, label: titles[id] })), [titles])

  return (
    <DocLayout eyebrow={t.eyebrow} title={t.title} lede={t.lede} sections={sections}>
      <DocSectionBlock id="quickstart" title={titles.quickstart}>
        <p><Rich text={t.quickstart.packages} /></p>
        <CodeTabs
          samples={[{ label: 'Shell', filename: 'quickstart.sh', code: quickstartSample(t.quickstart.sample) }]}
        />
        <p><Rich text={t.quickstart.discovery} /></p>
        <p><Rich text={t.quickstart.installer} /></p>
      </DocSectionBlock>

      <DocSectionBlock id="model" title={titles.model}>
        <p><Rich text={t.model.roles} /></p>
        <h3>{t.model.lanesTitle}</h3>
        <p>{t.model.lanes}</p>
        <h3>{t.model.surfacesTitle}</h3>
        <ul>
          {t.model.surfaces.map((item) => (
            <li key={item}><Rich text={item} /></li>
          ))}
        </ul>
        <p>{t.model.replace}</p>
        <h3>{t.model.backpressureTitle}</h3>
        <p>{t.model.backpressure}</p>
      </DocSectionBlock>

      <DocSectionBlock id="automation" title={titles.automation}>
        <p><Rich text={t.automation.surface} /></p>
        <p><Rich text={t.automation.counters} /></p>
        <RefTable head={t.automation.head} rows={Object.entries(t.automation.rows)} />
        <p><Rich text={t.automation.waits} /></p>
        <p><Rich text={t.automation.tutorials} /></p>
      </DocSectionBlock>

      <DocSectionBlock id="headless" title={titles.headless}>
        <p><Rich text={t.headless.runtime} /></p>
        <div className="my-6">
          <CopyCommand command='eval "$(vivido --headless --session build)"' />
        </div>
        <p><Rich text={t.headless.lifetime} /></p>
        <RefTable head={t.headless.head} rows={Object.entries(t.headless.rows)} />
      </DocSectionBlock>

      <DocSectionBlock id="remote" title={titles.remote}>
        <p><Rich text={t.remote.plainSsh} /></p>
        <p><Rich text={t.remote.vvssh} /></p>
        <CodeTabs
          samples={[
            { label: t.remote.tabs.remote, filename: 'remote.sh', code: remoteSample(t.remote.sample) },
            { label: t.remote.tabs.nested, filename: 'nested.sh', code: nestedSample(t.remote.sample) },
          ]}
        />
        <p><Rich text={t.remote.requirements} /></p>
      </DocSectionBlock>

      <DocSectionBlock id="projects" title={titles.projects}>
        <p><Rich text={t.projects.layout} /></p>
        <RefTable head={t.projects.head} rows={Object.entries(t.projects.rows)} />
      </DocSectionBlock>

      <DocSectionBlock id="spec" title={titles.spec}>
        <p>{t.spec.contract}</p>
        <ul>
          {t.spec.links.map((item) => (
            <li key={item}><Rich text={item} /></li>
          ))}
        </ul>
        <p>{t.spec.history}</p>
      </DocSectionBlock>
    </DocLayout>
  )
}
