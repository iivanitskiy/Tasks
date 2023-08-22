import { useState, useEffect } from 'react';
import fetchProductsApi from '../services/product-api.service';
import { useDispatch, useSelector } from 'react-redux';
import { setProductsAction } from '../store/product/product.slice';
import { selectProducts } from '../models/state/product.selectors';

export const useProducts = () => {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");

	const dispatch = useDispatch();
	const products = useSelector(selectProducts);

	const fetchProducts = async () => {
		try {
			setLoading(true);
			const response = await fetchProductsApi();
			dispatch(setProductsAction(response.data));
		} catch (error) {
			setError(String(error));
		} finally {
			setLoading(false);	
		}
	};

	useEffect(() => {
		fetchProducts();
	},[]);

	return {products, loading, error};
};