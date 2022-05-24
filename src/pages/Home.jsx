import React, { useCallback, useContext, useEffect, useState } from "react";
import { global, sizes } from "../constants/styles";

import BottomCard from "../components/BottomCard";
import Center from "../components/Center";
import Heading from "../components/Heading";
import { TODO_API } from "../constants/api";
import Tag from "../components/Tag";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";
import { UserContext } from '../App';
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

const Row = styled.div`
  display: flex;
  gap: .5rem;
  padding: 2rem 1rem 0rem 2rem;
`;

const FILTER_MAP = {
  All: () => true,
  Uncompleted: (task) => !task.completed,
  Completed: (task) => task.completed,
};

function Home() {
  const [user] = useContext(UserContext);
  const [data, error, loading] = useFetch(TODO_API);
  const [todos, setTodos] = useState(localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : data);
  const [activeFilter, setActiveFilter] = useState("All");

  const addTodo = (name) => {
    setTodos([
      {
        id: uuid(),
        name: name,
        completed: false,
      },
      ...todos,
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

  const filteredTodos = () => {
    return todos.filter(FILTER_MAP[activeFilter]);
  };

  const saveItemsToLocalStorage = useCallback((key, items) => {
    localStorage.setItem(key, JSON.stringify(items));
  }, []);

  useEffect(() => {
    if (todos?.length) {
      saveItemsToLocalStorage("todos", todos);
    }
  }, [todos, saveItemsToLocalStorage]);

  useEffect(() => {
    if (!Boolean(localStorage.getItem('todos'))) {
      setTodos(data);
    }
  }, [data]);

  return (
    <ParentColumn>
      <Sticky>
        <Center padding={`${sizes.xl} ${sizes.base}`}>
          <Heading margin={`0 auto ${sizes.xl} auto`}>{user}'s todo</Heading>
          <TodoForm addTodo={addTodo} />
        </Center>
      </Sticky>

      <BottomCard>
        <Row>
          {Object.keys(FILTER_MAP).map((filter) => (
            <Tag key={filter} selected={activeFilter === filter} handleClick={() => setActiveFilter(filter)}>{filter}</Tag>
          ))}
        </Row>

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
              todos={filteredTodos()}
            />
          </>
        )}
      </BottomCard>
    </ParentColumn>
  );
}

export default Home;
