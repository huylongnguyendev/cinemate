import Link from "next/link"

export default function Logo() {
  return (
    <>
      <div className="logo">
        <Link href="/" className="text-3xl md:text-4xl text-primary font-bebas-neue font-semibold uppercase">
          cinemate
        </Link>
      </div>
    </>
  )
}
