import { baseURL, getOptions } from "./base.api"

export const tmdbAPI = {
  movies: {
    getMovie: async (params?: string) => {
      const res = await fetch(`${baseURL}/discover/movie?language=vi-VN&${params}`, getOptions("get"))
      if (!res.ok) return undefined
      return await res.json()
    }
  }
}