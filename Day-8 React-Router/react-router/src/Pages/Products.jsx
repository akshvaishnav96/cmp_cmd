import React, { useEffect,useState } from 'react'
import ProductCard from '../componenets/ProductCard';
import { useLoaderData } from 'react-router-dom';

export default function Products(){

const productData = useLoaderData()
  return (
    <div className='productsMain'>
    {productData.map((item)=>(
        <ProductCard  key={item.id} product={item}/>
    ))}
    </div>
  )
}