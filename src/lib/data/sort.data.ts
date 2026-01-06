import { ArrowDown10, ArrowDownWideNarrow, ArrowUp10, ArrowUpNarrowWide, CalendarArrowDown, CalendarArrowUp } from "lucide-react"
import { SortType } from "../types/sort.type"

export const sortList: SortType = [
  {
    title: "Từ nay tới trước",
    value: "primary_release_date.desc",
    icon: CalendarArrowDown
  },
  {
    title: "Từ trước tới nay",
    value: "primary_release_date.asc",
    icon: CalendarArrowUp
  },
  {
    title: "Điểm đánh giá giảm dần",
    value: "vote_average.desc",
    icon: ArrowDown10
  },
  {
    title: "Điểm đánh giá tăng dần",
    value: "vote_average.asc",
    icon: ArrowUp10
  },
]