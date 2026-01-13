import { ResultType } from "@/lib/types/db/tv/show.type"
import Image from "next/image"
import Link from "next/link"
import { CarouselItem } from "@/components/ui/carousel"
import { smallImgURL } from "@/lib/apis/base.api"

export default function ShowRecommentCarouselItem({item, index}:{item: ResultType, index: number}) {
  return (
    <>
    <CarouselItem className="md:basis-1/2 lg:basis-1/4">
              <Link href={`/tv-shows/${item.id}`} className="space-y-2 group">
                <div className="relative w-full h-40">
                  <div className="relative size-full z-10 transitions group-hover:bg-background/50" />
                  <Image
                    src={smallImgURL + item.poster_path}
                    alt={item.name || item.original_name}
                    fill
                    priority={index < 5}
                    className="object-cover rounded-md" />
                </div>
                <h3 className="font-semibold transitions group-hover:text-primary">{item.name}</h3>
              </Link>
            </CarouselItem>
    </>
  )
}
