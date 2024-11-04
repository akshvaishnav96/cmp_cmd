import React from 'react'
import Button from './Button'

export default function Todo({text,id,editTodo,deleteTodo,checkBoxHandler,checked}) {
  return (
    <div className='todo'>
      <p className={checked ? "greenText" : ""}>{text} </p>
      <div className='buttonsMain'>

      <Button onClick={()=>editTodo(id)} text="edit" className="blue" checked={checked} />
     <Button onClick={()=>deleteTodo(id)} text="delete" className="red"  /> 
      <input type="checkbox" className='checkbox' onChange={()=>checkBoxHandler(id)} checked={checked}/>
      </div>
    
    </div>
  )
}
