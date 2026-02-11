import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../reducers/auth.reducer";
import productSlice from "../reducers/product.reducer";
import cartSlice from "../reducers/cart.reducer";

export const store = configureStore({
    reducer:{
        auth : authSlice,
        product: productSlice,
        cart: cartSlice
    }
})