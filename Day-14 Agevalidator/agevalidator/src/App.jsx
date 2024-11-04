import { useState } from 'react'

import './App.css'
import ShowMsg from './components/ShowMsg'
import Result from './components/Result'

function App() {

  const currentDate = new Date()
  let max = currentDate.toLocaleDateString('en-ca')
  
  const [showMsg, setShowMsg] = useState(false)
  const [isError, setIsError] = useState(false)
  const [isEligibal, setIsEligibal] = useState(false)
  const [result, setResult] = useState(false);




  function showMsgHandler() {
    setShowMsg((prev) => !prev)
  }

  function submitHandler(elem) {
    elem.preventDefault();
    let val = elem.target.date.value
    if (!val) {
      setIsError(true)
      return
    } else {
      setIsError(false)
    }

    const date = new Date(val)

    if ((currentDate-date)/((1000*60*60*24*365.25)) >= 18) {
      setResult(true)
     
    }else{
      setResult(false)
    }
    setIsEligibal(true)
  }

  function restartHandler(){


  setShowMsg(false);
  setIsError(false)
  setIsEligibal(false)
  setResult(false)
  }

  return (
    <div className='bg-gray-200 h-[100vh] flex justify-center items-center'>
      { !isEligibal && <div className='maincard bg-white w-[50%] aspect-video p-8 shadow-lg shadow-gray-500/80 rounded'>
        <h2 className='font-bold text-4xl '>Find Out If You Are Eligibal To Use Our Service!</h2>
        <div className='font-bold my-3 text-2xl'>What is your date of birth ?</div>
        <form onSubmit={submitHandler} className='flex flex-col'>
          <input type="date" className='w-full border border-black py-3 rounded p-3' name="date" id="" max={max} />
          {isError && <span className='text-red-500 font-bold py-5'>Date of birth is a required field</span>}
          <button type='submit' className='border text-xl border-green-500 rounded my-5 px-8 py-2'> Check</button>
        </form>

        <p onClick={showMsgHandler} className='hover:text-green-500 hover:underline cursor-pointer'>why do you need to know this ?</p>

        {showMsg && <ShowMsg />}
      </div>}

      {isEligibal && <Result  result={result} restartHandler={restartHandler}/>}
    </div>
  )
}

export default App
