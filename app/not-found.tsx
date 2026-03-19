"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "@/lib/gsap";
import TalkButton from "@/components/talk-button";

export default function NotFound() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const q = gsap.utils.selector(containerRef);

      const tl = gsap.timeline({
        defaults: { ease: "power4.out" },
      });

      gsap.set(q(".nf-item"), {
        y: 40,
        opacity: 0,
        filter: "blur(12px)",
      });

      gsap.set(q(".nf-404 span"), {
        y: 80,
        opacity: 0,
        filter: "blur(12px)",
        scale: 1.1,
      });

      tl.to(q(".nf-404 span"), {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        scale: 1,
        duration: 1,
        stagger: 0.08,
      });

      tl.to(
        q(".nf-item"),
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 0.9,
          stagger: 0.08,
        },
        "-=0.5",
      );
    }, containerRef);

    return () => ctx.revert(); // ✅ cleanup (important in Next.js)
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-screen flex items-center justify-center bg-[#f5f5f5] px-6"
    >
      <div className="text-center max-w-xl w-full">
        <h1 className="nf-404 text-[120px] md:text-[160px] font-bold tracking-tight leading-none flex justify-center">
          <span className="text-black">4</span>
          <span className="text-[#f3350c]">0</span>
          <span className="text-black">4</span>
        </h1>

        <h2 className="nf-item text-3xl md:text-4xl font-semibold mt-2">
          Oops! page not found
        </h2>

        <p className="nf-item text-gray-500 mt-3 text-sm md:text-base">
          The page you are looking for doesn&apos;t exist or has been moved.
        </p>

        <div className="nf-item mt-8">
          <Link href='/'>
            <TalkButton
              label="Back to home"
              dotClassName="bg-[#f3350c]"
              className="bg-black text-white hover:bg-black"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
