"use client";
import React, { useState } from "react";
import classNames from "classnames";
import Link from "next/link";

import { IoIosArrowForward } from "react-icons/io";

export default function NavBurger() {
  const [opened, setOpened] = useState(false);

  const handleToggle = () => {
    setOpened(!opened);
  };

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
          "fixed top-16 left-0 w-full h-screen bg-white transition-opacity duration-500 ease-in-out flex flex-col",
          {
            "opacity-100 pointer-events-auto": opened,
            "opacity-0 pointer-events-none": !opened,
          }
        )}
      >
        <ul
          className="flex flex-col items-start py-10 gap-8 text-2xl raleway darkColor "
          style={{ "--font-weight": "500" }}
        >
          <li className="py-2 w-full">
            <div className=" flex justify-between items-center">
              <Link href="/" className="ml-6">
                Book online
              </Link>
              <IoIosArrowForward className="mt-px mr-3 text-3xl" />
            </div>
          </li>
          <li className="py-2 w-full">
            <div className=" flex justify-between items-center">
              <Link href="/" className="ml-6">
                Services
              </Link>
              <IoIosArrowForward className="mt-px mr-3 text-3xl" />
            </div>
          </li>
          <li className="py-2 w-full">
            <div className=" flex justify-between items-center">
              <Link href="/" className="ml-6">
                Projects
              </Link>
              <IoIosArrowForward className="mt-px mr-3 text-3xl" />
            </div>
          </li>
          <li className="py-2 w-full">
            <div className=" flex justify-between items-center">
              <Link href="/" className="ml-6">
                Faq
              </Link>
              <IoIosArrowForward className="mt-px mr-3 text-3xl" />
            </div>
          </li>
        </ul>
        <div className="flex justify-center mt-10">
          <button
            type="button"
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-md hover:bg-indigo-500 
            focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Button text
          </button>
        </div>
      </div>
    </>
  );
}
