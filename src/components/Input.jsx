import React from 'react'

const Input = ({value, handleChange}) => {
  return (
      <label>
          <span>Voeg todo toe</span>
          <input value={value} onChange={handleChange} type="text" name="todo" />
      </label>
  )
}

export default Input