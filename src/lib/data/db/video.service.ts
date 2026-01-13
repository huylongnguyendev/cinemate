import { tmdb } from "@/lib/apis/tmdb.api"

export const videoService = {
  getVideo: async (type: "movie" | "tv", id: string) => {
    const res = await tmdb.video(type, id)
    return res
  }
}