import { IDetailItem } from "@/lib/types/movie.type"
import ContentLeft from "./ContentLeft"
import ContentRight from "./ContentRight"

export default function ContentTop({ item }: { item: IDetailItem }) {
  return (
    <>
      <div className="flex max-md:flex-col gap-5">
        <ContentLeft
          image={item.poster_path}
          backdrop={item.backdrop_path}
          alt={item.title || item.original_title}
        />
        <ContentRight
          title={item.title || item.original_title}
          originalTitle={item.original_title}
          genres={item.genres}
          desc={item.overview}
          companies={item.production_companies}
          date={item.release_date}
          vote={item.vote_average}
          runtime={item.runtime}
        />
      </div>
    </>
  )
}
