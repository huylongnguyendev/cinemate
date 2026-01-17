"use client"

import Container from "@/components/common/Container"
import { Button } from "@/components/ui/button"
// import MoviseList from "@/components/whishlist/movie/MoviseList"
// import ShowList from "@/components/whishlist/tv/ShowList"
// import { useAppStore } from "@/lib/stores/store"
// import { IMovieDetailItem } from "@/lib/types/db/movie/detail.type"
// import { IShowDetailItem } from "@/lib/types/db/tv/detail.type"
import { Trash2 } from "lucide-react"
// import { notFound } from "next/navigation"
// import { useEffect, useState } from "react"

export default function Page() {
  // const [storage, setStorage] = useState<(IMovieDetailItem | IShowDetailItem)[]>()

  // function getData() {
  //   const list = localStorage.getItem("list")
  //   if (list) {
  //     const parse = JSON.parse(list)
  //     return Array.isArray(parse) ? parse : []
  //   } else return []
  // }

  // useEffect(() => {
  //   const list = getData()
  //   setStorage(list)
  // }, [])

  // if (!storage) return notFound()

  return (
    <>
      <Container className="space-y-8">
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold">Phim chiếu rạp</h2>
            <Button
              variant="destructive"
            // disabled={selectedMovie.length === 0}
            // onClick={handleRemoveMovie}
            >
              <Trash2 />
              <p>Xóa khỏi danh sách</p>
            </Button>
          </div>
          {/* <MoviseList data={storage} /> */}
        </div>
        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Phim bộ và chương trình truyền hình</h2>
          {/* <ShowList listShow={shows} /> */}
        </div>
      </Container>
    </>
  )
}
