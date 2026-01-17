
import { IShowDetailItem } from "@/lib/types/db/tv/detail.type"
import ShowListItem from "./ShowListItem"
import NotFound from "@/app/whishlist/not-found"

export default function ShowList({ listShow }: { listShow: IShowDetailItem[] }) {

  return (
    <>
      <ul className="h-140 overflow-y-scroll rounded-md">
        {
          listShow && listShow.length > 0 ? (
            listShow.map(item => (
              <ShowListItem key={item.id} item={item} />
            ))
          ) : (
            <NotFound />
          )
        }
      </ul>
    </>
  )
}
