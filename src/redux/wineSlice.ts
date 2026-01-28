import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { wines as initialWines } from "../data";
interface Wine {
  id: number;
  title: string;
  description: string;
  img: string;
  category: string;
  price: number;
  region: string;
}

type SortOrder = "asc" | "desc" | null;

interface WineState {
  wines: Wine[];
  filteredWines: Wine[];
  selectedCategory: string | null;
  selectedRegion: string | null;
  sortOrder: SortOrder;
}

const initialState: WineState = {
  wines: initialWines,
  filteredWines: initialWines,
  selectedCategory: null,
  selectedRegion: null,
  sortOrder: null,
};

const wineSlice = createSlice({
  name: "wine",
  initialState,
  reducers: {
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
    sortByPrice: (state, action: PayloadAction<SortOrder>) => {
      state.sortOrder = action.payload;
      if (!action.payload) {
        return;
      }
      state.filteredWines = [...state.filteredWines].sort(
        action.payload === "asc"
          ? (a, b) => a.price - b.price
          : (a, b) => b.price - a.price
      );
    },
  },
});

export const { filterByCategory, filterByRegion, sortByPrice } =
  wineSlice.actions;
export default wineSlice.reducer;
