import React from 'react'
import ToDo from './ToDo.jsx'

const ToDoList = ({ todos }) => {
  return (
    <div className="todo__Container">
      <ul className='todo__list'>
        {todos.map((item) => (
          <ToDo item={item} />
        ))}
      </ul>
    </div>
  )
}

export default ToDoList