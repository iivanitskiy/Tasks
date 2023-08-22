import { memo, FC } from 'react';
import {ProductModel}  from './product.model';
import './card.css';
import { Container, Title, Text } from '../../../assets/styles/app.styles';
import { Description } from '../description/description';
import { LENGTH } from '../../../constants/maxLength';

type ProductProps = ProductModel;

const ProductCard: FC<ProductProps> = ({image, title, description, price}): JSX.Element | null => {

	return (
		<div >
			<Title>ProductCard</Title>
			<div className="card">
				<Container>
					<img 
						className="card-image" 
						src={image} 
						alt="" 
						style={{maxWidth: "100px", height: "auto"}}
					/>
					<div className="card-info">
						<Text>{title}</Text>
						<Text>{Description(description, LENGTH)}</Text>
					</div>
					<h5>{price} $</h5>
				</Container> 
			</div>
		</div>
		
	)
};

export default memo(ProductCard);
