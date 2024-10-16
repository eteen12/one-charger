"use client";

import React, { useState } from "react";
import classNames from "classnames";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import ProductViewNavCart from "../client/productViewNavCart";

export default function NavBurger() {
  const [opened, setOpened] = useState(false);

  const handleToggle = () => {
    setOpened(!opened);
  };

  const menuItems = [
    { name: "Book online", href: "/" },
    { name: "Services", href: "/" },
    { name: "Projects", href: "/" },
    { name: "Faq", href: "/" },
  ];

  return (
    <>
      <div
        className={classNames(`tham tham-e-squeeze tham-w-6`, {
          "tham-active": opened,
        })}
        onClick={handleToggle}
        aria-label={opened ? "Close menu" : "Open menu"}
        aria-expanded={opened}
        role="button"
      >
        <div className="tham-box">
          <div className="tham-inner darkColor" />
        </div>
        
      </div>
     
      {/* Mobile Menu */}
      <div
        className={classNames(
          "fixed top-16 left-0 w-full h-screen bg-gray-50 transition-opacity duration-500 ease-in-out flex flex-col",
          {
            "opacity-100 pointer-events-auto": opened,
            "opacity-0 pointer-events-none": !opened,
          }
        )}
      >
        <ul
          className="flex flex-col items-start py-10 gap-8 text-2xl raleway darkColor"
          style={{ "--font-weight": "500" }}
        >
          {menuItems.map((item, index) => (
            <li key={index} className="py-2 w-full">
              <div className="flex justify-between items-center">
                <Link href={item.href} className="ml-6">
                  {item.name}
                </Link>
                <IoIosArrowForward className="mt-px mr-3 text-3xl" />
              </div>
            </li>
          ))}
        </ul>
        <div className="flex justify-center mt-10">
          <button
            type="button"
            className="rounded-md blueBg px-20 py-2.5 text-lg text-white shadow-md hover:bg-teal-500 mohave tracking-wide"
            style={{ "--font-weight": "500" }}
          >
            Button text
          </button>
        </div>
      </div>
    </>
  );
}
