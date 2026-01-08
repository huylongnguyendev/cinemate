import { imgOriginalURL, imgURL } from "@/lib/apis/base.api"
import Image from "next/image"

interface MovieImageProps {
  poster: string
  backdrop: string
  alt: string
}

export default function MovieImage({
  poster,
  backdrop,
  alt,
}: MovieImageProps) {
  return (
    <>
      <div className="relative w-full lg:w-1/3 h-full">
        <div className="relative w-full md:w-2/3 h-114 top-1/2 md:left-8 -translate-y-1/2 rounded-md overflow-hidden">
          <Image
            src={imgURL + poster}
            alt={alt}
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="absolute size-full top-0 left-0 -z-10">
          <Image
            src={imgOriginalURL + backdrop}
            alt={alt}
            fill
            priority
            className="object-cover blur-xl"
          />
        </div>
      </div>
    </>
  )
}
