import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { wines } from "../data";

interface Wine {
  id: number;
  title: string;
  description: string;
  img: string;
  category: string;
  price: string;
  region: string;
}

interface WineState {
  wines: Wine[];
  filteredWines: Wine[];
  selectedCategory: string | null;
  selectedRegion: string | null;
}

const initialState: WineState = {
  wines: [],
  filteredWines: [],
  selectedCategory: null,
  selectedRegion: null,
};

const wineSlice = createSlice({
  name: "wine",
  initialState,
  reducers: {
    setWines: (state, action: PayloadAction<Wine[]>) => {
      state.wines = action.payload;
      state.filteredWines = action.payload;
    },
    filterByCategory: (state, action: PayloadAction<string | null>) => {
      state.selectedCategory = action.payload || null;

      if (!action.payload) {
        // Nije izabrana kategorija-prikazi sve
        state.filteredWines = state.wines;
      } else {
        state.filteredWines = state.wines.filter(
          (w) => w.category === action.payload
        );
      }
    },
    filterByRegion: (state, action: PayloadAction<string | null>) => {
      state.selectedRegion = action.payload || null;

      if (!action.payload) {
        // Nije izabrana kategorija-prikazi sve
        state.filteredWines = state.wines;
      } else {
        state.filteredWines = state.wines.filter(
          (w) => w.region === action.payload
        );
      }
    },
  },
});

export const { setWines, filterByCategory, filterByRegion } = wineSlice.actions;
export default wineSlice.reducer;
