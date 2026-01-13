import AnimateCarousel from "@/components/carousels/AnimateCarousel"
import { CarouselItem } from "@/components/ui/carousel"
import { smallImgURL } from "@/lib/apis/base.api"
import { IShowDetailItem } from "@/lib/types/db/tv/detail.type"
import { cn, setColor } from "@/lib/utils"
import Image from "next/image"
import DetailAction from "../../actions/DetailAction"

export default function DetailTop({ item }: { item: IShowDetailItem }) {
  const color = setColor(item.vote_average)

  return (
    <>
      <div className="w-full md:w-1/3 h-120 sm:h-130 p-4">
        <div className="relative w-full lg:w-2/3 h-120 sm:h-100 lg:h-100 top-1/2 left-1/2 -translate-1/2">
          <Image
            src={smallImgURL + item.poster_path}
            alt={item.name || item.original_name}
            fill
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 33vw, 25vw"
            className="object-cover rounded-md"
          />
        </div>
      </div>
      <div className="w-full md:w-2/3 p-4">
        <div className="font-semibold">
          <h1 className="text-lg">{item.name || item.original_name}</h1>
          <p className="text-muted-foreground">{item.original_name}</p>
        </div>
        <div className="mt-8 space-y-1 flex flex-col">
          <div className="flex items-center gap-1">
            <p className="font-semibold">Điểm:</p>
            <p className={cn("text-xl", color)}>{item.vote_average}</p>
          </div>
          <div className="flex items-center gap-1">
            <p className="font-semibold">Năm sản xuất:</p>
            <p className="text-muted-foreground">{item.first_air_date.slice(0, 4)}</p>
          </div>
          <div className="flex items-center gap-1">
            <p className="font-semibold">Trạng thái:</p>
            <p className={
              cn("font-semibold", item.in_production ? "text-amber-500" : "text-green-500")
            }>
              {item.in_production ? "Đang chiếu" : "Hoàn thành"}
            </p>
          </div>
          <div className="flex items-center gap-1">
            <div className="flex items-center gap-1">
              <p className="font-semibold">Số mùa:</p>
              <p className="text-muted-foreground">
                {item.last_episode_to_air.season_number}/{item.number_of_seasons}
              </p>
            </div>
            <p className="font-semibold">-</p>
            <div className="flex items-center gap-1">
              <p className="font-semibold">Số tập:</p>
              <p className="text-muted-foreground">
                {item.last_episode_to_air.episode_number}/{item.seasons[item.seasons.length - 1].episode_count}
              </p>
            </div>
          </div>
          <div className="flex md:items-baseline-last gap-0.5">
            <p className="font-semibold">Thể loại:</p>
            <div className="text-muted-foreground">
              {
                item.genres.map((genre, index) => (
                  <span key={genre.id}>{genre.name}{index < item.genres.length - 1 && ", "}</span>
                ))
              }
            </div>
          </div>
          <div className="flex items-center gap-1">
            <p className="font-semibold">Ngôn ngữ:</p>
            {
              item.spoken_languages.map((lang, index) => (
                <span key={lang.iso_639_1} className="text-muted-foreground">{lang.name}{index < item.spoken_languages.length - 1 && ", "}</span>
              ))
            }
          </div>
          <DetailAction />
          <div className="space-y-0.5 my-8">
            <p className="font-semibold">Nội dung:</p>
            <p className="text-muted-foreground text-balance">{item.overview}</p>
          </div>
          <div className="space-y-0.5">
            <p className="font-semibold">Sản xuất:</p>
            <AnimateCarousel delay={0} loop duration={3000} >
              {
                item.production_companies.map((item) => (
                  <CarouselItem
                    key={item.id}
                    className="md:basis-1/2 lg:basis-1/3 p-4"
                  >
                    {item.name}
                  </CarouselItem>
                ))
              }
            </AnimateCarousel>
          </div>
        </div>
      </div>
    </>
  )
}
