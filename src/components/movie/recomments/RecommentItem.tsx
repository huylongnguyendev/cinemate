import { CarouselItem } from "@/components/ui/carousel"
import { imgURL } from "@/lib/apis/base.api"
import { IMovieItem } from "@/lib/types/movie.type"
import Image from "next/image"
import Link from "next/link"

export default function RecommentItem({ item, index }: { item: IMovieItem, index: number }) {
  return (
    <>
      <CarouselItem className="md:basis-1/3 lg:basis-1/5 group overflow-hidden">
        <Link href={`/movies/${item.id}`} className="block rounded-md overflow-hidden">
          <div className="relative w-full h-96 transitions rounded-md overflow-hidden group-hover:scale-105">
            <div className="absolute size-full z-10 transitions group-hover:bg-black/50" />
            <Image
              src={imgURL + item.poster_path}
              alt={item.title || item.original_title}
              fill
              priority={index < 4}
              className="object-cover"
            />
          </div>
          <div className="mt-4">
            <h3 className="font-semibold truncate transitions group-hover:text-primary">{item.title || item.original_title}</h3>
            <p className="text-muted-foreground">{item.release_date.slice(0, 4)}</p>
          </div>
        </Link>
      </CarouselItem>
    </>
  )
}
