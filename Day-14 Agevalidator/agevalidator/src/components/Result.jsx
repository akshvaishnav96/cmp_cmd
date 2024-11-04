import React from 'react'

export default function Result({result,restartHandler}) {
  return (
    <div className={`p-20 text-3xl text-center border border-gray-700 text-gray-800  shadow-lg shadow-gray-500/80 rounded ${result ? "bg-green-500" : "bg-red-400"}`}>{result ? <h1 >You are eligible becouse you are above 18</h1> : <h1>You are under 18 so you are not elegible</h1>}
    <button className='py-3 my-5 px-8 text-xl rounded border border-black  hover:bg-blue-600  hover:text-white ' onClick={restartHandler}> Check Agin</button></div>
  )
}
