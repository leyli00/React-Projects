import { useState } from 'react'
import './App.css'
import CreateTodo from './components/CreateTodo'
import TodoList from './components/TodoList'

function App() {

  const [todos, setTodos] = useState([]);

  const createTodo = (newTodo) => {
    setTodos([...todos, newTodo])
  }

  const removeTodo = (todoId) => {
    setTodos([...todos.filter((todo) => todo.id !== todoId)])
  }

  return (
    
   <div className='app'>
    <div className='main'>
      <CreateTodo propCreateTodo = {createTodo} />
      <TodoList propTodos = {todos} onRemoveTodo = {removeTodo} />
    </div>
   </div>
  )
}

export default App
