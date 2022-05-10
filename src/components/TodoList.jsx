import React from 'react'
import Todo from './Todo';

const TodoList = ({todos, handleDelete, handleToggleComplete}) => {
  return (
    <ul>
        {
            todos.map(todo => <Todo
                    todo={todo}
                    handleDelete={handleDelete}
                    handleToggleComplete={handleToggleComplete}
                    key={todo.id}/>)
        }
    </ul>
  )
}

export default TodoList