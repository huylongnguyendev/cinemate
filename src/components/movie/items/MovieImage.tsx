import { imgURL } from "@/lib/apis/base.api"
import Image from "next/image"

interface MovieItemImage {
  image: string
  alt: string
  index: number
}

export default function MovieImage({ image, alt, index }: MovieItemImage) {
  return (
    <>
      <div className="relative w-full h-114">
        <Image
          src={imgURL + image}
          alt={alt}
          fill
          priority={index < 4}
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 20vw"
          className="object-cover"
        />
        <div className="absolute size-full bg-black/0 transitions group-hover:bg-black/50" />
      </div>
    </>
  )
}
