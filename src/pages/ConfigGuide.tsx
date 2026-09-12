import DocLayout, { type DocSection } from '../components/DocLayout'
import { DocSectionBlock, RefTable } from '../components/DocBlock'
import CodeTabs from '../components/CodeTabs'

const SECTIONS: DocSection[] = [
  { id: 'where', label: 'Where it lives' },
  { id: 'general', label: 'general' },
  { id: 'window', label: 'window' },
  { id: 'font', label: 'font' },
  { id: 'colors', label: 'colors' },
  { id: 'scrolling', label: 'scrolling & cursor' },
  { id: 'terminal', label: 'terminal' },
  { id: 'keyboard', label: 'keyboard & hints' },
  { id: 'debug', label: 'debug' },
]

const GENERAL: [string, string][] = [
  ['import', 'Additional config files merged in, absolute or file-relative. Later entries override earlier ones. Nests up to 5 levels. Default [].'],
  ['working_directory', 'Directory the shell starts in. Unset inherits Vivido’s working directory.'],
  ['live_config_reload', 'Reapply the config automatically when the file changes. Default true.'],
  ['ipc_socket', 'Offer the vivido msg endpoint. Default true; --socket and --headless turn it on regardless.'],
]

const WINDOW: [string, string][] = [
  ['padding', 'Blank space around the grid in pixels, scaled by DPI. Default { x = 0, y = 0 }.'],
  ['dynamic_padding', 'Distribute leftover space evenly as extra padding. Default false.'],
  ['decorations', 'Full, None, Transparent, or Buttonless. Default Full.'],
  ['opacity', 'Background opacity from 0.0 to 1.0. Needs a compositor that honours it. Default 1.0.'],
  ['blur', 'Request background blur. macOS and KDE Wayland. Default false.'],
  ['startup_mode', 'Windowed, Maximized, Fullscreen, or SimpleFullscreen. Default Windowed.'],
  ['title / dynamic_title', 'Initial window title, and whether applications may change it. Defaults "Vivido" and true.'],
  ['resize_increments', 'Snap resizes to whole cells. Default false.'],
  ['level', 'Normal or AlwaysOnTop. Default Normal.'],
  ['option_as_alt', 'macOS only: OnlyLeft, OnlyRight, Both, or None. Default None.'],
  ['dimensions', 'Initial size in cells. Both columns and lines must be non-zero to take effect.'],
  ['class', 'Wayland app_id and window class. Defaults general and instance to "Vivido".'],
]

const FONT: [string, string][] = [
  ['size', 'Font size in points. Default 11.25.'],
  ['ligatures', 'Shape neighbouring cells using ligatures supplied by the font. Default true.'],
  ['offset', 'Extra spacing added around each cell. Default { x = 0, y = 0 }.'],
  ['glyph_offset', 'Shift the glyph within its cell. Default { x = 0, y = 0 }.'],
  ['normal.family', 'Base face. Defaults to monospace on Linux, Menlo on macOS, Consolas on Windows.'],
  ['bold / italic / bold_italic', 'Secondary faces. They fall back to font.normal.family when family is omitted.'],
]

const CURSOR: [string, string][] = [
  ['scrolling.history', 'Scrollback lines retained, up to 100000. Default 10000.'],
  ['scrolling.multiplier', 'Lines scrolled per wheel step. Default 3.'],
  ['cursor.style.shape', 'Block, Underline, or Beam. Default Block.'],
  ['cursor.style.blinking', 'Never, Off, On, or Always. Default Off.'],
  ['cursor.unfocused_hollow', 'Draw a hollow cursor when the window loses focus. Default true.'],
  ['cursor.thickness', 'Beam or underline thickness relative to the cell, 0.0 to 1.0. Default 0.15.'],
  ['cursor.blink_interval', 'Milliseconds between blinks, floored at 10. Default 750.'],
  ['cursor.blink_timeout', 'Stop blinking after this many idle seconds. 0 blinks forever. Default 5.'],
]

const TERMINAL: [string, string][] = [
  ['terminal.osc52', 'Clipboard access via OSC 52: disabled, onlycopy, onlypaste, or copypaste. Default onlycopy.'],
  ['terminal.osc_notifications', 'Allow desktop notifications through OSC 9 and OSC 99. Default true.'],
  ['terminal.shell', 'Shell to launch instead of the login shell, as { program, args }.'],
  ['selection.save_to_clipboard', 'Copy selections to the system clipboard automatically. Default false.'],
  ['mouse.hide_when_typing', 'Hide the pointer while typing. Default false.'],
  ['file_drop.paste_remote_path', 'After a remote vvreceive copies a dropped file over vvssh, type its committed remote path. Default true.'],
  ['message_bar.warning_timeout', 'Seconds before warnings dismiss themselves. 0 keeps them visible; errors always need dismissal. Default 5.'],
  ['bell.duration / animation / color', 'Visual bell. Duration 0 disables it. Default animation Linear, colour #ffffff.'],
]

const DEBUG: [string, string][] = [
  ['log_level', 'Off, Error, Warn, Info, Debug, or Trace. Default Warn.'],
  ['print_events', 'Log window and input events. Default false.'],
  ['persistent_logging', 'Keep the log file after exit. Default false.'],
  ['render_timer', 'Overlay per-frame render time. Default false.'],
  ['highlight_damage', 'Tint redrawn regions. Default false.'],
]

const PATHS_SAMPLE = `Linux / BSD   ~/.config/vivido/vivido.toml
macOS         ~/.config/vivido/vivido.toml
Windows       %USERPROFILE%\\.config\\vivido\\vivido.toml`

const STARTER_SAMPLE = `# Only what you want to change. Missing keys keep their defaults.

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

const KEYBOARD_SAMPLE = `# Bindings are merged over the defaults.
#   key  : "a", a named key ("F5", "Home", "Enter"), or a scancode
#   mods : |-joined Control, Shift, Alt/Option, Super/Command, or "None"
#   mode : AppCursor | AppKeypad | Alt | Search; prefix ~ to require it OFF
#   then exactly one of: action, chars, or command

[[keyboard.bindings]]
key = "N"
mods = "Control|Shift"
action = "SpawnNewInstance"

# Neutralise a default binding by handing the character back to the app.
[[keyboard.bindings]]
key = "V"
mods = "Control|Shift"
action = "ReceiveChar"`

const HINTS_SAMPLE = `[hints]
# Label keys. At least two width-1 characters.
alphabet = "jfkdls;ahgurieowpq"

# The default hint: open URLs and OSC 8 hyperlinks with the system opener.
[[hints.enabled]]
hyperlinks = true
post_processing = true
persist = false
mouse = { enabled = true, mods = "None" }
binding = { key = "O", mods = "Control|Shift" }
command = "xdg-open"        # "open" on macOS

# Copy any word ending in .rs with Control+Shift+R.
[[hints.enabled]]
regex = "[^ ]+\\\\.rs"
post_processing = true
action = "Copy"
binding = { key = "R", mods = "Control|Shift" }`

export default function ConfigGuide() {
  return (
    <DocLayout
      eyebrow="Configuration"
      title="vivido.toml, section by section."
      lede="Every value has a built-in default, so a config file only needs the things you want to change. Live reload is on by default — save the file and the window updates."
      sections={SECTIONS}
    >
      <DocSectionBlock id="where" title="Where it lives">
        <CodeTabs samples={[{ label: 'Paths', code: PATHS_SAMPLE }]} />
        <p>
          The Vivid media path is configured through the environment, not this file. A complete
          annotated example, with every default spelled out, ships in the repository as{' '}
          <a href="https://github.com/vivido-dev/vivido/blob/dev/docs/vivido.toml">
            vivido/docs/vivido.toml
          </a>
          .
        </p>
        <h3>A reasonable starting point</h3>
        <CodeTabs samples={[{ label: 'TOML', filename: 'vivido.toml', code: STARTER_SAMPLE }]} />
      </DocSectionBlock>

      <DocSectionBlock id="general" title="[general] and [env]">
        <RefTable head={['Key', 'Meaning']} rows={GENERAL} />
        <p>
          <code>[env]</code> holds environment variables exported to spawned processes, for example{' '}
          <code>TERM = "vivido"</code>.
        </p>
      </DocSectionBlock>

      <DocSectionBlock id="window" title="[window]">
        <RefTable head={['Key', 'Meaning']} rows={WINDOW} />
        <p>
          <code>decorations_theme_variant</code> forces a server-side decoration theme of{' '}
          <code>"Light"</code> or <code>"Dark"</code>; unset follows the system.{' '}
          <code>position</code> sets a startup position in physical pixels; unset lets the window
          manager decide.
        </p>
      </DocSectionBlock>

      <DocSectionBlock id="font" title="[font]">
        <RefTable head={['Key', 'Meaning']} rows={FONT} />
      </DocSectionBlock>

      <DocSectionBlock id="colors" title="[colors]">
        <p>
          The default scheme is base16-style. <code>[colors.primary]</code> sets{' '}
          <code>foreground</code> and <code>background</code>;{' '}
          <code>[colors.normal]</code> and <code>[colors.bright]</code> set the sixteen ANSI
          colours, and <code>dim</code> is derived from <code>normal</code> when omitted.
        </p>
        <ul>
          <li>
            <code>transparent_background_colors</code> applies <code>window.opacity</code> to cells
            with an explicit background colour too. Default false.
          </li>
          <li>
            <code>draw_bold_text_with_bright_colors</code> renders bold text from the bright palette.
            Default false.
          </li>
          <li>
            <code>[colors.cursor]</code> and <code>[colors.selection]</code> also accept the special
            values <code>"CellForeground"</code> and <code>"CellBackground"</code>.
          </li>
          <li>
            <code>[colors.search.matches]</code>, <code>[colors.search.focused_match]</code>,{' '}
            <code>[colors.hints.start]</code>, <code>[colors.hints.end]</code>, and{' '}
            <code>[colors.footer_bar]</code> style the overlays.
          </li>
          <li>
            <code>[[colors.indexed_colors]]</code> extends the 256-colour palette; the index must be
            between 16 and 255.
          </li>
        </ul>
      </DocSectionBlock>

      <DocSectionBlock id="scrolling" title="[scrolling] and [cursor]">
        <RefTable head={['Key', 'Meaning']} rows={CURSOR} />
      </DocSectionBlock>

      <DocSectionBlock id="terminal" title="[terminal], [selection], [mouse], [bell]">
        <RefTable head={['Key', 'Meaning']} rows={TERMINAL} />
        <p>
          Custom mouse bindings under <code>[[mouse.bindings]]</code> are merged over the defaults,
          so <code>{'{ mouse = "Middle", action = "PasteSelection" }'}</code> adds middle-click paste
          without redefining anything else.
        </p>
      </DocSectionBlock>

      <DocSectionBlock id="keyboard" title="[keyboard] and [hints]">
        <CodeTabs
          samples={[
            { label: 'Keyboard', filename: 'vivido.toml', code: KEYBOARD_SAMPLE },
            { label: 'Hints', filename: 'vivido.toml', code: HINTS_SAMPLE },
          ]}
        />
        <p>
          Actions include <code>Copy</code>, <code>Paste</code>, <code>CopySelection</code>,{' '}
          <code>PasteSelection</code>, <code>ClearSelection</code>, the font-size actions, the{' '}
          <code>Scroll*</code> family, <code>SearchForward</code>, <code>SearchBackward</code>,{' '}
          <code>ToggleFullscreen</code>, <code>ToggleMaximized</code>,{' '}
          <code>SpawnNewInstance</code>, <code>CreateNewWindow</code>, <code>CreateNewTab</code>,{' '}
          <code>SelectNextTab</code>, <code>SelectPreviousTab</code>,{' '}
          <code>SelectTab1</code>–<code>SelectTab9</code>, <code>SelectLastTab</code>,{' '}
          <code>ClearHistory</code>, <code>Quit</code>, <code>Hide</code>, <code>Minimize</code>,{' '}
          <code>ReceiveChar</code>, and <code>None</code>.
        </p>
        <p>
          Vivido has no vi-mode actions. That is deliberate, not missing — see the{' '}
          <a href="/vivido">Vivido page</a> for the full list of intentional differences.
        </p>
      </DocSectionBlock>

      <DocSectionBlock id="debug" title="[debug]">
        <p>Diagnostics. Most people never touch these.</p>
        <RefTable head={['Key', 'Meaning']} rows={DEBUG} />
      </DocSectionBlock>
    </DocLayout>
  )
}
