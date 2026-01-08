import { CarouselContent, CarouselItem } from "@/components/ui/carousel"
import { CompanyType } from "@/lib/types/movie.type"
import Image from "next/image"
import { imgURL } from "@/lib/apis/base.api"
import AnimateCarousel from "@/components/carousels/AnimateCarousel"

interface ItemOverviewProps {
  overview: string
  companies: CompanyType
}

export default function ItemOverview({
  overview,
  companies
}: ItemOverviewProps) {
  return (
    <>
      <div className="mt-auto">
        <div className="mt-auto text-balance">
          <p className="font-semibold">Nội dung:</p>
          <p className="text-muted-foreground">{overview}</p>
        </div>
        <div className="mt-8 space-y-4">
          <p className="font-semibold">Đơn vị sản xuất:</p>
          <AnimateCarousel loop delay>
            <CarouselContent>
              {
                companies.map(item => (
                  <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/3 h-30 bg-muted grid place-items-center">
                    <Image
                      src={imgURL + item.logo_path}
                      alt={item.name}
                      width={140}
                      height={140}
                      className="object-cover"
                    />
                    <p>{item.name}</p>
                  </CarouselItem>
                ))
              }
            </CarouselContent>
          </AnimateCarousel>
        </div>
      </div>
    </>
  )
}
