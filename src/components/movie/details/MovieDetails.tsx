import { movieService } from "@/lib/services/movie.service"
import { notFound } from "next/navigation"
import MovieContent from "./contents/MovieContent"
import ActorCarousel from "@/components/actors/ActorCarousel"
import { Suspense } from "react"

export default async function MovieDetails({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const data = await movieService.getOneMovie(id)

  if (!data) return notFound()

  return (
    <>
      <div >
        <MovieContent item={data} />
          <Suspense>
            <div className="mt-10 space-y-5">
              <h2 className="font-semibold text-lg">Diễn viên</h2>
              <ActorCarousel id={id} />
            </div>
          </Suspense>
      </div>
    </>
  )
}
