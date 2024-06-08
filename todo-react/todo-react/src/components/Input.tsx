/* import React from 'react' */

/* import { useState } from "react" */

interface Props {
  todoList: string[];
  handleAdd: () => void;
  handleChange: (event:React.ChangeEvent<HTMLInputElement>) => void;
  input: string

}

const Input = ({handleAdd, handleChange, input}:Props) => {
  return (
    <div>
      <label htmlFor="input">Add task</label>
      <input onChange={handleChange} className='form-control input' type="text" name="" id="input" value={input} /><button className="btn btn-primary" onClick={handleAdd}>Add</button>
    </div>
  )
}

export default Input