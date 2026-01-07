import Container from "@/components/Container"
import Filters from "@/components/filters/Filters"
import MovieList, { MovieSearchParams } from "@/components/movie/MovieList"
import { Suspense } from "react"

export default function page({ searchParams }: { searchParams: Promise<MovieSearchParams> }) {
  return (
    <>
      <div className="relative space-y-0">
        <Suspense>
          <Filters />
          <Container>
            <MovieList searchParams={searchParams} />
          </Container>
        </Suspense>
      </div>
    </>
  )
}
