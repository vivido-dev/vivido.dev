const BOX_WIDTH = 188
const BOX_TOP = 62
const BOX_HEIGHT = 150
const LEFT_BOX = 14
const RIGHT_BOX = 678
const LANE_START = LEFT_BOX + BOX_WIDTH + 34
const LANE_END = RIGHT_BOX - 34
const DISTANCE = LANE_END - LANE_START
const CYCLE = 3.4

const PTY_Y = 116
const VIVID_Y = 188

/** Packets travelling one lane, staggered by animation delay. */
function Packets({ y, count, offset, kind }: { y: number; count: number; offset: number; kind: 'text' | 'media' }) {
  const width = kind === 'text' ? 9 : 26
  const height = kind === 'text' ? 6 : 14
  const fill = kind === 'text' ? '#7ee0a8' : '#36b8f4'

  return (
    <>
      {Array.from({ length: count }, (_, i) => (
        <rect
          key={i}
          className="lane-packet"
          style={{
            ['--lane-distance' as string]: `${DISTANCE - width}px`,
            animationDelay: `${offset + (i * CYCLE) / count}s`,
          }}
          x={LANE_START}
          y={y - height / 2}
          width={width}
          height={height}
          rx={kind === 'text' ? 1.5 : 3}
          fill={fill}
        />
      ))}
    </>
  )
}

function Node({ x, title, lines }: { x: number; title: string; lines: string[] }) {
  return (
    <g>
      <rect
        x={x}
        y={BOX_TOP}
        width={BOX_WIDTH}
        height={BOX_HEIGHT}
        rx={12}
        fill="#101d2c"
        stroke="#2e4a66"
      />
      <text x={x + BOX_WIDTH / 2} y={BOX_TOP + 34} textAnchor="middle" fill="#f0f5fa" fontSize={15} fontWeight={600}>
        {title}
      </text>
      {lines.map((line, i) => (
        <text
          key={line}
          x={x + BOX_WIDTH / 2}
          y={BOX_TOP + 64 + i * 22}
          textAnchor="middle"
          fill="#91a0b3"
          fontSize={12}
          fontFamily="var(--font-mono)"
        >
          {line}
        </text>
      ))}
    </g>
  )
}

function Lane({
  y,
  tag,
  tagColor,
  label,
  dashed,
}: {
  y: number
  tag: string
  tagColor: string
  label: string
  dashed?: boolean
}) {
  return (
    <g>
      <text x={LANE_START} y={y - 16} fill={tagColor} fontSize={11.5} fontFamily="var(--font-mono)" letterSpacing="0.1em">
        {tag}
      </text>
      <text x={LANE_START} y={y + 26} fill="#6d8299" fontSize={12}>
        {label}
      </text>
      <line
        x1={LANE_START}
        y1={y}
        x2={LANE_END}
        y2={y}
        stroke="#27405a"
        strokeWidth={1.5}
        strokeDasharray={dashed ? '5 4' : undefined}
      />
      <path d={`M ${LANE_END - 7} ${y - 4.5} L ${LANE_END} ${y} L ${LANE_END - 7} ${y + 4.5}`} fill="#27405a" />
    </g>
  )
}

export default function ProtocolDiagram({ className = '' }: { className?: string }) {
  return (
    <figure className={`m-0 ${className}`}>
      <div className="overflow-x-auto rounded-2xl border border-zinc-800 bg-zinc-950/60 p-4 sm:p-6">
        <svg
          viewBox="0 0 880 272"
          className="block w-full min-w-[700px]"
          role="img"
          aria-label="A producer sends ordinary text to Vivido on the PTY lane while images, video, and audio travel a separate authenticated Vivid side channel, so a stalled media lane cannot block terminal I/O."
        >
          <Node x={LEFT_BOX} title="Producer" lines={['vivi · vvcam', 'vvrd · vvland', 'your own code']} />
          <Node x={RIGHT_BOX} title="Vivido" lines={['presenter', 'Vello + wgpu', 'Metal/DX12/Vulkan']} />

          <Lane
            y={PTY_Y}
            tag="PTY"
            tagColor="#7ee0a8"
            label="ordinary terminal I/O — text, keys, resize"
          />
          <Packets y={PTY_Y} count={5} offset={0} kind="text" />

          <Lane
            y={VIVID_Y}
            tag="VIVID 1.5"
            tagColor="#69d1ff"
            label="authenticated side channel — images, video, audio"
            dashed
          />
          <Packets y={VIVID_Y} count={3} offset={0.5} kind="media" />

          <text x={440} y={252} textAnchor="middle" fill="#8fa4b8" fontSize={12.5}>
            Per-track flow control: a slow or malformed source cannot stall input, rendering, audio, or another track.
          </text>
        </svg>
      </div>
      <figcaption className="mt-3 text-xs text-zinc-600">
        Media bytes never travel through the PTY. Only a bounded, authenticated anchor marker does.
      </figcaption>
    </figure>
  )
}
