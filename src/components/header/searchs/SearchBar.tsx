"use client"

import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"
import { Input } from "@/components/ui/input"
import { useDebounce } from "@/lib/hooks/useDebounce"
import { useAppStore } from "@/lib/stores/store"
import { SearchIcon } from "lucide-react"
import { usePathname, useSearchParams } from "next/navigation"
import { useCallback, useEffect } from "react"

export default function SearchBar() {
  const isOpenSearch = useAppStore((state) => state.isOpenSearch)
  const setIsOpenSearch = useAppStore((state) => state.setIsOpenSearch)
  const setCloseSearch = useAppStore((state) => state.setCloseSearch)
  const query = useAppStore((state) => state.query)
  const setQuery = useAppStore((state) => state.setQuery)

  const debounceQuery = useDebounce(query)

  const pathName = usePathname()
  const searchParams = useSearchParams()

  const handleSearch = useCallback((value: string) => {
    const params = new URLSearchParams(searchParams.toString())
    if (value)
      params.set("query", value)
    else {
      params.delete("query")
      setCloseSearch()
    }
    const newUrl = `${pathName}?${params.toString()}`
    window.history.replaceState(null, "", newUrl)
  }, [searchParams, pathName, setCloseSearch])

  useEffect(() => {
    console.log("test-----------------")
    const currentUrlQuery = new URLSearchParams(window.location.search).get("query") || ""
    if (debounceQuery !== currentUrlQuery)
      handleSearch(debounceQuery)
  }, [debounceQuery, handleSearch])

  return (
    <>
      {
        isOpenSearch ?
          <ButtonGroup className="max-sm:absolute top-0 left-0 w-full max-sm:h-18 bg-background z-50 max-sm:p-4">
            <Input
              autoFocus
              placeholder="Tìm kiếm..."
              onChange={(e) => setQuery(e.target.value)}
            />
            <Button
              variant="outline"
              aria-label="Search"
              onClick={() => handleSearch(debounceQuery)}
            >
              <SearchIcon />
            </Button>
          </ButtonGroup>
          : <Button
            variant="outline"
            size="icon"
            onClick={setIsOpenSearch}
          >
            <SearchIcon />
          </Button>
      }
    </>
  )
}
