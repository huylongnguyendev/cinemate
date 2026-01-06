import { StateCreator } from "zustand"

export interface MenuState {
  isOpenMenu: boolean

  setIsOpenMenu: () => void
}

export const menuSlice: StateCreator<MenuState> = (set) => ({
  isOpenMenu: false,

  setIsOpenMenu: () => set((state) => ({ isOpenMenu: !state.isOpenMenu }))
})