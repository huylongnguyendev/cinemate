"use client"

import { useAppStore } from "@/lib/stores/store"

export default function NavItem({ children }: { children: React.ReactNode }) {
  const setIsOpenMenu = useAppStore((state)=>state.setIsOpenMenu)
  return (
    <>
      <li
        className="px-2 md:px-4 py-1.5 rounded-md transitions hover:bg-muted hover:text-primary active:bg-muted active:text-primary"
        onClick={setIsOpenMenu}
      >
        {children}
      </li>
    </>
  )
}
