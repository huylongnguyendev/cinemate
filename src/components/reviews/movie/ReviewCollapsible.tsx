"use client"

import { cn } from "@/lib/utils"
import { useState } from "react"

export default function ReviewCollapsible({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <>
      <p
        className={cn("cursor-nwse-resize", isOpen ? "h-fit" : "line-clamp-4")}
        onClick={()=>setIsOpen(!isOpen)}
      >
        {children}
      </p>
    </>
  )
}
