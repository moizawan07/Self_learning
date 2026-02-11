import { createSlice } from "@reduxjs/toolkit";
import { products } from "../../data/products";

const productSlice = createSlice({
  name: "products",
  initialState: {
    allProducts: [],
    filterProducts: [],
    categories: [],
  },
  reducers: {
    setProducts(state, action) {
      state.allProducts = products;
      state.filterProducts = products;
      const uniqueCategories = [
        ...new Set(products.map((product) => product.category)),
      ];
      state.categories = uniqueCategories;
    },
    filterProductWithCategory(state, action) {
      state.filterProducts = state.allProducts.filter(
        (product) => product.category === action.payload,
      );
    },
  },
});

export default productSlice.reducer;
export const { setProducts, filterProductWithCategory } = productSlice.actions;
