import BreadcrumbBar from "@/components/common/BreadcrumbBar"
import Toast from "@/components/common/Toast"
import JobsListCarousel from "@/components/jobs/JobsListCarousel"
import ReviewList from "@/components/reviews/movie/ReviewList"
import { largeImgURL } from "@/lib/apis/base.api"
import { showService } from "@/lib/data/db/show.service"
import { IParams, ISearchParams } from "@/lib/types/params.type"
import Image from "next/image"
import { notFound } from "next/navigation"
import DetailTop from "./DetailTop"
import ShowRecommentCarousel from "@/components/recomment/tv/ShowRecommentCarousel"

export default async function ShowDetails({
  params,
  searchParams
}: IParams & { searchParams: ISearchParams }) {
  const { id } = await params

  const data = await showService.getOne("tv", id)
  if (!data || typeof data === "number") return notFound()

  return (
    <>
      <Toast
        status={typeof data === "number" ? data : data.status}
        errorText={"Lỗi khi tìm phim hoặc phim không tồn tại"}
      />
      <BreadcrumbBar id={data.data.id.toString()} name={data.data.name || data.data.original_name} />
      <div className="relative flex max-md:flex-col gap-10">
        <div className="absolute size-full -z-10">
          <Image
            src={largeImgURL + data.data.backdrop_path}
            alt={data.data.name || data.data.original_name + "backdrop"}
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
      <ShowRecommentCarousel id={data.data.id} />
    </>
  )
}
