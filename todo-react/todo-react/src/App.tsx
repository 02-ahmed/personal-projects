/* import React from 'react' */
import { useState } from 'react';
import Todo from './components/Todo'
import Input from './components/Input';

const App = () => {
  const [todoList, setTodoList] = useState<string[]>([]);

  const [input, setInput] = useState("")

  const [isInput, setIsInput] = useState(false);

  const Change = (event:React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value)
  }
  
  const Add = () => {
    if (input.trim()) {
      setTodoList([
        ...todoList, input
      ]);
      setInput('');  // Clear the input field after adding
    }
  }

  

  const renderInput = isInput ? <Input todoList={todoList} handleAdd={Add} handleChange={Change} input={input}/> : null;

  const handleButtonClick = () => {
    setIsInput(!isInput)
  }

  const Delete = (toDelete: string) => {
    setTodoList(todoList.filter((todo) => todo!==toDelete))
  }

  return (
    <>
      <Todo todoList={todoList} handleButtonClick={handleButtonClick} handleDelete={Delete}>
        {renderInput}
      </Todo>
      
    </>
  )
}

export default App