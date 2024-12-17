import React from 'react'

function CreateTodo() {
  return (
    <div>
        <div className='create-todo-div'>
            <input className='todo-input' type="text" placeholder='Todo giriniz' />
            <button className='create-todo-button'>Todo Oluştur</button>
        </div>
    </div>
  )
}

export default CreateTodo