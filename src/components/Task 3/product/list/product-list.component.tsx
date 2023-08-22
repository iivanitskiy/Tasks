import {ProductModel} from '../product.model';
import ProductCard from '../product-card.component';
import '../card.css';

type Props = {
  products: ProductModel[];
};

const ProductList = ({products}: Props): JSX.Element | null => {
	return (
		<>
			{products.map((product: ProductModel) => 
				<ProductCard id={product.id} title={product.title} price={product.price} description={product.description} category={product.category} image={product.image} rating={product.rating} key={product.id ? product.id : Math.random()}/>
			)}
		</>
	)
};

export default ProductList;
