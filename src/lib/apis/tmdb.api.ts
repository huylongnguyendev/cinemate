import { baseURL, getOptions } from './base.api';

export const tmdbAPI = {
  movies: {
    getMovie: async (params?: string) => {
      const res = await fetch(`${baseURL}/discover/movie?language=vi-VN&${params}`, getOptions("get"))
      if (!res.ok) return undefined
      return await res.json()
    },
    getOneMovie: async (id: string) => {
      const res = await fetch(`${baseURL}/movie/${id}?language=vi-VN`, getOptions("get"))
      if (!res.ok) return undefined
      return await res.json()
    }
  },
  configurations: {
    getCountry: async () => {
      const res = await fetch(`${baseURL}/configuration/countries?language=vi-VN`, getOptions("get"))
      if (!res.ok) return undefined
      return await res.json()
    }
  }
}