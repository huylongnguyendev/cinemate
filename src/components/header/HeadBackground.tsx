"use client"

import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"

export default function HeadBackground() {
  const [isScroll, setIsScroll] = useState<boolean>(false)

  useEffect(() => {
    function handleScroll() {
      const posX = window.scrollY
      setIsScroll(posX > 100)
    }

    document.addEventListener("scroll", handleScroll)
    return () => document.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <div className={cn("background-header-pos", isScroll && "size-full! bg-background/50 backdrop-blur-2xl")} />
      <div className={cn("background-header-pos", isScroll && "size-full! bg-linear-to-b from-background via-background/20 to-transparent")} />
    </>
  )
}
