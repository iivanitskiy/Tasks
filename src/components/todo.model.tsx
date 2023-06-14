import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import TodoForm from './TodoForm';
import Todo from './Todo';

interface TodoInterface {
	trim: any; // ???
  index: string;
  text: string;
  isCompleted: boolean;
	length: number;
};

const TodoModel = () => {
	const [todos, setTodos] = React.useState<TodoInterface[]>([]);
	const [newText, setNewText] = useState("");
	const [isEditing, setEditing] = useState(false);

  const addTodo = (text: TodoInterface) => {
  	setTodos([...todos, text]);
  };

	const deleteTodo = (index: number) => {
		const newTodos = todos.filter((_, todoIndex) => todoIndex !== index);
		setTodos(newTodos);
  };

	function editTask(index: number, newText: any) {
		const editedTaskList = todos.map((todo:  any) => {
			if (index === todo.index) {
				todo = "";
				return  [...todo, newText] ;
			};
			return todo;
		});
		setTodos(editedTaskList);
	};



	const handleSubmit = (e: any, value: string) => {
		e.preventDefault();
		editTask(e.index, newText);
		setNewText(value);
		setEditing(false);
	};

  return (
		<>
			<h3>Todo List</h3>
			<TodoForm
				saveTodo={(todoText: TodoInterface) => {
					const trimmedText = todoText.trim();
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
			<Todo todos={todos} setTodos={setTodos} deleteTodo={deleteTodo} handleSubmit={handleSubmit} setEditing={setEditing} isEditing={isEditing} newText={newText} setNewText={setNewText}/>
		</>
  );
};

export default TodoModel;
