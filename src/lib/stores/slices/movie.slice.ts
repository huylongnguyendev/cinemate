import { IMovieDetailItem } from "@/lib/types/db/movie/detail.type"
import { StateCreator } from "zustand"


export interface MovieState {
  movies: IMovieDetailItem[] | []
  selectedMovie: string[]
  setMovies: (movie: IMovieDetailItem[] | []) => void
  setSelectedMovie: (ids: string[] | []) => void
}

export const moivieSlice: StateCreator<MovieState> = (set) => ({
  movies: [],
  selectedMovie: [],
  setMovies: (movie: IMovieDetailItem[] | []) => set(() => ({ movies: movie })),
  setSelectedMovie: (ids: string[]) => set(() => ({ selectedMovie: ids }))
})