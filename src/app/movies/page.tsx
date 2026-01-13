import Container from "@/components/common/Container"
import MovieList from "@/components/products/movies/MovieList"
import { Skeleton } from "@/components/ui/skeleton"
import { ISearchParams } from "@/lib/types/params.type"
import { Suspense } from "react"


export default function page({ searchParams }: { searchParams: Promise<ISearchParams> }) {
  return (
    <>
      <Container>
        <Suspense fallback={
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-5">
            {
              Array.from({ length: 6 }).map((_, index) => (
                <div key={"menu-movie--" + index} className="space-y-2">
                  <Skeleton className="w-full max-sm:h-100 h-80" />
                  <Skeleton className="w-full h-6" />
                </div>
              ))
            }
          </div>
        }>
          <MovieList searchParams={searchParams} />
        </Suspense>
      </Container>
    </>
  )
}
