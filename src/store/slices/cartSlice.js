
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
  },
  reducers: {
    setCartProducts: (state, action) => {
      state.products = action.payload;
    },
    clearCart: (state) => {
      state.products = [];
    },
  },
});

export const { setCartProducts, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
