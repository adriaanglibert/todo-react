import React, {useState} from "react";

import BottomCard from "./components/BottomCard";
import Filters from "./components/Filters";
import Heading from "./components/Heading";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { v4 as uuid } from 'uuid';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (name) => {
    setTodos([
      ...todos,
      {
        id: uuid(),
        name: name,
        completed: false
      }
    ]);
  }

  const removeTodo = (id) => {
    const filteredTodos = todos.filter(todo => todo.id !== id);
    setTodos(filteredTodos);
  }

  const toggleCompleted = (id) => {
    setTodos(todos.map(todo => {
      if (id === todo.id) {
        return {
          ...todo,
          completed: !todo.completed
        }
      }
      return todo;
    }))
  }

  const editTodo = (id, newName) => {
    setTodos(todos.map(todo => {
      if (id === todo.id) {
        return {
          ...todo,
          name: newName
        }
      }
      return todo;
    }))
  }

  return (
    <div className="App">
      <Heading>Adriaan's todo</Heading>
      <TodoForm addTodo={addTodo} />
      <BottomCard>
        {
          todos.length ?
          <>
            <Filters />
            {
              todos.filter(todo => todo.completed).map(completedTodos => {
                return <p key={completedTodos.id}>{completedTodos.name}</p>
              })
            }
            <TodoList
              todos={todos}
              handleDelete={removeTodo}
              handleEdit={editTodo}
              handleToggleComplete={toggleCompleted}
              />
          </>
          :
          <p>
            Er zijn nog geen todo’s toegevoegd.
          </p>
        }
      </BottomCard>
    </div>
  );
}

export default App;
