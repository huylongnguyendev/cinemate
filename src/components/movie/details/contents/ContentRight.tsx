import { CompanyType, GenreMovieType } from "@/lib/types/movie.type"

interface ContentRightProps {
  title: string
  originalTitle: string
  genres: GenreMovieType
  desc: string
  companies: CompanyType
  date: string
  vote: number
  runtime: number
}

export default function ContentRight({
  title,
  originalTitle,
  genres,
  desc,
  companies,
  date,
  vote,
  runtime,
}: ContentRightProps) {
  const setVoteColor = vote >= 8 ? "text-green-400" : vote >= 6 ? "text-yellow-400" : vote >= 4 ? "text-orange-400" : "text-red-400"

  const hours = Math.floor(runtime / 60)
  const mins = runtime % 60

  return (
    <>
      <div className="w-full md:w-2/3 md:ps-8">
        <h1 className="text-lg font-semibold">{title}</h1>
        <p className="text-muted-foreground">{originalTitle}</p>
        <p className="mt-4">Thời lượng: {hours}h{mins}m</p>
        <p className="font-semibold my-8">Điểm: <span className={setVoteColor}>{vote.toFixed(2)}</span></p>
        <p className="space-x-1.5">Thể loại: {genres.map((item, index) => (
          <span key={item.id}>
            {item.name}
            {index < genres.length - 1 && ","}
          </span>
        ))}
        </p>
        <p className="mt-1 mb-8">Năm phát hành: {date.slice(0, 4)}</p>
        <p className="text-muted-foreground">{desc}</p>
      </div>
    </>
  )
}
