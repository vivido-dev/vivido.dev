import type { Messages } from '../i18n/context'

export type Status = 'stable' | 'new' | 'preview'

export interface SuiteTool {
  /** Command name as typed in a shell. Its one-line summary is localised under `suite.tools`. */
  id: keyof Messages['suite']['tools']
  /** Display name. */
  name: string
  /** What you type to see it work. */
  command: string
  status: Status
  /** Internal route, or an absolute GitHub URL. */
  href: string
  /** Loose grouping used by the suite grid filters. */
  group: 'terminal' | 'producer' | 'remote'
}

const gh = (repo: string) => `https://github.com/vivido-dev/${repo}`

const CORE: SuiteTool[] = [
  {
    id: 'vivido',
    name: 'Vivido',
    command: 'vivido',
    status: 'stable',
    href: '/vivido',
    group: 'terminal',
  },
  {
    id: 'vivida',
    name: 'Vivida',
    command: 'vivida',
    status: 'stable',
    href: '/vivida',
    group: 'terminal',
  },
  {
    id: 'vvmux',
    name: 'vvmux',
    command: 'vvmux attach build',
    status: 'stable',
    href: '/vvmux',
    group: 'terminal',
  },
  {
    id: 'vvbox',
    name: 'vvbox',
    command: 'vvbox',
    status: 'preview',
    href: gh('vvbox'),
    group: 'terminal',
  },
  {
    id: 'vivi',
    name: 'Vivi',
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
    command: 'vvrd paper.pdf',
    status: 'stable',
    href: '/vvrd',
    group: 'producer',
  },
  {
    id: 'vvpaint',
    name: 'vvpaint',
    command: 'vvpaint screenshot.png',
    status: 'new',
    href: gh('vvpaint'),
    group: 'producer',
  },
  {
    id: 'vvcam',
    name: 'vvcam',
    command: 'vvcam',
    status: 'preview',
    href: gh('vvcam'),
    group: 'producer',
  },
  {
    id: 'vvland',
    name: 'vvland',
    command: 'vvland --compositor sway',
    status: 'preview',
    href: gh('vvland'),
    group: 'producer',
  },
  {
    id: 'vvdoom',
    name: 'vvDOOM',
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
    command: 'vvssh user@host',
    status: 'stable',
    href: '/tutorials#vvssh',
    group: 'remote',
  },
  {
    id: 'vrowser',
    name: 'Vrowser',
    command: 'vrowser vivido.dev',
    status: 'preview',
    href: gh('vrowser'),
    group: 'remote',
  },
]

export const SUITE: SuiteTool[] = [...CORE, ...PRODUCERS, ...REMOTE]

export const SUITE_GROUPS: SuiteTool['group'][] = ['terminal', 'producer', 'remote']
