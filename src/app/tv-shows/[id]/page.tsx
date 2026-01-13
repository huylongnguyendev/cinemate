import Container from "@/components/common/Container"
import ShowDetails from "@/components/products/tv/details/ShowDetails"
import { showService } from "@/lib/data/db/show.service"
import { IParams, ISearchParams } from "@/lib/types/params.type"
import { Metadata } from "next"
import { Suspense } from "react"

export async function generateMetadata({
  params
}: IParams
): Promise<Metadata> {

  const { id } = await params

  if (!id) return {
    title: ""
  }

  const res = await showService.getOne("movie", id)
  if (typeof res !== "number" && res.data) {
    const title = `${res.data.name || res.data.original_name}`
    return {
      title,
      description: res.data.overview,
    }
  }

  return {
    title: "Không tìm thấy phim"
  }
}

export default function page({
  params,
  searchParams
}: IParams & { searchParams: ISearchParams }) {
  return (
    <>
      <Container className="space-y-8">
        <Suspense>
          <ShowDetails params={params} searchParams={searchParams} />
        </Suspense>
      </Container>
    </>
  )
}
