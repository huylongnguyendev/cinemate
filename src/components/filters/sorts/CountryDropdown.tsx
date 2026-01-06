"use client"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { CountryType } from "@/lib/types/country.type"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useMemo } from "react"

export default function CountryDropdown({ data }: { data: CountryType | undefined }) {

  const router = useRouter()
  const pathName = usePathname()
  const searchParams = useSearchParams()
  const currentSelectCountry = searchParams.get("with_origin_country")

  function handleSortCountry(value: string) {
    const params = new URLSearchParams(searchParams.toString())

    if (value && value !== "all")
      params.set("with_origin_country", value)
    else params.delete("with_origin_country")

    router.push(`${pathName}?${params}`, { scroll: true })
  }

  const country = useMemo(() => {
    if (data) {
      const selected = data.find(item => item.iso_3166_1 === currentSelectCountry)
      return selected?.native_name || selected?.english_name
    }
  }, [currentSelectCountry, data])

  if (!data) return (<Button variant="outline" disabled>Quốc gia</Button>)

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">
            {country || "Quốc gia"}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem onClick={() => handleSortCountry("all")}
          >
            Tất cả
          </DropdownMenuItem>
          {
            data.map(item => (
              <DropdownMenuItem
                key={item.iso_3166_1}
                onClick={() => handleSortCountry(item.iso_3166_1)}
              >
                {item.native_name || item.english_name}
              </DropdownMenuItem>
            ))
          }
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  )
}
