import React, { useEffect, useRef } from "react";

import Input from "./Input";
import { useState } from "react";

const Todo = ({ todo, handleDelete, handleEdit, handleToggleComplete }) => {
  const { id, completed, name } = todo;
  const [newName, setNewName] = useState(name);
  const [checked, setChecked] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const editField = useRef(null);

  const handleDeleteButton = (id) => {
    handleDelete(id);
  };

  const handleEditButton = () => {
    setIsEditing(true);
    console.log(editField);
  };

  const handleSaveButton  = () => {
    handleEdit(id, newName);
    setIsEditing(false);
  }

  const handleCheck = (isChecked) => {
    setChecked(isChecked);
    handleToggleComplete(id, isChecked);
  };

  useEffect(() => {
    if (isEditing) {
      editField.current.focus();
    }
  }, [isEditing])

  return (
    <li>
      {!isEditing ? (
        <>
          <input
            checked={checked}
            onChange={(e) => handleCheck(e.target.checked)}
            type="checkbox"
          />
          {name}
          <button onClick={() => handleDeleteButton(id)}>del</button>
          <button onClick={handleEditButton}>edit</button>
        </>
      ) : (
        <>
          <Input value={newName} handleChange={e => setNewName(e.target.value)} ref={editField} />
          <button onClick={handleSaveButton}>save</button>
        </>
      )}
    </li>
  );
};

export default Todo;
