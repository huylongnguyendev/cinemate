import { tmdb } from "@/lib/apis/tmdb.api"
import { IReviewResponse } from "@/lib/types/db/review.type"
import { IShowDetailItem } from "@/lib/types/db/tv/detail.type"
import { IShowResponse } from "@/lib/types/db/tv/show.type"

export const showService = {
  getMany: async (type: "movie" | "tv", params?: string) => {
    const paramsValue = params ? params : ""
    const res: { data: IShowResponse, status: number } | number = await tmdb.discover.getMany(type, paramsValue)
    return res
  },
  getOne: async (type: "movie" | "tv", id: string) => {
    const res: { data: IShowDetailItem, status: number } | number = await tmdb.details.getOne(type, id)
    return res
  },
  getReview: async (params: string, id: string) => {
    const res: { data: IReviewResponse, status: number } | number = await tmdb.details.getReview("tv", params, id)
    return res
  },
  getRecomment: async (id: string) => {
    const res: { data: IShowResponse, status: number } | number = await tmdb.details.getRecomment("tv", id)
    return res
  }
}