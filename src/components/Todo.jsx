import React from 'react'

const Todo = ({todo, handleDelete}) => {
const {id, completed, name} = todo;

const handleClick = (id) => {
    handleDelete(id);
}

  return (
    <li>{name}
    <button onClick={() => handleClick(id)}>
        del
    </button></li>
  )
}

export default Todo