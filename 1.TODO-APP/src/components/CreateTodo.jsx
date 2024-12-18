import React, { useState } from 'react'

function CreateTodo({propCreateTodo}) {

  const [newTodo, setNewTodo] = useState('');

  const clearTodoInput = () => {
    setNewTodo('');
  }

  const createTodo = () => {
    if(!newTodo) return;

    const request = {
      id : Math.floor(Math.random() * 99999),
      content : newTodo
    }
    propCreateTodo(request);
    clearTodoInput();

  }
  return (
    <div>
        <div className='create-todo-div'>
            <input className='todo-input' type="text" placeholder='Todo giriniz'
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)} />
            <button className='create-todo-button' onClick={createTodo}>Todo Oluştur</button>
        </div>
    </div>
  )
}

export default CreateTodo