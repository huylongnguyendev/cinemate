import type { Metadata } from "next"
import { Bebas_Neue, Be_Vietnam_Pro } from "next/font/google"
import "./globals.css"
import Header from "@/components/header/Header"
import { ThemeProvider } from "./ThemeProvider"

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
  description: "CineMate - Nền tảng quản lý và khám phá phim chuyên nghiệp. Cập nhật thông tin, trailer và thống kê điện ảnh cá nhân mỗi ngày.",
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
