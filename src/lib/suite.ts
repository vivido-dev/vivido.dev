export type Status = 'stable' | 'new' | 'preview'

export interface SuiteTool {
  /** Command name as typed in a shell. */
  id: string
  /** Display name. */
  name: string
  /** One line, in the user's language, not the spec's. */
  summary: string
  /** What you type to see it work. */
  command: string
  status: Status
  /** Internal route, or an absolute GitHub URL. */
  href: string
  /** Loose grouping used by the suite grid filters. */
  group: 'terminal' | 'producer' | 'remote'
}

export const STATUS_LABEL: Record<Status, string> = {
  stable: 'Stable',
  new: 'New',
  preview: 'Preview',
}

const gh = (repo: string) => `https://github.com/vivido-dev/${repo}`

const CORE: SuiteTool[] = [
  {
    id: 'vivido',
    name: 'Vivido',
    summary: 'The GPU terminal emulator and reference Vivid presenter. Metal, DirectX 12, Vulkan.',
    command: 'vivido',
    status: 'stable',
    href: '/vivido',
    group: 'terminal',
  },
  {
    id: 'vivida',
    name: 'Vivida',
    summary: 'Workspaces, tabs, and splits of native Vivido panes — a home for your projects and agents.',
    command: 'vivida',
    status: 'stable',
    href: '/vivida',
    group: 'terminal',
  },
  {
    id: 'vvmux',
    name: 'vvmux',
    summary: 'Detachable multiplexer. Media survives detach and re-attach, from another machine.',
    command: 'vvmux attach build',
    status: 'stable',
    href: '/vvmux',
    group: 'terminal',
  },
  {
    id: 'vvbox',
    name: 'vvbox',
    summary: 'A terminal shell you can talk to. Panes in tabs and splits, driven by a chat panel.',
    command: 'vvbox',
    status: 'preview',
    href: gh('vvbox'),
    group: 'terminal',
  },
  {
    id: 'vivi',
    name: 'Vivi',
    summary: 'Play an image, a video, or a track from the command line. The fastest way to see Vivid work.',
    command: 'vivi clip.mkv',
    status: 'stable',
    href: '/vivi',
    group: 'producer',
  },
]

const PRODUCERS: SuiteTool[] = [
  {
    id: 'vvrd',
    name: 'vvrd',
    summary: 'Read PDF, EPUB, Markdown, Mermaid, and Office documents full-screen, in the terminal.',
    command: 'vvrd paper.pdf',
    status: 'stable',
    href: '/vvrd',
    group: 'producer',
  },
  {
    id: 'vvpaint',
    name: 'vvpaint',
    summary: 'Paint and annotate over an image without leaving the terminal. Keyboard-first.',
    command: 'vvpaint screenshot.png',
    status: 'new',
    href: gh('vvpaint'),
    group: 'producer',
  },
  {
    id: 'vvcam',
    name: 'vvcam',
    summary: 'Stream a connected camera into the terminal, encoded as H.264. Works over SSH too.',
    command: 'vvcam',
    status: 'preview',
    href: gh('vvcam'),
    group: 'producer',
  },
  {
    id: 'vvland',
    name: 'vvland',
    summary: 'Run one isolated Wayland app or a whole Weston, Sway, or Hyprland desktop in a pane.',
    command: 'vvland --compositor sway',
    status: 'preview',
    href: gh('vvland'),
    group: 'producer',
  },
  {
    id: 'vvdoom',
    name: 'vvDOOM',
    summary: 'Doom, with graphics and sound on the same media stack. Because the question comes up.',
    command: 'vvdoom',
    status: 'preview',
    href: gh('vvdoom'),
    group: 'producer',
  },
]

const REMOTE: SuiteTool[] = [
  {
    id: 'vvssh',
    name: 'vvssh',
    summary: 'SSH that carries your media. Remote images and video appear on your local screen.',
    command: 'vvssh user@host',
    status: 'stable',
    href: '/tutorials#vvssh',
    group: 'remote',
  },
  {
    id: 'vrowser',
    name: 'Vrowser',
    summary: 'A deliberately small CEF browser that renders into the terminal. No tabs, no address bar.',
    command: 'vrowser vivido.dev',
    status: 'preview',
    href: gh('vrowser'),
    group: 'remote',
  },
]

export const SUITE: SuiteTool[] = [...CORE, ...PRODUCERS, ...REMOTE]

export const SUITE_GROUPS: { id: SuiteTool['group']; label: string; blurb: string }[] = [
  { id: 'terminal', label: 'Terminals', blurb: 'Where you work, and what arranges it.' },
  { id: 'producer', label: 'Producers', blurb: 'Things that put pictures and sound on the screen.' },
  { id: 'remote', label: 'Remote and transport', blurb: 'The same experience on a machine that is not yours.' },
]
