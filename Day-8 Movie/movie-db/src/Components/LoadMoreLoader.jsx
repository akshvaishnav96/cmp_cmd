import React from 'react'
import { RotatingLines } from 'react-loader-spinner'

export default function LoadMoreLoader() {
  return (
    <div className='loader flex justify-center'>
    <RotatingLines
visible={true}
height="96"
width="96"
color="grey"
strokeWidth="5"
animationDuration="0.75"
ariaLabel="rotating-lines-loading"
wrapperStyle={{}}
wrapperClass=""
/>
    </div>
  )
}
