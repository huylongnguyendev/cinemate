
import { MovieResponse } from "@/lib/types/movie.type"
import MovieItem from "./items/MovieItem"
import { movieService } from "@/lib/services/movie.service"
import PaginationBar from "../PaginationBar"

export interface MovieSearchParams {
  query?: string
  page?: string
  genre?: string
  year?: string
  sort_by?: string
  with_origin_country?: string
}


export default async function MovieList({
  searchParams }: {
    searchParams: Promise<MovieSearchParams>
  }) {
  const resultParams = await searchParams
  const page = resultParams?.page || "1"
  const year = resultParams?.year || ""
  const sort = resultParams?.sort_by || ""
  const country = resultParams?.with_origin_country || ""

  const params = `page=${page}&primary_release_year=${year}&sort_by=${sort}&with_origin_country=${country}`
  const data: MovieResponse = await movieService.getMovie(params)

  return (
    <>
      <div className="space-y-8 py-4">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {
            data && data.results.length > 0 ? data.results.map((item, index: number) => (
              <MovieItem key={item.id} item={item} index={index} />
            )) : (<div>Danh sách trống</div>)
          }
        </div>
        <PaginationBar totalPage={data?.total_pages || 0} />
      </div>
    </>
  )
}
