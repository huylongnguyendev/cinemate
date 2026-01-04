import { StateCreator } from "zustand"


export interface SearchState {
  isOpenSearch: boolean

  setIsOpenSearch: () => void
}

export const searchSlice: StateCreator<SearchState> = (set) => ({
  isOpenSearch: false,

  setIsOpenSearch: () => set((state) => ({ isOpenSearch: !state.isOpenSearch }))
})