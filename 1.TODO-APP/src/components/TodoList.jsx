import React from 'react'
import Todo from './Todo'

function TodoList({propTodos, onRemoveTodo}) {
  return (
    <div className='todo-list-div'>
        {
            propTodos && propTodos.map((todo) => (
                <Todo key={todo.id}  todoProp = {todo} remove = {onRemoveTodo} />
            ))
        }
        
    </div>
  )
}

export default TodoList