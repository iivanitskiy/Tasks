import { FC, HTMLAttributes } from 'react';
import './button.module.css';

interface Props extends HTMLAttributes<HTMLButtonElement> {
	text: string;
	className?: string;
};

export const Button: FC<Props> = ({ text, className }): JSX.Element | null => {

	return (
		<button className={className} type="submit">{text}</button>
	);
};
