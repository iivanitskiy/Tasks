import { createSlice } from '@reduxjs/toolkit';
import { ProductStateModel } from '../../models/state/product-state.model';

const initialState: ProductStateModel = {
  products: [],
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProductsAction: (state, action) => {
      state.products = action.payload;
  	},
    setNewProductAction: (state, action) => {
      state.products.unshift(action.payload);
  	},
	},
});

export const { setProductsAction, setNewProductAction } = productsSlice.actions;

export default productsSlice.reducer;
