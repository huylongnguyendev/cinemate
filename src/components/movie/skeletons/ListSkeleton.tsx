import { Skeleton } from "@/components/ui/skeleton"

export default function ListSkeleton() {
  return (
    <>
      <div className="w-full h-131.25">
        <Skeleton className="w-full h-114" />
        <div className="mt-4 space-y-2">
          <Skeleton className="w-full h-6" />
          <Skeleton className="w-full h-5.25" />
        </div>
      </div>
    </>
  )
}
