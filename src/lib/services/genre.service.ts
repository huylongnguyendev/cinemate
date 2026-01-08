import { tmdbAPI } from "../apis/tmdb.api"

export const genreService = {
  getCountries: async () => {
    try {
      const res = await tmdbAPI.genre.get()
      return res
    } catch (error) {
      return error
    }
  }
} 