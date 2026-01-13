import AnimateCarousel from "@/components/carousels/AnimateCarousel"
import Heading from "@/components/common/Heading"
import ShowRecommentCarouselItem from "./MovieRecommentCarouselItem"
import { movieService } from "@/lib/data/db/movie.service"

export default async function MovieRecommentCarousel({ id }: { id: number }) {
  const data = await movieService.getRecomment(id.toString())

  if (typeof data === "number" || data.data.results.length === 0) return

  return (
    <>
      <Heading>Có thể bạn muốn xem</Heading>
      <AnimateCarousel delay={0} loop duration={30000} >
        {
          data.data.results.map((item, index) => (
            <ShowRecommentCarouselItem key={item.id} index={index} item={item} />
          ))
        }
      </AnimateCarousel>
    </>
  )
}
