import React from 'react'
import Todo from './Todo';

const TodoList = ({todos, handleDelete}) => {
  return (
    <ul>
        {
            todos.map(todo => <Todo
                    handleDelete={handleDelete}
                    todo={todo}
                    key={todo.id}/>)
        }
    </ul>
  )
}

export default TodoList