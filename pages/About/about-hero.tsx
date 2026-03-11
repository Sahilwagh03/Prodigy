"use client";

import Image from "next/image";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { animateAboutHero } from "@/animation/about-hero";

const AboutHeroSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      animateAboutHero(sectionRef.current);
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="w-full max-w-340 mx-auto h-screen flex items-center justify-center px-4"
    >
      <div className="grid grid-cols-[0.25fr_1fr_0.25fr] w-full items-center">
        <div className="font-semibold uppercase text-sm tracking-wider">
          Since 2010
        </div>

        <div className="relative flex justify-center items-center">
          <div className="hero-image absolute -top-16 left-24 w-60 h-40 rounded-2xl overflow-hidden z-10">
            <Image
              src="https://images.unsplash.com/photo-1680536663869-019bd6ec9fec"
              alt="product"
              fill
              className="object-cover"
            />
          </div>

          <div className="hero-image absolute -top-28 right-10 w-60 h-40 rounded-2xl overflow-hidden z-10">
            <Image
              src="https://images.unsplash.com/photo-1707836868495-3307d371aba4"
              alt="chair"
              fill
              className="object-cover"
            />
          </div>

          <div className="hero-image absolute -bottom-20 right-5 w-60 h-40 rounded-2xl overflow-hidden z-10">
            <Image
              src="https://images.unsplash.com/photo-1697301439949-798044084e15"
              alt="portrait"
              fill
              className="object-cover"
            />
          </div>

          <h1 className="relative z-20 text-center text-[clamp(3rem,10vw,14rem)] font-semibold leading-[1.05] tracking-[-0.4rem] text-white mix-blend-difference">
            <span className="block overflow-hidden">
              <span className="about-line block whitespace-nowrap">About</span>
            </span>

            <span className="block overflow-hidden px-1 pb-2">
              <span className="prodigy-line block whitespace-nowrap">
                Prodigy
              </span>
            </span>
          </h1>
        </div>

        <div className="font-semibold uppercase text-sm tracking-wider text-right">
          Mumbai
        </div>
      </div>
    </section>
  );
};

export default AboutHeroSection;
