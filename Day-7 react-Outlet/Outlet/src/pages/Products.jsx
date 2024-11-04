import React, { useEffect,useState } from 'react'
import ProductCard from '../componenets/ProductCard';

export default function Products(){

  const [productData,setproductData] = useState([]);

  useEffect(()=>{
    fetch("https://fakestoreapi.com/products").then((response)=>{
      return response.json()
    }).then((data)=>{
    setproductData(data);
      
    })
  },[])
  return (
    <div className='productsMain'>
    {productData.map((item)=>(
        <ProductCard key={item.id} product={item}/>
    ))}
    </div>
  )
}