import React from 'react'
import ToDo from './ToDo.jsx'

const ToDoList = ({ todos, setTodos }) => {
  return (
    <div className="todo__Container">
      <ul className='todo__list'>
        {todos.map((item) => (
          <ToDo setTodos={setTodos} key={item.id} todos={todos} item={item} />
        ))}
      </ul>
    </div>
  )
}

export default ToDoList