import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import TodoForm from './TodoForm';
import Todos from './Todos';
import {v4 as uuidv4} from 'uuid';
import list from '../../../data/todos.list.json';

interface Todo {
  id: string;
  title: string;
  completed: boolean;
};

enum Filter{
  ALL = 'ALL',
  ACTIVE = 'ACTIVE',
  COMPLETED = 'COMPLETED'
};

const TodoModel = (): JSX.Element | null => {
	const [todos, setTodos] = useState<Todo[]>(JSON.parse(localStorage.getItem("TODOS") || JSON.stringify(list)));
	const [filter, setFilter] = useState(Filter.ALL);
	
  const addTodo = (text: string) => {
  	setTodos([...todos, {title: text, id: String(uuidv4()), completed: false }]);
  };

	const deleteTodo = (id: string) => {
		const newTodos = todos.filter((todo) => todo.id !== id);
		setTodos(newTodos);
  };

	const editTodo = (id: string, newTitle: string) => {
		const editedTodoList = todos.map((todo: Todo) => {
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

	const filteredTodos = () => {
		switch (filter) {
			case Filter.ACTIVE:
				return todos.filter((todo: Todo) => {
					if (todo.completed === false) {
						return todo;
					};
					return null;
				});
			case Filter.COMPLETED:
				return todos.filter((todo: Todo) => {
					if (todo.completed === true) {
						return todo;
					};
					return null;
				});
			default:
				return todos;
  	}
	};

	const switchFilter = (filter: Filter) => {
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
					<Button onClick={switchFilter(Filter.ALL)}>Show All Tasks</Button>
					<Button onClick={switchFilter(Filter.ACTIVE)}>Show Active Tasks</Button>
					<Button onClick={switchFilter(Filter.COMPLETED)}>Show Completed Tasks</Button>
				</ButtonGroup>
    	</Box>
			<p>{todos.length} tasks remaining</p>
			<Todos todos={filteredTodos()} editTodo={editTodo} deleteTodo={deleteTodo} checkboxToggler={checkboxToggler} />
		</>
  );
};

export default TodoModel;
