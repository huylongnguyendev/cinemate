"use client"

import { Carousel, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { useRef } from "react"
import Autoplay from "embla-carousel-autoplay"

interface AnimateCarouselProps {
  children: React.ReactNode
  delay?: boolean
  loop?: boolean
  duration?: number
}

export default function AnimateCarousel({
  children,
  delay = false,
  loop = true,
  duration,
}: AnimateCarouselProps) {
  const delayValue = delay ? 3000 : 0
  const plugin = useRef(
    Autoplay({ delay: delayValue, stopOnInteraction: true })
  )

  return (
    <>
      <Carousel
        opts={{ loop, duration }}
        plugins={[plugin.current]}
        className="w-full overflow-hidden"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        {children}
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </>
  )
}
