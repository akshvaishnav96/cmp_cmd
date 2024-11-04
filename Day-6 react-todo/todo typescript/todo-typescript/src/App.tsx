import { useEffect, useState } from 'react'

import './App.css'
import Wrapper from './components/Wrapper'
import Form from './components/Form'
import TodoWrapper from './components/TodoWrapper'
import { v4 as uuidv4 } from 'uuid';


interface setTodo {
  id: string,
  todo: string,
  checked: boolean
}


function App() {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<setTodo[]>([])
  const [editTodoData, setEditTodoData] = useState<setTodo>({ id: "", todo: "", checked: false })
  const [btnType, setBtnType] = useState<string>("add")

  function addTodo(elem: HTMLFormElement) {

    elem.preventDefault()

    if (todo.length > 0) {
      setTodos((prev) => [...prev, { id: uuidv4(), todo, checked: false }])
      localStorage.setItem("todos", JSON.stringify([...todos, { id: uuidv4(), todo, checked: false }]))
      setTodo("")
    }
  }

  function editTodo(id: string) {

    let filterData = todos.find((item) => item.id == id);

    if (filterData) {
      setBtnType("edit")
      setTodo(filterData.todo)
      setEditTodoData(filterData);
    }
  }

  function updateTodo(elem: HTMLFormElement) {
    elem.preventDefault();

    let filterData = todos.map((item) => item.id == editTodoData.id ? { ...item, todo: todo } : item);


    setTodos(filterData);
    localStorage.setItem("todos", JSON.stringify(filterData))
    setTodo("")
    setBtnType("add")


  }



  function deleteTodo(id: string) {
    let newTodos = todos.filter((elem) => elem.id !== id)
    localStorage.setItem("todos", JSON.stringify(newTodos))
    setTodos(newTodos)
  }



  function checkBoxHandler(id: string) {
    let filterData = todos.map((item) => {
      return item.id == id ? { ...item, checked: !item.checked } : item
    })
    setTodos(filterData);
    localStorage.setItem("todos", JSON.stringify(filterData));

  }



  useEffect(() => {

    let localTodos = localStorage.getItem("todos");
    if (localTodos) {
      setTodos(JSON.parse(localTodos));
    }
  }, [])




  return (
    <>
      <Wrapper>

        <Form setTodo={setTodo} todo={todo} addTodo={addTodo} btnType={btnType} updateTodo={updateTodo} />
        <TodoWrapper todos={todos} editTodo={editTodo} deleteTodo={deleteTodo} checkBoxHandler={checkBoxHandler} />
      </Wrapper>
    </>
  )
}

export default App
