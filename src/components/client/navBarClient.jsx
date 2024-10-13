"use client";

import { useNavHandler } from "../../hooks/useNavHandler";
import NavBarServer from "../server/navBarServer";


export default function NavBarClient() {
  const { scrollingDown, shadow, background } = useNavHandler();

  return (
    <header
      className={`flex justify-between items-center fixed w-full h-16 z-50 transition-all duration-700 ${
        scrollingDown ? "-translate-y-full" : "translate-y-0"
      }`}
      style={{ background, boxShadow: shadow }}
    >
      <NavBarServer />
    </header>
  );
}
