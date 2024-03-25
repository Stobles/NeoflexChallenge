import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { CartProduct, Product } from "@/features/types";

export type cartState = {
  total: number;
  cart: CartProduct[];
};

const initialState: cartState = {
  total: 0,
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

      const total = state.cart.reduce(
        (prev, cur) => prev + cur.product.price * cur.quantity,
        0
      );

      state.total = total;
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

      const total = state.cart.reduce(
        (prev, cur) => prev + cur.product.price * cur.quantity,
        0
      );

      state.total = total;
    },
    deleteFromCart(state, action: PayloadAction<Product>) {
      state.cart = state.cart.filter(
        (cartProduct) => cartProduct.product.id != action.payload.id
      );

      const total = state.cart.reduce(
        (prev, cur) => prev + cur.product.price * cur.quantity,
        0
      );

      state.total = total;
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const { addToCart, removeFromCart, deleteFromCart, clearCart } =
  CartProductsSlice.actions;

export const cartReducer = CartProductsSlice.reducer;
