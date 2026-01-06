import Container from "@/components/Container"
import notfoundImg from "@/assets/notfound-tv.png"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowUpRightFromCircle } from "lucide-react"

export default function NotFound() {
  return (
    <>
      <Container className="flex flex-col items-center">
        <Image
          src={notfoundImg}
          alt="not-found-image"
          width={400}
          height={400}
          className="grayscale-50"
        />
        <Button>
          <Link
            href={"/movies"}
            className="inline-flex justify-center items-center gap-1.5 size-full"
          >
            <ArrowUpRightFromCircle />
            <p>Xem phim khác</p>
          </Link>
        </Button>
      </Container>
    </>
  )
}
