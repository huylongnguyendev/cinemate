import { IDetailItem } from "@/lib/types/movie.type"
import MovieImage from "./MovieImage"
import MovieInfo from "./MovieInfo"

export default function MovieContent({ item }: {
  item: IDetailItem
}) {
  return (
    <>
      <div className="flex max-md:flex-col gap-16 h-150">
        <MovieImage
          poster={item.poster_path}
          backdrop={item.backdrop_path}
          alt={item.title || item.original_title}
        />
        <MovieInfo item={item} />
      </div>
    </>
  )
}
