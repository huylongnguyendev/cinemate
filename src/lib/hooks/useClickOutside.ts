
import { useEffect } from "react"

export function useClickOutside<T extends HTMLElement>(
  ref: React.RefObject<T | null>,
  state: boolean,
  callback: () => void
) {
  useEffect(() => {
    if (!state) return

    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node))
        callback()
    }

    document.addEventListener("click", handleClickOutside)
    return () => document.removeEventListener("click", handleClickOutside)
  }, [ref, state, callback])
}