"use client"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { GenreType } from "@/lib/types/genre.type"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useMemo } from "react"


export default function GenreDropdown({ data }: { data: GenreType }) {
  const router = useRouter()
  const pathName = usePathname()
  const searchParams = useSearchParams()
  const currentSelectGenre = searchParams.get("with_genre")

  function handleSortGenre(value: string) {
    const params = new URLSearchParams(searchParams.toString())

    if (value && value !== "all")
      params.set("with_genre", value)
    else params.delete("with_genre")

    router.push(`${pathName}?${params}`, { scroll: true })
  }

  const genre = useMemo(() => {
    if (data) {
      const selected = data.find(item => item.id.toString() === currentSelectGenre)
      return selected?.name
    }
  }, [currentSelectGenre, data])

  if (!data) return (<Button variant="outline" disabled>Quốc gia</Button>)
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">
            {genre || "Thể loại"}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem
            onClick={() => handleSortGenre("all")}
          >
            Tất cả
          </DropdownMenuItem>
          {
            data.map(item => (
              <DropdownMenuItem
                key={item.id}
                onClick={() => handleSortGenre(item.id.toString())}
              >
                {item.name}
              </DropdownMenuItem>
            ))
          }
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  )
}
