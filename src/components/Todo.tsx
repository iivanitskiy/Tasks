import React from 'react';
import Checkbox from '@mui/material/Checkbox';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';

const Todo = ({ todos, deleteTodo, checkedToggler, handleSubmit, isEditing, setEditing, newText, setNewText }:any) => {
	
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  	setNewText(e.target.value);
	};	

  return(
				<ul>
			{todos.map((note:string, index:any) => ( 
				<li 
					// eslint-disable-next-line react/no-array-index-key
					key={index} 
				>
					
					<div>
						<Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} onClick={checkedToggler}/>
						<strong style={{paddingRight: 20}}>{note}</strong>
					</div>

					{!isEditing ? (<ButtonGroup variant="outlined" aria-label="outlined button group">
						<Button onClick={() => setEditing(true)}>Edit</Button>
						<Button onClick={() => deleteTodo(index)}>Delete</Button>
					</ButtonGroup>) :
					(<ButtonGroup variant="outlined" aria-label="outlined button group">
						<input
							id={index}
							className="todo-text"
							type="text"
							value={newText}
							onChange={handleChange}
						/>
						<Button onClick={() => setEditing(false)}>Cancel</Button>
						<Button onClick={handleSubmit}>Save</Button>
					</ButtonGroup>)}
				</li>
			))
			}
		</ul>
  )
}

export default Todo;