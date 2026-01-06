import type { Metadata } from "next"
import { Bebas_Neue, Be_Vietnam_Pro } from "next/font/google"
import "./globals.css"
import Header from "@/components/header/Header"
import { ThemeProvider } from "./ThemeProvider"
import NextTopLoader from "nextjs-toploader"

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
    <html lang="vi" suppressHydrationWarning>
      <body
        className={`${bebasNeue.variable} ${beVNPro.variable} antialiased`}
      >
        <NextTopLoader 
          color="#fb2c36"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={false} // Tắt cái vòng xoay nhỏ ở góc nếu muốn sạch sẽ
          easing="ease"
          speed={200}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
