import CopyCommand from './CopyCommand'
import { detectPlatform, DOWNLOAD_PLACEHOLDER, PLATFORM_DOWNLOAD } from '../lib/platform'

/**
 * The shared install CTA: a signed-installer download on macOS and Windows,
 * cargo on Linux. Download targets are placeholders until launch — see
 * lib/platform.ts.
 */
export function DownloadCta({ className = '' }: { className?: string }) {
  const platform = detectPlatform()

  if (platform === 'linux') {
    return <CopyCommand command="cargo install vivido" className={className} />
  }

  const { label, sublabel } = PLATFORM_DOWNLOAD[platform]
  return (
    <a href={DOWNLOAD_PLACEHOLDER} className={`btn btn-primary ${className}`}>
      {label}
      <span className="font-mono text-xs font-medium opacity-70">{sublabel}</span>
    </a>
  )
}

/** Secondary hero link to the Windows suite installer, on the release
 *  placeholder. Hidden on Windows, where the primary CTA already is the
 *  installer. */
export function WindowsInstallerLink({ className = '' }: { className?: string }) {
  if (detectPlatform() === 'windows') return null
  return (
    <a href={DOWNLOAD_PLACEHOLDER} className={`btn btn-ghost ${className}`}>
      Windows installer
      <span className="font-mono text-xs font-medium opacity-70">.exe</span>
    </a>
  )
}
