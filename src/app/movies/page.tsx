import Container from "@/components/Container"
import Filters from "@/components/filters/Filters"
import MovieList, { MovieSearchParams } from "@/components/movie/MovieList"
import ListSkeleton from "@/components/movie/skeletons/ListSkeleton"
import { Suspense } from "react"

export default function page({ searchParams }: { searchParams: Promise<MovieSearchParams> }) {
  return (
    <>
      <div className="relative space-y-0">
        <Suspense fallback={
          <div className="mt-37 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {
              Array.from({ length: 10 }).map((_, index) => (
                <ListSkeleton key={"movie-item-" + index} />
              ))
            }
          </div>
        }>
          <Filters />
          <Container>
            <MovieList searchParams={searchParams} />
          </Container>
        </Suspense>
      </div>
    </>
  )
}
