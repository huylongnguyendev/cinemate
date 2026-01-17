import { IShowDetailItem } from "@/lib/types/db/tv/detail.type"
import { StateCreator } from "zustand"


export interface ShowState {
  shows: IShowDetailItem[] | []

  setShows: (movie: IShowDetailItem[] | []) => void
}

export const showSlice: StateCreator<ShowState> = (set) => ({
  shows: [],

  setShows: (movie: IShowDetailItem[] | []) => set(() => ({ shows: movie }))
})