import { tmdbAPI } from "../apis/tmdb.api"

export const movieService = {
  getMovie: async (params?: string) => {
    try {
      const res = await tmdbAPI.movies.getMovie(params)
      return res
    } catch (error) {
      return error
    }
  },
  getOneMovie: async (id: string, topic?: string) => {
    try {
      const res = await tmdbAPI.movie.get(id, topic)
      return res
    } catch (error) {
      return error
    }
  },
  getCredit: async (id: string) => {
    try {
      const res = await tmdbAPI.movie.get(id, "credits")
      return res
    } catch (error) {
      return error
    }
  },
  getReview: async (id: string, page?: string) => {
    try {
      const res = await tmdbAPI.movie.get(id, "reviews", page)
      return res
    } catch (error) {
      return error
    }
  },
}