"use client";

import Link from "next/link";
import { X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { usePathname, useRouter } from "next/navigation";

interface NavMenuProps {
  onClose?: () => void;
}

const NavMenu = ({ onClose }: NavMenuProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const [closing, setClosing] = useState(false);

  const pathname = usePathname();
  const router = useRouter();

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
        }
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

  // 🔥 SAME animation (unchanged)
  const animateClose = (callback?: () => void) => {
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
        callback?.(); // 👈 run navigation AFTER animation
      },
    });
  };

  // 🔥 handle link click (no glitch)
  const handleLinkClick = (
    e: React.MouseEvent,
    href: string
  ) => {
    e.preventDefault(); // stop instant navigation
    animateClose(() => {
      router.push(href);
    });
  };

  // 🔥 active link styles
  const getLinkClass = (path: string) =>
    pathname === path
      ? "text-black underline underline-offset-4"
      : "text-gray-400 hover:text-black transition";

  return (
    <div
      ref={containerRef}
      onClick={() => animateClose()}
      className="fixed inset-0 z-50 flex items-start justify-end px-4 pt-20 lg:pr-6
      backdrop-blur-xs bg-black/20"
    >
      <div
        ref={menuRef}
        onClick={(e) => e.stopPropagation()}
        className="relative w-105 md:w-130 bg-[#e9e9e9] rounded-[40px] p-12 pt-20 shadow-xl"
      >
        {/* Close Button */}
        <button
          onClick={() => animateClose()}
          className="cursor-pointer absolute top-6 right-6 w-12 h-12 rounded-full bg-[#d9d9d9] flex items-center justify-center hover:bg-[#cfcfcf] transition"
        >
          <X size={24} />
        </button>

        <ul className="text-5xl md:text-7xl font-semibold leading-none space-y-6">
          <li className="menu-item">
            <Link
              href="/"
              onClick={(e) => handleLinkClick(e, "/")}
              className={getLinkClass("/")}
            >
              Home
            </Link>
          </li>

          <li className="menu-item">
            <Link
              href="/about"
              onClick={(e) => handleLinkClick(e, "/about")}
              className={getLinkClass("/about")}
            >
              About
            </Link>
          </li>

          <li className="menu-item">
            <Link
              href="/services"
              onClick={(e) => handleLinkClick(e, "/services")}
              className={getLinkClass("/services")}
            >
              Service
            </Link>
          </li>

          <li className="menu-item">
            <Link
              href="/contact"
              onClick={(e) => handleLinkClick(e, "/contact")}
              className={getLinkClass("/contact")}
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