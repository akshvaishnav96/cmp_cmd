import React, { useState } from 'react'
import { UPI_HANDLES } from './UPI_HANDLES'
import { imageUrl } from './ImageLinks'

export default function App2() {


    const [optionVal,setOptionVal] = useState(0);

    const [inputVal,setInputVal] = useState("");

    const [optionDisplay,setOptionDisplay] = useState(false)
    const [inputDisplay,setInputDisplay] = useState(true)

    const [optionData,setOptionData]=  useState([])


    function inputHandler(e){
      if(e.target.value.includes("@")){
        let upiValueLetters = e.target.value.slice(e.target.value.indexOf("@")+1)
        if(upiValueLetters !== "<empty string>"){
          let filterData =   UPI_HANDLES.filter((item)=>{
                return item.startsWith(upiValueLetters)  
            })

            setOptionData((prev)=> filterData)
            setOptionDisplay(true);
        }
        
      }else{
        setOptionDisplay(false)

      }
      setInputVal(e.target.value)
    }


        function keyPressHandler(e) {
          
            if (e.key == "ArrowDown") {
              setOptionVal((prev) => {
               let val =  Number(prev)
                setInputDisplay(false)
               return val+1 
              })
        
        
            } else if (e.key == "ArrowUp") {
              setOptionVal((prev) => {
               let val =  Number(prev)
               setInputDisplay(false)
               return val-1 
              })
          
          }
          else if(e.key == "ArrowRight"){
            setOptionVal(e.target.id)
            setOptionDisplay(false)
            setInputDisplay(false)
            setInputVal(inputVal+optionData[optionVal])
            }

            else if(e.key == "Tab"){
                setOptionVal(e.target.id)
                setOptionDisplay(false)
                setInputDisplay(false)
                setInputVal(inputVal+optionData[optionVal])

                }
        
        }
        
          function mouseHandler(e) {
            
            setOptionVal(e.target.id)
           
        
          }
        
          function mouseDownHandler(e) {
            setOptionVal(e.target.id)
            setOptionDisplay(false)
            setInputDisplay(true)
            setInputVal(inputVal+optionData[optionVal])

          }

          function inputDisplayHandler(){
            setInputDisplay(true)
          }
   
   
    return (

        <div className='wrapper'>
            <div className='container'>
                <img src={imageUrl} alt="" srcset="" />
              <div className='inputMainDiv'>
              <input style={{zIndex:1,position:"relative"}} onChange={inputHandler} onKeyDown={keyPressHandler} value={inputVal} type="text" placeholder='Enter upi' />
                <div className={`options ${optionDisplay ? "" : "none"}`}>
                    {optionData.map((item,index)=><div id={index} className={`${optionVal == index ? "active":""} items`} onMouseDown={mouseDownHandler} onMouseEnter={mouseHandler} >{item}</div>)}
                </div>
                <div onClick={inputDisplayHandler}  className="inputDiv" style={inputDisplay ? {zIndex:0 , display:"none"} : {zIndex:10,background:"white",display:"block"}}>{inputVal}<span>{optionData[optionVal]}</span></div>
              </div>
            </div>
        </div>

    )
}
