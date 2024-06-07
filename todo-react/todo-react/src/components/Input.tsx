/* import React from 'react' */

/* import { useState } from "react" */

interface Props {
  todoList: string[];
  handleAdd: () => void;
  handleChange: (event:React.ChangeEvent<HTMLInputElement>) => void;

}

const Input = ({handleAdd, handleChange}:Props) => {
  return (
    <div>
      <label htmlFor="input">Add task</label>
      <input onChange={handleChange} className='form-control input' type="text" name="" id="input" /><button className="btn btn-primary" onClick={handleAdd}>Add</button>
    </div>
  )
}

export default Input