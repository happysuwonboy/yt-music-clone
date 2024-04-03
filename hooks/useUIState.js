import { create } from 'zustand';

const useUIState = create((set) => ({
  homeCategory: "",
  headerImageSrc: "/img/header-background.jpg",
  setHomeCategory: (value) => set({ homeCategory: value }),
  setHeaderImage: (src) => set({ headerImageSrc: src }),
}))

export default useUIState;