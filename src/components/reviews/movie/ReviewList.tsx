import Heading from "@/components/common/Heading"
import { movieService } from "@/lib/data/db/movie.service"
import { ISearchParams } from "@/lib/types/params.type"
import ReviewItem from "./ReviewItem"
import PaginationBar from "@/components/common/PaginationBar"

interface ReviewListProps {
  id: number
  searchParams: ISearchParams
}

export default async function ReviewList({ id, searchParams }: ReviewListProps) {
  const { page = "1" } = await searchParams

  const data = await movieService.getReview(`&page=${page}`, id.toString())

  return (
    <>
      <div className="space-y-10">
        <Heading>Reviews</Heading>
        <ul className="space-y-4">
          {
            typeof data === "number" || data.data.results.length === 0 ? (
              <li className="text-muted-foreground rounded-md border p-4 text-center">Chưa có đánh giá</li>
            ) : (
              data.data.results.map(item => (
                <ReviewItem key={item.id} item={item} />
              ))
            )
          }
        </ul>
        <PaginationBar
          totalPage={typeof data !== "number" ? data.data.total_pages : 0}
          scroll={false}
        />
      </div>
    </>
  )
}
