import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Wine {
  id: number;
  title: string;
  category: string;
  price: number;
}

interface WineState {
  wines: Wine[];
  filteredWines: Wine[];
  selectedCategory: string;
}

const initialState: WineState = {
  wines: [],
  filteredWines: [],
  selectedCategory: "All",
};

const wineSlice = createSlice({
  name: "wine",
  initialState,
  reducers: {
    setWines: (state, action: PayloadAction<Wine[]>) => {
      state.wines = action.payload;
      state.filteredWines = action.payload;
    },
    filterByCategory: (state, action: PayloadAction<string>) => {
      state.selectedCategory = action.payload;
      state.filteredWines = state.wines.filter(
        (w) => w.category === action.payload
      );
    },
  },
});

export const { setWines, filterByCategory } = wineSlice.actions;
export default wineSlice.reducer;
