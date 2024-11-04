import React from 'react'
import { Link } from 'react-router-dom'

export default function Pagination({item,paginationHandler,currentPageNumber}) {
   let arr =  Array(item.length / 10).fill("")
   
   
  return (
    <div className='flex gap-3rem] justify-center items-center p-10'>
      
        {arr.map((item,index)=> (<Link to={`?page=${index+1}`}><button disabled = {currentPageNumber == index}  onClick={(elem)=>paginationHandler(elem)} className={`px-4 py-2 mx-2 bg-gray-500  text-white rounded hover:bg-gray-800 ${currentPageNumber == index ? "bg-gray-900":""}`}>{index+1}</button></Link>))}
        
    </div>
  )
}
