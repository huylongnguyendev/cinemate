import Container from "@/components/Container"
import MovieList, { MovieSearchParams } from "@/components/movie/MovieList"
import { Suspense } from "react"

export default function page({ searchParams }: { searchParams: Promise<MovieSearchParams> }) {
  return (
    <>
      <Container>
        <Suspense>
          <MovieList searchParams={searchParams} />
        </Suspense>
      </Container>
    </>
  )
}
