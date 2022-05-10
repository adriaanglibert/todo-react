import React from 'react'
import Todo from './Todo';

const TodoList = ({todos, handleDelete, handleToggleCompleted, handleEdit}) => {
  return (
    <ul>
        {
            todos.map(todo => <Todo
                    handleToggleCompleted={handleToggleCompleted}
                    handleDelete={handleDelete}
                    handleEdit={handleEdit}
                    todo={todo}
                    key={todo.id}/>)
        }
    </ul>
  )
}

export default TodoList