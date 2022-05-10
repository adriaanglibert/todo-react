import React from 'react'
import Todo from './Todo';

const TodoList = ({todos, handleDelete, handleEdit, handleToggleComplete}) => {
  return (
    <ul>
        {
            todos.map(todo => <Todo
                    todo={todo}
                    handleEdit={handleEdit}
                    handleDelete={handleDelete}
                    handleToggleComplete={handleToggleComplete}
                    key={todo.id}/>)
        }
    </ul>
  )
}

export default TodoList