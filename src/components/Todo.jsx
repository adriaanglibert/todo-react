import React from 'react'
import { useState } from 'react';

const Todo = ({todo, handleDelete, handleToggleComplete}) => {
  const {id, completed, name} = todo;
  const [checked, setChecked] = useState(false);

const handleClick = (id) => {
    handleDelete(id);
}

const handleCheck = (isChecked) => {
  setChecked(isChecked);
  handleToggleComplete(id, isChecked);
}

  return (
    <li>
      <input
        checked={checked}
        onChange={(e) => handleCheck(e.target.checked)}
        type="checkbox" />
      {name}
      <button onClick={() => handleClick(id)}>
          del
      </button>
    </li>
  )
}

export default Todo