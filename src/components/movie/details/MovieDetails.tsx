import { movieService } from "@/lib/services/movie.service"
import { notFound } from "next/navigation"
import MovieContent from "./contents/MovieContent"
import ActorCarousel from "@/components/actors/ActorCarousel"
import { Suspense } from "react"
import ReviewList from "@/components/reviews/ReviewList"

export default async function MovieDetails({ params, searchParams }: {
  params: Promise<{ id: string }>
  searchParams: Promise<{ page?: string }>
}) {
  const { id } = await params
  const resultParams = await searchParams
  const page = resultParams?.page || "1"
  const data = await movieService.getOneMovie(id)

  if (!data) return notFound()

  return (
    <>
      <div >
        <MovieContent item={data} />
        <Suspense>
          <div className="mt-10 space-y-10">
            <h2 className="font-semibold text-lg">Diễn viên</h2>
            <ActorCarousel id={id} />
            <ReviewList id={id} page={page} />
          </div>
        </Suspense>
      </div>
    </>
  )
}
