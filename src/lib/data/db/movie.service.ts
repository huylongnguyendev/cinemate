import { tmdb } from "@/lib/apis/tmdb.api"
import { IMovieResponse } from "../../types/db/movie/movie.type"
import { IMovieDetailItem } from "@/lib/types/db/movie/detail.type"
import { ICreditResponse } from "@/lib/types/db/movie/credit.type"
import { IReviewResponse } from "@/lib/types/db/review.type"

export const movieService = {
  getMany: async (type: "movie" | "tv", params?: string) => {
    const paramsValue = params ? params : ""
    const res: { data: IMovieResponse, status: number } | number = await tmdb.discover.getMany(type, paramsValue)
    return res
  },
  getOne: async (type: "movie" | "tv", id: string) => {
    const res: { data: IMovieDetailItem, status: number } | number = await tmdb.details.getOne(type, id)
    return res
  },
  getCredit: async (id: string) => {
    const res: { data: ICreditResponse, status: number } | number = await tmdb.details.getCredit(id)
    return res
  },
  getReview: async (params: string, id: string) => {
    const res: { data: IReviewResponse, status: number } | number = await tmdb.details.getReview("movie", params, id)
    return res
  },
  getRecomment: async (id: string) => {
    const res: { data: IMovieResponse, status: number } | number = await tmdb.details.getRecomment("movie", id)
    return res
  },
}