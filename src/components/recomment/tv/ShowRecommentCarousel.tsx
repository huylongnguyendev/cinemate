import AnimateCarousel from "@/components/carousels/AnimateCarousel"
import Heading from "@/components/common/Heading"
import { showService } from "@/lib/data/db/show.service"
import ShowRecommentCarouselItem from "./ShowRecommentCarouselItem"

export default async function ShowRecommentCarousel({ id }: { id: number }) {
  const data = await showService.getRecomment(id.toString())

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
