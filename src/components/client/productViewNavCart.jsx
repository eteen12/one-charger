"use client";
import { FaCartShopping } from "react-icons/fa6";

export default function ProductViewNavCart() {
  return (
    <li className="ml-10 hover:border-b text-xl lg:text-2xl relative">
      <div className="relative w-6 h-6">
        <FaCartShopping />
      </div>

      <span className="absolute -top-2 -right-3 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex justify-center items-center">
        1
      </span>
    </li>
  );
}
