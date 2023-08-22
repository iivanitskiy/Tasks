import { RootState } from '../../store/store';
import { ProductStateModel } from '../../models/state/product-state.model';

const selectProductState: (state: RootState) => ProductStateModel = (state: RootState) =>
	state.products;

export const selectProducts = (state: RootState) => selectProductState(state).products;
