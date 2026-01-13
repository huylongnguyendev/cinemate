import { movieService } from "@/lib/data/db/movie.service"
import StaticCarousel from "../carousels/StaticCarousel"
import Heading from "../common/Heading"
import CastItem from "./CastItem"
import CrewItem from "./CrewItem"

export default async function JobsListCarousel({ id }: { id: number }) {
  const data = await movieService.getCredit(id.toString())

  return (
    <>
      <div className="space-y-10">
        <Heading>Diễn viên</Heading>
        {typeof data !== "number" && data.data.cast.length > 0
          && (
            <StaticCarousel>
              {
                data.data.cast.map(item => (
                  <CastItem key={item.cast_id} item={item} />
                ))
              }
            </StaticCarousel>
          ) || (
            <div className="p-4 text-accent-foreground text-center font-semibold w-full">Không có thông tin</div>
          )

        }
      </div>
      <div className="space-y-10">
        <Heading>Crew</Heading>
        {typeof data !== "number" && data.data.crew.length > 0
          && (
            <StaticCarousel>
              {
                data.data.crew.map(item => (
                  <CrewItem key={item.credit_id} item={item} />
                ))
              }
            </StaticCarousel>
          ) || (
            <div className="p-4 text-accent-foreground text-center font-semibold w-full">Không có thông tin</div>
          )
        }
      </div>
    </>
  )
}
