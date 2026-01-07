import { cn } from "@/lib/utils"
import { Carousel, CarouselNext, CarouselPrevious } from "../ui/carousel"

interface StaticCarouselProps {
  children: React.ReactNode
  delay?: boolean
  loop?: boolean
  duration?: number
  className?: string
}

export default function StaticCarousel({
  children,
  loop = true,
  duration,
  className,
}: StaticCarouselProps) {
  return (
    <>
      <Carousel
        opts={{ align: "start", loop, duration }}
        className={cn("w-full overflow-hidden", className)}
      >
        {children}
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </>
  )
}
