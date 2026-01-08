import { IReviewItem } from "@/lib/types/review.type"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import ItemContent from "./ItemContent"

export default function ReviewItem({ item }: { item: IReviewItem }) {
  const date = new Date(item.created_at)
  const formarttedDate = date.toLocaleDateString()
  const formarttedTime = date.toLocaleTimeString()

  return (
    <>
      <li className="space-y-2 p-4 rounded-md border shadow-md shadow-transparent transitions hover:shadow-primary">
        <div className="flex items-center gap-2">
          <Avatar>
            <AvatarImage
              src={item.author_details.avatar_path}
              alt={item.author_details.name || item.author_details.username}
            />
            <AvatarFallback
              className="font-semibold uppercase">
              {item.author_details.name.charAt(0) || item.author_details.username.charAt(0)}
            </AvatarFallback>
          </Avatar>
          <p className="font-semibold">
            {item.author_details.name || `user${parseInt(item.id) * 12}`}
          </p>
        </div>
        <div className="space-y-8">
          <ItemContent content={{ content: item.content }} />
          <p className="w-fit ms-auto text-muted-foreground">
            {formarttedTime} - {formarttedDate}
          </p>
        </div>
      </li>
    </>
  )
}
