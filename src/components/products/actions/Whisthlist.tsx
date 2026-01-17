"use client"

import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { IMovieDetailItem } from "@/lib/types/db/movie/detail.type"
import { IShowDetailItem } from "@/lib/types/db/tv/detail.type"
import { Heart } from "lucide-react"
import { useState } from "react"
import { toast } from "sonner"

export default function Whisthlist({ item }: { item: IMovieDetailItem | IShowDetailItem }) {
  const [list, setList] = useState<(IMovieDetailItem | IShowDetailItem)[]>(() => {
    if (typeof window !== "undefined") {
      const storage = localStorage.getItem("list")
      if (storage) {
        try {
          const parse = JSON.parse(storage)
          return Array.isArray(parse) ? parse : []
        } catch {
          return []
        }
      }
    } return []
  })
  const [isActive, setIsActive] = useState<boolean>(false)

  function handleClick(movie: IMovieDetailItem | IShowDetailItem) {
    const isExist = list.find(item => item?.id === movie.id)
    let newList
    if (!isExist) {
      newList = [...list, movie]
      setIsActive(true)
    } else {
      newList = list.filter(item => item?.id !== movie.id)
      setIsActive(false)
    }
    setList(newList)
    const value = JSON.stringify(newList)
    localStorage.setItem("list", value)
    toast.success("Đã thêm vào danh sách yêu thích")
  }

  return (
    <>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="secondary"
            size="icon"
            onClick={() => handleClick(item)}
          >
            <Heart className={isActive ? "text-green-500" : ""} />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          Thêm vào yêu thích
        </TooltipContent>
      </Tooltip>
    </>
  )
}
