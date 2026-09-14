export type Platform = 'macos' | 'windows' | 'linux'

/** Best-effort platform guess from the user agent. Defaults to Linux, whose
 *  install path (cargo) works everywhere. */
export function detectPlatform(): Platform {
  if (typeof navigator === 'undefined') return 'linux'
  const ua = navigator.userAgent
  if (/Win/i.test(ua)) return 'windows'
  if (/Mac|iPhone|iPad/i.test(ua)) return 'macos'
  if (/Linux|X11|CrOS/i.test(ua) && !/Android/i.test(ua)) return 'linux'
  return 'linux'
}

/**
 * PLACEHOLDER download target. The signed macOS .pkg and Windows .exe release
 * assets are not final yet; every download CTA points at the releases page.
 * Swap these for the direct asset URLs at launch.
 */
export const DOWNLOAD_PLACEHOLDER = 'https://github.com/vivido-dev/vivido/releases/latest'

export const PLATFORM_DOWNLOAD: Record<Exclude<Platform, 'linux'>, { label: string; sublabel: string }> = {
  macos: { label: 'Download for macOS', sublabel: '.pkg installer' },
  windows: { label: 'Download for Windows', sublabel: '.exe installer' },
}
