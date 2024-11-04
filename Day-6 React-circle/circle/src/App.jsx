import { useEffect, useState } from 'react'

import './App.css'
import Button from './components/Button'
import CircleDiv from './components/CircleDiv'

function App() {
  const randomColor = ["red", "green", "pink", "yellow", "purple"]


  const [buttonsArray, setButtonsArray] = useState([
    { innerText: "Reset", id: "reset", disabled: true, handler: resetHandler },
    { innerText: "Redo", id: "redo", disabled: true, handler: redoHandler },
    { innerText: "Undo", id: "undo", disabled: true, handler: undoHandler }
  ]);



  const [clickedData, setClickedData] = useState([])
  let [redoClick, setRedoClick] = useState([]);


  function clickHandler(e) {


    let Key = e.target.id;
    if (e.target.nodeName === "BUTTON" && Key) {
      switch (Key) {
        case "reset": resetHandler()

          break;

        case "redo": redoHandler()

          break;


        case "undo": undoHandler()

          break;

        default:

      }
    } else {


      let xPosition = e.clientX - 10
      let yPosition = e.clientY - 10
      let randomColorValue = generateRandomColor()
      setClickedData((prev) => [...prev, { xPosition, yPosition, randomColorValue }]);


    }

  }


  function generateRandomColor() {
    let number = Math.floor(Math.random() * (5));

    return randomColor[number]

  }


  function resetHandler() {
    setClickedData([])
    setRedoClick([])
  }

  function redoHandler() {
    let redoData = redoClick.pop();
    setClickedData((prev) => [...prev, redoData])
  }

  function undoHandler() {

    
    let redoData = clickedData.pop();
    setRedoClick((prev) => [...prev, redoData])

  }


useEffect(()=>{
  let buttons = document.querySelectorAll("button");
  if(clickedData.length > 0){
    buttons[0].disabled = false
    buttons[2].disabled = false 
  }else{
    buttons[0].disabled = true
    buttons[2].disabled = true 
  }

  if(redoClick.length > 0){
    buttons[1].disabled = false   
  }else{
    buttons[1].disabled = true   

  }
},[clickedData,redoClick])

  return (
    <div id="wrapper" onClick={clickHandler}>
      {buttonsArray.map((item) => <Button text={item.innerText} id={item.id} disabled={item.disabled} handler={item.handler} />)}
      {clickedData.map((item) => <CircleDiv xPosition={item.xPosition} yPosition={item.yPosition} randomColorValue={item.randomColorValue} />)}
    </div>

  )
}

export default App
