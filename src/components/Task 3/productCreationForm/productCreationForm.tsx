import { FC, FormEvent } from 'react';
import './productCreationForm.css';
import { Input} from '../input/input';
import { Button } from '../button/button';
import { ProductModel } from '../product/product.model';

interface Props {
	className?: string;
	onSubmit: (product: Partial<ProductModel>) => void;
};

export const ProductCreationForm: FC<Props> = ({ className, onSubmit }): JSX.Element | null => {

	const handler = (e: FormEvent<HTMLFormElement>) => {
		const target = e.target as typeof e.target & {
      title: { value: string };
      description: { value: string };
    };
		e.preventDefault();
		onSubmit({title: target.title.value, description: target.description.value});
	};

	return (
		<div>
			<form className={className} onSubmit={handler} style={{display: "flex", flexDirection: "column"}}>
				<Input text="Title" name="title" />
				<Input text="Description" name="description"/>
				<Button text="Submit"/>
			</form>
		</div>
	);
};
