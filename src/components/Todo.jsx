import React, { useState } from "react";

const Todo = ({ todo, handleDelete, handleToggleCompleted }) => {
  const { id, completed, name } = todo;
  const [checked, setChecked] = useState(todo.completed);

  const handleClick = (id) => {
    handleDelete(id);
  };

  const handleChange = (e) => {
    setChecked(e.target.checked);
    handleToggleCompleted(id);
  };

  return (
    <li>
      <input checked={checked} onChange={handleChange} type="checkbox" />
      {name}
      <button onClick={() => handleClick(id)}>del</button>
    </li>
  );
};

export default Todo;
