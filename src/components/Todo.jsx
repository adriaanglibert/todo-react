import React, { useState } from "react";

const Todo = ({ todo, handleDelete, handleToggleCompleted, handleEdit }) => {
  const { id, name } = todo;
  const [checked, setChecked] = useState(todo.completed);
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(name);

  const handleClick = (id) => {
    handleDelete(id);
  };

  const handleChange = (e) => {
    setChecked(e.target.checked);
    handleToggleCompleted(id);
  };

  const handleSave = () => {
    setIsEditing(false);
    handleEdit(id, newName);
  }

  return (
    <li>
      {
        isEditing ?
        <>
          <input value={newName} onChange={e => setNewName(e.target.value)} type="text"/>
          <button onClick={() => handleSave()}>
            Save
          </button>
        </>
        :
        <>
          <input checked={checked} onChange={handleChange} type="checkbox" />
          {name}
          <button onClick={() => setIsEditing(true)}>edit</button>
          <button onClick={() => handleClick(id)}>del</button>
        </>
      }
    </li>
  );
};

export default Todo;
