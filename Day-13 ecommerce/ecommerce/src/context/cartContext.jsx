import { createContext, useEffect, useState } from "react";
import axios from "axios"

export const CartContext = createContext();
const API_KEY = import.meta.env.VITE_EXCHANGE_KEY


export default function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [exchangeRates,setExchangeRates] = useState([])
  const [currencyType,setCurrencytype] = useState("INR")
  const [currentCurrencyPrice,setCurrentCurrencyPrice] = useState("")
  
  

  function addToCart(item) {
    setCart((prev) => [...prev, { ...item, quantity: 1 }]);
  }

  function deleteFormCart(id) {
    setCart(cart.filter((item) => item.id !== id));
  }


  useEffect(()=>{
     async  function getExchangeRates(){
         try {
           const response = await axios.get(`https://v6.exchangerate-api.com/v6/${API_KEY}/latest/USD?`)
           setExchangeRates(response.data);
           setCurrentCurrencyPrice(response.data.conversion_rates["INR"])
          } catch (error) {
            setCurrencytype("USD")
            setCurrentCurrencyPrice(1)
         }
      }
      getExchangeRates()
  },[])


  useEffect(()=>{
    if(cart.length > 0){
      localStorage.setItem("cart",JSON.stringify(cart))
    }
      
  },[cart])
 

   const updateQuantity = (id, type) => {
        setCart((prevCart) => {
            return prevCart.map((item) => {
                if (item.id === id) {
                    const newQuantity = type === "increment" 
                        ? item.quantity + 1 
                        : Math.max(item.quantity - 1, 0); // Ensure quantity doesn't go below zero
                    
                    return { ...item, quantity: newQuantity };
                }
                
                return item;
            });
      })}
  return (
    <CartContext.Provider value={{ cart, setCart,addToCart, deleteFormCart,updateQuantity,exchangeRates,currencyType,setCurrencytype,currentCurrencyPrice,setCurrentCurrencyPrice }}>
      {children}
    </CartContext.Provider>
  );
}