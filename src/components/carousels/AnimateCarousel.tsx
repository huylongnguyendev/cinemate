"use client"

import { useRef } from "react"
import { Carousel, CarouselContent } from "../ui/carousel"
import Autoplay from "embla-carousel-autoplay"

interface AnimateCarouselProps {
  children: React.ReactNode
  delay?: number
  loop?: boolean
  duration?: number
}

export default function AnimateCarousel({
  children,
  delay = 0,
  loop = false,
  duration = 0,
}: AnimateCarouselProps) {

  const plugin = useRef(
    Autoplay({ delay, stopOnInteraction: true })
  )

  return (
    <>
      <Carousel
        opts={{ loop, duration }}
        plugins={[plugin.current]}
        className="w-full"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {children}
        </CarouselContent>
      </Carousel>
    </>
  )
}
