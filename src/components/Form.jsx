import React from 'react'
import '../styles/searcher.css'


function Form({ setInputText, inputText, setTodos, todos }) {

  const handleInput = (event) => {
    console.log(event.target.value)
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
        <select name="todos" className='filter__todo'>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </>
  )
}

export default Form