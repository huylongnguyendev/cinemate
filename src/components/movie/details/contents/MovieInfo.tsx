import { IDetailItem } from "@/lib/types/movie.type"
import ItemTitle from "./info/ItemTitle"
import ItemOverview from "./info/ItemOverview"
import ItemScore from "./info/ItemScore"
import ItemActions from "./info/ItemActions"
export default function MovieInfo({ item }: {
  item: IDetailItem
}) {
  return (
    <>
      <div className="w-full md:w-2/3 h-full flex flex-col">
        <ItemTitle
          title={item.title || item.original_title}
          originalTitle={item.original_title}
          date={item.release_date}
          cats={item.genres}
          countries={item.production_countries}
        />
        <ItemScore score={item.vote_average} />
        <ItemActions />
        <ItemOverview
          overview={item.overview}
          companies={item.production_companies}
        />
      </div>
    </>
  )
}
