import React from 'react'
import '../styles/searcher.css'


function Form() {
  return (
    <>
      <form>
        <input type="text" placeholder='Plan?' className='todo__input' />
        <button className='todo__btn' type='submit'>+</button>
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