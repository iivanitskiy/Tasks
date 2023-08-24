import { ChangeEvent, FC, HTMLAttributes, useState }  from 'react';
import './input.module.css';

interface Props extends HTMLAttributes<HTMLInputElement> {
	text: string;
  value?: string;
	className?: string;
	name: string;
};

const defaultValue = "";

export const Input: FC<Props> = ({ text, value, className, name }): JSX.Element | null => {
	const [innerValue, setInnerValue] = useState(value ?? defaultValue ?? '');

	const onChange = (e: ChangeEvent<HTMLInputElement>) => {
  	setInnerValue(e.target.value);
	};

	return (
		<>
			<p style={{margin: "10px 0"}}>{text}</p>
			<input 
				className={className}
				style={{paddingRight: "15px"}} 
				id="standard-basic" 
				value={innerValue} 
				onChange={onChange} 
				name={name}
				placeholder={ innerValue === "" ? (text = "Введите текст") : ""}
				required
			/>
		</>
	);
};
