import React, { useContext } from "react";
import ProductUpdateButtons from "./ProductUpdateButtons";
import { CartContext } from "../context/cartContext";
import { Link, useLocation } from "react-router-dom";

export default function ProductPreview({ item }) {
  const { addToCart } = useContext(CartContext);
  const { cart, currencyType, currentCurrencyPrice } = useContext(CartContext);

  const data = cart.find((elem) => elem.id == item.id);

  return (
    <div className="flex flex-col text-center w-1/5 border border-black p-4">

     <Link to={`/products/${item.id}`}> <img src={item.image} className="object-fit   m-auto " alt="" srcSet="" /></Link>
      <h3>{item.title}</h3>
      <p>{item.category}</p>
      <p>
        {item.quantity
          ? (item.price * item.quantity * currentCurrencyPrice).toFixed(2)
          : (item.price * currentCurrencyPrice).toFixed(2)}{" "}
        <span className="mx-2 text-red-700 font-bold">( {currencyType} )</span>
      </p>
      {item.quantity ? (
        <ProductUpdateButtons item={item} />
      ) : data ? (
        <button className="px-6 py-2 text-white bg-red-900 rounded" disabled>
          Already Added into Cart
        </button>
      ) : (
        <button
          className="px-6 py-2 text-white bg-slate-700 rounded hover:bg-slate-900"
          onClick={() => addToCart(item)}
        >
          Add To Cart
        </button>
      )}
      
    </div>
  );
}