"use client";
import { FaCartShopping } from "react-icons/fa6";
import { useContext } from "react";
import { CartContext } from "@/context/cart";

export default function ProductViewNavCart() {
  const context = useContext(CartContext); 
  const { cartItems } = context;  
  const itemCount = cartItems.length; 
  return (
    <li className="ml-10 hover:border-b text-xl lg:text-2xl relative">
      <div className="relative w-6 h-6">
        <FaCartShopping />
      </div>

      <span className="absolute -top-2 -right-3 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex justify-center items-center">
        {itemCount > 0 ? itemCount : null}
      </span>
    </li>
  );
}
