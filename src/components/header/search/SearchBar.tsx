"use client"

import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import { useAppStore } from "@/lib/stores/store"
import { SearchIcon } from "lucide-react"
import { useRef } from "react"
import { useClickOutside } from "@/lib/hooks/useClickOutside"

export default function SearchBar() {
  const ref = useRef<HTMLDivElement>(null)

  const isOpenSearch = useAppStore((state) => state.isOpenSearch)
  const setIsOpenSearch = useAppStore((state) => state.setIsOpenSearch)

  useClickOutside(ref, isOpenSearch, setIsOpenSearch)

  return (
    <>
      <div
        ref={ref}
        className={cn(
          "absolute top-0 lg:top-5.5 max-lg:left-0 lg:right-17 2xl:right-29 w-0 max-lg:p-4 bg-background rounded-md inline-flex justify-center items-center z-50 max-lg:shadow-lg shadow-muted opacity-0 invisible overflow-hidden transitions",
          isOpenSearch && "max-lg:w-screen w-fit opacity-100 visible"
        )}
      >
        <ButtonGroup>
          <Input placeholder="Tìm kiếm..." />
          <Button variant="outline" aria-label="Search">
            <SearchIcon />
          </Button>
        </ButtonGroup>
      </div>
    </>
  )
}
