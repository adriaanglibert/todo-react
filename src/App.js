import './App.css';

import React, { useEffect, useState } from "react";
import { global, lightTheme, sizes } from './constants/styles';
import styled, { ThemeProvider } from 'styled-components';

import BottomCard from "./components/BottomCard";
import Center from './components/Center';
import Heading from "./components/Heading";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { v4 as uuid } from 'uuid';

const Parent = styled.div`
  font-family: ${global.bodyFamily};
  font-size: ${sizes.base};
  background-color: ${props => props.theme.body};
  color: ${props => props.theme.text};
  min-height: 100vh;
`;

const ParentColumn = styled(Parent)`
  display: flex;
  flex-direction: column;
`;

const Sticky = styled.div`
  position: sticky;
  top: 0;
  left: 0;
`

function App() {
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')) ?? []);
  const [theme,] = useState(lightTheme);

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
    const updatedTodos = todos.map(todo => {
      if (id === todo.id) {
        return {
          ...todo,
          completed: !todo.completed
        };
      }
      return todo;
    });

    setTodos(updatedTodos);
  }

  const editTodo = (id, newName) => {
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          name: newName
        }
      }
      return todo;
    }));
  }

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <ThemeProvider theme={theme}>
      <ParentColumn>
        <Sticky>
          <Center padding={`${sizes.xl} ${sizes.base}`}>
            <Heading margin={`0 auto ${sizes.xl} auto`}>Adriaan's todo</Heading>
            <TodoForm addTodo={addTodo} />
          </Center>
        </Sticky>

        <BottomCard>
          {
            todos.length ?
              <>
                {/* <Filters /> */}
                <TodoList
                  handleToggleCompleted={toggleCompleted}
                  handleDelete={removeTodo}
                  handleEdit={editTodo}
                  todos={todos} />
              </>
              :
              <Center padding={`${sizes.xl} ${sizes.md}`}>
                Er zijn nog geen todo’s toegevoegd.
              </Center>
          }
        </BottomCard>
      </ParentColumn>
    </ThemeProvider>
  );
}

export default App;
