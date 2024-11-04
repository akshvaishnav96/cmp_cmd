import { useEffect, useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainGameWrapper from './components/MainGameWrapper'
import FlipCard from "./components/FlipCard"
import { ImageArr } from './imageLinks'


function App() {
  const [click, setClick] = useState(0)
  const [score, setScore] = useState(0)
  const [gameStart,setGameStart] = useState(false)
  const [timer,setTimer] = useState(60)
  const [gameEnd,setGameEnd] = useState(false)
  const [prevData,setPrevData] = useState([])
  
  const getShuffledArr = useMemo(arr => {
    const newArr = ImageArr.slice()
    for (let i = newArr.length - 1; i > 0; i--) {
      const random = Math.floor(Math.random() * (i + 1));
      [newArr[i], newArr[random]] = [newArr[random], newArr[i]];
    }
    return newArr
  }, [gameEnd])
  
  const [imageData,setImageData] = useState(getShuffledArr)








  function clickHandler(elem, item, id) {


    
    if(prevData.length == 0){
      setImageData((prev)=> {
        prev[id].status = "rotate"
        return [...prev];
      })
      setPrevData([item])
    }else{
     if(prevData[0].image == item.image){
      setScore(prev=>prev+1)
      setClick((prev)=> prev+1)
      setImageData((prev)=> {
        prev[id].status = "rotate"
        return [...prev];
      })
        setPrevData([])
     }else{
      setClick((prev)=> prev+1)
      
      setImageData((prev)=> {
      prevData[0].status = ""
        return [...prev];
      })
      setPrevData([])

     };
      
      
    }
    
    
      

  }


  function startAgain(){
    setGameEnd(false)
    setGameStart(true)
    setTimer(60)
    setScore(0)
    setPrevData([])
    setClick(0)
    imageData.forEach((item)=>{
      item.status = "";
      
    })
  }

  let interVal ;

 function startGame(){

 setGameStart(true)
  interVal = setInterval(() => {
    setTimer(prev=>prev-1)
 }, 1000);

 
 }

 useEffect(()=>{
  if(timer == 0 || score == 6){
    clearInterval(interVal)
    setGameEnd(true)
    setGameStart(false)
    setTimer(60)
    
   }
 },[timer])


  return (
    <>
     

{gameEnd ? <div className='h-[100vh] flex justify-center align-center'>score is {score} <button onClick={startAgain}>Play Again</button></div>: <> <div className='flex bg-blue-600 justify-center items-center h-[100vh]'>
     {gameStart ? "": <button className='px-6 py-2 bg-gray-300 rounded' onClick={startGame}>Start Game</button>}
        {gameStart  ? <MainGameWrapper score={score} click={click} timer={timer}>
          {imageData.map((item, index) => <FlipCard clickHandler={clickHandler} id={index} key={index} item={item} />)}
        </MainGameWrapper> : ""}
      </div></>}

    </>
  )
}

export default App
