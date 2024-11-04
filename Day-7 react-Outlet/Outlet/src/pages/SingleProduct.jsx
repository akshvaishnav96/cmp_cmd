import React, { useEffect, useState } from 'react'
import {useParams} from "react-router-dom"
import ProductCard from '../componenets/ProductCard';

export default function SingleProduct() {
    const [productData,setproductData] = useState({})
  const {id} = useParams();
 
  useEffect(()=>{
    fetch(`https://fakestoreapi.com/products/${id}`).then((response)=>{
        return response.json()
      }).then((data)=>{
      
        
      setproductData(data);
      })
  },[id])
  

  return (
    <ProductCard product={productData} width={"40rem"}/>
  )
}
