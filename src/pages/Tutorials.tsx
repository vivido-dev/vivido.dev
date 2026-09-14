import DocLayout, { type DocSection } from '../components/DocLayout'
import { DocSectionBlock } from '../components/DocBlock'
import CopyCommand from '../components/CopyCommand'
import CodeTabs from '../components/CodeTabs'

const SECTIONS: DocSection[] = [
  { id: 'first-image', label: 'Your first image' },
  { id: 'video', label: 'Video and audio' },
  { id: 'vvssh', label: 'Media over SSH' },
  { id: 'vvmux', label: 'Sessions that detach' },
  { id: 'agent', label: 'Driving it from an agent' },
  { id: 'ci', label: 'Terminals in CI' },
  { id: 'producer', label: 'Your own producer' },
]

const AGENT_SAMPLE = `# Find the window. Never predict an ID — discover it.
WINDOW=$(vivido msg list-windows --json | jq -r '.windows[0].window_id')

# Type a command and press Enter as two explicit steps.
vivido msg typing --window-id "$WINDOW" 'cargo test --workspace'
vivido msg key Enter --window-id "$WINDOW"

# Wait on a fact, not a sleep.
vivido msg wait text 'test result:' --window-id "$WINDOW" --timeout 10m

# Let the screen settle, then look at it.
vivido msg wait screen-stable --quiet 400 --window-id "$WINDOW"
vivido msg get-text --rows 40 --window-id "$WINDOW"

# Keep the evidence.
vivido msg screenshot --window-id "$WINDOW" --json`

const CI_SAMPLE = `#!/usr/bin/env bash
set -euo pipefail

# One headless session for the whole job. --foreground ties the
# session's lifetime to this process, which is what CI wants.
eval "$(vivido --headless --session ci --headless-size 1280x720px)"
trap 'vivido msg quit || true' EXIT

vivido msg create-window --command ./integration-test.sh
vivido msg wait text 'SUITE PASSED' --timeout 15m

# A real rendered frame, including any inline media the test produced.
vivido msg screenshot --json > artifact.json`

const PRODUCER_SAMPLE = `use vivid_sdk::PaneSession;

fn main() -> std::io::Result<()> {
    // Reads VIVID_ENDPOINT_CONTROL and the root secret from the
    // environment Vivido exported into this shell.
    let mut pane = PaneSession::from_env()?;

    for frame in ["step-1.png", "step-2.png", "step-3.png"] {
        pane.show_encoded_image(&std::fs::read(frame)?)?;
        std::thread::sleep(std::time::Duration::from_secs(1));
    }
    Ok(())
}`

const PRODUCER_PY_SAMPLE = `import time
import vivid_sdk

# PaneSession owns at most one presentation; showing a new
# image clears the previous node and surface for you.
with vivid_sdk.PaneSession.from_env() as pane:
    for frame in ("step-1.png", "step-2.png", "step-3.png"):
        with open(frame, "rb") as handle:
            pane.show_encoded_image(handle.read())
        time.sleep(1)`

export default function Tutorials() {
  return (
    <DocLayout
      eyebrow="Tutorials"
      title="Seven things worth doing on your first day."
      lede="Each one is short, self-contained, and ends with something visibly working. Start at the top if Vivido is new to you."
      sections={SECTIONS}
    >
      <DocSectionBlock id="first-image" title="Your first image">
        <p>
          Open Vivido, then run Vivi against any image file. That is the whole tutorial — there is no
          setup step.
        </p>
        <div className="my-6 space-y-3">
          <CopyCommand command="cargo install vivi" />
          <CopyCommand command="vivi photo.jpg" />
        </div>
        <p>
          PNG and JPEG are submitted as their original bytes; other formats are converted to RGBA
          first. Scale the result with <code>-z</code>, and pass several files to step through them:{' '}
          <code>vivi -z 1.5 a.webp b.png</code>.
        </p>
        <p>
          If Vivi reports that <code>VIVID_ENDPOINT_CONTROL</code> is not set, you are not in a
          Vivido shell. That message is the intended behaviour, not a bug — use{' '}
          <code>--dry-run</code> to inspect a file without a presenter.
        </p>
      </DocSectionBlock>

      <DocSectionBlock id="video" title="Video and audio">
        <div className="my-6 space-y-3">
          <CopyCommand command="vivi clip.mkv" />
          <CopyCommand command="vivi song.flac" />
        </div>
        <p>
          Video and its audio track share a clock, so they start together after a short prebuffer
          rather than drifting. Scroll the video out of view and playback pauses; scroll back and it
          resumes — visibility is part of the protocol, not a heuristic.
        </p>
        <p>
          Opus, Vorbis, and FLAC use canonical, container-independent initialisation, which is why the
          same file behaves identically when played locally, over SSH, and nested inside vvmux.
        </p>
      </DocSectionBlock>

      <DocSectionBlock id="vvssh" title="Media over SSH">
        <p>
          Start from a shell <em>inside</em> Vivido, and use <code>vvssh</code> instead of{' '}
          <code>ssh</code>. Install <code>vivi</code> on the remote host; it needs no display server
          and no audio device.
        </p>
        <div className="my-6 space-y-3">
          <CopyCommand command="vvssh user@host" />
          <CopyCommand command="vivi /var/log/render/frame-0042.png" prompt="remote $" />
        </div>
        <p>
          The picture appears on your laptop. Nothing was copied, and no X forwarding was involved.
        </p>
        <h3>When media is heavy</h3>
        <p>
          Add <code>--separate-media-transport</code> to open a second, lifecycle-bound SSH transport
          for bulk media. Control traffic then keeps its own connection, so a large video cannot slow
          your keystrokes. The default remains a single private transport.
        </p>
        <h3>Prerequisites</h3>
        <ul>
          <li>A POSIX server needs <code>AllowStreamLocalForwarding</code> enabled.</li>
          <li>A Windows server needs <code>AllowTcpForwarding</code> enabled.</li>
          <li>Non-loopback TCP endpoints are rejected by design.</li>
        </ul>
      </DocSectionBlock>

      <DocSectionBlock id="vvmux" title="Sessions that detach">
        <p>
          Start a named session, do some work, then walk away. The server keeps your panes, PTYs,
          scrollback, and media tracks alive.
        </p>
        <div className="my-6 space-y-3">
          <CopyCommand command="vvmux new -s build" />
          <CopyCommand command="vvmux detach" />
          <CopyCommand command="vvmux attach build" />
        </div>
        <p>
          Split with <code>Ctrl+b %</code> and <code>Ctrl+b &quot;</code>, move focus with{' '}
          <code>Ctrl+b</code> and an arrow key, and zoom a pane with <code>Ctrl+b z</code>. On
          re-attach, media is rehydrated from stable snapshots rather than restarted.
        </p>
        <p>
          Detaching releases the outer window token, so the background daemon never holds authority
          over a window it cannot see. That is the one behaviour worth knowing before you leave a
          session running for a week.
        </p>
      </DocSectionBlock>

      <DocSectionBlock id="agent" title="Driving it from an agent">
        <p>
          The point of <code>vivido msg</code> is that an agent can wait on facts. Every step below
          either succeeds against a known state or fails loudly — nothing sleeps and hopes.
        </p>
        <CodeTabs samples={[{ label: 'Shell', filename: 'agent.sh', code: AGENT_SAMPLE }]} />
        <p>
          Two habits make this reliable. First, discover the window ID rather than assuming it:
          IDs are small and monotonic but opaque. Second, separate <code>typing</code> from{' '}
          <code>key Enter</code>, because <code>typing</code> deliberately does not append a newline.
        </p>
        <p>
          <code>typing</code>, <code>key</code>, and <code>paste</code> accept{' '}
          <code>--report</code>, which prints the resolved window, byte count, and write completion.
          It also states plainly that application <em>consumption</em> was not observed — writing to
          the PTY is not the same as the program having read it.
        </p>
      </DocSectionBlock>

      <DocSectionBlock id="ci" title="Terminals in CI">
        <p>
          Headless mode runs the full runtime with no window and no compositor, which makes a
          terminal a testable component. Screenshots are real rendered frames, not reconstructions.
        </p>
        <CodeTabs samples={[{ label: 'Shell', filename: '.ci/terminal-test.sh', code: CI_SAMPLE }]} />
        <p>
          Use <code>--headless-size 1280x720px</code> when you are driving screenshots: it sets the
          render surface directly instead of deriving pixels from font metrics.
        </p>
      </DocSectionBlock>

      <DocSectionBlock id="producer" title="Your own producer">
        <p>
          If your program can produce pixels, it can put them in a terminal.{' '}
          <code>PaneSession</code> is the smallest useful entry point: it owns at most one
          presentation and clears the previous one for you.
        </p>
        <CodeTabs
          samples={[
            { label: 'Rust', filename: 'src/main.rs', code: PRODUCER_SAMPLE },
            { label: 'Python', filename: 'slideshow.py', code: PRODUCER_PY_SAMPLE },
          ]}
        />
        <p>
          For video, audio, or anything long-lived, move down a level to sessions, surfaces, tracks,
          and track channels. The{' '}
          <a href="https://github.com/vivido-dev/vivid_sdk">SDK README</a> covers
          establishment retries, authenticated resume, and the flow-control contract, and the{' '}
          <a href="https://github.com/vivido-dev/vivid_protocol/blob/dev/vivid-protocol-1.5-spec.md">
            1.5 specification
          </a>{' '}
          is normative if you are implementing the wire format yourself.
        </p>
      </DocSectionBlock>
    </DocLayout>
  )
}
