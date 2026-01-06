import { movieService } from "@/lib/services/movie.service"
import { notFound } from "next/navigation"
import ContentTop from "./contents/ContentTop"

export default async function MovieDetails({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params

  const data = await movieService.getOneMovie(id)

  if (!data) return notFound()

  return (
    <>
      <ContentTop item={data} />
    </>
  )
}
