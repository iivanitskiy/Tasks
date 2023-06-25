import React, {useState} from 'react';
import Checkbox from '@mui/material/Checkbox';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';

const Todo = ({ todo, editTodo, deleteTodo, checkboxToggler }:any) => {
	const [todoText, setTodoText] = useState(todo.title);
	const [editIndex, setEditIndex] = useState(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoText(e.target.value)
  };

	const handleSubmit = () => {
		editTodo(todo.id, todoText);
		setEditIndex(false);
	};

	const reset = () => {
		setTodoText(todo.title);
		setEditIndex(false);
	};

	const check = () => {
		checkboxToggler(todo.id);
	};

	return (
		<li>					
			{!editIndex && <div>
				<Checkbox 
					inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} 
					checked={todo.completed ? true : false}
					onClick={check}/>
				<strong style={{paddingRight: 20}}>{todoText}</strong>
			</div>}
			{!editIndex ? (<ButtonGroup variant="outlined" aria-label="outlined button group">
				<Button onClick={() => setEditIndex(todo.id)}>Edit</Button>
				<Button onClick={() => deleteTodo(todo.id)}>Delete</Button>
			</ButtonGroup>) :
			(<ButtonGroup variant="outlined" aria-label="outlined button group">
				<input
					id={todo.id}
					className="todo-text"
					type="text"
					value={todoText}
					onChange={onChange}
				/>
				<Button onClick={reset}>Cancel</Button>
				<Button onClick={handleSubmit}>Save</Button>
			</ButtonGroup>)}
		</li>
	)
}

export default Todo