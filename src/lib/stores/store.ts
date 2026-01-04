import { create } from "zustand"
import { searchSlice, SearchState } from "./slices/search.slice"

type AppState = SearchState

export const useAppStore = create<AppState>()((...args) => ({
  ...searchSlice(...args),
}))