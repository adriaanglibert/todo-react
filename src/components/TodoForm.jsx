import Button from "./Button";
import Center from "./Center";
import Input from "./Input";
import React from "react";
import { sizes } from "../constants/styles";
import { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [name, setName] = useState("");

  const handleSubmit = (e, name) => {
    e.preventDefault();
    addTodo(name);
    setName("");
  };

  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <form onSubmit={(e) => handleSubmit(e, name)}>
      <Center>
        <Input
          label="Voeg een todo toe"
          value={name}
          handleChange={handleChange}
        />
        <Button margin={`${sizes.md} 0 0 0`}>Opslaan</Button>
      </Center>
    </form>
  );
};

export default TodoForm;
