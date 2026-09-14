interface PageMeta {
  title: string
  description: string
}

const DEFAULT_META: PageMeta = {
  title: 'Vivido — The GPU terminal that plays video',
  description:
    'A fast, cross-platform GPU terminal emulator where images, video, and audio render inline. Vivid Protocol 1.5 keeps media on authenticated side channels, so your PTY stays ordinary terminal I/O.',
}

const ROUTE_META: Record<string, PageMeta> = {
  '/': DEFAULT_META,
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
}

export function metaFor(pathname: string): PageMeta {
  return ROUTE_META[pathname] ?? { ...DEFAULT_META, title: 'Vivido' }
}
