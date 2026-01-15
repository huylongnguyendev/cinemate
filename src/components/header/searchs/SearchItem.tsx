"use client"

import { smallImgURL } from "@/lib/apis/base.api"
import { useAppStore } from "@/lib/stores/store"
import { ResultSearchType } from "@/lib/types/db/movie/movie.type"
import Image from "next/image"
import Link from "next/link"

export default function SearchItem({ item }: { item: ResultSearchType }) {
  const setIsOpenSearch = useAppStore((state) => state.setIsOpenSearch)

  const displayTitle = "title" in item ? item.title || item.original_title : "name" in item ? item.name || item.original_name : ""
  return (
    <>
      <li >
        <Link
          href={item.media_type === "movie" ? `/movies/${item.id}` : `/tv-shows/${item.id}`}
          onClick={setIsOpenSearch}
          className="">
          <div className="relative w-full h-40">
            <Image
              src={smallImgURL + item.poster_path}
              alt={displayTitle}
              fill
              priority
              className="object-cover rounded-md"
            />
          </div>
          <div>
            <p className="text-lg font-semibold">
              {displayTitle}
            </p>
          </div>
        </Link>
      </li>
    </>
  )
}
