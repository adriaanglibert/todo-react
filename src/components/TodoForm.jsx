import Form from './Form';
import React from "react";
import useInput from "../hooks/useInput";

const TodoForm = ({ addTodo }) => {
  const [name, handleChange, handleSubmit] = useInput(addTodo);

  return (
    <Form
      label="Voeg een todo toe"
      handleSubmit={(e) => handleSubmit(e, name)}
      value={name}
      handleChange={handleChange}
    />
  );
};

export default TodoForm;
