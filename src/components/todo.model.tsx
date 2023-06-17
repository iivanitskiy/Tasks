import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import TodoForm from './TodoForm';
import Todos from './Todos';
import {v4 as uuidv4} from 'uuid';

interface TodoInterface {
  id: string;
  text: string;
  completed: boolean;
};

const TodoModel = () => {
	const [todos, setTodos] = React.useState<TodoInterface[]>([]);
	const [isEditing, setEditing] = useState(null);

  const addTodo = (text: string) => {
  	setTodos([...todos, {text: text, id: uuidv4(), completed: false }]);
  };

	const deleteTodo = (id: string) => {
		const newTodos = todos.filter((todo) => todo.id !== id);
		setTodos(newTodos);
  };

	function editTodo(id: string, newText: any) {
		const editedTodoList = todos.map((todo:  any) => {
			if (id === todo.id) {
				return  {...todo, text: newText};
			};
			return todo;
		});
		setTodos(editedTodoList);
	};

  return (
		<>
			<h3>Todo List</h3>
			<TodoForm
				saveTodo={(todo: string) => {
					const trimmedText = todo.trim();
					if (trimmedText.length > 0) {
						addTodo(trimmedText);
					}
				}}
			/>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					'& > *': {
						m: 1,
					},
				}}
    	>
				<ButtonGroup variant="outlined" aria-label="outlined button group">
					<Button>Show All Tasks</Button>
					<Button>Show Active Tasks</Button>
					<Button>Show Completed Tasks</Button>
				</ButtonGroup>
    	</Box>
			<p>{todos.length} tasks remaining</p>
			<Todos todos={todos} editTodo={editTodo} deleteTodo={deleteTodo} setEditing={setEditing} isEditing={isEditing}/>
		</>
  );
};

export default TodoModel;
