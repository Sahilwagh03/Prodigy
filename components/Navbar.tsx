'use client'

import Link from "next/link";
import Logo from "./logo";
import { useState } from "react";
import NavMenu from "./nav-menu";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface NavbarProps {
  forceShowNavbar?: boolean;
}

const Navbar = ({ forceShowNavbar = false }: NavbarProps) => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isForced = forceShowNavbar;

  // Hide navbar on home unless forced
  if (pathname === "/" && !isForced) {
    return null;
  }

  return (
    <header
      className={cn(
        "relative w-full grid grid-cols-2 lg:auto-cols-[1fr] lg:grid-cols-[1fr_1fr_0.25fr] h-full items-center",
        !isForced && "py-4 px-4 border-b border-[#4444]"
      )}
    >
      <div className="flex justify-start h-full items-center logo">
        <Link href='/'>
        <Logo
          className={cn(
            "w-fit h-10",
            isForced ? "text-white" : "text-black"
          )}
        />
        </Link>
      </div>

      <nav
        className={cn(
          "hidden md:flex justify-end items-center h-full w-full font-medium",
          isForced ? "text-white" : "text-black"
        )}
      >
        <ul className="flex flex-row justify-end items-center text-[1.125rem] h-full font-semibold">
          <Link href="/">
            <li className="cursor-pointer transition pl-4 pr-5">Home</li>
          </Link>
          <Link href="/about">
            <li className="cursor-pointer transition pl-4 pr-5">About</li>
          </Link>
          <Link href="/services">
            <li className="cursor-pointer transition pl-4 pr-5">Services</li>
          </Link>
          <Link href="/contact">
            <li className="cursor-pointer transition pl-4 pr-5">Contact</li>
          </Link>
        </ul>
      </nav>

      <div
        className="flex flex-col justify-between w-8 h-5 cursor-pointer justify-self-end"
        onClick={() => setOpen((prev) => !prev)}
      >
        <div
          className={cn(
            "h-0.5 w-8 rounded",
            isForced ? "bg-white" : "bg-black"
          )}
        />
        <div
          className={cn(
            "h-0.5 w-8 rounded",
            isForced ? "bg-white" : "bg-black"
          )}
        />
        <div
          className={cn(
            "h-0.5 w-4 rounded",
            isForced ? "bg-white" : "bg-black"
          )}
        />
      </div>

      {open && <NavMenu onClose={() => setOpen(false)} />}
    </header>
  );
};

export default Navbar;