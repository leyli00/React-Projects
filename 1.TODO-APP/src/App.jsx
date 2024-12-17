import { useState } from 'react'
import './App.css'
import CreateTodo from './components/CreateTodo'

function App() {

  return (
    
   <div className='app'>
    <div className='main'>
      <CreateTodo/>
    </div>
   </div>
  )
}

export default App
