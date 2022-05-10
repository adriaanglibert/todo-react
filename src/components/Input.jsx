import React from 'react'

const Input = React.forwardRef(({value, handleChange}, ref) => {
  return (
      <label>
          <span>Voeg todo toe</span>
          <input ref={ref} value={value} onChange={handleChange} type="text" name="todo" />
      </label>
  )
});

export default Input