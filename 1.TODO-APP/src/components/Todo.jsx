import React from 'react'
import { IoIosRemoveCircleOutline } from "react-icons/io";
import { CiSquareCheck } from "react-icons/ci";

function Todo({todoProp, remove}) {
    const {id, content} = todoProp;
    // const [editable, setEditable] = useState();

    const removeTodo = () => {
        remove(id);
    }
  return (
    <div>

       
        <div className='todo-elements'>
            <div>
                {todoProp.content}
            </div>
            <div>
                <IoIosRemoveCircleOutline className='icons' onClick={removeTodo} />
                
                <CiSquareCheck className='icons' />
            </div>
            
        </div>

    </div>
    
  )
}

export default Todo