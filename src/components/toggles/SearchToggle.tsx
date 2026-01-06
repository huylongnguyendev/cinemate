"use client"

import { Search } from "lucide-react"
import { Button } from "../ui/button"
import { useAppStore } from "@/lib/stores/store"

export default function SearchToggle() {
  const setIsOpenSearch = useAppStore((state) => state.setIsOpenSearch)

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        onClick={setIsOpenSearch}
      >
        <Search />
      </Button>
    </>
  )
}
