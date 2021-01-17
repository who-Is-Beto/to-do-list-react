import React from 'react'

const ToDo = ({ item, todos, setTodos }) => {


  const handleDeleteToDo = () => {
    console.log(todos.filter((element) => element.id !== item.id))
    setTodos(todos.filter((el) => el.id !== item.id))
  }

  const handleCompleted = () => {
    setTodos(todos.map((element) => {
      if (element.id === item.id) {
        return {
          ...item,
          completed: !item.completed
        }
      }
      return item
    }))
  }

  return (
    <li>
      <h2>{item.text}</h2>
      <div className="item__options">
        <button type='button' onClick={handleCompleted}>{item.completed ? 'completed' : 'uncomplted'}</button>
        <button type='button' onClick={handleDeleteToDo}>Delete</button>
      </div>
    </li>
  )
}

export default ToDo 