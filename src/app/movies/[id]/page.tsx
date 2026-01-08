import Container from "@/components/Container"
import MovieDetails from "@/components/movie/details/MovieDetails"
import { MovieSearchParams } from "@/components/movie/MovieList"
import DetailSkeleton from "@/components/movie/skeletons/DetailSkeleton"

import { Suspense } from "react"

export default function page({ params, searchParams }: {
  params: Promise<{ id: string }>
  searchParams: Promise<Pick<MovieSearchParams, "page">>
}) {

  return (
    <>
      <Container className="mt-20">
        <Suspense fallback={<DetailSkeleton />}>
          <MovieDetails params={params} searchParams={searchParams} />
        </Suspense>
      </Container>
    </>
  )
}
