import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
  },
  reducers: {
    addToCart(state, action) {
      const existing = state.cartItems.find(
        (item) => item.id === action.payload.id,
      );

      if (existing) {
        if (existing.quantity < existing.stock) {
          existing.quantity += 1;
        }
      } else {
        state.cartItems.push({
          ...action.payload,
          quantity: 1,
        });
      }
    },

    incrementQuantity(state, action) {
      const item = state.cartItems.find((item) => item.id === action.payload);

      if (item && item.quantity < item.stock) {
        item.quantity += 1;
      }
    },

    decrementQuantity(state, action) {
      const item = state.cartItems.find((item) => item.id === action.payload);

      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1;
        } else {
          state.cartItems = state.cartItems.filter(
            (cart) => cart.id !== action.payload,
          );
        }
      }
    },

    removeFromCart(state, action) {
      state.cartItems = state.cartItems.filter(
        (cart) => cart.id !== action.payload,
      );
    },

    clearCart(state) {
      state.cartItems = [];
    },
  },
});

export default cartSlice.reducer;

export const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
  clearCart,
} = cartSlice.actions;
