import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UiState {
  isMobileNavOpen: boolean;
  isMegaMenuOpen: string | null;
  isSearchOpen: boolean;
  isModalOpen: string | null;
  activeGalleryIndex: number;
  isScrolling: boolean;
  isBackToTopVisible: boolean;
}

const initialState: UiState = {
  isMobileNavOpen: false,
  isMegaMenuOpen: null,
  isSearchOpen: false,
  isModalOpen: null,
  activeGalleryIndex: 0,
  isScrolling: false,
  isBackToTopVisible: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setMobileNavOpen(state, action: PayloadAction<boolean>) {
      state.isMobileNavOpen = action.payload;
    },
    toggleMobileNav(state) {
      state.isMobileNavOpen = !state.isMobileNavOpen;
    },
    setMegaMenuOpen(state, action: PayloadAction<string | null>) {
      state.isMegaMenuOpen = action.payload;
    },
    setSearchOpen(state, action: PayloadAction<boolean>) {
      state.isSearchOpen = action.payload;
    },
    toggleSearch(state) {
      state.isSearchOpen = !state.isSearchOpen;
    },
    setModalOpen(state, action: PayloadAction<string | null>) {
      state.isModalOpen = action.payload;
    },
    setActiveGalleryIndex(state, action: PayloadAction<number>) {
      state.activeGalleryIndex = action.payload;
    },
    setScrolling(state, action: PayloadAction<boolean>) {
      state.isScrolling = action.payload;
    },
    setBackToTopVisible(state, action: PayloadAction<boolean>) {
      state.isBackToTopVisible = action.payload;
    },
  },
});

export const {
  setMobileNavOpen,
  toggleMobileNav,
  setMegaMenuOpen,
  setSearchOpen,
  toggleSearch,
  setModalOpen,
  setActiveGalleryIndex,
  setScrolling,
  setBackToTopVisible,
} = uiSlice.actions;

export default uiSlice.reducer;
