import { CarouselItem } from "@/components/ui/carousel"
import { IMovieItem } from "@/lib/types/movie.type"
import Link from "next/link"
import MovieItem from "../items/MovieItem"

export default function RecommentItem({ item, index }: { item: IMovieItem, index: number }) {
  return (
    <>
      <CarouselItem className="md:basis-1/3 lg:basis-1/5 group overflow-hidden">
        <Link href={"/movies/" + item.id}>
          <MovieItem item={item} index={index} />
        </Link>
      </CarouselItem>
    </>
  )
}
