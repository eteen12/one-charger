"use client";
import React from "react";
import NavBarServer from "../server/navBarServer";
export default function NavBarClient() {
  return (
    <header
      className={
        "flex justify-between items-center fixed w-full h-16 z-50 transition-all duration-700 text-black bg-white"
      }
    >
      <NavBarServer />
    </header>
  );
}
