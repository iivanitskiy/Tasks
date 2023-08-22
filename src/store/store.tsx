import { configureStore } from '@reduxjs/toolkit';
import productsSlice from './product/product.slice';

export const store = configureStore({
  reducer: {
    products: productsSlice,
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
