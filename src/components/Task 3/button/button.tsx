import { FC } from 'react';
import './button.css';

interface Props {
	text: string;
	className?: string;
};

export const Button: FC<Props> = ({ text, className }): JSX.Element | null => {

	return (
		<button className={className} type="submit">{text}</button>
	);
};
