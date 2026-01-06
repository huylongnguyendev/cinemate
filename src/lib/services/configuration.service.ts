import { tmdbAPI } from "../apis/tmdb.api"

export const configService = {
  getCountries: async () => {
    try {
      const res = await tmdbAPI.configurations.getCountry()
      return res
    } catch (error) {
      return error
    }
  }
} 