import React, {useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import TodoForm from './TodoForm';
import Todos from './Todos';
import {v4 as uuidv4} from 'uuid';
import list from '../data/list.json';

interface TodoInterface {
  id: string;
  title: string;
  completed: boolean;
};

enum Filter{
  All = 'All',
  Active = 'Active',
  Completed = 'Completed'
};

const TodoModel = () => {
	const [todos, setTodos] = useState<TodoInterface[]>(JSON.parse(localStorage.getItem("TODOS") || JSON.stringify(list)));
	const [filter, setFilter] = useState(Filter.All);
	const [isEditing, setEditing] = useState(null);

  const addTodo = (text: string) => {
  	setTodos([...todos, {title: text, id: uuidv4(), completed: false }]);
  };

	const deleteTodo = (id: string) => {
		const newTodos = todos.filter((todo) => todo.id !== id);
		setTodos(newTodos);
  };

	const editTodo = (id: string, newTitle: string) => {
		const editedTodoList = todos.map((todo: TodoInterface) => {
			if (id === todo.id) {
				return  {...todo, title: newTitle};
			};
			return todo;
		});
		setTodos(editedTodoList);
	};

	const checkboxToggler = (id: string) => {
    const mapped = todos.map(todo => {
      return todo.id === id ? { ...todo, completed: !todo.completed } : { ...todo};
    });
   setTodos(mapped);
  };

	function filteredTodos() {
		switch (filter) {
			case Filter.Active:
				return todos.filter((todo: TodoInterface) => {
					if (todo.completed === false) {
						return todo;
					};
					return null;
				});
			case Filter.Completed:
				return todos.filter((todo: TodoInterface) => {
					if (todo.completed === true) {
						return todo;
					};
					return null;
				});
			default:
				return todos;
  	}
	};

	function switchFilter(filter: Filter) {
		return () => setFilter(filter);
	};

	useEffect(() => {		
		const data = localStorage.getItem("TODOS");
		if (typeof data === 'string') {
			setTodos(JSON.parse(data));
		}
	}, []);

  useEffect(() => {
		localStorage.setItem("TODOS", JSON.stringify(todos));
  }, [todos]);

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
					<Button onClick={switchFilter(Filter.All)}>Show All Tasks</Button>
					<Button onClick={switchFilter(Filter.Active)}>Show Active Tasks</Button>
					<Button onClick={switchFilter(Filter.Completed)}>Show Completed Tasks</Button>
				</ButtonGroup>
    	</Box>
			<p>{todos.length} tasks remaining</p>
			<Todos todos={filteredTodos()} editTodo={editTodo} deleteTodo={deleteTodo} setEditing={setEditing} isEditing={isEditing} checkboxToggler={checkboxToggler}/>
		</>
  );
};

export default TodoModel;
