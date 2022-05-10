import React from 'react'
import Todo from './Todo';

const TodoList = ({todos, handleDelete, handleToggleCompleted}) => {
  return (
    <ul>
        {
            todos.map(todo => <Todo
                    handleToggleCompleted={handleToggleCompleted}
                    handleDelete={handleDelete}
                    todo={todo}
                    key={todo.id}/>)
        }
    </ul>
  )
}

export default TodoList