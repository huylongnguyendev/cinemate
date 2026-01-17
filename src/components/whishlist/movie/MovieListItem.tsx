"use client"

import { IMovieDetailItem } from "@/lib/types/db/movie/detail.type"
import Image from "next/image"
import Link from "next/link"
import { smallImgURL } from "@/lib/apis/base.api"
import { Checkbox } from "@/components/ui/checkbox"
import { useAppStore } from "@/lib/stores/store"

export default function MovieListItem({ item }: { item: IMovieDetailItem }) {
  const selectedMovie = useAppStore((state) => state.selectedMovie)
  const setSelectMovie = useAppStore((state) => state.setSelectedMovie)

  const isSelect = selectedMovie.includes(item.id.toString())

  function handleSelect(id: number) {
    const setId = id.toString()

    if (!isSelect)
      setSelectMovie([...selectedMovie, setId])
    else {
      const newList = selectedMovie.filter(item => item !== setId)
      setSelectMovie(newList)
    }
  }

  return (
    <>
      <li className="flex items-center gap-10 p-4 rounded-md transitions hover:bg-card group">
        <Checkbox
          checked={isSelect}
          onCheckedChange={() => handleSelect(item.id)}
        />
        <Link
          href={`/movies/${item.id}`}
          className="flex gap-10"
        >
          <Image
            src={smallImgURL + item.poster_path}
            alt={item.title || item.original_title}
            priority
            width={50}
            height={75}
            className="size-auto rounded-md object-cover"
          />
          <div className="w-full flex flex-col justify-between">
            <div className="space-y-0.5 text-card-foreground">
              <h3 className="font-semibold transitions group-hover:text-primary">
                {item.title || item.original_title}
              </h3>
              <div className="flex items-center gap-1.5">
                <p className="font-semibold">Thể loại:</p>
                {
                  item.genres.map((g, index) =>
                    <p
                      key={g.id}
                      className="text-muted-foreground text-sm"
                    >
                      {g.name}
                      {index < item.genres.length - 1 && ","}
                    </p>
                  )
                }
              </div>
            </div>
            <p className="text-muted-foreground">{item.release_date.slice(0, 4)}</p>
          </div>
        </Link>
      </li>
    </>
  )
}
