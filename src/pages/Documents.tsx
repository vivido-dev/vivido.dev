import { Link } from 'react-router-dom'
import DocLayout, { type DocSection } from '../components/DocLayout'
import { DocSectionBlock, RefTable } from '../components/DocBlock'
import CopyCommand from '../components/CopyCommand'
import CodeTabs from '../components/CodeTabs'

const SECTIONS: DocSection[] = [
  { id: 'quickstart', label: 'Quickstart' },
  { id: 'model', label: 'How Vivid works' },
  { id: 'automation', label: 'Automation' },
  { id: 'headless', label: 'Headless sessions' },
  { id: 'remote', label: 'Remote and nested' },
  { id: 'projects', label: 'The projects' },
  { id: 'spec', label: 'Protocol and SDK' },
]

const AUTOMATION_ROWS: [string, string][] = [
  ['vivido msg capabilities', 'Print what this endpoint answers, including methods claimed by an embedding host.'],
  ['vivido msg list-windows', 'Enumerate windows with their stable IDs. Discover IDs, never predict them.'],
  ['vivido msg inspect', 'Window geometry, cell metrics, terminal modes, and cursor state.'],
  ['vivido msg get-text', 'The visible viewport, or the newest N physical rows including scrollback.'],
  ['vivido msg get-grid', 'Every physical cell with width, kind, and a deduplicated style table, as JSON.'],
  ['vivido msg typing', 'Write literal UTF-8 bytes with no paste handling and no appended Enter.'],
  ['vivido msg key', 'One key with modifiers and a repeat count, encoded for the current terminal mode.'],
  ['vivido msg mouse', 'Move, click, drag, scroll, or walk a bounded path in cells or physical pixels.'],
  ['vivido msg wait text', 'Block until the visible grid matches a string or regex.'],
  ['vivido msg wait screen-stable', 'Block until no semantic screen change for a quiet period.'],
  ['vivido msg wait output', 'Match future PTY bytes, even across read boundaries.'],
  ['vivido msg screenshot', 'The last presented frame at physical resolution, as a PNG.'],
  ['vivido msg capture', 'Composite: activate, require a newer frame, wait for stability, then screenshot.'],
  ['vivido msg vivid tracks', 'Inspect Vivid surfaces, tracks, channel generations, and playback state.'],
]

const HEADLESS_ROWS: [string, string][] = [
  ['--headless', 'Run with no window and no compositor, serving IPC. Linux, macOS, and Windows.'],
  ['--session NAME', 'Name the session. Defaults to vivido-<pid>. 1–64 ASCII letters, digits, dot, dash, or underscore.'],
  ['--foreground', 'Do not detach; block until shutdown. The shape to use under a supervisor or container entrypoint.'],
  ['--headless-size SIZE', 'Initial geometry as COLUMNSxLINES, or WIDTHxHEIGHTpx to set the render surface directly.'],
]

const PROJECT_ROWS: [string, string][] = [
  ['vivid_protocol', 'The renderer-independent wire implementation: framing, bounded CBOR, messages, media bodies, anchors.'],
  ['vivid_sdk', 'The full-duplex SDK. The crate root is the producer; the presenter role sits behind a feature flag.'],
  ['vivid_gateway', 'The re-origination core, for gateways that terminate a session and originate a new one.'],
  ['vivido', 'The terminal emulator and reference presenter, plus vvssh.'],
  ['vivi', 'The command-line media producer.'],
  ['vvmux', 'The detachable multiplexer, with a virtual presenter per pane.'],
  ['vivida', 'The workspace shell that embeds Vivido panes.'],
]

const QUICKSTART_SAMPLE = `# 1. Install the terminal (this also installs vvssh).
cargo install vivido

# 2. Open it, then check the Vivid endpoint exists in the new shell.
test -n "$VIVID_ENDPOINT_CONTROL" && echo "Vivid is available"

# 3. Put something on screen.
cargo install vivi
vivi photo.png`

const REMOTE_SAMPLE = `# Media over SSH. Run this from a shell inside Vivido.
vvssh user@host

# Then, on the remote host:
vivi screenshot.png     # appears on your local screen

# Optional: a second, lifecycle-bound transport for bulk media,
# so media backpressure cannot slow the control connection.
vvssh --separate-media-transport user@host`

const NESTED_SAMPLE = `# Nested: media passes through the multiplexer's virtual presenter.
vvmux new -s build
vivi clip.mkv           # renders in the outer Vivido window

# Detach. The server keeps the pane, the PTY, and the track alive.
vvmux detach
vvmux attach build      # media is rehydrated`

export default function Documents() {
  return (
    <DocLayout
      eyebrow="Documentation"
      title="Everything you need to get media into a terminal."
      lede="A practical tour of the stack: install it, understand why the PTY stays clean, drive it from an agent, and run it with no window at all. Deeper references live beside the code."
      sections={SECTIONS}
    >
      <DocSectionBlock id="quickstart" title="Quickstart">
        <p>
          Vivido is one Cargo package that installs both the terminal and{' '}
          <code>vvssh</code>. Vivi is a separate package, because you do not need a media
          producer to use a terminal.
        </p>
        <CodeTabs samples={[{ label: 'Shell', filename: 'quickstart.sh', code: QUICKSTART_SAMPLE }]} />
        <p>
          Vivido exports <code>VIVID_ENDPOINT_CONTROL</code> and a per-window root secret into every
          shell it starts. A producer discovers the endpoint from the environment — there is nothing
          to configure and no port to pick.
        </p>
        <p>
          On macOS and Windows, prefer the signed installer from the{' '}
          <a href="https://github.com/vivido-dev/vivido/releases/latest">releases page</a>: on Windows
          it installs the whole suite and puts it on your <code>PATH</code>.
        </p>
      </DocSectionBlock>

      <DocSectionBlock id="model" title="How Vivid works">
        <p>
          A <strong>producer</strong> submits media. A <strong>presenter</strong> validates, places,
          renders, and plays it. Vivido is the reference presenter; Vivi, vvcam, vvrd, vvland, and
          your own code are producers.
        </p>
        <h3>Two lanes, not one</h3>
        <p>
          Ordinary terminal I/O stays on the PTY. Images, encoded video, and audio ride authenticated
          side channels. Media bytes never travel through the PTY — only a bounded, authenticated
          anchor marker does, which is how the presenter knows where in the text a surface belongs.
        </p>
        <h3>Surfaces and tracks</h3>
        <ul>
          <li>A <strong>session</strong> performs profile negotiation and authentication.</li>
          <li>A <strong>surface</strong> is stable semantic, scene, policy, and input identity.</li>
          <li>A <strong>track</strong> is one immutable video, audio, raster, or encoded-image configuration owned by a surface.</li>
          <li>A <strong>track channel</strong> is one authenticated channel generation with cumulative byte and record maxima, and an ordered end-of-stream.</li>
        </ul>
        <p>
          Changing a codec or resolution does not recreate a surface. You prime a replacement track,
          atomically activate its slot, then destroy the old one — so a quality change never makes
          the surface flicker or lose its place in the text.
        </p>
        <h3>Backpressure is scoped</h3>
        <p>
          Flow control is per track. A saturated or malformed video source cannot block control
          traffic, input revocation, audio, rendering, or an unrelated track. This is the property
          that makes inline video safe in a terminal you also need to type in.
        </p>
      </DocSectionBlock>

      <DocSectionBlock id="automation" title="Automation">
        <p>
          <code>vivido msg</code> is a deterministic IPC surface over an owner-only Unix socket on
          Linux and macOS, or an owner-only named pipe on Windows. It exists so that agents and CI can
          wait on facts rather than sleep and hope.
        </p>
        <p>
          Each window carries monotonic <code>screen_sequence</code>, <code>frame_sequence</code>, and{' '}
          <code>output_offset</code> counters; the process carries a monotonic{' '}
          <code>event_sequence</code>. Waits are expressed against those, so a test can say
          &ldquo;after this screen&rdquo; instead of &ldquo;after 500 milliseconds&rdquo;.
        </p>
        <RefTable head={['Command', 'What it does']} rows={AUTOMATION_ROWS} />
        <p>
          Waits default to a 30-second timeout and accept <code>ms</code>, <code>s</code>,{' '}
          <code>m</code>, and <code>h</code> suffixes. Disconnecting cancels pending waits, tagged
          input, and subscriptions immediately.
        </p>
        <p>
          <Link to="/tutorials#agent">The tutorials</Link> walk through a complete agent loop.
        </p>
      </DocSectionBlock>

      <DocSectionBlock id="headless" title="Headless sessions">
        <p>
          <code>vivido --headless</code> runs the complete runtime — terminal core, input encoders,
          Vivid presenter, and the Vello/wgpu renderer — with no window and no compositor. Everything
          observable in a windowed instance is observable here, including real rendered screenshots.
        </p>
        <div className="my-6">
          <CopyCommand command='eval "$(vivido --headless --session build)"' />
        </div>
        <p>
          The parent prints shell-evaluable <code>VIVIDO_SOCKET</code> and{' '}
          <code>VIVIDO_SESSION</code> exports and does not exit until the daemon reports that it is
          actually serving — so a zero exit status means the session is usable. A headless session
          outlives its windows and stops only on <code>vivido msg quit</code>,{' '}
          <code>vivido kill-session</code>, or a signal.
        </p>
        <RefTable head={['Option', 'Meaning']} rows={HEADLESS_ROWS} />
      </DocSectionBlock>

      <DocSectionBlock id="remote" title="Remote and nested">
        <p>
          Plain <code>ssh</code> is not enough: the remote shell cannot reach your local endpoint, and
          OpenSSH does not copy the discovery variables across. Vivi will tell you so rather than fail
          obscurely.
        </p>
        <p>
          <code>vvssh</code> is the wrapper that fixes it. On a POSIX server it creates remote
          Unix-socket listeners; on a Windows server it reverse-forwards loopback TCP instead.
          Non-loopback TCP endpoints are rejected. The root secret moves over a protected stdin setup
          connection into an owner-only temporary file that the login shell reads and deletes — it
          never appears in an SSH or remote-shell argument.
        </p>
        <CodeTabs
          samples={[
            { label: 'Remote', filename: 'remote.sh', code: REMOTE_SAMPLE },
            { label: 'Nested', filename: 'nested.sh', code: NESTED_SAMPLE },
          ]}
        />
        <p>
          A POSIX server needs <code>AllowStreamLocalForwarding</code>; a Windows server needs{' '}
          <code>AllowTcpForwarding</code>. The remote host needs <code>vivi</code> installed, but no
          display server and no audio device.
        </p>
      </DocSectionBlock>

      <DocSectionBlock id="projects" title="The projects">
        <p>
          The repository is a set of related Cargo projects rather than one workspace. Run Cargo
          commands from the project you are working on; <code>vivido</code> and <code>vvmux</code>{' '}
          define their own workspaces.
        </p>
        <RefTable head={['Project', 'Role']} rows={PROJECT_ROWS} />
      </DocSectionBlock>

      <DocSectionBlock id="spec" title="Protocol and SDK">
        <p>
          Vivid Protocol 1.5 is a published, normative contract, not a private trick. Registry
          assignments are append-only. Unknown canonical negotiation entries survive a relay
          byte-for-byte; recognised-but-unsupported entries are rejected rather than silently
          discarded.
        </p>
        <ul>
          <li>
            <a href="https://github.com/vivido-dev/vivid_protocol/blob/dev/vivid-protocol-1.5-spec.md">
              The Vivid Protocol 1.5 specification
            </a>{' '}
            — the normative multipart entry point.
          </li>
          <li>
            <a href="https://github.com/vivido-dev/vivid_sdk">vivid_sdk</a> — the
            full-duplex Rust and Python SDK for both roles.
          </li>
          <li>
            <a href="https://github.com/vivido-dev/vivid_protocol">vivid_protocol</a>{' '}
            — framing, deterministic bounded CBOR, typed control messages, and authenticated anchors.
          </li>
        </ul>
        <p>
          The 1.0 and 1.1 documents in the repository are historical or migration references. Treat
          1.5 as the only current implementation contract.
        </p>
      </DocSectionBlock>
    </DocLayout>
  )
}
