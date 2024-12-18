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

  const updateTodo = (newTodo) => {
    const updateTodos = todos.map((todo) => {
      if(todo.id !== newTodo.id){
        return todo;
      }
      return newTodo;
    })
    setTodos([...updateTodos]);
  }

  console.log(todos);

  return (
    
   <div className='app'>
    <div className='main'>
      <CreateTodo propCreateTodo = {createTodo} />
      <TodoList propTodos = {todos} onRemoveTodo = {removeTodo} onUpdateTodo = {updateTodo} />
    </div>
   </div>
  )
}

export default App
