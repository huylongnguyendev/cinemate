import { useEffect, useState } from "react"

export function useDebounce(value: string, delay?: number) {
  const delayValue = delay || 400
  const [debounceValue, setDebounceValue] = useState<string>(value)

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceValue(value)
    }, delayValue)

    return () => {
      clearTimeout(timer)
    }
  }, [delayValue, value])
  
  return debounceValue
}