import { useEffect, type RefObject } from 'react'

/** Closes an open menu on an outside click or Escape. */
export function useDismiss(
  ref: RefObject<HTMLElement | null>,
  open: boolean,
  setOpen: (open: boolean) => void,
) {
  useEffect(() => {
    if (!open) return
    const onClick = (event: MouseEvent) => {
      if (!ref.current?.contains(event.target as Node)) setOpen(false)
    }
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    document.addEventListener('mousedown', onClick)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onClick)
      document.removeEventListener('keydown', onKey)
    }
  }, [ref, open, setOpen])
}
