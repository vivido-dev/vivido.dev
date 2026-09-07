export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 mt-auto">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-zinc-500 text-sm">
            <img src="/vivido_cropped.png" alt="" className="brand-logo" width="36" height="36" />
            <span>Vivido</span>
          </div>

          <div className="flex items-center gap-6 text-sm text-zinc-500">
            <a
              href="https://github.com/vivido-dev/vivido"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-300 transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://github.com/vivido-dev/vivido/blob/main/LICENSE"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-300 transition-colors"
            >
              Apache-2.0
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
