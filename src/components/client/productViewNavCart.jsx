"use client";
import { FaCartShopping } from "react-icons/fa6";
import { useContext } from "react";
import { CartContext } from "@/context/cart";

export default function ProductViewNavCart() {
  const context = useContext(CartContext);
  const { cartItems } = context;
  const itemCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  return (
    <>
      <div className="relative w-6 h-5">
        <FaCartShopping className="text-2xl -mt-1" />

        <span className="absolute -top-2 -right-3 bg-red-600 text-white text-base rounded-full w-5 h-5 flex justify-center items-center">
          {itemCount > 0 ? itemCount : null}
        </span>
      </div>
    </>
  );
}
