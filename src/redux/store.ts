import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import wineReducer from "./wineSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    wine: wineReducer,
  },
});

// TypeScript helperi
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
