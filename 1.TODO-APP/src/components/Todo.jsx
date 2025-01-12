import React, { useState } from 'react'
import { IoIosRemoveCircleOutline } from "react-icons/io";
import { CiSquareCheck } from "react-icons/ci";
import { CiEdit } from "react-icons/ci";

function Todo({todoProp, remove, updateTodoText}) {

    const {id, content} = todoProp;

    const [editable, setEditable] = useState(false);
    const [newTodo, setNewTodo] = useState(content);

    const removeTodo = () => {
        remove(id);
    }

    const updateTodo = ()=>{
        const request = {
          id : id,
          content : newTodo
        }
        updateTodoText(request);
        setEditable(false);
      }
    
  return (
    <div>
       
        <div className='todo-elements'>
            <div>
                {
                    editable ? <input className='todo-input' type="text" style={{width: '380px'}} value={newTodo} onChange={(e) => setNewTodo(e.target.value)} /> : content
                }
            </div>
            <div>
                <IoIosRemoveCircleOutline className='icons' onClick={removeTodo} />
                {
                    editable ? <CiSquareCheck  className='icons' onClick={updateTodo} /> : <CiEdit  className='icons' onClick={()=> setEditable(true)} />
                }
                
            </div>
            
        </div>

    </div>
    
  )
}

export default Todo