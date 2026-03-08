"use client";

import Link from "next/link";
import { X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

interface NavMenuProps {
  onClose?: () => void;
}

const NavMenu = ({ onClose }: NavMenuProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    const ctx = gsap.context((self) => {
      const items = self.selector!(".menu-item");

      gsap.fromTo(
        menuRef.current,
        {
          scale: 0.2,
          opacity: 0,
          transformOrigin: "top right",
        },
        {
          scale: 1,
          opacity: 1,
          duration: 0.6,
          ease: "power3.out",
        },
      );

      gsap.from(items, {
        y: 40,
        opacity: 0,
        stagger: 0.08,
        delay: 0.2,
        duration: 0.6,
        ease: "power3.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const animateClose = () => {
    if (closing) return;
    setClosing(true);

    gsap.to(menuRef.current, {
      scale: 0.2,
      opacity: 0,
      duration: 0.35,
      transformOrigin: "top right",
      ease: "power3.in",
      onComplete: () => {
        onClose?.();
      },
    });
  };

  return (
    <div
      ref={containerRef}
      onClick={animateClose}
      className="fixed inset-0 z-50 flex items-start justify-end pt-20 pr-6
  backdrop-blur-xs bg-black/20"
    >
      <div
        ref={menuRef}
        onClick={(e) => e.stopPropagation()}
        className="relative w-105 md:w-130 bg-[#e9e9e9] rounded-[40px] p-12 pt-20 shadow-xl"
      >
        <button
          onClick={animateClose}
          className="cursor-pointer absolute top-6 right-6 w-12 h-12 rounded-full bg-[#d9d9d9] flex items-center justify-center hover:bg-[#cfcfcf] transition"
        >
          <X size={24} />
        </button>

        <ul className="text-6xl md:text-7xl font-semibold leading-none space-y-6">
          <li className="menu-item">
            <Link href="/" className="text-black underline underline-offset-4">
              Home
            </Link>
          </li>

          <li className="menu-item">
            <Link
              href="/about"
              className="text-gray-400 hover:text-black transition"
            >
              About
            </Link>
          </li>

          <li className="menu-item">
            <Link
              href="/services"
              className="text-gray-400 hover:text-black transition"
            >
              Service
            </Link>
          </li>

          <li className="menu-item">
            <Link
              href="/contact"
              className="text-gray-400 hover:text-black transition"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavMenu;
