// Copy the Vrowser command-line installer into the site so https://vivido.dev/vrowser/install.sh
// serves it.
//
// The script in vrowser/packaging/install.sh is the source of truth, but this repository is built
// on its own and does not always sit beside the vrowser tree. The copy under public/ is therefore
// committed, and this script refreshes it. Pass --check to fail instead of writing, which is how a
// vrowser release verifies that the published installer is the one in the tree.

import { readFile, writeFile, mkdir } from 'node:fs/promises'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const here = dirname(fileURLToPath(import.meta.url))
const source = resolve(here, '../../vrowser/packaging/install.sh')
const destination = resolve(here, '../public/vrowser/install.sh')
const check = process.argv.includes('--check')

let installer
try {
  installer = await readFile(source, 'utf8')
} catch (error) {
  if (error.code !== 'ENOENT') throw error
  console.error(`vrowser installer not found at ${source}`)
  console.error('Run this from a checkout that also contains the vrowser project.')
  process.exit(1)
}

// A truncated or wrong file here would be piped straight into a user's shell.
if (!installer.startsWith('#!/bin/sh\n')) {
  throw new Error(`${source} does not start with a /bin/sh shebang`)
}
if (!installer.includes('VROWSER_RELEASES_URL')) {
  throw new Error(`${source} does not look like the Vrowser installer`)
}

const current = await readFile(destination, 'utf8').catch((error) => {
  if (error.code === 'ENOENT') return null
  throw error
})

if (current === installer) {
  console.log(`up to date: ${join('public', 'vrowser', 'install.sh')}`)
  process.exit(0)
}

if (check) {
  console.error(`out of date: ${destination}`)
  console.error('Run `npm run installer:sync` and commit the result.')
  process.exit(1)
}

await mkdir(dirname(destination), { recursive: true })
await writeFile(destination, installer, { mode: 0o644 })
console.log(`updated ${destination}`)
