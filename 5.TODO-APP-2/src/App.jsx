import { useState } from 'react'
import './App.css'
import './styles.css';

function App() {

  return (
    <div className='todo-app'>
      <div className='container'>
        <form className='form' action="">
          <label className='form-header'>New Item</label>
          <input className='new-todo' type="text" />
          <button className='btn'>Add</button>
        </form>

        <div className='list-container'>
          <h1 className='todo-header'>Todo List</h1>
          <ul className='items'>
            <input id='checkbox' type="checkbox" />
            <li className='item'>Do loundry</li>
            <button className='btn btn-delete'>Delete</button>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default App
