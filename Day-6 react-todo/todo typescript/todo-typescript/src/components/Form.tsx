import React, { MouseEventHandler } from 'react'



export default function Form({todo,setTodo,addTodo,btnType,updateTodo}:formProps) {
  return (
   <form  onSubmit={btnType == "add" ?addTodo : updateTodo}>
    <input type="text" name="todo" id="todo" value={todo} onChange={(e)=>setTodo(e.target.value)}/>
    <button className='blue' type='submit'>{btnType == "add" ? "add" : "edit"}</button>
    

   </form>
  )
}
