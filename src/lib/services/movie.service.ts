import { tmdbAPI } from "../apis/tmdb.api"

export const movieService = {
  getMovie: async (params?: string) => {
    try {
      const res = await tmdbAPI.movies.getMovie(params)
      return res
    } catch (error) {
      console.log(error)
    }
  }
}