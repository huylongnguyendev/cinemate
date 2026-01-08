import { movieService } from "@/lib/services/movie.service"
import { ReviewResponse } from "@/lib/types/review.type"
import ReviewItem from "./ReviewItem"
import PaginationBar from "../PaginationBar"

export default async function ReviewList({ id, page }: { id: string, page: string }) {

  const data: ReviewResponse = await movieService.getReview(id, page)

  return (
    <>
      <div className="space-y-4 py-4">
        <h2 className="text-lg font-semibold">Reviews</h2>
        <ul className="space-y-4">
          {
            !data || data.results.length === 0 ? (<li className="flex items-center justify-center w-full py-2 rounded-md border font-semibold">Chưa có bình luận</li>)
              : data.results.map(item => (
                <ReviewItem key={item.id} item={item} />
              ))
          }
        </ul>
        <PaginationBar totalPage={data.total_pages} />
      </div>
    </>
  )
}
