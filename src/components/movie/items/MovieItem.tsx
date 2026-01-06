import { IMovieItem } from "@/lib/types/movie.type"
import Link from "next/link"
import MovieImage from "./MovieImage"
import MovieTitle from "./MovieTitle"

interface MovieItemProps {
  index: number
  item: IMovieItem
}

export default function MovieItem({ item, index }: MovieItemProps) {
  return (
    <>
      <div className="group">
        <Link href={`/movies/${item.id}`} className="space-y-4">
          <MovieImage
            image={item.poster_path}
            alt={item.title || item.original_name || item.original_title}
            index={index}
          />
          <MovieTitle
            language={item.original_language}
            date={item.release_date}
            title={item.title || item.original_name || item.original_title}
            voteCount={item.vote_count}
          />
        </Link>
      </div>
    </>
  )
}
