import { Clock, Globe, Vote } from "lucide-react"

interface MovieTitleProps {
  title: string
  date: string
  language: string
  voteCount: number
}

export default function MovieTitle({ date, language, title, voteCount }: MovieTitleProps) {
  return (
    <>
      <div className="space-y-2">
        <h2 className="font-semibold truncate transitions group-hover:text-primary">{title}</h2>
        <div className="[&_svg]:size-3 text-sm text-muted-foreground font-semibold space-x-4">
          <p className="inline-flex items-center gap-0.5">
            <Globe />
            <span className="uppercase">{language}</span>
          </p>
          <p className="inline-flex items-center gap-0.5">
            <Clock />
            <span className="uppercase">{date.slice(0, 4)}</span>
          </p>
          <p className="inline-flex items-center gap-0.5">
            <Vote />
            <span className="uppercase">{voteCount.toLocaleString("vi-VN")}</span>
          </p>
        </div>
      </div>
    </>
  )
}
