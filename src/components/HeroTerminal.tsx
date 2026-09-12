import { useEffect, useMemo, useRef, useState } from 'react'
import TerminalWindow from './TerminalWindow'
import MediaSurface, { type MediaKind } from './MediaSurface'
import { useReducedMotion } from '../lib/useReducedMotion'

type Step =
  | { t: 'cmd'; text: string }
  | { t: 'out'; text: string }
  | { t: 'media'; kind: MediaKind; badge: string; ratio?: string }

const SCRIPT: Step[] = [
  { t: 'cmd', text: 'vivi ridgeline.png' },
  { t: 'media', kind: 'image', badge: 'PNG · 1600x1000 · original bytes', ratio: '20/7' },
  { t: 'cmd', text: 'vivi orbit.mkv --zoom 1.5' },
  { t: 'out', text: 'h264 1920x1080 · opus 48 kHz · linked A/V clock' },
  { t: 'media', kind: 'video', badge: 'H.264 · exact-PTS playback', ratio: '20/7' },
  { t: 'cmd', text: "vivido msg wait text 'build ok' --timeout 30s" },
  { t: 'out', text: '{"matched":true,"screen_sequence":1841}' },
]

const TYPE_MS = 30
const AFTER_CMD_MS = 420
const AFTER_OUT_MS = 320
const AFTER_MEDIA_MS = 2100
const LOOP_HOLD_MS = 3200

export default function HeroTerminal({ className = '' }: { className?: string }) {
  const reduced = useReducedMotion()
  const [done, setDone] = useState(0)
  const [chars, setChars] = useState(0)
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)

  const current = SCRIPT[done]

  useEffect(() => {
    if (reduced) return
    const clear = () => clearTimeout(timer.current)

    // Finished the script: hold the result, then replay.
    if (!current) {
      timer.current = setTimeout(() => {
        setDone(0)
        setChars(0)
      }, LOOP_HOLD_MS)
      return clear
    }

    if (current.t === 'cmd') {
      if (chars < current.text.length) {
        timer.current = setTimeout(() => setChars((n) => n + 1), TYPE_MS)
      } else {
        timer.current = setTimeout(() => {
          setDone((n) => n + 1)
          setChars(0)
        }, AFTER_CMD_MS)
      }
      return clear
    }

    const wait = current.t === 'media' ? AFTER_MEDIA_MS : AFTER_OUT_MS
    timer.current = setTimeout(() => setDone((n) => n + 1), wait)
    return clear
  }, [reduced, current, chars])

  const settled = useMemo(() => (reduced ? SCRIPT : SCRIPT.slice(0, done)), [reduced, done])

  return (
    <TerminalWindow
      title="vivido — zsh — 96x28"
      className={className}
    >
      <div className="min-h-[286px] sm:min-h-[330px]" aria-label="Illustration of Vivido playing media inline">
        <p className="term-out">Vivido 0.4.7 · vivid 1.5 · terminal-surface-v1</p>
        <p className="term-out mb-2">endpoint ready — 3 profiles negotiated</p>

        {settled.map((step, index) => (
          <Line key={index} step={step} />
        ))}

        {!reduced && current?.t === 'cmd' && (
          <p className="whitespace-pre-wrap break-words">
            <span className="term-prompt">~/demo</span>{' '}
            <span className="term-path">$</span>{' '}
            <span>{current.text.slice(0, chars)}</span>
            <span className="term-caret" />
          </p>
        )}

        {(reduced || !current) && (
          <p className="whitespace-pre-wrap">
            <span className="term-prompt">~/demo</span>{' '}
            <span className="term-path">$</span>
            <span className="term-caret" />
          </p>
        )}
      </div>
    </TerminalWindow>
  )
}

function Line({ step }: { step: Step }) {
  if (step.t === 'cmd') {
    return (
      <p className="whitespace-pre-wrap break-words">
        <span className="term-prompt">~/demo</span>{' '}
        <span className="term-path">$</span>{' '}
        <span className="text-zinc-100">{step.text}</span>
      </p>
    )
  }

  if (step.t === 'out') {
    return <p className="term-out whitespace-pre-wrap break-words">{step.text}</p>
  }

  return (
    <div className="my-3 max-w-xl">
      <MediaSurface kind={step.kind} badge={step.badge} ratio={step.ratio} />
    </div>
  )
}
