"use client"

import { cn } from "@/lib/utils"

export default function NavWrapper({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ul className={cn("max-md:absolute top-0 -left-full max-md:w-10/12 max-md:h-dvh max-md:p-4 rounded-tr-md rounded-br-md max-md:bg-background z-50 md:flex items-center max-md:shadow-lg shadow-muted transitions ")}>
        {children}
      </ul>
      <div className="absolute top-0 left-0 w-screen h-dvh -z-10 bg-black/70 backdrop-blur-2xl  transitions md:hidden" />
    </>
  )
}
