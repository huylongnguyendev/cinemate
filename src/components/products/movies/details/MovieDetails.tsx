import Toast from "@/components/common/Toast"
import { movieService } from "@/lib/data/db/movie.service"
import { IParams, ISearchParams } from "@/lib/types/params.type"
import { notFound } from "next/navigation"
import DetailTop from "./DetailTop"
import Image from "next/image"
import { largeImgURL } from "@/lib/apis/base.api"
import BreadcrumbBar from "@/components/common/BreadcrumbBar"
import JobsListCarousel from "@/components/jobs/JobsListCarousel"
import ReviewList from "@/components/reviews/movie/ReviewList"
import MovieRecommentCarousel from "@/components/recomment/movie/MovieRecommentCarousel"
import { Dialog } from "@/components/ui/dialog"
import ModalContent from "@/components/modals/ModalContent"
import { videoService } from "@/lib/data/db/video.service"
import { VideoResponse } from "@/lib/types/db/video.type"

export default async function MovieDetails({
  params,
  searchParams }: IParams & { searchParams: ISearchParams }) {
  const { id } = await params

  const data = await movieService.getOne("movie", id)
  if (!data || typeof data === "number") return notFound()

  const trailerData: VideoResponse = await videoService.getVideo("movie", id)
  
  return (
    <>
      <Dialog>
        <Toast
          status={typeof data === "number" ? data : data.status}
          errorText={"Lỗi khi tìm phim hoặc phim không tồn tại"}
        />
        <BreadcrumbBar id={data.data.id.toString()} name={data.data.title || data.data.original_title} />
        <div className="relative flex max-md:flex-col gap-10">
          <div className="absolute size-full -z-10">
            <Image
              src={largeImgURL + data.data.backdrop_path}
              alt={data.data.title || data.data.original_title + "backdrop"}
              fill
              priority
              className="object-cover"
            />
            <div className="absolute size-full bg-linear-to-b from-background/60 via-background/5 to-transparent" />
            <div className="absolute size-full bg-linear-to-t from-background via-background/60 to-transparent" />
          </div>
          <DetailTop item={data.data} />
        </div>
        <JobsListCarousel id={data.data.id} />
        <ReviewList id={data.data.id} searchParams={searchParams} />
        <MovieRecommentCarousel id={data.data.id} />
        <ModalContent
          name={data.data.title || data.data.original_title}
          item={trailerData.results}
        />
      </Dialog>
    </>
  )
}
