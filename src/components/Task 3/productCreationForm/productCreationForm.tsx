import { FC, FormEvent } from 'react';
import './productCreationForm.css';
import { Input} from '../input/input';
import { Button } from '../button/button';
import { ProductModel } from '../product/product.model';
import buttonClass from '../button/button.module.css';
import inputClass from '../input/input.module.css';
import { productListData } from '../../../data/product.data';

function getRandomArbitrary(min: number, max: number) {
  return Math.ceil(Math.random() * (max - min) + min);
};

interface Props {
	className?: string;
	onSubmit: (product: Partial<ProductModel>) => void;
};

export const ProductCreationForm: FC<Props> = ({ className, onSubmit }): JSX.Element | null => {
  const buttonClassName =[buttonClass.button];
	const inputClassName =[inputClass.input];

	const handler = (e: FormEvent<HTMLFormElement>) => {
		const target = e.target as typeof e.target & {
      title: { value: string };
      description: { value: string };
    };
		e.preventDefault();
		onSubmit({title: target.title.value, description: target.description.value, price: Math.ceil((Math.random() * 100) + 1 ), image: productListData[getRandomArbitrary(0, 19)].image});
	};

	return (
		<div>
			<form className={className} onSubmit={handler} style={{display: "flex", flexDirection: "column"}}>
				<Input className={inputClassName.join(' ')} text="Title" name="title"/>
				<Input className={inputClassName.join(' ')} text="Description" name="description"/>
				<Button className={buttonClassName.join(' ')} text="Submit"/>
			</form>
		</div>
	);
};
