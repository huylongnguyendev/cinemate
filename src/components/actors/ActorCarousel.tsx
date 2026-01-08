import { movieService } from "@/lib/services/movie.service"
import StaticCarousel from "../carousels/StaticCarousel"
import { CarouselContent, CarouselItem } from "../ui/carousel"
import { CreditResponse } from "@/lib/types/creadit.type"
import Image from "next/image"
import { imgURL } from "@/lib/apis/base.api"

export default async function ActorCarousel({ id }: { id: string }) {
  const data: CreditResponse | undefined = await movieService.getCredit(id)
  if (!data) return

  return (
    <>
      <StaticCarousel>
        <CarouselContent>
          {
            data.cast.map(item => (
              <CarouselItem key={item.cast_id} className="md:basis-1/4 lg:basis-1/6 h-fit">
                <div className="relative w-full h-80 -z-10 rounded-md overflow-hidden">
                  <Image
                    src={imgURL + item.profile_path}
                    alt={item.name || item.original_name}
                    fill
                    className="object-cover -z-10"
                  />
                </div>
                <div className="space-y-4 truncate py-2">
                  <h3 className="font-semibold">{item.name || item.original_name}</h3>
                  <p className="text-muted-foreground text-sm">{item.character}</p>
                </div>
              </CarouselItem>
            ))
          }
        </CarouselContent>
      </StaticCarousel>
    </>
  )
}
