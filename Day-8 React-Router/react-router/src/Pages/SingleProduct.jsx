import React, { useEffect, useState } from 'react'
import {useParams,useLocation,useLoaderData} from "react-router-dom"
import ProductCard from '../componenets/ProductCard';

export default function SingleProduct() {
  
 let productData =  useLoaderData()
  console.log(productData);
  

  return (
    <ProductCard product={productData} width={"40rem"}/>
  )
}
