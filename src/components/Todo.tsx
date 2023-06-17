import React, {useState} from 'react';
import Checkbox from '@mui/material/Checkbox';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';

const Todo = ({ todo, editTodo, deleteTodo, checkedToggler }:any) => {
	const [todoText, setTodoText] = useState(todo.text);
	const [editing, setEditing] = useState(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoText(e.target.value)
  };

	const handleSubmit = () => {
		editTodo(todo.id, todoText);
		setEditing(false);
	};

	const reset = () => {
		setTodoText(todo.text);
		setEditing(false);
	};

	return (
		<li>					
			<div>
				<Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} onClick={checkedToggler}/>
				<strong style={{paddingRight: 20}}>{todoText}</strong>
				<p style={{paddingRight: 20}}>{todo.id}</p>
			</div>
			{!editing ? (<ButtonGroup variant="outlined" aria-label="outlined button group">
				<Button onClick={() => setEditing(todo.id)}>Edit</Button>
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