"use client"

import { IMovieDetailItem } from "@/lib/types/db/movie/detail.type"
import MovieListItem from "./MovieListItem"
import NotFound from "@/app/whishlist/not-found"
import { useAppStore } from "@/lib/stores/store"
import { IShowDetailItem } from "@/lib/types/db/tv/detail.type"

export default function MoviseList({ data }: { data: (IMovieDetailItem | IShowDetailItem)[] }) {
  const movies = useAppStore((state) => state.movies)
  const setMovies = useAppStore((state) => state.setMovies)

  const list = data.filter((item): item is IMovieDetailItem => "title" in data)
  setMovies(list)

  return (
    <>
      <ul className="h-140 overflow-y-scroll rounded-md">
        {
          movies && movies.length > 0 ? (
            movies.map(item => (
              <MovieListItem key={item.id} item={item} />
            ))
          ) : (
            <NotFound />
          )
        }
      </ul>
    </>
  )
}
