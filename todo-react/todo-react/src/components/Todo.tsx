/* import React from 'react' */
import './Todo.css';
import { IoIosAdd } from "react-icons/io";
import { MdDelete } from "react-icons/md";

interface Props {
  todoList : string[];
  handleButtonClick : () => void;
}

const Todo = ({todoList, handleButtonClick}:Props) => {
  return (
    <>
      <div className="title-section">
      <h1>todo</h1>
      </div>
      
      <div className='main-section'>
        <ul>
          {todoList.map((todo) => (
            <div className='todo-item' key={todo}>
              <li key={todo}>{todo}<MdDelete className='delete' /></li>
            </div>
          ))}
        </ul>
        <IoIosAdd className='btn' size={80} onClick={handleButtonClick}/>
      </div>
      
    </>
  )
}

export default Todo