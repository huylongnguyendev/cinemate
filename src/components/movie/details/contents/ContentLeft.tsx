import { imgOriginalURL, imgURL } from "@/lib/apis/base.api"
import Image from "next/image"

export default function ContentLeft({ image, alt, backdrop }: { image: string, backdrop: string, alt: string }) {
  return (
    <>
      <div className="w-full md:w-1/3">
        <div className="relative w-full h-140">
          <div className="absolute w-full md:w-2/3 h-114 top-1/2 md:left-8 -translate-y-1/2 rounded-md overflow-hidden z-10">
            <Image
              src={imgURL + image}
              alt={alt}
              fill
              priority
              className="object-cover"
            />
          </div>
          <Image
            src={imgOriginalURL + backdrop}
            alt={alt}
            fill
            priority
            className="object-cover blur-lg"
          />
        </div>
      </div>
    </>
  )
}
