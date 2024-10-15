import Link from "next/link";
import Image from "next/image";
import NavBurger from "../reusables/navBurger";
import Logo from "/public/navBar/logo.svg";
import { FaCartShopping } from "react-icons/fa6";

export default function NavBarServer() {
  return (
    <nav className="flex justify-between items-center  z-50 h-16 fixed w-[100%] px-5 lg:px-8 xl:px-12 2xl:px-20">
      <Link href="/" aria-label="Go to Plumbing homepage">
        <div className="relative w-16 h-16 flex">
          <Image
            src={Logo}
            alt="Plumbing logo linking to homepage"
            className="object-contain"
            priority
            fill
          />
        </div>
      </Link>
      <div className="sm:hidden">
        <NavBurger />
      </div>
      <div className="hidden sm:flex items-center px-2 darkColor ralewayBold">
        <ul className="flex items-center">
          <Link href="/services">
            <li className="ml-10 hover:border-b text-xl  lg:text-2xl">Shop</li>
          </Link>
          <Link href="/contact">
            <li className="ml-10 hover:border-b text-xl  lg:text-2xl">
              Contact
            </li>
          </Link>
          <Link href="/cart">
            <li className="ml-10 hover:border-b text-xl lg:text-2xl relative">
              {/* Cart Icon */}
              <div className="relative w-6 h-6">
                <FaCartShopping />
              </div>
              {/* Cart Item Count (optional) */}
              <span className="absolute -top-2 -right-3 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex justify-center items-center">
                1
              </span>
            </li>
          </Link>
        </ul>
      </div>
    </nav>
  );
}
