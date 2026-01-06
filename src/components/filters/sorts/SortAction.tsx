"use client"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { sortList } from "@/lib/data/sort.data"
import { ListFilter, ListX } from "lucide-react"
import { usePathname, useRouter, useSearchParams } from "next/navigation"

export default function SortAction() {
  const data = sortList

  const router = useRouter()
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const currentSortValue = searchParams.get("sort_by")

  function handleSort(value: string) {
    const params = new URLSearchParams(searchParams.toString())

    if (value && value !== "all")
      params.set("sort_by", value)
    else params.delete("sort_by")

    router.push(`${pathname}?${params.toString()}`, { scroll: true })
  }
  const activeItem = data.find(item => item.value === currentSortValue)

  const triggerTitle = activeItem?.title || "Sắp xếp"
  const TriggerIcon: React.ElementType = activeItem?.icon || ListFilter

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" aria-label="Sắp xếp danh sách">
            <TriggerIcon />
            <p>{triggerTitle}</p>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem onClick={() => handleSort("all")}>
            <ListX />
            <p>Mặc định</p>
          </DropdownMenuItem>
          {
            data.map(item => (
              <DropdownMenuItem key={item.value} onClick={() => handleSort(item.value)}>
                <item.icon />
                <p>{item.title}</p>
              </DropdownMenuItem>
            ))
          }
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  )
}
