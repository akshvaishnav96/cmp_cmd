import React from 'react'
import Todo from './Todo'

export default function TodoWrapper({todos,editTodo,deleteTodo,checkBoxHandler}) {
  return (
    <div className='todoWrapper'>
      
      
      {todos.map((item,index)=>(
        <Todo key={index} text={item.todo} id={item.id} editTodo={editTodo} deleteTodo={deleteTodo} checkBoxHandler={checkBoxHandler} checked={item.checked}/>
    )
    
    )}</div>
  )
}
