import React from "react";
import Todo from "./Todo";
import { sizes } from "../constants/styles";
import styled from "styled-components";

const List = styled.ul`
  margin: ${sizes.md} ${sizes.xs};
  padding: 0;
`;

const TodoList = ({
  todos,
  handleDelete,
  handleToggleCompleted,
  handleEdit,
}) => {
  return (
    <List>
      {todos.map((todo) => (
        <Todo
          handleToggleCompleted={handleToggleCompleted}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          todo={todo}
          key={todo.id}
        />
      ))}
    </List>
  );
};

export default TodoList;
