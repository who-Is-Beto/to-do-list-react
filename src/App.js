/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import Form from './components/Form'
import ToDoList from './components/ToDoList'

function App() {

  //state
  const [inputText, setInputText] = useState('')
  const [todos, setTodos] = useState([])
  const [status, setStatus] = useState('all')
  const [filteredTodos, setFilteredTodos] = useState([])

  //Functions

  const handleFilter = () => {
    switch (status) {
      case 'completed':
        setFilteredTodos(todos.filter(item => item.completed === true))
        break

      case 'uncompleted':
        setFilteredTodos(todos.filter(item => item.completed === false))
        break

      default:
        setFilteredTodos(todos)
    }
  }

  useEffect(() => {
    getLocalTodos()
  }, [])

  useEffect(() => {
    handleFilter()
    saveLocalTodos()
  }, [todos, status])

  //lOCAL STORAGE

  const saveLocalTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }

  const getLocalTodos = () => {
    if (localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]))
    } else {
      let localTodos = JSON.parse(localStorage.getItem('todos'))
      setTodos(localTodos)
    }

  }

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
            setStatus={setStatus}
          />
        </div>

        <ToDoList
          setTodos={setTodos}
          todos={todos}
          filteredTodos={filteredTodos}
        />
      </div>
    </>
  );
}

export default App;
