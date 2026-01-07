import { CountryMovieType, GenreMovieType } from "@/lib/types/movie.type"

interface ItemTitleProps {
  title: string
  originalTitle: string
  date: string
  cats: GenreMovieType
  countries: CountryMovieType
}

export default function ItemTitle({
  title,
  originalTitle,
  date,
  cats,
  countries,
}: ItemTitleProps) {
  return (
    <>
      <div className="space-y-0.5">
        <h1 className="text-lg font-semibold">{title}</h1>
        <p className="text-muted-foreground">{originalTitle}</p>
      </div>
      <div className="flex md:items-baseline-last gap-1.5 mt-4">
        <p className="max-md:w-20 font-semibold">Quốc gia:</p>
        <div className="text-muted-foreground">
          {
            countries.map((item, index) => (
              <span key={item.iso_3166_1}>{item.name}{index < countries.length - 1 && ", "}</span>
            ))
          }
        </div>
      </div>
      <div className="flex md:items-baseline-last gap-1.5">
        <p className="max-md:w-30 font-semibold">Thể loại:</p>
        <div className="text-muted-foreground">
          {
            cats.map((item, index) => (
              <span key={item.id}>{item.name}{index < cats.length - 1 && ", "}</span>
            ))
          }
        </div>
      </div>
      <div className="flex items-center gap-1.5">
        <p className="font-semibold">Năm phát hành:</p>
        <p className="text-muted-foreground">{date.slice(0, 4)}</p>
      </div>
    </>
  )
}
