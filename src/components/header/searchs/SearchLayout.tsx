"use client"

import Container from "@/components/common/Container"
import { Button } from "@/components/ui/button"
import { baseURL, getApiOptions } from "@/lib/apis/base.api"
import { useAppStore } from "@/lib/stores/store"
import { ISearchResponse, ResultSearchType } from "@/lib/types/db/movie/movie.type"
import { cn } from "@/lib/utils"
import { X } from "lucide-react"

import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import SearchItem from "./SearchItem"

export default function SearchLayout() {
  const isOpenSearch = useAppStore((state) => state.isOpenSearch)
  const setIsOpenSearch = useAppStore((state) => state.setIsOpenSearch)
  const setQuery = useAppStore((state) => state.setQuery)

  const [result, setResult] = useState<ResultSearchType[] | []>([])

  const searchParams = useSearchParams()
  const query = searchParams.get("query")

  type MediaOnly = Exclude<ResultSearchType, { media_type: "person" }>

  useEffect(() => {
    async function fetchSearch() {
      if (!query) {
        setResult([])
        return
      }
      const res = await fetch(`${baseURL}search/multi?query=${query}&language=en-US&page=1`, getApiOptions("GET", 0, true))
      if (!res.ok) {
        setResult([])
        return
      }
      const data: ISearchResponse = await res.json()
      const finalResult = data.results.filter((item): item is MediaOnly => item.media_type !== "person")
      setResult(finalResult)
    }

    fetchSearch()
  }, [query])

  return (
    <>
      <div className={cn("fixed w-full h-[calc(100dvh-72px)] bg-background/80 z-50 -top-250 transitions backdrop-blur-2xl overflow-y-auto", isOpenSearch && "top-18")}>
        <Container className="h-full py-4">
          <Button
            variant="outline"
            size="icon"
            onClick={() => {
              setIsOpenSearch()
              setQuery("")
            }}
            className="flex ms-auto"
          >
            <X className="text-destructive"/>
          </Button>
          {
            result.length === 0 ?
              <p className="text-lg font-semibold size-full grid place-items-center">
                Không có kết quả
              </p> :
              <ul className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 py-4">
                {
                  result.map(item => {
                    
                    return (
                      <SearchItem key={item.media_type + item.id} item={item} />
                    )
                  })
                }
              </ul>
          }
        </Container>
      </div>
    </>
  )
}
