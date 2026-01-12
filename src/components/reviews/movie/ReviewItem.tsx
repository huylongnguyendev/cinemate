import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { smallImgURL } from "../../../lib/apis/base.api"
import { IReviewItem } from "@/lib/types/db/review.type"
import ReviewCollapsible from "./ReviewCollapsible"

export default function ReviewItem({ item }: { item: IReviewItem }) {
  const date = new Date(item.created_at)
  const dateFormatted = date.toLocaleDateString()
  const timeFormatted = date.toLocaleTimeString()

  return (
    <>
      <li className="space-y-2 p-4 rounded-md shadow-md shadow-transparent transitions hover:shadow-accent ">
        <div className="flex items-center gap-2">
          <Avatar>
            <AvatarImage src={smallImgURL + item.author_details.avatar_path} />
            <AvatarFallback className="text-xs font-semibold">{item.author.slice(0, 2).toUpperCase()}</AvatarFallback>
          </Avatar>
          <h3 className="font-semibold">{item.author || item.author_details.name}</h3>
        </div>
        <div className="text-muted-foreground space-y-4">
          <ReviewCollapsible>{item.content}</ReviewCollapsible>
          <p className="w-fit ms-auto">{timeFormatted} - {dateFormatted}</p>
        </div>
      </li>
    </>
  )
}
