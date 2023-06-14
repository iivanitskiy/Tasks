import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const TodoForm: any = ({ saveTodo }:any) => {
  const [value, setValue] = useState('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  };

  const reset = () => setValue('')

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
				defaultValue="Small"
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