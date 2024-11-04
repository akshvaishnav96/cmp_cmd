import React from 'react'

export default function Form({formStatus,cancelForm,formHandler,setInput,input}) {
  return (<>
    {formStatus ? <form onSubmit={formHandler}>
    <div className="formContaint">
      <h1>Please Enter Name</h1>
      <input  onChange={(e)=>setInput(e.target.value)}  value={input} type="text" name="avatarName" />
      <div className="formButtonMain">
        <button type="submit">Add</button>
        <button type="button" className="cancelModal" onClick={cancelForm}>cancel</button>
      </div>
    </div>
  </form>: ""}
  </>
  )
}
