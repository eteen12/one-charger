import Link from "next/link";
import Image from "next/image";
import NavBurger from "../reusables/navBurger";
import Logo from "/public/logo.svg";

export default function NavBarServer() {
  return (
    <nav className="flex justify-between items-center shadow-lg z-50 h-16 fixed w-[100%] px-5 lg:px-8 xl:px-12 2xl:px-20">
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
      <div
        className="hidden sm:flex items-center px-2 darkColor dm-sans"
        style={{ "--font-weight": "600" }}
      >
        <ul className="flex items-center">
          <Link href="/services">
            <li className="ml-10 hover:border-b text-xl  lg:text-2xl">
              Services
            </li>
          </Link>
          <Link href="/contact">
            <li className="ml-10 hover:border-b text-xl  lg:text-2xl">
              Contact
            </li>
          </Link>
        </ul>
      </div>
    </nav>
  );
}
