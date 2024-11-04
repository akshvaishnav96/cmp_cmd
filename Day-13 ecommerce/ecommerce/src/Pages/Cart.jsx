import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../context/cartContext'
import ProductPreview from '../components/ProductPreview'

export default function Cart() {
  
  const {cart,setCart} = useContext(CartContext)

  

 
  
  return (
   
    <>
    {cart.length > 0 ? (<><h3 className='text-center text-bold text-3xl italic py-4 '>Cart Items</h3>
    <div className='cart flex gap-4 justify-center'>
      {cart.map((item)=><ProductPreview  item={item}/>)}
    </div> </>): (<h5 className='text-bold text-3xl text-black h-[50vh]  flex justify-center items-center'> No Items Added </h5>) }
    </>
  )
}