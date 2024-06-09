/* import React from 'react' */
import { ReactNode } from 'react';
import './Todo.css';
import { IoIosAdd } from "react-icons/io";
import { MdDelete } from "react-icons/md";

interface Props {
  todoList : string[];
  handleButtonClick : () => void;
  children: ReactNode;
  handleDelete: (toDelete: string) => void;
}

const Todo = ({todoList, handleButtonClick, children, handleDelete}:Props) => {
  return (
    <>
      <div className="title-section">
      <h1>ToDo</h1>
      </div>
      
      <div className='main-section'>
        <ul>
          {todoList.map((todo) => (
            <div className='todo-item' key={todo}>
              <li key={todo}>{todo}<MdDelete className='delete' onClick={() => handleDelete(todo)} /></li>
            </div>
          ))}
        </ul>
        {children}
        <IoIosAdd className='btn' size={80} onClick={handleButtonClick}/>
      </div>
      
    </>
  )
}

export default Todo