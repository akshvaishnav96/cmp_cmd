import React from 'react'
import {Link} from "react-router-dom"


export default function ProductCard({product,width="",item}) {

  
  return (
   <Link to={`/products/${product.id}`} state={product}> <div className="card" style={{width:width}}>
    <img src={product.image} alt="Avatar" style={{width:"100%"}} />
    <h2>Title: {product.title}</h2>
    <h3>Category : {product.category}</h3>
    <div className="container">
    
      <p>{product.description}</p>
      <p>Price : {product.price}</p>
      <p>Rating : {product.rating?.rate}</p>
      <p>Available : {product.rating?.count > 0 ? product.rating?.count : "Not Available"}</p>
    </div>
  </div> 
  </Link>
  )
}
