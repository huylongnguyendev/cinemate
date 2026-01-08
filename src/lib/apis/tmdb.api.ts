import { baseURL, getOptions } from './base.api';

export const tmdbAPI = {
  movies: {
    getMovie: async (params?: string) => {
      const res = await fetch(`${baseURL}/discover/movie?language=vi-VN&${params}`, getOptions("get"))
      if (!res.ok) return undefined
      return await res.json()
    },
  },
  configurations: {
    getCountry: async () => {
      const res = await fetch(`${baseURL}/configuration/countries?language=vi-VN`, getOptions("get"))
      if (!res.ok) return undefined
      return await res.json()
    }
  },
  movie: {
    get: async (id: string, topic?: string, page?: string) => {
      const topicSelected = topic ? `/${topic}` : ""
      const language = topic === "reviews" ? "en-EN" : "vi-VN"
      const pageSelected = page ? `&page=${page}` : ""
      const res = await fetch(`${baseURL}/movie/${id}${topicSelected}?language=${language}${pageSelected}`, getOptions("get"))
      if (!res.ok) return undefined
      return await res.json()
    }
  },
  genre: {
    get: async () => {
      const res = await fetch(`${baseURL}/genre/movie/list?language=vi-VN`, getOptions("get"))
      if (!res.ok) return undefined

      return await res.json()
    }
  }
}