import { baseURL, getApiOptions } from "./base.api"

export const tmdb = {
  discover: {
    getMany: async (type: "movie" | "tv", params?: string) => {
      const res = await fetch(`${baseURL}discover/${type}?language=vi-VN${params}`, getApiOptions("GET"))

      if (!res.ok) return res.status

      const data = await res.json()
      return {
        data,
        status: res.status
      }
    }
  },
  details: {
    getOne: async (type: "movie" | "tv", id: string) => {
      const res = await fetch(`${baseURL}${type}/${id}?language=vi-VN`, getApiOptions("GET"))

      if (!res.ok) return res.status

      const data = await res.json()
      return {
        data,
        status: res.status
      }
    },
    getCredit: async (id: string) => {
      const res = await fetch(`${baseURL}movie/${id}/credits?language=vi-VN`, getApiOptions("GET"))

      if (!res.ok) return res.status

      const data = await res.json()
      return {
        data,
        status: res.status
      }
    },
    getReview: async (params: string, id: string) => {
      const res = await fetch(`${baseURL}movie/${id}/reviews?language=en-US${params}`, getApiOptions("GET"))

      if (!res.ok) return res.status

      const data = await res.json()
      return {
        data,
        status: res.status
      }
    }
  },
}