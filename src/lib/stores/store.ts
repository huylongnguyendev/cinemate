import { create } from "zustand"
import { searchSlice, SearchState } from "./slices/search.slice"
import { menuSlice, MenuState } from "./slices/menu.slice"

type AppState = SearchState & MenuState

export const useAppStore = create<AppState>()((...args) => ({
  ...searchSlice(...args),
  ...menuSlice(...args),
}))