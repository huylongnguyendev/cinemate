import { Film, MoveLeft } from "lucide-react"
import Link from "next/link"

export default function NotFound() {
  return (
    <>
      <div className="h-[calc(100dvh-72px)] bg-background flex flex-col items-center justify-center text-foreground px-4">
        {/* Hiệu ứng đốm sáng mờ ảo phía sau (Blur) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-75 h-75 bg-primary/20 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="relative text-center">
          {/* Số 404 lớn với hiệu ứng đổ bóng */}
          <h1 className="text-[100px] md:text-[150px] font-black leading-none tracking-tighter text-transparent bg-clip-text bg-linear-to-b from-foreground to-foreground/20 select-none">
            404
          </h1>

          <div className="flex max-md:flex-col items-center justify-center gap-2 mb-6 -mt-4">
            <Film className="w-8 h-8 text-primary-foreground" />
            <span className="text-lg md:text-xl font-medium tracking-widest uppercase">{`Trang này đã bị "cắt" khỏi kịch bản`}</span>
          </div>

          <p className="text-muted-foreground max-w-md mx-auto mb-10 text-lg">
            Xin lỗi, chúng tôi không tìm thấy trang bạn yêu cầu. Có lẽ bộ phim này đã bị xóa hoặc đường dẫn bị sai.
          </p>

          {/* Nút quay về trang chủ - Điểm nhấn chính */}
          <Link
            href="/tv-shows"
            className="group relative inline-flex items-center gap-3 bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-full font-bold transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(251, 44, 54, 0.3)]"
          >
            <MoveLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            Xem phim khác
          </Link>
        </div>

        {/* Trang trí thêm ở góc */}
        <div className="fixed bottom-10 text-primary-foreground/10 text-sm font-mono tracking-widest uppercase pointer-events-none">
          Cinemate / Error Code: 404_NOT_FOUND
        </div>
      </div>
    </>
  )
}
