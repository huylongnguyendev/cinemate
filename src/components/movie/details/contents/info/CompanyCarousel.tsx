"use client"

import { Carousel } from "@/components/ui/carousel"
import { useRef } from "react"
import Autoplay from "embla-carousel-autoplay"

export default function CompanyCarousel({ children }: { children: React.ReactNode }) {
  const plugin = useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

  return (
    <>
      <Carousel
        opts={{ loop: true }}
        plugins={[plugin.current]}
        className="w-full rounded-md overflow-hidden"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        {children}
      </Carousel>
    </>
  )
}
