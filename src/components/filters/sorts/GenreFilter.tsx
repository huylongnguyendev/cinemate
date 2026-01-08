import { Button } from "@/components/ui/button"
import { Suspense } from "react"
import GenreDropdown from "./GenreDropdown"
import { genreService } from "@/lib/services/genre.service"
import { GenreResponse } from "@/lib/types/genre.type"

export default async function GenreFilter() {
  const data: GenreResponse = await genreService.getCountries()

  return (
    <>
      <Suspense fallback={<Button variant="outline" disabled>Quốc gia</Button>}>
        <GenreDropdown data={data.genres} />
      </Suspense >
    </>
  )
}
