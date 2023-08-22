import { FC } from 'react';
import Todo from './Todo';

interface Props {
	todos: any;
  editTodo: (id: string, newTitle: string) => void;
	deleteTodo: (id: string) => void ;
	checkboxToggler: (id: string) => void;
};

interface TodoModel {
  id: string;
  title: string;
  completed: boolean;
};

const Todos: FC<Props> = ({ todos, editTodo, deleteTodo, checkboxToggler }): JSX.Element | null => {
	
  return(
		<ul>
			{ todos.map((todo: TodoModel) => <Todo key={todo.id} todo={todo} editTodo={editTodo} deleteTodo={deleteTodo} checkboxToggler={checkboxToggler}/> )}
		</ul>
  )
};

export default Todos;