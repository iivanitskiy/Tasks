import React from 'react';
import Todo from './Todo';

const Todos = ({ todos, editTodo, deleteTodo, handleSubmit, isEditing, setEditing, checkboxToggler }: any) => {
	
  return(
		<ul>
			{ todos.map((todo: any) => < Todo key={todo.id} todo={todo} editTodo={editTodo} deleteTodo={deleteTodo} handleSubmit={handleSubmit} setEditing={setEditing} isEditing={isEditing} checkboxToggler={checkboxToggler}/> )}
		</ul>
  )
};

export default Todos;