import React from 'react'
import { useLoaderData } from 'react-router-dom'
import SingleProductCard from '../components/SingleProductCard';

export default function SingleProduct() {
  const data = useLoaderData()
  
  return (
    <div className=" h-[100vh]  flex items-center justify-center">
      <SingleProductCard item={data}/>
   </div>
  )
}