import Container from "@/components/Container"
import MovieDetails from "@/components/movie/details/MovieDetails"
import { Suspense } from "react"

export default function page({ params }: { params: Promise<{ id: string }> }) {

  return (
    <>
      <Container>
        <Suspense>
          <MovieDetails params={params} />
        </Suspense>
      </Container>
    </>
  )
}
