import { Skeleton } from "@/components/ui/skeleton"

export default function DetailSkeleton() {
  return (
    <>
      <div className="flex max-md:flex-col gap-10 h-150">
        <Skeleton className="w-full md:w-1/3 h-150" />
        <div className="w-full md:w-2/3 h-150">
          <div className="space-y-0.5">
            <Skeleton className="w-full h-7" />
            <Skeleton className="w-full h-6" />
          </div>
          <div className="mt-4 space-y-1">
            <div className="flex items-center gap-1.5">
              <p className="font-semibold w-20">Quốc gia:</p>
              <Skeleton className="w-30 h-6" />
            </div>
            <div className="flex items-center gap-1.5">
              <p className="font-semibold w-20">Thể loại:</p>
              <Skeleton className="w-30 h-6" />
            </div>
            <div className="flex items-center gap-1.5">
              <p className="font-semibold w-32">Năm phát hành:</p>
              <Skeleton className="w-20 h-6" />
            </div>
          </div>
          <p className="mt-8.5 font-semibold w-20">Điểm: 0</p>
          <div className="space-y-0.5 mt-10">
            <p className="font-semibold">Nội dung:</p>
            <Skeleton className="w-full h-30" />
          </div>
          <div className="mt-8 space-y-4">
            <p className="font-semibold">Đơn vị sản xuất:</p>
            <Skeleton className="w-66.75 h-30" />
          </div>
        </div>
      </div>
    </>
  )
}
