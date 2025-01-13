import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [], 
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProducts(state, action) {
      state.products = action.payload;
    },
    setSelectedProduct(state, action) {
        state.selectedProduct = action.payload; 
      },
  },
});

export const { setProducts ,setSelectedProduct} = productSlice.actions;
export default productSlice.reducer;
