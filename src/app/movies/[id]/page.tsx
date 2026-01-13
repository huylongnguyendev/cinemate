import Container from "@/components/common/Container"
import MovieDetails from "@/components/products/movies/details/MovieDetails"
import { IParams, ISearchParams } from "@/lib/types/params.type"
import { Suspense } from "react"
import { Metadata } from "next"
import { movieService } from "@/lib/data/db/movie.service"

export async function generateMetadata({
  params
}: IParams
): Promise<Metadata> {

  const { id } = await params

  if (!id) return {
    title: ""
  }

  const res = await movieService.getOne("movie", id)
  if (typeof res !== "number" && res.data) {
    const title = `${res.data.title || res.data.original_title}`
    return {
      title,
      description: res.data.overview,
    }
  }

  return {
    title: "Không tìm thấy phim"
  }
}

export default async function page({
  params,
  searchParams
}: IParams & { searchParams: ISearchParams }) {
  return (
    <>
      <Container className="space-y-8">
        <Suspense>
          <MovieDetails params={params} searchParams={searchParams} />
        </Suspense>
      </Container>
    </>
  )
}
