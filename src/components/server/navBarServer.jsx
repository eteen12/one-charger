import Link from "next/link";
import NavBurger from "../reusables/navBurger";

import ProductViewNavCart from "../client/productViewNavCart";

export default function NavBarServer() {
  return (
    <nav className="flex justify-between items-center  z-50 h-16 fixed w-[100%] px-5 lg:px-8 xl:px-12 2xl:px-20">
      <Link href="/" aria-label="Go to Plumbing homepage">
        <div className="relative">
          <h2
            className="tracking-tighter mohave text-4xl md:text-5xl"
            style={{ "--font-weight": "900" }}
          >
            ONE
          </h2>
        </div>
      </Link>
      <div className="sm:hidden flex gap-5">
        <NavBurger />
        <Link href="/cart">
          <ProductViewNavCart />
        </Link>
      </div>
      <div className="hidden sm:flex items-center px-2 darkColor tracking-tighter ralewayBold">
        <ul className="flex items-center">
          <Link href="/shop" rel="preload">
            <li className="ml-10 hover:border-b text-xl  md:text-2xl">Shop</li>
          </Link>
          <Link href="/contact">
            <li className="ml-10 hover:border-b text-xl  md:text-2xl">
              Contact
            </li>
          </Link>
          <Link href="/">
            <li className="ml-10 hover:border-b text-xl  md:text-2xl">Home</li>
          </Link>
          <Link href="/cart">
            <li className="ml-10 hover:border-b text-xl md:text-2xl relative">
              <ProductViewNavCart />
            </li>
          </Link>
        </ul>
      </div>
    </nav>
  );
}
