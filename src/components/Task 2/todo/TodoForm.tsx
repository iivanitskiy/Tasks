import { ChangeEvent, FC, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

interface Props {
	saveTodo: (value: string) => void;
};

const TodoForm: FC<Props> = ({ saveTodo }): JSX.Element | null => {
  const [value, setValue] = useState('');

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  };

  const reset = () => setValue('');

  return (
		<Box
			component="form"
			sx={{
				'& > :not(style)': { m: 1, width: '25ch' },
			}}
			noValidate
			autoComplete="off"
		>
			<TextField 
				id="outlined-size-small"
				size="small"
				label="New todo" 
				variant="outlined"         
				placeholder=""
        value={value}
        onChange={onChange}/>
			<Button variant="outlined"
				onClick={event => {
					event.preventDefault();
					saveTodo(value);
					reset();
    		}}
			>Add</Button>
		</Box>
  );
};

export default TodoForm;