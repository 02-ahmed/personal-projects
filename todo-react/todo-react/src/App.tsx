/* import React from 'react' */
import { useState } from 'react';
import Todo from './components/Todo'
import Input from './components/Input';

const App = () => {
  const [todoList, setTodoList] = useState([
    "exercise", "rest"
  ]);

  const [input, setInput] = useState("")

  const [isInput, setIsInput] = useState(false);

  const Change = (event:React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value)
  }
  
  const Add = () => {
    setTodoList([
      ...todoList, input
    ])
  }

  

  const renderInput = isInput ? <Input todoList={todoList} handleAdd={Add} handleChange={Change} /> : null;

  const handleButtonClick = () => {
    setIsInput(!isInput)
  }

  return (
    <>
      <Todo todoList={todoList} handleButtonClick={handleButtonClick}/>
      {renderInput}
    </>
  )
}

export default App