import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/cartContext";

export default function Header() {

  
  const {
    cart,
    setCart,
    exchangeRates,
    setCurrencytype,
    setCurrentCurrencyPrice,
  } = useContext(CartContext);
  const [currency, setCurrencyHandler] = useState("INR");

 
  

  function currencyHandler(e) {
    setCurrencyHandler(e.target.value);
    setCurrencytype(e.target.value);
    setCurrentCurrencyPrice(exchangeRates.conversion_rates[e.target.value]);
    
  }


  useEffect(()=>{
    let localData =  localStorage.getItem("cart");
       if(localData.length>0){
         setCart(JSON.parse(localData));
       }
   },[])

  return (
    <header className="bg-slate-700 text-white py-4 ">
      <nav className="flex justify-between px-5 ">
        <h1 className="text-2xl text-yellow-500 italian ">
          <Link to="/">E-Commerce</Link>
        </h1>
        <ul className="flex gap-5">
          <Link to="/blog?page=1">Blogs</Link>
          <Link to="/products">Products</Link>
          <Link to="/cart">Cart ({cart.length})</Link>
          <Link to="/contact">Contact Us</Link>
        </ul>
       

          {exchangeRates.conversion_rates && <select
          name="currency"
          className="bg-black px-4 rounded cursor-pointer"
          onChange={currencyHandler}
          value={currency}
        >
           { Object.keys(exchangeRates.conversion_rates).map((item) => (
              <option value={item}>{item}</option>
            ))}   </select>}
      
      </nav>
    </header>
  );
}