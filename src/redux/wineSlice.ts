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

const applyFilters = (state: WineState) => {
  let result = [...state.wines];

  if (state.selectedCategory) {
    result = result.filter((w) => w.category === state.selectedCategory);
  }

  if (state.selectedRegion) {
    result = result.filter((w) => w.region === state.selectedRegion);
  }

  if (state.sortOrder) {
    result.sort(
      state.sortOrder === "asc"
        ? (a, b) => a.price - b.price
        : (a, b) => b.price - a.price
    );
  }

  state.filteredWines = result;
};

const wineSlice = createSlice({
  name: "wine",
  initialState,
  reducers: {
    filterByCategory: (state, action: PayloadAction<string | null>) => {
      state.selectedCategory = action.payload;
      applyFilters(state);
    },
    filterByRegion: (state, action: PayloadAction<string | null>) => {
      state.selectedRegion = action.payload;
      applyFilters(state);
    },
    sortByPrice: (state, action: PayloadAction<SortOrder>) => {
      state.sortOrder = action.payload;
      applyFilters(state);
    },
  },
});

export const { filterByCategory, filterByRegion, sortByPrice } =
  wineSlice.actions;
export default wineSlice.reducer;
