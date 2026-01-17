import { create } from "zustand"
import { searchSlice, SearchState } from "./slices/search.slice"
import { menuSlice, MenuState } from "./slices/menu.slice"
import { moivieSlice, MovieState } from "./slices/movie.slice"
import { showSlice, ShowState } from "./slices/show.slice"

type AppState = SearchState & MenuState & MovieState & ShowState

export const useAppStore = create<AppState>()((...args) => ({
  ...searchSlice(...args),
  ...menuSlice(...args),
  ...moivieSlice(...args),
  ...showSlice(...args),
}))