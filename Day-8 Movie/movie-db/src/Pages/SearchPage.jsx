import React, { useEffect, useState } from 'react'
import { useLoaderData, useLocation } from 'react-router-dom'
import Card from '../Components/Card'
import SingleProductHeader from '../Components/SingleProductHeader'
import { fetchDataFromApi } from "../utils/app"


export default function SearchPage() {



  let  data = useLoaderData()

  let newData = data.results.slice(1);
const location = useLocation()
  
let queryName = location.pathname.replace("/search/","")
  



  




  return (
    <div className='w-[80%] m-auto mt-[5rem] '>
      <h5 className='text-white text-3xl'>
      Result for the Query "{queryName}" 
        </h5> 
     {newData.length > 0 ?  <div style={{ display: 'grid', gridTemplateColumns: "repeat(7,1fr)" }}>    {newData.map((item) => <Card key={item.id} item={item} media_type="movie" />)}
     </div> : <h1 className='text-3xl text-white'>No Results Found</h1>}
    </div>

  )
}
