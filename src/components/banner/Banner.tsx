import bannerImg from "@/assets/cinema-bg.jpg"
import Image from "next/image"
import ContentWrapper from "./ContentWrapper"
import { Button } from "../ui/button"
import Link from "next/link"
import { ArrowUpRightFromSquare } from "lucide-react"

export default function Banner() {
  return (
    <>
      <section className="relative z-10">
        <div className="absolute w-full h-[calc(100dvh-80px)] -z-10">
          <div className="absolute size-full bg-black/80 z-10" />
          <Image
            src={bannerImg}
            alt="background-banner-image"
            className="object-cover"
            priority
            fill
          />
        </div>
        <ContentWrapper>
          <div className="space-y-8 text-center text-white">
            <h1 className="space-y-4 text-balance">
              <p className="text-2xl font-semibold first-letter:uppercase">chào mừng bạn</p>
              <p className="first-letter:uppercase md:text-xl w-full max-w-2xl mx-auto">Trở thành <span className="text-primary uppercase font-semibold">VIP member <span className="capitalize">miễn phí</span></span> để khám phá hàng trọn vẹn triệu bộ phim hot và chương trình độc đáo đang chờ bạn </p>
            </h1>
            <Button>
              <Link href="/movies" className="inline-flex justify-center items-center gap-1.5 size-full">
                <ArrowUpRightFromSquare />
                <p>Đăng ký ngay</p>
              </Link>
            </Button>
          </div>
        </ContentWrapper>
      </section>
    </>
  )
}
