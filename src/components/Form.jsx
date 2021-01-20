import React from 'react'
import '../styles/searcher.css'


function Form({ setInputText, inputText, setTodos, todos, setStatus }) {

  const handleInput = (event) => {
    setInputText(event.target.value)
  }

  const handleSubmitTodo = (event) => {
    event.preventDefault()
    setTodos([
      ...todos,
      {
        text: inputText,
        completed: false,
        id: Math.random() * 1000,
      }
    ])

    setInputText('')
  }

  const handleStatus = (event) => {
    setStatus(event.target.value)
  }

  return (
    <>
      <form>
        <input
          value={inputText}
          type="text"
          placeholder='Plan?'
          onChange={handleInput}
          name='TODO'
          className='todo__input'
        />
        <button
          className='todo__btn'
          type='button'
          onClick={handleSubmitTodo} >+</button>
      </form>

      <div className="filter">
        <select onChange={handleStatus} name="todos" className='filter__todo'>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </>
  )
}

export default Form