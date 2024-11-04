import { useEffect, useState } from 'react'
import './App.css'
import Wrapper from './components/Wrapper'
import Form from './components/Form'
import TodoWrapper from './components/TodoWrapper'
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([])
  const [editTodoData, setEditTodoData] = useState({})
  const [btnType, setBtnType] = useState("add")

  function addTodo(elem) {

    elem.preventDefault()

    if(todo.length > 0){

      setTodos((prev) => [...prev, { id: uuidv4(), todo, checked: false }])
  
      localStorage.setItem("todos", JSON.stringify([...todos, { id: uuidv4(), todo, checked: false }]))
      setTodo("")
    }
  }

  function editTodo(id) {


    let filterData = todos.find((item) => item.id == id);

    setBtnType("edit")
    setTodo(filterData.todo)
    setEditTodoData(filterData);
  }

  function updateTodo(elem) {
    elem.preventDefault();

    let filterData = todos.map((item) => item.id == editTodoData.id ? { ...item, todo: todo } : item);


    setTodos(filterData);
    localStorage.setItem("todos", JSON.stringify(filterData))
    setTodo("")
    setBtnType("add")


  }



  function deleteTodo(id) {
    let newTodos = todos.filter((elem) => elem.id !== id)
    localStorage.setItem("todos", JSON.stringify(newTodos))
    setTodos(newTodos)
  }



  function checkBoxHandler(id) {
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

  console.log("hello");
  


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
