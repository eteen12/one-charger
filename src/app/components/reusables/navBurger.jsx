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
          "fixed top-16 left-0 w-full h-screen whiteColorBg transition-opacity duration-500 ease-in-out flex flex-col",
          {
            "opacity-100 pointer-events-auto": opened,
            "opacity-0 pointer-events-none": !opened,
          }
        )}
      >
        <ul
          className="flex flex-col items-start py-10 gap-8 text-2xl dm-sans tracking-tight darkColor "
          style={{ "--font-weight": "600" }}
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
            className="blueColorBg hover:red text-white py-3 px-[35%] rounded-full poppins shadow-lg"
            style={{ "--font-weight": "600" }}
          >
            Button
          </button>
        </div>
      </div>
    </>
  );
}
