import type { Metadata } from "next"
import { Bebas_Neue, Be_Vietnam_Pro } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/providers/ThemeProvider"
import Header from "@/components/header/Header"
import NextTopLoader from "nextjs-toploader"
import { Toaster } from "sonner"
import SearchLayout from "@/components/header/searchs/SearchLayout"
import { Suspense } from "react"

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas-neue",
  subsets: ["latin"],
  weight: ["400"]
})

const beVNPro = Be_Vietnam_Pro({
  variable: "--font-bevn-pro",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"]
})

export const metadata: Metadata = {
  title: {
    default: "CineMate | Khám phá những bộ phim hot và chương trình độc đáo",
    template: "%s | CineMate"
  },
  description: "CineMate - Nền tảng cập nhật và đánh giá phim và chương trình truyền hình. Giúp bạn có trải nghiệm tuyệt vời thưởng thức những tác phẩm yêu thích.",
  keywords: ["phim hay", "xem phim", "đánh giá phim", "cinemate", "movie tracker"],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      data-scroll-behavior="smooth"
    >
      <body
        className={`${bebasNeue.variable} ${beVNPro.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NextTopLoader
            color="oklch(0.637 0.237 25.331)" // Màu xanh giống Spotify (hoặc dùng màu Primary của bạn)
            initialPosition={0.08}
            crawlSpeed={200}
            height={3}
            crawl={true}
            showSpinner={false} // Tắt cái vòng xoay nếu bạn muốn tối giản giống Spotify
            easing="ease"
            speed={200}
            shadow="0 0 10px #22c55e,0 0 5px #22c55e"
          />
          <Header />
          <main className="relative mt-18">
            {children}
            <Suspense>
              <SearchLayout />
            </Suspense>
          </main>
          <Toaster richColors closeButton />
        </ThemeProvider>
      </body>
    </html>
  )
}
