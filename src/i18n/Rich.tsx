import { Link } from 'react-router-dom'

/** External targets a localised string may link to by name. */
const LINKS: Record<string, string> = {
  spec: 'https://github.com/vivido-dev/vivid_protocol/blob/dev/vivid-protocol-1.5-spec.md',
  protocol: 'https://github.com/vivido-dev/vivid_protocol',
  sdk: 'https://github.com/vivido-dev/vivid_sdk',
  releases: 'https://github.com/vivido-dev/vivido/releases/latest',
  installGuide: 'https://github.com/vivido-dev/vivido/blob/dev/INSTALL.md',
  vividoToml: 'https://github.com/vivido-dev/vivido/blob/dev/docs/vivido.toml',
}

const TOKEN = /(`[^`]+`|\*\*[^*]+\*\*|\*[^*]+\*|==[^=]+==|\[[^\]]+\]\([^)]+\)|\n)/

interface RichProps {
  text: string
  codeClass?: string
  linkClass?: string
}

/**
 * Renders the inline markup localised strings use: `code`, **strong**,
 * *emphasis*, ==gradient==, [label](target), and a newline for a line break.
 * A link target is a route starting with "/", or a name from LINKS.
 */
export default function Rich({ text, codeClass, linkClass }: RichProps) {
  // Splitting on a capturing group leaves the markup at the odd indexes.
  return text.split(TOKEN).map((part, index) => {
    if (index % 2 === 0) return part
    if (part === '\n') return <br key={index} />
    if (part.startsWith('`')) return <code key={index} className={codeClass}>{part.slice(1, -1)}</code>
    if (part.startsWith('**')) return <strong key={index}>{part.slice(2, -2)}</strong>
    if (part.startsWith('*')) return <em key={index}>{part.slice(1, -1)}</em>
    if (part.startsWith('==')) return <span key={index} className="text-gradient">{part.slice(2, -2)}</span>

    const split = part.indexOf('](')
    const label = part.slice(1, split)
    const target = part.slice(split + 2, -1)
    return target.startsWith('/') ? (
      <Link key={index} to={target} className={linkClass}>{label}</Link>
    ) : (
      <a key={index} href={LINKS[target]} className={linkClass}>{label}</a>
    )
  })
}
