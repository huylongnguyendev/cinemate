"use client"

import { Button } from "../ui/button"
import { useAppStore } from "@/lib/stores/store"

export default function MenuToggle({ children }: { children: React.ReactNode }) {
  const setIsOpenMenu = useAppStore((state) => state.setIsOpenMenu)

  return (
    <>
      <Button
        variant="outline"
        size="icon"
        onClick={setIsOpenMenu}
        className="md:hidden"
      >
        {children}
      </Button>
    </>
  )
}
