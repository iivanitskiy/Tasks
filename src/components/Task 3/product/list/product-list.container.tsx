import { memo, useState } from 'react';
import ProductList from './product-list.component';
import CircularIndeterminate from '../../loader/loader';
import './product-list.container.css';
import { useProducts } from '../../../../hooks/products';
import '../../createButton/createButton.css';
import { ProductModel } from '../product.model';
import { useDispatch } from 'react-redux';
import { ProductCreationContainer } from '../productCreationContainer/ProductCreationContainer';
import { setNewProductAction } from '../../../../store/product/product.slice';
import { createProductApi } from '../../../../services/product-api.service';

const ProductsContainer = (): JSX.Element | null => {
	const [modalVisible, setModalVisible] = useState(false);
	const {products, loading, error} = useProducts();

	const dispatch = useDispatch();

	const handleModalClose = () => setModalVisible(false);

	const handleSubmit = (product: Partial<ProductModel>) => {
		const res = createProductApi(product);
		createProductApi(res);
		dispatch(setNewProductAction(product));
		handleModalClose();
	};

	return (
		<div className="container" >
			{error ? <p>{`Something went wrong! Error: ${error}`}</p> : <div></div>	}
			{loading ?
				<CircularIndeterminate/> :
				<ProductList products={products} />
			}
			<ProductCreationContainer setModalVisible={setModalVisible} modalVisible={modalVisible} handleModalClose={handleModalClose} handleSubmit={handleSubmit} />
		</div>
	)
};

export default memo(ProductsContainer);
