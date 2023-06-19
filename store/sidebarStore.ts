import { create } from 'zustand'

interface SidebarStore {
	  isOpen: boolean
	  toggler: () => void
	  setOpen: (v: boolean) => void
	  setClose: (v: boolean) => void
}

const useSidebarStore = create<SidebarStore>((set) => ({
  isOpen: false,
  setOpen: () => set(() => ({ isOpen: true })),
  setClose: () => set(() => ({ isOpen: false })),
  toggler: () => set((state) => ({ isOpen: !state.isOpen })),
}))

export default useSidebarStore