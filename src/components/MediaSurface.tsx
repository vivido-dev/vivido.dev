export type MediaKind = 'image' | 'video' | 'document' | 'desktop'

interface MediaSurfaceProps {
  kind: MediaKind
  /** Badge text, e.g. "PNG 1600x1000" — omit to hide the badge. */
  badge?: string
  className?: string
  /** Aspect ratio of the surface. */
  ratio?: string
}

/** An abstract illustration standing in for real decoded media. */
function ImageArt() {
  return (
    <svg viewBox="0 0 320 180" className="w-full h-full block" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#123a5e" />
          <stop offset="55%" stopColor="#2a6e93" />
          <stop offset="100%" stopColor="#e5a06a" />
        </linearGradient>
        <linearGradient id="ridge" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0d2439" />
          <stop offset="100%" stopColor="#061320" />
        </linearGradient>
      </defs>
      <rect width="320" height="180" fill="url(#sky)" />
      <circle cx="232" cy="112" r="21" fill="#ffd9a8" opacity="0.95" />
      <path d="M0 132 L58 96 L104 126 L150 84 L206 130 L262 104 L320 138 L320 180 L0 180 Z" fill="url(#ridge)" />
      <path d="M0 152 L74 126 L138 154 L214 128 L320 160 L320 180 L0 180 Z" fill="#03101b" opacity="0.85" />
      <g fill="#ffe9c8" opacity="0.7">
        <circle cx="42" cy="30" r="1.3" /><circle cx="96" cy="20" r="1" />
        <circle cx="148" cy="38" r="1.2" /><circle cx="276" cy="26" r="1" />
      </g>
    </svg>
  )
}

function VideoArt() {
  return (
    <svg viewBox="0 0 320 180" className="w-full h-full block" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <radialGradient id="orbit" cx="50%" cy="48%" r="62%">
          <stop offset="0%" stopColor="#2d7fb8" />
          <stop offset="60%" stopColor="#0a1926" />
        </radialGradient>
      </defs>
      <rect width="320" height="180" fill="#08131f" />
      <circle cx="160" cy="90" r="74" fill="url(#orbit)" opacity="0.55" />
      <g stroke="#69d1ff" fill="none" opacity="0.5">
        <ellipse cx="160" cy="90" rx="96" ry="30" />
        <ellipse cx="160" cy="90" rx="70" ry="21" opacity="0.7" />
        <ellipse cx="160" cy="90" rx="44" ry="13" opacity="0.5" />
      </g>
      <circle cx="160" cy="90" r="17" fill="#bfeaff" />
      <circle cx="256" cy="90" r="5" fill="#a5e6ff" />
      <circle cx="90" cy="103" r="3.5" fill="#7ee0a8" />
    </svg>
  )
}

function DocumentArt() {
  return (
    <svg viewBox="0 0 320 180" className="w-full h-full block" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <rect width="320" height="180" fill="#f3f1ea" />
      <g fill="#1d2733">
        <rect x="34" y="26" width="112" height="9" rx="2" />
        <rect x="34" y="50" width="176" height="4" rx="2" opacity="0.45" />
        <rect x="34" y="62" width="192" height="4" rx="2" opacity="0.45" />
        <rect x="34" y="74" width="150" height="4" rx="2" opacity="0.45" />
      </g>
      <g fill="#2a6e93">
        <rect x="34" y="100" width="26" height="46" rx="2" />
        <rect x="70" y="114" width="26" height="32" rx="2" opacity="0.8" />
        <rect x="106" y="92" width="26" height="54" rx="2" opacity="0.65" />
        <rect x="142" y="122" width="26" height="24" rx="2" opacity="0.5" />
      </g>
      <g fill="#1d2733" opacity="0.4">
        <rect x="196" y="100" width="90" height="4" rx="2" />
        <rect x="196" y="112" width="74" height="4" rx="2" />
        <rect x="196" y="124" width="86" height="4" rx="2" />
        <rect x="196" y="136" width="58" height="4" rx="2" />
      </g>
    </svg>
  )
}

function DesktopArt() {
  return (
    <svg viewBox="0 0 320 180" className="w-full h-full block" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <linearGradient id="wall" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#20364f" />
          <stop offset="100%" stopColor="#0d1a28" />
        </linearGradient>
      </defs>
      <rect width="320" height="180" fill="url(#wall)" />
      <g>
        <rect x="26" y="24" width="150" height="104" rx="6" fill="#0b1521" stroke="#32506e" />
        <rect x="26" y="24" width="150" height="16" rx="6" fill="#16273a" />
        <g fill="#69d1ff" opacity="0.55">
          <rect x="38" y="52" width="86" height="4" rx="2" />
          <rect x="38" y="64" width="112" height="4" rx="2" />
          <rect x="38" y="76" width="64" height="4" rx="2" />
          <rect x="38" y="88" width="98" height="4" rx="2" />
        </g>
      </g>
      <g>
        <rect x="150" y="62" width="146" height="96" rx="6" fill="#101d2c" stroke="#3c5f80" />
        <rect x="150" y="62" width="146" height="16" rx="6" fill="#1b2f45" />
        <rect x="162" y="90" width="122" height="56" rx="4" fill="#2a6e93" opacity="0.5" />
        <circle cx="223" cy="118" r="13" fill="#bfeaff" opacity="0.85" />
      </g>
      <rect x="0" y="166" width="320" height="14" fill="#081320" opacity="0.9" />
      <g fill="#69d1ff" opacity="0.6">
        <rect x="12" y="170" width="7" height="7" rx="1.5" />
        <rect x="25" y="170" width="7" height="7" rx="1.5" />
        <rect x="38" y="170" width="7" height="7" rx="1.5" />
      </g>
    </svg>
  )
}

const ART = {
  image: ImageArt,
  video: VideoArt,
  document: DocumentArt,
  desktop: DesktopArt,
} as const

export default function MediaSurface({ kind, badge, className = '', ratio = '16/9' }: MediaSurfaceProps) {
  const Art = ART[kind]
  const isMoving = kind === 'video' || kind === 'desktop'

  return (
    <div className={`term-media ${className}`} style={{ aspectRatio: ratio }}>
      <Art />
      {isMoving && (
        <>
          <span className="term-playhead" aria-hidden="true" />
          <span className="term-progress" aria-hidden="true"><span /></span>
        </>
      )}
      {badge && <span className="term-media-badge">{badge}</span>}
    </div>
  )
}
