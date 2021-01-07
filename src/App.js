import React from 'react'
import Form from './components/Form'

function App() {
  return (
    <>
      <div className="app">
        <div className='title'>
          <h1>To Do List</h1>
        </div>
        <div className="searcher">
          <Form />
        </div>
      </div>
    </>
  );
}

export default App;
