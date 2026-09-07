import { writeFile } from 'node:fs/promises'

const api = 'https://api.github.com/search/repositories?q=topic:vvmux-plugin&sort=stars&order=desc&per_page=100'
const headers = {
  Accept: 'application/vnd.github+json',
  'User-Agent': 'vivido.dev-plugin-index',
  ...(process.env.GITHUB_TOKEN ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` } : {}),
}
const response = await fetch(api, { headers })
if (!response.ok) throw new Error(`GitHub search failed: ${response.status}`)
const result = await response.json()
const entries = []

for (const repository of result.items.slice(0, 100)) {
  const raw = `https://raw.githubusercontent.com/${repository.full_name}/${repository.default_branch}/vvmux-plugin.toml`
  const manifestResponse = await fetch(raw, { headers })
  if (!manifestResponse.ok) continue
  const source = await manifestResponse.text()
  if (source.length > 1024 * 1024 || !/^manifest_version\s*=\s*2\s*$/m.test(source)) continue
  const field = (name) => source.match(new RegExp(`^${name}\\s*=\\s*"([^"]+)"\\s*$`, 'm'))?.[1]
  const id = field('id')
  const name = field('name')
  const version = field('version')
  const description = field('description')
  if (!id || !name || !version || !description) continue
  const permissions = source.match(/^permissions\s*=\s*\[([^\]]*)\]/m)?.[1]
    .match(/"([^"]+)"/g)?.map((value) => value.slice(1, -1)) ?? []
  const kinds = [
    ...(source.includes('[[agents]]') ? ['agent provider'] : []),
    ...(source.includes('[[integrations]]') ? ['integration'] : []),
    ...(source.includes('[[panes]]') ? ['pane'] : []),
    ...(source.includes('[[workflows]]') ? ['workflow'] : []),
    ...(source.includes('[[actions]]') ? ['action'] : []),
  ]
  entries.push({
    id, name, description, repository: repository.full_name, version, permissions, kinds,
    verified: repository.owner.login === 'vivido-dev',
  })
}

entries.sort((left, right) => left.name.localeCompare(right.name))
await writeFile(new URL('../src/data/vvmux-plugins.json', import.meta.url), `${JSON.stringify(entries, null, 2)}\n`)
