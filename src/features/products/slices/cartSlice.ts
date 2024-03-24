import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { CartProduct, Product } from "@/features/types";

export type cartState = {
  cart: CartProduct[];
};

const initialState: cartState = {
  cart: [],
};

export const CartProductsSlice = createSlice({
  name: "cart_products_slice",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<Product>) {
      const isExists = state.cart.find(
        (cartProduct) => cartProduct.product.id === action.payload.id
      );

      if (isExists) {
        state.cart = state.cart.map((cartProduct) => {
          if (cartProduct.product.id === action.payload.id)
            return (cartProduct = {
              product: cartProduct.product,
              quantity: cartProduct.quantity + 1,
            });
          return cartProduct;
        });
      } else {
        state.cart.push({ product: action.payload, quantity: 1 });
      }
    },
    removeFromCart(state, action: PayloadAction<Product>) {
      const isExists = state.cart.find(
        (cartProduct) => cartProduct.product.id === action.payload.id
      );

      if (isExists) {
        state.cart = state.cart.map((cartProduct) => {
          if (cartProduct.product.id === action.payload.id)
            return (cartProduct = {
              product: cartProduct.product,
              quantity: cartProduct.quantity - 1,
            });
          return cartProduct;
        });
      } else {
        state.cart = state.cart.filter(
          (cartProduct) => cartProduct.product.id != action.payload.id
        );
      }
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart } =
  CartProductsSlice.actions;

export const cartReducer = CartProductsSlice.reducer;
