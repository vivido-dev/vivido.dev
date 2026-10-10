import { useMemo } from 'react'
import DocLayout from '../components/DocLayout'
import { DocSectionBlock, RefTable } from '../components/DocBlock'
import CodeTabs from '../components/CodeTabs'
import { comment, useT, type Messages } from '../i18n/context'
import Rich from '../i18n/Rich'

type Notes = Messages['config']['sample']

const PATHS_SAMPLE = `Linux / BSD   ~/.config/vivido/vivido.toml
macOS         ~/.config/vivido/vivido.toml
Windows       %USERPROFILE%\\.config\\vivido\\vivido.toml`

const starterSample = (notes: Notes) => `${comment('# ', notes.starter)}

[window]
padding = { x = 10, y = 8 }
opacity = 0.96
decorations = "Buttonless"

[font]
size = 13.0

[font.normal]
family = "JetBrains Mono"

[scrolling]
history = 50000

[cursor.style]
shape = "Beam"
blinking = "On"

[terminal]
osc52 = "copypaste"`

const keyboardSample = (notes: Notes) => `${comment('# ', notes.bindings)}

[[keyboard.bindings]]
key = "N"
mods = "Control|Shift"
action = "SpawnNewInstance"

${comment('# ', notes.neutralise)}
[[keyboard.bindings]]
key = "V"
mods = "Control|Shift"
action = "ReceiveChar"`

const hintsSample = (notes: Notes) => `[hints]
${comment('# ', notes.alphabet)}
alphabet = "jfkdls;ahgurieowpq"

${comment('# ', notes.defaultHint)}
[[hints.enabled]]
hyperlinks = true
post_processing = true
persist = false
mouse = { enabled = true, mods = "None" }
binding = { key = "O", mods = "Control|Shift" }
command = "xdg-open"        # ${notes.macOpen}

${comment('# ', notes.copyWord)}
[[hints.enabled]]
regex = "[^ ]+\\\\.rs"
post_processing = true
action = "Copy"
binding = { key = "R", mods = "Control|Shift" }`

export default function ConfigGuide() {
  const t = useT().config
  // Everything but the first entry is a TOML table name, which is not translated.
  const sections = useMemo(
    () => [
      { id: 'where', label: t.where },
      { id: 'general', label: 'general' },
      { id: 'window', label: 'window' },
      { id: 'font', label: 'font' },
      { id: 'colors', label: 'colors' },
      { id: 'scrolling', label: 'scrolling & cursor' },
      { id: 'terminal', label: 'terminal' },
      { id: 'keyboard', label: 'keyboard & hints' },
      { id: 'debug', label: 'debug' },
    ],
    [t.where],
  )

  return (
    <DocLayout eyebrow={t.eyebrow} title={t.title} lede={t.lede} sections={sections}>
      <DocSectionBlock id="where" title={t.where}>
        <CodeTabs samples={[{ label: t.tabs.paths, code: PATHS_SAMPLE }]} />
        <p><Rich text={t.environment} /></p>
        <h3>{t.starterTitle}</h3>
        <CodeTabs samples={[{ label: 'TOML', filename: 'vivido.toml', code: starterSample(t.sample) }]} />
      </DocSectionBlock>

      <DocSectionBlock id="general" title={t.titles.general}>
        <RefTable head={t.head} rows={Object.entries(t.general)} />
        <p><Rich text={t.env} /></p>
      </DocSectionBlock>

      <DocSectionBlock id="window" title="[window]">
        <RefTable head={t.head} rows={Object.entries(t.window)} />
        <p><Rich text={t.windowExtra} /></p>
      </DocSectionBlock>

      <DocSectionBlock id="font" title="[font]">
        <RefTable head={t.head} rows={Object.entries(t.font)} />
      </DocSectionBlock>

      <DocSectionBlock id="colors" title="[colors]">
        <p><Rich text={t.colors.scheme} /></p>
        <ul>
          {t.colors.options.map((item) => (
            <li key={item}><Rich text={item} /></li>
          ))}
        </ul>
      </DocSectionBlock>

      <DocSectionBlock id="scrolling" title={t.titles.scrolling}>
        <RefTable head={t.head} rows={Object.entries(t.cursor)} />
      </DocSectionBlock>

      <DocSectionBlock id="terminal" title="[terminal], [selection], [mouse], [bell]">
        <RefTable head={t.head} rows={Object.entries(t.terminal)} />
        <p><Rich text={t.mouseBindings} /></p>
      </DocSectionBlock>

      <DocSectionBlock id="keyboard" title={t.titles.keyboard}>
        <CodeTabs
          samples={[
            { label: t.tabs.keyboard, filename: 'vivido.toml', code: keyboardSample(t.sample) },
            { label: t.tabs.hints, filename: 'vivido.toml', code: hintsSample(t.sample) },
          ]}
        />
        <p><Rich text={t.actions} /></p>
        <p><Rich text={t.noVi} /></p>
      </DocSectionBlock>

      <DocSectionBlock id="debug" title="[debug]">
        <p>{t.debugIntro}</p>
        <RefTable head={t.head} rows={Object.entries(t.debug)} />
      </DocSectionBlock>
    </DocLayout>
  )
}
