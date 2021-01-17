import React, { useState } from 'react'
import Form from './components/Form'
import ToDoList from './components/ToDoList'

function App() {

  const [inputText, setInputText] = useState('')
  const [todos, setTodos] = useState([])

  return (
    <>
      <div className="app">
        <div className='title'>
          <h1>To Do List</h1>
        </div>
        <div className="searcher">
          <Form
            setTodos={setTodos}
            todos={todos}
            inputText={inputText}
            setInputText={setInputText}
          />
        </div>
        <ToDoList todos={todos} />
      </div>
    </>
  );
}

export default App;
