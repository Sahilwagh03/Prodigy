import Link from "next/link";
import Logo from "./logo";

const Navbar = () => {
  return (
    <header className="relative w-full grid grid-cols-2 lg:auto-cols-[1fr] lg:grid-cols-[1fr_1fr_0.25fr] h-full items-center">
      <div className="flex justify-start h-full items-center logo">
        <Logo className="text-white w-fit h-10" />
      </div>
      <nav className="hidden md:flex justify-end items-center text-white h-full w-full font-medium">
        <ul className="flex flex-row justify-end items-center text-[1.125rem] h-full font-semibold">
          <Link href="/">
            <li className="cursor-pointer transition pl-4 pr-5">
              Home
            </li>
          </Link>
          <Link href="/about">
            <li className="cursor-pointer transition pl-4 pr-5">
              About
            </li>
          </Link>
          <Link href="/services">
            <li className="cursor-pointer transition pl-4 pr-5">
              Services
            </li>
          </Link>
          <Link href="/services">
            <li className="cursor-pointer transition pl-4 pr-5">
              Blog
            </li>
          </Link>
          <Link href="/services">
            <li className="cursor-pointer transition pl-4 pr-5">
              Portfolio
            </li>
          </Link>
          <Link href="/contact">
            <li className="cursor-pointer transition pl-4 pr-5">
              Contact
            </li>
          </Link>
        </ul>
      </nav>
      <div className="flex flex-col justify-between w-8 h-5 cursor-pointer justify-self-end">
        <div className="h-0.5 bg-white w-8 rounded"></div>
        <div className="h-0.5 bg-white w-8 rounded"></div>
        <div className="h-0.5 bg-white w-4 rounded"></div>
      </div>
    </header>
  );
};

export default Navbar;
