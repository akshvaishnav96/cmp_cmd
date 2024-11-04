import React from 'react'
import { sortOptions } from '../utils/sortOptions'

export default function SingleProductHeader({heading,genre,updateProducts,sortHandler}) {
 
  
  return (
    <div className='mt-[5rem] flex justify-between text-white items-center '>
        <h5 className='text-3xl'>Explore {heading} </h5>
       <div>
       <select className='m-3' name="generes" id="" onChange={updateProducts}>
        {genre.genres.map((item)=> <option key={item.id} value={item.id}>{item.name}</option>)}
        </select>

        <select className='m-3' name="Sort" id="" onChange={sortHandler}>
          {sortOptions.map((item,index)=> <option key={item.id} value={item.id}>{item.value}</option>)} 
        </select>
       </div>
    </div>
  )
}
