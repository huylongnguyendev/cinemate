import Container from "@/components/common/Container"
import MovieDetails from "@/components/products/movies/details/MovieDetails"
import { IParams, ISearchParams } from "@/lib/types/params.type"
import { Suspense } from "react"

export default async function page({
  params,
  searchParams
}: IParams & { searchParams: ISearchParams }) {
  return (
    <>
      <Container className="mt-18 space-y-8">
        <Suspense>
          <MovieDetails params={params} searchParams={searchParams} />
        </Suspense>
      </Container>
    </>
  )
}
