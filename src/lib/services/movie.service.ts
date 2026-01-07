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
  getCredit: async (id: string, topic?: string) => {
    try {
      const res = await tmdbAPI.movie.get(id, topic)
      return res
    } catch (error) {
      return error
    }
  },
}