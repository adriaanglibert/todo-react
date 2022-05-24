import Button from "./Button";
import Center from "./Center";
import Input from "./Input";
import React from "react";
import { sizes } from "../constants/styles";

const Form = ({label, handleSubmit, value, handleChange}) => {
  return (
    <form onSubmit={(e) => handleSubmit(e, value)}>
    <Center>
      <Input
        label={label}
        value={value}
        handleChange={handleChange}
      />
      <Button margin={`${sizes.md} 0 0 0`}>Opslaan</Button>
    </Center>
  </form>
  )
}

export default Form