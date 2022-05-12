import React, { useEffect, useState } from "react";
import { global, sizes } from "../constants/styles";

import BottomCard from "../components/BottomCard";
import Center from "../components/Center";
import Heading from "../components/Heading";
import { TODO_API } from "../constants/api";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";
import styled from "styled-components";
import useFetch from "../hooks/useFetch";
import { v4 as uuid } from "uuid";

const Parent = styled.div`
  font-family: ${global.bodyFamily};
  font-size: ${sizes.base};
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
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
`;

function Home() {
  const [data, error, loading] = useFetch(TODO_API);
  const [todos, setTodos] = useState(data);

  const addTodo = (name) => {
    setTodos([
      ...todos,
      {
        id: uuid(),
        name: name,
        completed: false,
      },
    ]);
  };

  const removeTodo = (id) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  };

  const toggleCompleted = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (id === todo.id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    });

    setTodos(updatedTodos);
  };

  const editTodo = (id, newName) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            name: newName,
          };
        }
        return todo;
      })
    );
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    setTodos(data)
  }, [data]);

  return (
    <ParentColumn>
      <Sticky>
        <Center padding={`${sizes.xl} ${sizes.base}`}>
          <Heading margin={`0 auto ${sizes.xl} auto`}>Adriaan's todo</Heading>
          <TodoForm addTodo={addTodo} />
        </Center>
      </Sticky>

      <BottomCard>
        {error ? (
          <Center padding={`${sizes.xl} ${sizes.md}`}>
            Er is iets misgegaan: {error}
          </Center>
        ) : (loading || !todos) && !error ? (
          <Center padding={`${sizes.xl} ${sizes.md}`}>Loading</Center>
        ) : (
          <>
            {/* <Filters /> */}
            <TodoList
              handleToggleCompleted={toggleCompleted}
              handleDelete={removeTodo}
              handleEdit={editTodo}
              todos={todos}
            />
          </>
        )}
      </BottomCard>
    </ParentColumn>
  );
}

export default Home;
