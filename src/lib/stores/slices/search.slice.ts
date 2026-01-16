import { StateCreator } from "zustand"


export interface SearchState {
  isOpenSearch: boolean
  query: string

  setIsOpenSearch: () => void
  setQuery: (value: string) => void
  setCloseSearch: () => void
}

export const searchSlice: StateCreator<SearchState> = (set) => ({
  isOpenSearch: false,
  query: "",

  setIsOpenSearch: () => set((state) => ({ isOpenSearch: !state.isOpenSearch })),
  setQuery: (value: string) => set(() => ({ query: value })),
  setCloseSearch: () => set(() => ({ isOpenSearch: false })),
})