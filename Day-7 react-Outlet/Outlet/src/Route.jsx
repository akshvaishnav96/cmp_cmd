import React from 'react'
import {  BrowserRouter, Routes, Route as R } from "react-router-dom"
import Home from './pages/Home'
import Products from './pages/Products'
import Navbar from './componenets/Navbar'
import SingleProduct from './pages/SingleProduct'
import ProductsOutlet from './Outlets/ProductsOutlet'




export default function Route() {



  return (

    <BrowserRouter>
      <Routes>
        <R path='/' element={<Navbar /> } >
          <R path="" element={<Home />} />
          <R path="/products" element={<ProductsOutlet />} >
            <R index element={<Products/>} />
            <R path=":id" element={<SingleProduct />} />
          </R>
        </R>
      </Routes>
    </BrowserRouter>

  )
}
