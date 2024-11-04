import React, { useContext } from "react";
import { CartContext } from "../context/cartContext";

export default function ProductUpdateButtons({item}) {
  const {deleteFormCart,updateQuantity} = useContext(CartContext)
  return (
   <>
    <div className="my-3">
      <button onClick={()=>updateQuantity(item.id,"increment")} className="px-4 py-2 mx-2  bg-slate-700 rounded text-white ">+</button>
      <span>{item.quantity}</span>
      <button  disabled={item.quantity == 1} onClick={()=>updateQuantity(item.id,"decrement")} className="px-4 py-2 mx-2 bg-slate-700 rounded text-white ">-</button>
    </div>
      <button className=" rounded px-4 py-2 bg-red-600 hover:bg-red-900" onClick={()=>deleteFormCart(item.id)}>Delete</button>
   </>
  );
}