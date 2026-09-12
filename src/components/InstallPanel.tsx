import { useState } from 'react'
import CopyCommand from './CopyCommand'
import { detectPlatform, DOWNLOAD_PLACEHOLDER, type Platform } from '../lib/platform'

type Os = Platform

interface Channel {
  label: string
  /** Preferred path for this platform. */
  headline: string
  note: string
  command?: string
  download?: { label: string; href: string }
  icon: React.ReactNode
}

const APPLE_ICON = (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
  </svg>
)

const WINDOWS_ICON = (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M0 3.449L9.75 2.1v9.45H0m10.949-9.6L24 0v11.4H10.949M0 12.6h9.75v9.45L0 20.699M10.949 12.6H24V24l-12.9-1.801" />
  </svg>
)

const LINUX_ICON = (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.7} viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 2.25c-2.05 0-3.2 1.68-3.2 4.02 0 1.6-.28 2.4-1.2 3.62-1.2 1.6-2.1 3.2-2.1 4.8 0 .9.5 1.4 1.2 1.4.5 0 .9-.3 1.2-.8m8.2 0c.3.5.7.8 1.2.8.7 0 1.2-.5 1.2-1.4 0-1.6-.9-3.2-2.1-4.8-.92-1.22-1.2-2.02-1.2-3.62" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M7.9 15.29c-.6 1.3-1.5 2.2-1.5 3.51 0 1.9 2.5 2.95 5.6 2.95s5.6-1.05 5.6-2.95c0-1.31-.9-2.21-1.5-3.51" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.4 6.6h.01M13.6 6.6h.01" />
  </svg>
)

const CHANNELS: Record<Os, Channel> = {
  macos: {
    label: 'macOS',
    headline: 'Signed package',
    note: 'Renders with Metal. The package is Developer ID signed and notarised.',
    download: { label: 'Download the .pkg', href: DOWNLOAD_PLACEHOLDER },
    icon: APPLE_ICON,
  },
  windows: {
    label: 'Windows',
    headline: 'Signed suite installer',
    note: 'One installer puts Vivido, Vivida, vvmux, vivi, vvrd, vvpaint, and vvssh on your PATH. Renders with DirectX 12.',
    download: { label: 'Download the .exe', href: DOWNLOAD_PLACEHOLDER },
    icon: WINDOWS_ICON,
  },
  linux: {
    label: 'Linux',
    headline: 'Build from crates.io',
    note: 'Wayland-only by design, rendering with Vulkan. Needs Rust 1.95+ and your distribution’s FFmpeg and audio development packages.',
    command: 'cargo install vivido',
    icon: LINUX_ICON,
  },
}

export default function InstallPanel({ className = '' }: { className?: string }) {
  const [os, setOs] = useState<Os>(detectPlatform)
  const channel = CHANNELS[os]
  const order: Os[] = ['macos', 'linux', 'windows']

  return (
    <div className={`card overflow-hidden ${className}`}>
      <div role="tablist" aria-label="Choose your platform" className="flex border-b border-zinc-800">
        {order.map((value) => {
          const active = value === os
          return (
            <button
              key={value}
              role="tab"
              type="button"
              aria-selected={active}
              onClick={() => setOs(value)}
              className={`flex flex-1 items-center justify-center gap-2 px-4 py-3 text-sm font-medium transition-colors ${
                active
                  ? 'bg-zinc-900/70 text-accent-200'
                  : 'text-zinc-500 hover:bg-zinc-900/40 hover:text-zinc-300'
              }`}
            >
              <span className={active ? 'text-accent-400' : 'text-zinc-600'}>{channelIcon(value)}</span>
              {CHANNELS[value].label}
              {active && <span className="sr-only">(selected)</span>}
            </button>
          )
        })}
      </div>

      <div className="p-5 sm:p-6">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h3 className="text-base font-semibold text-zinc-100">{channel.headline}</h3>
          <span className="font-mono text-[11px] uppercase tracking-widest text-zinc-600">
            Apache-2.0
          </span>
        </div>
        <p className="mt-2 text-sm leading-relaxed text-zinc-400">{channel.note}</p>

        <div className="mt-5 space-y-3">
          {channel.download && (
            <a href={channel.download.href} className="btn btn-primary w-full">
              {channel.download.label}
              <span aria-hidden="true">↓</span>
            </a>
          )}
          {channel.command && <CopyCommand command={channel.command} />}
        </div>

        <p className="mt-4 text-xs text-zinc-600">
          Prefer to read first? The{' '}
          <a
            className="text-accent-400 underline underline-offset-2 hover:text-accent-300"
            href="https://github.com/vivido-dev/vivido/blob/dev/INSTALL.md"
          >
            install guide
          </a>{' '}
          lists per-platform build dependencies.
        </p>
      </div>
    </div>
  )
}

function channelIcon(os: Os) {
  return CHANNELS[os].icon
}
