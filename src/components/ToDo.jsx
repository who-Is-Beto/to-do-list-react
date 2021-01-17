import React from 'react'

const ToDo = ({ item, todos, setTodos }) => {


  const handleDeleteToDo = () => {
    console.log(todos.filter((element) => element.id !== item.id))
    setTodos(todos.filter((el) => el.id !== item.id))
  }

  return (
    <li>
      <h2>{item.text}</h2>
      <div className="item__options">
        <small>{item.completed ? 'completed' : 'uncompleted'}</small>
        <button type='button' onClick={handleDeleteToDo}>Delete</button>
      </div>
    </li>
  )
}

export default ToDo 