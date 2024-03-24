import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Product } from "@/features/types";

export type favoritesState = {
  favorites: Product[];
};

const initialState: favoritesState = {
  favorites: [],
};

export const FavoriteProductsSlice = createSlice({
  name: "favorites_products_slice",
  initialState,
  reducers: {
    toggleFavorite(state, action: PayloadAction<Product>) {
      const isFavorite = state.favorites.find(
        (product) => product.id === action.payload.id
      );

      if (isFavorite) {
        state.favorites = state.favorites.filter(
          (product) => product.id !== action.payload.id
        );
      } else {
        state.favorites.push(action.payload);
      }
    },
    clearFavorites(state) {
      state.favorites = [];
    },
  },
});

export const { toggleFavorite, clearFavorites } = FavoriteProductsSlice.actions;

export const favoritesReducer = FavoriteProductsSlice.reducer;
