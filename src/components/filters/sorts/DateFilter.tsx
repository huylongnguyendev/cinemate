"use client"

import { Button } from "@/components/ui/button"
import { DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import useDate from "@/lib/hooks/useDate"
import { DropdownMenu } from "@radix-ui/react-dropdown-menu"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useMemo } from "react"

export default function DateFilter() {
  const listDate = useDate({ type: "year", initialStartValue: 1900 })

  const router = useRouter()
  const pathName = usePathname()
  const searchParams = useSearchParams()
  const currentSelectYear = searchParams.get("year")

  function handleSortYear(value: string) {
    const params = new URLSearchParams(searchParams.toString())

    if (value && value !== "all")
      params.set("year", value)
    else params.delete("year")

    router.push(`${pathName}?${params}`, { scroll: true })
  }

  const yearTitle = useMemo(() => {
    return listDate.find(item => item.value === currentSelectYear)?.title || "Năm sản xuất"
  }, [currentSelectYear, listDate])

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">
            {yearTitle}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem onClick={() => handleSortYear("all")}
          >
            Tất cả
          </DropdownMenuItem>
          {
            listDate.map(item => (
              <DropdownMenuItem
                key={"year" + item.value}
                onClick={() => handleSortYear(item.value)}
              >
                {item.title}
              </DropdownMenuItem>
            ))
          }
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  )
}
