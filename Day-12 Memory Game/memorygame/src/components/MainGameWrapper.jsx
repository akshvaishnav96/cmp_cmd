import React from 'react'

export default function MainGameWrapper({ children,click,score,timer }) {
  return (
    <div className="container flex items-center justify-center flex-row">

      <div className='h-[55rem] mainGameWrapper aspect-square bg-blue-900 '>

        {children}
      </div>
        <div className="timerDiv flex justify-between flex-col items-center gap-[2rem]" >
          <span className='p-[1rem] rounded-[50%] bg-black text-white'>{timer}</span>
          <div className='m-5'>
            Click's
            <span className='bg-red-500 text-white rounded-[50%] p-3 m-3'>{click}</span>
          </div>
          <div className='m-5'>
            Score
            <span className='bg-red-500 text-white rounded-[50%] p-3 m-3'>{score}</span>
          </div>
        </div>
    </div>
  )
}
