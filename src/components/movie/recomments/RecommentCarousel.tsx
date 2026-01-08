import AnimateCarousel from "@/components/carousels/AnimateCarousel"
import { CarouselContent } from "@/components/ui/carousel"
import { movieService } from "@/lib/services/movie.service"
import { MovieResponse } from "@/lib/types/movie.type"
import RecommentItem from "./RecommentItem"


export default async function RecommentCarousel({ id }: { id: string }) {
  const data: MovieResponse = await movieService.getRecomment(id)
  if (!data || data.results.length === 0) return
  return (
    <>
      <AnimateCarousel loop duration={30000}>
        <CarouselContent>
          {
            data.results.map((item, index) => (
              <RecommentItem key={item.id} item={item} index={index} />
            ))
          }
        </CarouselContent>
      </AnimateCarousel>
    </>
  )
}
