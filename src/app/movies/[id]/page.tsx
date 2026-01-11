import Container from "@/components/common/Container"
import MovieDetails from "@/components/products/movies/details/MovieDetails"
import { IParams } from "@/lib/types/params.type"
import { Suspense } from "react"

export default async function page({ params }: IParams) {
  return (
    <>
      <Container className="mt-18 space-y-4">
        <Suspense>
          <MovieDetails params={params} />
        </Suspense>
      </Container>
    </>
  )
}
