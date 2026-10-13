import { useMemo } from 'react'
import DocLayout from '../components/DocLayout'
import { DocSectionBlock } from '../components/DocBlock'
import CopyCommand from '../components/CopyCommand'
import CodeTabs from '../components/CodeTabs'
import { comment, useT, type Messages } from '../i18n/context'
import Rich from '../i18n/Rich'

type Copy = Messages['tutorials']

const agentSample = (notes: Copy['agent']['sample']) => `${comment('# ', notes.find)}
WINDOW=$(vivido msg list-windows --json | jq -r '.windows[0].window_id')

${comment('# ', notes.type)}
vivido msg typing --window-id "$WINDOW" 'cargo test --workspace'
vivido msg key Enter --window-id "$WINDOW"

${comment('# ', notes.wait)}
vivido msg wait text 'test result:' --window-id "$WINDOW" --timeout 10m

${comment('# ', notes.settle)}
vivido msg wait screen-stable --quiet 400 --window-id "$WINDOW"
vivido msg get-text --rows 40 --window-id "$WINDOW"

${comment('# ', notes.evidence)}
vivido msg screenshot --window-id "$WINDOW" --json`

const ciSample = (notes: Copy['ci']['sample']) => `#!/usr/bin/env bash
set -euo pipefail

${comment('# ', notes.session)}
eval "$(vivido --headless --session ci --headless-size 1280x720px)"
trap 'vivido msg quit || true' EXIT

vivido msg create-window --command ./integration-test.sh
vivido msg wait text 'SUITE PASSED' --timeout 15m

${comment('# ', notes.frame)}
vivido msg screenshot --json > artifact.json`

const producerSample = (notes: Copy['producer']['sample']) => `use vivid_sdk::PaneSession;

fn main() -> std::io::Result<()> {
${comment('    // ', notes.rust)}
    let mut pane = PaneSession::from_env()?;

    for frame in ["step-1.png", "step-2.png", "step-3.png"] {
        pane.show_encoded_image(&std::fs::read(frame)?)?;
        std::thread::sleep(std::time::Duration::from_secs(1));
    }
    Ok(())
}`

const producerPySample = (notes: Copy['producer']['sample']) => `import time
import vivid_sdk

${comment('# ', notes.python)}
with vivid_sdk.PaneSession.from_env() as pane:
    for frame in ("step-1.png", "step-2.png", "step-3.png"):
        with open(frame, "rb") as handle:
            pane.show_encoded_image(handle.read())
        time.sleep(1)`

export default function Tutorials() {
  const t = useT().tutorials
  const titles = t.sections
  const sections = useMemo(
    () => [
      { id: 'first-image', label: titles.firstImage },
      { id: 'video', label: titles.video },
      { id: 'vvssh', label: titles.vvssh },
      { id: 'vvmux', label: titles.vvmux },
      { id: 'agent', label: titles.agent },
      { id: 'ci', label: titles.ci },
      { id: 'producer', label: titles.producer },
    ],
    [titles],
  )

  return (
    <DocLayout eyebrow={t.eyebrow} title={t.title} lede={t.lede} sections={sections}>
      <DocSectionBlock id="first-image" title={titles.firstImage}>
        <p>{t.firstImage.run}</p>
        <div className="my-6 space-y-3">
          <CopyCommand command="cargo install vivi" />
          <CopyCommand command="vivi photo.jpg" />
        </div>
        <p><Rich text={t.firstImage.formats} /></p>
        <p><Rich text={t.firstImage.noEndpoint} /></p>
      </DocSectionBlock>

      <DocSectionBlock id="video" title={titles.video}>
        <div className="my-6 space-y-3">
          <CopyCommand command="vivi clip.mkv" />
          <CopyCommand command="vivi song.flac" />
        </div>
        <p>{t.video.clock}</p>
        <p>{t.video.canonical}</p>
      </DocSectionBlock>

      <DocSectionBlock id="vvssh" title={titles.vvssh}>
        <p><Rich text={t.vvssh.start} /></p>
        <div className="my-6 space-y-3">
          <CopyCommand command="vvssh user@host" />
          <CopyCommand command="vivi /var/log/render/frame-0042.png" prompt="remote $" />
        </div>
        <p>{t.vvssh.arrives}</p>
        <h3>{t.vvssh.heavyTitle}</h3>
        <p><Rich text={t.vvssh.heavy} /></p>
        <h3>{t.vvssh.prerequisitesTitle}</h3>
        <ul>
          {t.vvssh.prerequisites.map((item) => (
            <li key={item}><Rich text={item} /></li>
          ))}
        </ul>
      </DocSectionBlock>

      <DocSectionBlock id="vvmux" title={titles.vvmux}>
        <p>{t.vvmux.start}</p>
        <div className="my-6 space-y-3">
          <CopyCommand command="vvmux new -s build" />
          <CopyCommand command="vvmux detach" />
          <CopyCommand command="vvmux attach build" />
        </div>
        <p><Rich text={t.vvmux.keys} /></p>
        <p>{t.vvmux.token}</p>
      </DocSectionBlock>

      <DocSectionBlock id="agent" title={titles.agent}>
        <p><Rich text={t.agent.facts} /></p>
        <CodeTabs samples={[{ label: 'Shell', filename: 'agent.sh', code: agentSample(t.agent.sample) }]} />
        <p><Rich text={t.agent.habits} /></p>
        <p><Rich text={t.agent.report} /></p>
      </DocSectionBlock>

      <DocSectionBlock id="ci" title={titles.ci}>
        <p>{t.ci.headless}</p>
        <CodeTabs samples={[{ label: 'Shell', filename: '.ci/terminal-test.sh', code: ciSample(t.ci.sample) }]} />
        <p><Rich text={t.ci.size} /></p>
      </DocSectionBlock>

      <DocSectionBlock id="producer" title={titles.producer}>
        <p><Rich text={t.producer.entry} /></p>
        <CodeTabs
          samples={[
            { label: 'Rust', filename: 'src/main.rs', code: producerSample(t.producer.sample) },
            { label: 'Python', filename: 'slideshow.py', code: producerPySample(t.producer.sample) },
          ]}
        />
        <p><Rich text={t.producer.deeper} /></p>
      </DocSectionBlock>
    </DocLayout>
  )
}
