import Button from './Button'
import Input from './Input'
import React from 'react'
import { useState } from 'react';

const TodoForm = ({addTodo}) => {
  const [name, setName] = useState('');

  const handleSubmit = (e, name) => {
    e.preventDefault();
    addTodo(name);
    setName('');
  }

  const handleChange = (e) => {
    setName(e.target.value)
  }

  return (
    <form onSubmit={(e) => handleSubmit(e, name)}>
      <Input value={name} handleChange={handleChange}/>
      <Button>
         Opslaan
      </Button>
    </form>
  )
}

export default TodoForm