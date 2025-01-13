import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/useSlice'; 
import categoryReducer from "./slices/categorySlice";
import productReducer from "./slices/productSlice";

export const store = configureStore({
  reducer: {
    user: userReducer, 
    category: categoryReducer, 
    product:productReducer
  },
});

export default store;
