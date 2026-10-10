/**
 * English copy, and the shape every other locale must match.
 *
 * Strings rendered through <Rich> may use a small inline markup: `code`,
 * **strong**, *emphasis*, ==gradient==, [label](target), and a newline for a
 * line break. Tables keyed by a command, key, or option are rendered in the
 * order written here, so keep that order in every locale.
 */
const en = {
  nav: {
    products: 'Products',
    learn: 'Learn',
    docs: 'Docs',
    tutorials: 'Tutorials',
    config: 'Config',
    protocol: 'Protocol',
    plugins: 'Plugins',
    install: 'Install',
    blurbs: {
      vivido: 'The GPU terminal emulator',
      vivida: 'Workspaces for you and your agents',
      vvmux: 'Detachable, media-aware multiplexer',
      vivi: 'Play media from the command line',
      vvrd: 'Read PDFs and documents in the terminal',
      plugins: 'The vvmux marketplace',
    },
    github: 'Vivido on GitHub',
    x: 'Vivido on X',
    toggle: 'Toggle navigation',
    language: 'Language',
  },

  footer: {
    tagline:
      'A terminal suite built on Vivid Protocol 1.5. Images, video, and audio on authenticated side channels — the PTY stays a PTY.',
    project: 'Project',
    vvmuxPlugins: 'vvmux plugins',
    documentation: 'Documentation',
    configuration: 'Configuration',
    spec: 'Vivid 1.5 specification',
    sdk: 'Vivid SDK (Rust, Python, TS)',
    crate: 'vivido on crates.io',
    releases: 'Releases',
    issues: 'Issues',
    licence: 'Apache-2.0 licence',
    free: 'Free and open source under Apache-2.0.',
  },

  common: {
    suiteBack: 'The Vivido suite',
    viewOnGithub: 'View on GitHub',
    copied: 'Copied',
    copyCommand: 'Copy "{command}" to the clipboard',
    chooseLanguage: 'Choose a language',
    onThisPage: 'On this page',
    firstSteps: 'First steps',
    usage: 'Usage',
    whatItDoes: 'What it does',
    video: 'Video',
    audio: 'Audio',
    images: 'Images',
  },

  meta: {
    fallbackTitle: 'Vivido',
    '/': {
      title: 'Vivido — The GPU terminal that plays video',
      description:
        'A fast, cross-platform GPU terminal emulator where images, video, and audio render inline. Vivid Protocol 1.5 keeps media on authenticated side channels, so your PTY stays ordinary terminal I/O.',
    },
    '/vivido': {
      title: 'Vivido — GPU terminal emulator with inline video and audio',
      description:
        'Vello and wgpu on Metal, DirectX 12, and Vulkan. Inline images, H.264/HEVC/VP9/AV1 video, seven audio codecs, exact-PTS playback, vvssh media forwarding, and deterministic automation over vivido msg.',
    },
    '/vivida': {
      title: 'Vivida — A terminal workspace for you and your agents',
      description:
        'Give every project a workspace, every task a pane, and your agents the tools to see and act alongside you. Native Vivido panes in workspaces, tabs, and splits.',
    },
    '/vvmux': {
      title: 'vvmux — The detachable, media-aware terminal multiplexer',
      description:
        'tmux-shaped sessions for Vivido. A per-pane virtual Vivid presenter keeps media alive across detach and re-attach, and the daemon never sees your window token.',
    },
    '/vvmux/plugins': {
      title: 'vvmux plugins — Marketplace',
      description:
        'Manifest-driven agent providers, integrations, panes, and workflows for vvmux. Permissions are shown before installation.',
    },
    '/vivi': {
      title: 'Vivi — Play images, video, and audio from your terminal',
      description:
        'The Vivid Protocol 1.5 command-line producer. vivi photo.png, vivi clip.mkv, vivi song.mp3 — locally, through vvmux, or over vvssh.',
    },
    '/vvrd': {
      title: 'vvrd — Read PDF, EPUB, and Office documents in your terminal',
      description:
        'A full-screen document reader for Vivido. PDF and EPUB via MuPDF, paginated Markdown and Mermaid, and LibreOffice-converted PPTX/DOCX/ODP/ODT — rendered on the Vivid 1.5 side channel.',
    },
    '/docs': {
      title: 'Documentation — Vivido and the Vivid stack',
      description:
        'Quickstart, the clean-PTY architecture, the vivido msg automation surface, headless sessions, and the Vivid Protocol 1.5 specification.',
    },
    '/config': {
      title: 'Configuration — vivido.toml reference',
      description:
        'Every vivido.toml section with its built-in defaults: window, font, colors, scrolling, cursor, terminal, hints, keyboard, and debug.',
    },
    '/tutorials': {
      title: 'Tutorials — Vivido, vvssh, vvmux, and agent automation',
      description:
        'Walk through your first inline image, media over SSH with vvssh, detachable media sessions in vvmux, and driving a terminal from an agent.',
    },
  },

  platform: {
    downloadMac: 'Download for macOS',
    macInstaller: '.pkg installer',
    downloadWindows: 'Download for Windows',
    windowsInstaller: '.exe installer',
    windowsLink: 'Windows installer',
    choose: 'Choose your platform',
    selected: '(selected)',
    macos: {
      headline: 'Signed package',
      note: 'Renders with Metal. The package is Developer ID signed and notarised.',
      download: 'Download the .pkg',
    },
    windows: {
      headline: 'Signed suite installer',
      note: 'One installer puts Vivido, Vivida, vvmux, vivi, vvrd, and vvssh on your PATH. Renders with DirectX 12.',
      download: 'Download the .exe',
    },
    linux: {
      headline: 'Build from crates.io',
      note: 'Wayland-only by design, rendering with Vulkan. Needs Rust 1.95+ and your distribution’s FFmpeg and audio development packages.',
    },
    readFirst: 'Prefer to read first? The [install guide](installGuide) lists per-platform build dependencies.',
  },

  suite: {
    status: { stable: 'Stable', new: 'New', preview: 'Preview' },
    groups: {
      terminal: { label: 'Terminals', blurb: 'Where you work, and what arranges it.' },
      producer: { label: 'Producers', blurb: 'Things that put pictures and sound on the screen.' },
      remote: { label: 'Remote and transport', blurb: 'The same experience on a machine that is not yours.' },
    },
    tools: {
      vivido: 'The GPU terminal emulator and reference Vivid presenter. Metal, DirectX 12, Vulkan.',
      vivida: 'Workspaces, tabs, and splits of native Vivido panes — a home for your projects and agents.',
      vvmux: 'Detachable multiplexer. Media survives detach and re-attach, from another machine.',
      vvbox: 'A terminal shell you can talk to. Panes in tabs and splits, driven by a chat panel.',
      vivi: 'Play an image, a video, or a track from the command line. The fastest way to see Vivid work.',
      vvrd: 'Read PDF, EPUB, Markdown, Mermaid, and Office documents full-screen, in the terminal.',
      vvpaint: 'Paint and annotate over an image without leaving the terminal. Keyboard-first.',
      vvcam: 'Stream a connected camera into the terminal, encoded as H.264. Works over SSH too.',
      vvland: 'Run one isolated Wayland app or a whole Weston, Sway, or Hyprland desktop in a pane.',
      vvdoom: 'Doom, with graphics and sound on the same media stack. Because the question comes up.',
      vvssh: 'SSH that carries your media. Remote images and video appear on your local screen.',
      vrowser: 'A deliberately small CEF browser that renders into the terminal. No tabs, no address bar.',
    },
  },

  diagram: {
    label:
      'A producer sends ordinary text to Vivido on the PTY lane while images, video, and audio travel a separate authenticated Vivid side channel, so a stalled media lane cannot block terminal I/O.',
    producer: 'Producer',
    ownCode: 'your own code',
    presenter: 'presenter',
    pty: 'ordinary terminal I/O — text, keys, resize',
    vivid: 'authenticated side channel — images, video, audio',
    flow: 'Per-track flow control: a slow or malformed source cannot stall input, rendering, audio, or another track.',
    caption: 'Media bytes never travel through the PTY. Only a bounded, authenticated anchor marker does.',
  },

  home: {
    heroTitle: 'The GPU terminal\n==that plays video.==',
    heroLede:
      'Vivido is a fast, cross-platform terminal emulator where images, video, and audio render right inside the window. Media rides authenticated side channels, so your PTY stays ordinary terminal I/O — locally, over SSH, or through a multiplexer.',
    otherInstall: 'Other installation options',
    heroAlt: 'Vivida window showing Vivido panes playing media inline',
    watch: 'Watch it in action on YouTube',
    proof: {
      eyebrow: 'Prove it in sixty seconds',
      title: 'Three commands. No configuration.',
      lede: 'Install Vivido, open it, and run one of these. There is no setup step, no escape-sequence probing, and nothing to enable.',
      captions: {
        'vivi photo.jpg': 'An image, inline, at full resolution.',
        'vivi clip.mkv': 'H.264 video with linked audio, playing in the grid.',
        'vvssh user@host': 'Then run vivi there. The picture arrives here.',
      },
    },
    pty: {
      eyebrow: 'The technical wedge',
      title: 'Your PTY stays clean.',
      lede: 'Every other terminal that shows a picture does it by pushing the picture through the PTY as an escape sequence. Vivid does not. Terminal text goes where terminal text has always gone, and media gets its own authenticated, flow-controlled lane.',
    },
    caps: {
      eyebrow: 'What you get',
      title: 'Built for people who do more than read text.',
      lede: 'Fast where a terminal has to be fast, and capable where terminals have never been.',
      media: {
        title: 'Media that is actually media',
        body: 'Not a mosaic of coloured cells. Real decoders, exact-PTS playback, and a linked audio/video clock, with per-track flow control so one stalled stream stays its own problem.',
      },
      gpu: {
        title: 'GPU-rendered, everywhere',
        body: "Vello and wgpu draw every frame on a platform-native backend, inheriting the Alacritty terminal core's throughput.",
      },
      ssh: {
        title: 'Media over SSH',
        body: '`vvssh` forwards your Vivid endpoint into the remote shell. Run `vivi` on the server; the picture appears on your laptop. No X forwarding, no copying files.',
        note: 'The root secret moves over a protected stdin channel into an owner-only file. It never appears in an SSH or remote-shell argument.',
      },
      automation: {
        title: 'Automation an agent can trust',
        body: '`vivido msg` is a deterministic IPC surface, not a screen-scraper. Agents and CI wait on facts — a monotonic screen sequence, a settled screen, a presented frame — instead of sleeping and hoping.',
        commands: {
          'wait text': 'block until the grid contains it',
          'wait screen-stable': 'block until output settles',
          'get-grid': 'every cell, style, and hyperlink as JSON',
          screenshot: 'the real presented frame, as a PNG',
        },
      },
      headless: {
        title: 'Headless named sessions',
        body: 'The complete runtime — terminal core, Vivid presenter, and the Vello renderer — with no window and no compositor. Everything observable in a window is observable here, including real rendered screenshots. Linux, macOS, and Windows.',
      },
      wayland: {
        title: 'Wayland-only, on purpose',
        body: 'No X11, no Xlib, no GLX. Vivido also skips vi mode and vi-style cursor actions, and keeps mouse selection to a single drag. Fewer surfaces, clearer behaviour.',
        note: 'These are documented, deliberate differences rather than gaps — they are listed on the Vivido page.',
      },
    },
    suite: {
      eyebrow: 'One protocol, a whole suite',
      title: 'Everything speaks Vivid 1.5.',
      lede: 'Each of these is a separate program doing one job well. They interoperate because they share a wire format, not a codebase — which is also why you can write your own.',
    },
    vivida: {
      eyebrow: 'Meet Vivida',
      title: 'Your projects. Your agents.\nOne window.',
      body: 'Give every project a workspace, every task a pane, and your agents the tools to see and act alongside you. Vivida arranges native Vivido panes into workspaces, tabs, and splits — so an agent can read a pane, run a command, and screenshot the result in the same window you are looking at.',
      explore: 'Explore Vivida',
      detach: 'Or detach with vvmux',
    },
    own: {
      eyebrow: 'Write your own',
      title: 'Vivid is a spec, not a private trick.',
      lede: 'The protocol is published and versioned, with a full-duplex SDK for both roles in Rust and Python. If you can produce pixels or audio, you can put them in a terminal.',
      points: [
        [
          'A normative specification',
          'Framing, bounded CBOR, typed control messages, media validation, and authenticated text anchors — all written down.',
        ],
        ['Both roles in one SDK', 'Be a producer, or terminate a session and be a presenter yourself.'],
        [
          'Honest negotiation',
          'Coherent named profiles. Unknown registry entries survive a relay byte-for-byte; recognised-but-unsupported entries are rejected rather than silently dropped.',
        ],
      ],
      readSpec: 'Read the 1.5 specification',
    },
    samples: {
      rust: 'Discovers VIVID_ENDPOINT_CONTROL and authenticates with the\nroot secret Vivido exported into this shell.',
      python: 'Connects using the inherited Vivid discovery environment.',
      shell: 'A full Vivido runtime with no window, driven over IPC.',
    },
    install: {
      eyebrow: 'Get started',
      title: 'Install the suite.',
      lede: 'Vivido ships with vvssh. On Windows and macOS the signed installer brings Vivida, vvmux, vivi, and vvrd along with it.',
      body: 'Everything is free and Apache-2.0 licensed. If you would rather build from source, the repository is a set of Cargo projects — each one builds on its own.',
      browse: 'Browse the source',
    },
    closing: {
      title: 'The terminal has been text-only\n==for fifty years.==',
      body: 'See it. Hear it. Without leaving your shell.',
      fast: 'What makes it fast',
    },
  },

  vivido: {
    eyebrow: 'Vivido · GPU terminal emulator',
    title: 'A terminal that renders ==pictures and sound.==',
    lede: 'Vivido is a fast, cross-platform GPU terminal emulator and the reference Vivid Protocol 1.5 presenter. It authenticates producers, decodes and renders images and video, plays linked audio, and manages scene placement and visibility — while the PTY stays ordinary terminal I/O.',
    configReference: 'Configuration reference',
    features: [
      'GPU rendering through Vello and wgpu — Metal on macOS, DirectX 12 on Windows, Vulkan on Linux',
      'Vivid Protocol 1.5: inline images, H.264/HEVC/VP9/AV1 video, and seven audio codecs',
      'Exact-PTS playback with a linked audio/video clock and buffered startup',
      'Authenticated media anchors with replay-resistant markers',
      'vvssh for secure remote Vivid forwarding, with an optional separate media transport',
      'Deterministic automation over vivido msg, plus headless named sessions',
      'Source-scoped backpressure — a slow media source never blocks terminal I/O',
    ],
    deliberateHeading: 'Deliberate differences',
    deliberate: [
      'Linux is Wayland-only. No X11, no Xlib, no GLX.',
      'No vi mode, vi search, or vi cursor actions.',
      'Simplified mouse selection — drag only.',
      'Media bytes never travel through the PTY. Only a bounded, authenticated anchor marker does.',
    ],
    deliberateNote:
      'These are choices, not gaps. Each one removes a class of compatibility surface that Vivido would otherwise have to carry forever.',
    speed: {
      eyebrow: 'Why it stays fast',
      title: 'Speed is not a feature you add later.',
      lede: 'Three separate decisions keep a media-capable terminal as responsive as a text-only one.',
      points: [
        ['Terminal core', 'The Alacritty lineage, so throughput and correctness start from a known-good base.'],
        ['Renderer', 'Vello computes vector and glyph work on the GPU; wgpu targets whatever backend the platform gives it.'],
        ['Isolation', 'Media decode and playback are per-track. Saturation is contained to the track that caused it.'],
      ],
    },
    install: {
      eyebrow: 'Install',
      title: 'One crate installs the terminal and vvssh.',
      lede: "Needs Rust 1.95 or newer, plus your platform's FFmpeg and audio development packages. Signed installers for macOS and Windows are on the releases page.",
      installers: 'Signed installers',
    },
    next: {
      title: 'Where to go next',
      config: { label: 'vivido.toml reference', blurb: 'Every section, with its built-in defaults.' },
      docs: { label: 'The automation surface', blurb: 'What vivido msg can observe and drive.' },
      vvmux: { label: 'vvmux', blurb: 'Detach a session and keep the media.' },
      vivi: { label: 'Vivi', blurb: 'The quickest way to put media on screen.' },
    },
  },

  vivida: {
    eyebrow: 'Vivida · terminal workspace',
    title: 'A shared home for you and ==your agents.==',
    lede: 'Bring projects, terminals, and AI agents into one window. Vivida combines workspaces, tabs, and split panes with everything Vivido can render — and the automation an agent needs to work in the same panes you are looking at, not a hidden sandbox.',
    explore: 'Explore the workspace',
    place: {
      eyebrow: 'Less window juggling, more making',
      title: 'Everything in its place.',
      features: [
        [
          'A place for every project',
          'Group your work into named workspaces. Move between projects from the sidebar, with tabs and splits keeping each task close at hand.',
        ],
        [
          'More than a wall of text',
          'Built on Vivido, your panes can show images, play video, and render audio alongside terminal output. Keep the preview next to the work.',
        ],
        [
          'Agents with eyes and hands',
          'Built-in automation lets agents inspect panes, take screenshots, type, press keys, and use the mouse to check the results of their work.',
        ],
        [
          'Room to find your flow',
          'Open tabs, split panes, and arrange your workspace from the keyboard. GPU rendering keeps everything smooth and readable.',
        ],
      ],
    },
    agents: {
      eyebrow: 'See. Act. Verify.',
      title: 'Work alongside your agents.',
      body: 'Agents can locate the right pane, inspect output, arrange tabs and splits, and take a screenshot to verify their work. You share the same workspace and follow along as it happens — which also means you can take over mid-task.',
      guide: 'Read the automation guide',
    },
    keys: {
      eyebrow: 'Stay at the keyboard',
      title: 'Make room in a keystroke.',
      lede: 'Mod is Cmd on macOS and Ctrl everywhere else. The gear in the tab bar has the full list.',
      meetVivido: 'Meet Vivido, the terminal inside',
      shortcuts: {
        'Mod T': 'New tab',
        'Mod D': 'Split left and right',
        'Mod Shift D': 'Split top and bottom',
        'Mod Shift N': 'New workspace',
        'Mod Shift B': 'Cycle sidebar size',
        'Mod 1–9': 'Switch workspace',
      },
    },
  },

  vvmux: {
    eyebrow: 'vvmux · detachable multiplexer',
    title: 'Detach the session.\n==Keep the media.==',
    lede: 'vvmux is tmux-shaped and Vivid-aware. Its background server owns panes, PTYs, layout, and scrollback; the foreground client bridges only currently visible media into the attached Vivido window. Detaching never hands the daemon your window token.',
    browsePlugins: 'Browse plugins',
    features: [
      'Detachable named sessions backed by a persistent server',
      'Tabs, tiled and floating panes, zoom, copy mode, and mouse resize',
      'A virtual Vivid presenter per pane — media survives detach and re-attach',
      'Fragment-aware pane media occlusion and stable snapshot reconciliation',
      'Scriptable pane automation through vvmux msg',
      'A plugin system with an agent navigator that reports idle, working, or blocked',
    ],
    keysHeading: 'Default keys',
    keysNote: 'The prefix is Ctrl+b, as you would expect.',
    keys: {
      'Ctrl+b %': 'Split left and right',
      'Ctrl+b "': 'Split top and bottom',
      'Ctrl+b ←→↑↓': 'Move focus between panes',
      'Ctrl+b z': 'Toggle zoom on the focused pane',
      'Ctrl+b d': 'Detach, leaving everything running',
      'Ctrl+b c / n / p': 'New tab, next tab, previous tab',
      'Ctrl+b [': 'Copy mode',
    },
    security: {
      eyebrow: 'The security shape',
      title: 'A daemon that outlives your window should not hold its keys.',
      lede: 'This is the part that makes a media-aware multiplexer different from a text one, and it is worth understanding before you trust it with a long-running session.',
      points: [
        ['The server owns state', 'Panes, PTYs, layout, and scrollback live in a background process that survives detach.'],
        ['The client owns authority', 'Only the attached foreground client holds the outer Vivido window token. Detaching releases it.'],
        ['The bridge is narrow', 'Visible media is relayed through source-scoped writers, reconciled from stable snapshots.'],
      ],
    },
  },

  plugins: {
    eyebrow: 'Marketplace',
    title: 'vvmux plugins',
    lede: "Discover manifest-driven agent providers, integrations, panes, and workflows. vvmux shows each package's permissions before installation and does not run marketplace code.",
    search: 'Search plugins',
    filter: 'Filter plugin type',
    allTypes: 'All types',
    empty: 'No plugins match that filter.',
    publish:
      'Publish a public GitHub repository with a root `vvmux-plugin.toml` and the `vvmux-plugin` topic to be considered for the index.',
    firstParty: 'First-party',
    permissions: 'Permissions:',
    none: 'none',
    copy: 'Copy',
    viewSource: 'View source',
  },

  vivi: {
    eyebrow: 'Vivi · Vivid 1.5 producer',
    title: 'The shortest path from a file to ==your terminal.==',
    lede: 'Vivi inspects images and any FFmpeg-supported media, then submits it to a Vivid presenter. It handles full-duplex control, flow control, prebuffering, visibility, and keyframe recovery, so all you type is a filename.',
    usageTitle: 'Four ways you will actually use it.',
    usage: {
      'vivi photo.png': 'One image, placed inline in the grid.',
      'vivi clip.mkv': 'Video with its audio track, clocked together.',
      'vivi song.mp3': 'Audio only — no window, no player.',
      'vivi -z 1.5 photo.webp clip.mp4': 'A playlist, scaled to 150%.',
    },
    featuresHeading: 'What it handles',
    features: [
      'Any image: PNG and JPEG ride as original bytes, everything else converts to RGBA',
      'Video: H.264 and HEVC Annex B, VP9, and AV1, with a linked audio clock',
      'Audio: MP3, AAC, ALAC, Opus, Vorbis, FLAC, PCM, and WAV',
      'Canonical Opus, Vorbis, and FLAC initialisation — no container ambiguity',
      'Works directly in Vivido, inside a vvmux pane, or remotely over vvssh',
      'Flow control, visibility pause and resume, prebuffering, and keyframe recovery',
    ],
    formatsHeading: 'Supported formats',
    buildNote: 'Vivi needs FFmpeg development libraries at build time. On macOS that is `brew install ffmpeg pkg-config`.',
  },

  vvrd: {
    eyebrow: 'vvrd · document reader',
    title: 'Every document, ==in your terminal.==',
    lede: 'vvrd is a full-screen document reader for Vivido: PDF, EPUB, Markdown, Mermaid, and Office documents, paginated and rendered as pixels on the Vivid side channel — never as terminal escape sequences.',
    usageTitle: 'One command per document.',
    usage: {
      'vvrd paper.pdf': 'A PDF, full-screen in the terminal.',
      'vvrd book.epub': 'An EPUB, paginated like print.',
      'vvrd guide.md': 'Markdown with tables and code, theme-aware.',
      'vvrd --page 12 paper.pdf': 'Jump straight to page twelve.',
    },
    features: [
      'PDF and EPUB through MuPDF — search, table of contents, links, zoom and pan, rotation, and PNG export',
      'Markdown rendered by a built-in paginator: GFM tables, task lists, code, and local or data-URI images',
      'Mermaid diagrams fenced in Markdown, or on their own, centred on the page',
      'PPTX, DOCX, ODP, and ODT converted to PDF by headless LibreOffice, cached per content hash',
      'Reading position saved per document in the platform cache',
      'The same binary locally or in a remote shell over vvssh',
    ],
    officeNote:
      'Office conversion additionally needs LibreOffice on your PATH (override with `VVRD_SOFFICE`). The signed Vivido Suite installer ships `vvrd.exe` on Windows.',
    keysHeading: 'Keys',
    keys: {
      '← / → · Space': 'Previous / next page',
      '↑ / ↓': 'Scroll, turning at page boundaries',
      g: 'Go to page',
      '/ · n / N': 'Search; next / previous match',
      't · M · f': 'Table of contents, metadata, links',
      e: 'Export the current page as PNG',
      'R / F5': 'Reread and repaginate',
    },
    formatsHeading: 'Formats',
    formats: [
      ['Fixed layout', 'PDF · EPUB (MuPDF)'],
      ['Markup', 'Markdown (GFM) · Mermaid'],
      ['Office', 'PPTX · DOCX · ODP · ODT — via LibreOffice'],
    ],
  },

  notFound: {
    title: 'Page not found',
    body: 'That route does not exist. It may have moved, or it may never have been here.',
    home: 'Back to the home page',
    docs: 'Read the docs',
  },

  docs: {
    eyebrow: 'Documentation',
    title: 'Everything you need to get media into a terminal.',
    lede: 'A practical tour of the stack: install it, understand why the PTY stays clean, drive it from an agent, and run it with no window at all. Deeper references live beside the code.',
    sections: {
      quickstart: 'Quickstart',
      model: 'How Vivid works',
      automation: 'Automation',
      headless: 'Headless sessions',
      remote: 'Remote and nested',
      projects: 'The projects',
      spec: 'Protocol and SDK',
    },
    quickstart: {
      packages:
        'Vivido is one Cargo package that installs both the terminal and `vvssh`. Vivi is a separate package, because you do not need a media producer to use a terminal.',
      discovery:
        'Vivido exports `VIVID_ENDPOINT_CONTROL` and a per-window root secret into every shell it starts. A producer discovers the endpoint from the environment — there is nothing to configure and no port to pick.',
      installer:
        'On macOS and Windows, prefer the signed installer from the [releases page](releases): on Windows it installs the whole suite and puts it on your `PATH`.',
      sample: {
        install: '1. Install the terminal (this also installs vvssh).',
        check: '2. Open it, then check the Vivid endpoint exists in the new shell.',
        show: '3. Put something on screen.',
      },
    },
    model: {
      roles:
        'A **producer** submits media. A **presenter** validates, places, renders, and plays it. Vivido is the reference presenter; Vivi, vvcam, vvrd, vvland, and your own code are producers.',
      lanesTitle: 'Two lanes, not one',
      lanes:
        'Ordinary terminal I/O stays on the PTY. Images, encoded video, and audio ride authenticated side channels. Media bytes never travel through the PTY — only a bounded, authenticated anchor marker does, which is how the presenter knows where in the text a surface belongs.',
      surfacesTitle: 'Surfaces and tracks',
      surfaces: [
        'A **session** performs profile negotiation and authentication.',
        'A **surface** is stable semantic, scene, policy, and input identity.',
        'A **track** is one immutable video, audio, raster, or encoded-image configuration owned by a surface.',
        'A **track channel** is one authenticated channel generation with cumulative byte and record maxima, and an ordered end-of-stream.',
      ],
      replace:
        'Changing a codec or resolution does not recreate a surface. You prime a replacement track, atomically activate its slot, then destroy the old one — so a quality change never makes the surface flicker or lose its place in the text.',
      backpressureTitle: 'Backpressure is scoped',
      backpressure:
        'Flow control is per track. A saturated or malformed video source cannot block control traffic, input revocation, audio, rendering, or an unrelated track. This is the property that makes inline video safe in a terminal you also need to type in.',
    },
    automation: {
      surface:
        '`vivido msg` is a deterministic IPC surface over an owner-only Unix socket on Linux and macOS, or an owner-only named pipe on Windows. It exists so that agents and CI can wait on facts rather than sleep and hope.',
      counters:
        'Each window carries monotonic `screen_sequence`, `frame_sequence`, and `output_offset` counters; the process carries a monotonic `event_sequence`. Waits are expressed against those, so a test can say “after this screen” instead of “after 500 milliseconds”.',
      head: ['Command', 'What it does'],
      rows: {
        'vivido msg capabilities': 'Print what this endpoint answers, including methods claimed by an embedding host.',
        'vivido msg list-windows': 'Enumerate windows with their stable IDs. Discover IDs, never predict them.',
        'vivido msg inspect': 'Window geometry, cell metrics, terminal modes, and cursor state.',
        'vivido msg get-text': 'The visible viewport, or the newest N physical rows including scrollback.',
        'vivido msg get-grid': 'Every physical cell with width, kind, and a deduplicated style table, as JSON.',
        'vivido msg typing': 'Write literal UTF-8 bytes with no paste handling and no appended Enter.',
        'vivido msg key': 'One key with modifiers and a repeat count, encoded for the current terminal mode.',
        'vivido msg mouse': 'Move, click, drag, scroll, or walk a bounded path in cells or physical pixels.',
        'vivido msg wait text': 'Block until the visible grid matches a string or regex.',
        'vivido msg wait screen-stable': 'Block until no semantic screen change for a quiet period.',
        'vivido msg wait output': 'Match future PTY bytes, even across read boundaries.',
        'vivido msg screenshot': 'The last presented frame at physical resolution, as a PNG.',
        'vivido msg capture': 'Composite: activate, require a newer frame, wait for stability, then screenshot.',
        'vivido msg vivid tracks': 'Inspect Vivid surfaces, tracks, channel generations, and playback state.',
      },
      waits:
        'Waits default to a 30-second timeout and accept `ms`, `s`, `m`, and `h` suffixes. Disconnecting cancels pending waits, tagged input, and subscriptions immediately.',
      tutorials: '[The tutorials](/tutorials#agent) walk through a complete agent loop.',
    },
    headless: {
      runtime:
        '`vivido --headless` runs the complete runtime — terminal core, input encoders, Vivid presenter, and the Vello/wgpu renderer — with no window and no compositor. Everything observable in a windowed instance is observable here, including real rendered screenshots.',
      lifetime:
        'The parent prints shell-evaluable `VIVIDO_SOCKET` and `VIVIDO_SESSION` exports and does not exit until the daemon reports that it is actually serving — so a zero exit status means the session is usable. A headless session outlives its windows and stops only on `vivido msg quit`, `vivido kill-session`, or a signal.',
      head: ['Option', 'Meaning'],
      rows: {
        '--headless': 'Run with no window and no compositor, serving IPC. Linux, macOS, and Windows.',
        '--session NAME': 'Name the session. Defaults to vivido-<pid>. 1–64 ASCII letters, digits, dot, dash, or underscore.',
        '--foreground': 'Do not detach; block until shutdown. The shape to use under a supervisor or container entrypoint.',
        '--headless-size SIZE': 'Initial geometry as COLUMNSxLINES, or WIDTHxHEIGHTpx to set the render surface directly.',
      },
    },
    remote: {
      plainSsh:
        'Plain `ssh` is not enough: the remote shell cannot reach your local endpoint, and OpenSSH does not copy the discovery variables across. Vivi will tell you so rather than fail obscurely.',
      vvssh:
        '`vvssh` is the wrapper that fixes it. On a POSIX server it creates remote Unix-socket listeners; on a Windows server it reverse-forwards loopback TCP instead. Non-loopback TCP endpoints are rejected. The root secret moves over a protected stdin setup connection into an owner-only temporary file that the login shell reads and deletes — it never appears in an SSH or remote-shell argument.',
      requirements:
        'A POSIX server needs `AllowStreamLocalForwarding`; a Windows server needs `AllowTcpForwarding`. The remote host needs `vivi` installed, but no display server and no audio device.',
      tabs: { remote: 'Remote', nested: 'Nested' },
      sample: {
        remote: 'Media over SSH. Run this from a shell inside Vivido.',
        onHost: 'Then, on the remote host:',
        appears: 'appears on your local screen',
        separate:
          'Optional: a second, lifecycle-bound transport for bulk media,\nso media backpressure cannot slow the control connection.',
        nested: "Nested: media passes through the multiplexer's virtual presenter.",
        renders: 'renders in the outer Vivido window',
        detach: 'Detach. The server keeps the pane, the PTY, and the track alive.',
        rehydrated: 'media is rehydrated',
      },
    },
    projects: {
      layout:
        'The repository is a set of related Cargo projects rather than one workspace. Run Cargo commands from the project you are working on; `vivido` and `vvmux` define their own workspaces.',
      head: ['Project', 'Role'],
      rows: {
        vivid_protocol: 'The renderer-independent wire implementation: framing, bounded CBOR, messages, media bodies, anchors.',
        vivid_sdk: 'The full-duplex SDK. The crate root is the producer; the presenter role sits behind a feature flag.',
        vivid_gateway: 'The re-origination core, for gateways that terminate a session and originate a new one.',
        vivido: 'The terminal emulator and reference presenter, plus vvssh.',
        vivi: 'The command-line media producer.',
        vvmux: 'The detachable multiplexer, with a virtual presenter per pane.',
        vivida: 'The workspace shell that embeds Vivido panes.',
      },
    },
    spec: {
      contract:
        'Vivid Protocol 1.5 is a published, normative contract, not a private trick. Registry assignments are append-only. Unknown canonical negotiation entries survive a relay byte-for-byte; recognised-but-unsupported entries are rejected rather than silently discarded.',
      links: [
        '[The Vivid Protocol 1.5 specification](spec) — the normative multipart entry point.',
        '[vivid_sdk](sdk) — the full-duplex Rust and Python SDK for both roles.',
        '[vivid_protocol](protocol) — framing, deterministic bounded CBOR, typed control messages, and authenticated anchors.',
      ],
      history:
        'The 1.0 and 1.1 documents in the repository are historical or migration references. Treat 1.5 as the only current implementation contract.',
    },
  },

  config: {
    eyebrow: 'Configuration',
    title: 'vivido.toml, section by section.',
    lede: 'Every value has a built-in default, so a config file only needs the things you want to change. Live reload is on by default — save the file and the window updates.',
    where: 'Where it lives',
    titles: {
      general: '[general] and [env]',
      scrolling: '[scrolling] and [cursor]',
      keyboard: '[keyboard] and [hints]',
    },
    tabs: { paths: 'Paths', keyboard: 'Keyboard', hints: 'Hints' },
    head: ['Key', 'Meaning'],
    environment:
      'The Vivid media path is configured through the environment, not this file. A complete annotated example, with every default spelled out, ships in the repository as [vivido/docs/vivido.toml](vividoToml).',
    starterTitle: 'A reasonable starting point',
    general: {
      import: 'Additional config files merged in, absolute or file-relative. Later entries override earlier ones. Nests up to 5 levels. Default [].',
      working_directory: 'Directory the shell starts in. Unset inherits Vivido’s working directory.',
      live_config_reload: 'Reapply the config automatically when the file changes. Default true.',
      ipc_socket: 'Offer the vivido msg endpoint. Default true; --socket and --headless turn it on regardless.',
    },
    env: '`[env]` holds environment variables exported to spawned processes, for example `TERM = "vivido"`.',
    window: {
      padding: 'Blank space around the grid in pixels, scaled by DPI. Default { x = 0, y = 0 }.',
      dynamic_padding: 'Distribute leftover space evenly as extra padding. Default false.',
      decorations: 'Full, None, Transparent, or Buttonless. Default Full.',
      opacity: 'Background opacity from 0.0 to 1.0. Needs a compositor that honours it. Default 1.0.',
      blur: 'Request background blur. macOS and KDE Wayland. Default false.',
      startup_mode: 'Windowed, Maximized, Fullscreen, or SimpleFullscreen. Default Windowed.',
      'title / dynamic_title': 'Initial window title, and whether applications may change it. Defaults "Vivido" and true.',
      resize_increments: 'Snap resizes to whole cells. Default false.',
      level: 'Normal or AlwaysOnTop. Default Normal.',
      option_as_alt: 'macOS only: OnlyLeft, OnlyRight, Both, or None. Default None.',
      dimensions: 'Initial size in cells. Both columns and lines must be non-zero to take effect.',
      class: 'Wayland app_id and window class. Defaults general and instance to "Vivido".',
    },
    windowExtra:
      '`decorations_theme_variant` forces a server-side decoration theme of `"Light"` or `"Dark"`; unset follows the system. `position` sets a startup position in physical pixels; unset lets the window manager decide.',
    font: {
      size: 'Font size in points. Default 11.25.',
      ligatures: 'Shape neighbouring cells using ligatures supplied by the font. Default true.',
      offset: 'Extra spacing added around each cell. Default { x = 0, y = 0 }.',
      glyph_offset: 'Shift the glyph within its cell. Default { x = 0, y = 0 }.',
      'normal.family': 'Base face. Defaults to monospace on Linux, Menlo on macOS, Consolas on Windows.',
      'bold / italic / bold_italic': 'Secondary faces. They fall back to font.normal.family when family is omitted.',
    },
    colors: {
      scheme:
        'The default scheme is base16-style. `[colors.primary]` sets `foreground` and `background`; `[colors.normal]` and `[colors.bright]` set the sixteen ANSI colours, and `dim` is derived from `normal` when omitted.',
      options: [
        '`transparent_background_colors` applies `window.opacity` to cells with an explicit background colour too. Default false.',
        '`draw_bold_text_with_bright_colors` renders bold text from the bright palette. Default false.',
        '`[colors.cursor]` and `[colors.selection]` also accept the special values `"CellForeground"` and `"CellBackground"`.',
        '`[colors.search.matches]`, `[colors.search.focused_match]`, `[colors.hints.start]`, `[colors.hints.end]`, and `[colors.footer_bar]` style the overlays.',
        '`[[colors.indexed_colors]]` extends the 256-colour palette; the index must be between 16 and 255.',
      ],
    },
    cursor: {
      'scrolling.history': 'Scrollback lines retained, up to 100000. Default 10000.',
      'scrolling.multiplier': 'Lines scrolled per wheel step. Default 3.',
      'cursor.style.shape': 'Block, Underline, or Beam. Default Block.',
      'cursor.style.blinking': 'Never, Off, On, or Always. Default Off.',
      'cursor.unfocused_hollow': 'Draw a hollow cursor when the window loses focus. Default true.',
      'cursor.thickness': 'Beam or underline thickness relative to the cell, 0.0 to 1.0. Default 0.15.',
      'cursor.blink_interval': 'Milliseconds between blinks, floored at 10. Default 750.',
      'cursor.blink_timeout': 'Stop blinking after this many idle seconds. 0 blinks forever. Default 5.',
    },
    terminal: {
      'terminal.osc52': 'Clipboard access via OSC 52: disabled, onlycopy, onlypaste, or copypaste. Default onlycopy.',
      'terminal.osc_notifications': 'Allow desktop notifications through OSC 9 and OSC 99. Default true.',
      'terminal.shell': 'Shell to launch instead of the login shell, as { program, args }.',
      'selection.save_to_clipboard': 'Copy selections to the system clipboard automatically. Default false.',
      'mouse.hide_when_typing': 'Hide the pointer while typing. Default false.',
      'file_drop.paste_remote_path':
        'After a remote vvreceive copies a dropped file over vvssh, type its committed remote path. Default true.',
      'message_bar.warning_timeout':
        'Seconds before warnings dismiss themselves. 0 keeps them visible; errors always need dismissal. Default 5.',
      'bell.duration / animation / color': 'Visual bell. Duration 0 disables it. Default animation Linear, colour #ffffff.',
    },
    mouseBindings:
      'Custom mouse bindings under `[[mouse.bindings]]` are merged over the defaults, so `{ mouse = "Middle", action = "PasteSelection" }` adds middle-click paste without redefining anything else.',
    actions:
      'Actions include `Copy`, `Paste`, `CopySelection`, `PasteSelection`, `ClearSelection`, the font-size actions, the `Scroll*` family, `SearchForward`, `SearchBackward`, `ToggleFullscreen`, `ToggleMaximized`, `SpawnNewInstance`, `CreateNewWindow`, `CreateNewTab`, `SelectNextTab`, `SelectPreviousTab`, `SelectTab1`–`SelectTab9`, `SelectLastTab`, `ClearHistory`, `Quit`, `Hide`, `Minimize`, `ReceiveChar`, and `None`.',
    noVi: 'Vivido has no vi-mode actions. That is deliberate, not missing — see the [Vivido page](/vivido) for the full list of intentional differences.',
    debugIntro: 'Diagnostics. Most people never touch these.',
    debug: {
      log_level: 'Off, Error, Warn, Info, Debug, or Trace. Default Warn.',
      print_events: 'Log window and input events. Default false.',
      persistent_logging: 'Keep the log file after exit. Default false.',
      render_timer: 'Overlay per-frame render time. Default false.',
      highlight_damage: 'Tint redrawn regions. Default false.',
    },
    sample: {
      starter: 'Only what you want to change. Missing keys keep their defaults.',
      bindings:
        'Bindings are merged over the defaults.\n  key  : "a", a named key ("F5", "Home", "Enter"), or a scancode\n  mods : |-joined Control, Shift, Alt/Option, Super/Command, or "None"\n  mode : AppCursor | AppKeypad | Alt | Search; prefix ~ to require it OFF\n  then exactly one of: action, chars, or command',
      neutralise: 'Neutralise a default binding by handing the character back to the app.',
      alphabet: 'Label keys. At least two width-1 characters.',
      defaultHint: 'The default hint: open URLs and OSC 8 hyperlinks with the system opener.',
      macOpen: '"open" on macOS',
      copyWord: 'Copy any word ending in .rs with Control+Shift+R.',
    },
  },

  tutorials: {
    eyebrow: 'Tutorials',
    title: 'Seven things worth doing on your first day.',
    lede: 'Each one is short, self-contained, and ends with something visibly working. Start at the top if Vivido is new to you.',
    sections: {
      firstImage: 'Your first image',
      video: 'Video and audio',
      vvssh: 'Media over SSH',
      vvmux: 'Sessions that detach',
      agent: 'Driving it from an agent',
      ci: 'Terminals in CI',
      producer: 'Your own producer',
    },
    firstImage: {
      run: 'Open Vivido, then run Vivi against any image file. That is the whole tutorial — there is no setup step.',
      formats:
        'PNG and JPEG are submitted as their original bytes; other formats are converted to RGBA first. Scale the result with `-z`, and pass several files to step through them: `vivi -z 1.5 a.webp b.png`.',
      noEndpoint:
        'If Vivi reports that `VIVID_ENDPOINT_CONTROL` is not set, you are not in a Vivido shell. That message is the intended behaviour, not a bug — use `--dry-run` to inspect a file without a presenter.',
    },
    video: {
      clock:
        'Video and its audio track share a clock, so they start together after a short prebuffer rather than drifting. Scroll the video out of view and playback pauses; scroll back and it resumes — visibility is part of the protocol, not a heuristic.',
      canonical:
        'Opus, Vorbis, and FLAC use canonical, container-independent initialisation, which is why the same file behaves identically when played locally, over SSH, and nested inside vvmux.',
    },
    vvssh: {
      start:
        'Start from a shell *inside* Vivido, and use `vvssh` instead of `ssh`. Install `vivi` on the remote host; it needs no display server and no audio device.',
      arrives: 'The picture appears on your laptop. Nothing was copied, and no X forwarding was involved.',
      heavyTitle: 'When media is heavy',
      heavy:
        'Add `--separate-media-transport` to open a second, lifecycle-bound SSH transport for bulk media. Control traffic then keeps its own connection, so a large video cannot slow your keystrokes. The default remains a single private transport.',
      prerequisitesTitle: 'Prerequisites',
      prerequisites: [
        'A POSIX server needs `AllowStreamLocalForwarding` enabled.',
        'A Windows server needs `AllowTcpForwarding` enabled.',
        'Non-loopback TCP endpoints are rejected by design.',
      ],
    },
    vvmux: {
      start:
        'Start a named session, do some work, then walk away. The server keeps your panes, PTYs, scrollback, and media tracks alive.',
      keys:
        'Split with `Ctrl+b %` and `Ctrl+b "`, move focus with `Ctrl+b` and an arrow key, and zoom a pane with `Ctrl+b z`. On re-attach, media is rehydrated from stable snapshots rather than restarted.',
      token:
        'Detaching releases the outer window token, so the background daemon never holds authority over a window it cannot see. That is the one behaviour worth knowing before you leave a session running for a week.',
    },
    agent: {
      facts:
        'The point of `vivido msg` is that an agent can wait on facts. Every step below either succeeds against a known state or fails loudly — nothing sleeps and hopes.',
      habits:
        'Two habits make this reliable. First, discover the window ID rather than assuming it: IDs are small and monotonic but opaque. Second, separate `typing` from `key Enter`, because `typing` deliberately does not append a newline.',
      report:
        '`typing`, `key`, and `paste` accept `--report`, which prints the resolved window, byte count, and write completion. It also states plainly that application *consumption* was not observed — writing to the PTY is not the same as the program having read it.',
      sample: {
        find: 'Find the window. Never predict an ID — discover it.',
        type: 'Type a command and press Enter as two explicit steps.',
        wait: 'Wait on a fact, not a sleep.',
        settle: 'Let the screen settle, then look at it.',
        evidence: 'Keep the evidence.',
      },
    },
    ci: {
      headless:
        'Headless mode runs the full runtime with no window and no compositor, which makes a terminal a testable component. Screenshots are real rendered frames, not reconstructions.',
      size:
        'Use `--headless-size 1280x720px` when you are driving screenshots: it sets the render surface directly instead of deriving pixels from font metrics.',
      sample: {
        session:
          "One headless session for the whole job. --foreground ties the\nsession's lifetime to this process, which is what CI wants.",
        frame: 'A real rendered frame, including any inline media the test produced.',
      },
    },
    producer: {
      entry:
        'If your program can produce pixels, it can put them in a terminal. `PaneSession` is the smallest useful entry point: it owns at most one presentation and clears the previous one for you.',
      deeper:
        'For video, audio, or anything long-lived, move down a level to sessions, surfaces, tracks, and track channels. The [SDK README](sdk) covers establishment retries, authenticated resume, and the flow-control contract, and the [1.5 specification](spec) is normative if you are implementing the wire format yourself.',
      sample: {
        rust: 'Reads VIVID_ENDPOINT_CONTROL and the root secret from the\nenvironment Vivido exported into this shell.',
        python: 'PaneSession owns at most one presentation; showing a new\nimage clears the previous node and surface for you.',
      },
    },
  },
}

export default en
