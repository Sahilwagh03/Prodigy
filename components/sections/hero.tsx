"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import ServiceItem from "../service-item";
import TalkButton from "../talk-button";
import Navbar from "../Navbar";
import { animateHeroElements } from "@/animation/hero";

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!heroRef.current) return;

    const ctx = gsap.context(() => {
      animateHeroElements(heroRef.current!);
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={heroRef} className="mt-5 mx-[0.95rem]">
      <div className="relative h-auto lg:h-[110vh] bg-black rounded-4xl overflow-hidden">
        <div className="px-2 w-full lg:px-3.75 pt-[0.2rem] h-20 border-b border-white/20 absolute z-50">
          <Navbar />
        </div>

        {/* Gradient Blobs */}
        <div className="absolute blur-[13rem] bg-[#fc964c] w-full max-w-231.25 h-231.25 top-[-26.9rem] -right-146 rounded-full" />
        <div className="absolute blur-[13rem] bg-[#f02508] w-full max-w-231.25 h-231.25 top-[-46.1rem] right-1/2 translate-x-1/2 rounded-full" />
        <div className="absolute bottom-0 -left-[30%] w-full max-w-150 h-150 bg-[#9c3918] blur-[13rem] rounded-full" />

        <div className="relative w-full h-full px-4">
          <div className="relative w-full h-full flex flex-col pt-28 pb-8 lg:pt-20 gap-6 justify-between items-center">
            <div></div>

            {/* Headings */}
            <div className="flex flex-col overflow-hidden">
              <div className="overflow-hidden">
                <h1 className="hero-heading-line leading-none tracking-[-0.1rem] lg:tracking-[-0.4rem] text-white font-semibold text-[clamp(2.5rem,10vw,13.75rem)]">
                  Elevate Your
                </h1>
              </div>

              <div className="overflow-hidden pl-[20vw]">
                <h1 className="hero-heading-line leading-none tracking-[-0.1rem] lg:tracking-[-0.4rem] text-white font-semibold text-[clamp(2.5rem,10vw,13.75rem)]">
                  Brand Reach
                </h1>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="flex flex-col gap-6 lg:flex-row w-full justify-between items-center">
              <div className="flex items-start md:items-center lg:items-start justify-end flex-col h-full gap-8 flex-2">
                <p className="hero-paragraph text-white max-w-120 leading-relaxed font-normal text-[1rem]">
                  We blend creativity with technical expertise to craft
                  experiences that captivate audiences and communicate your brand message.
                </p>

                <div className="hero-button">
                  <TalkButton className="w-fit" />
                </div>
              </div>

              <div className="w-full lg:max-w-[18rem] flex flex-1 flex-col gap-6 text-white">
                <div className="hero-service">
                  <ServiceItem title="Web Design" />
                </div>
                <div className="hero-service">
                  <ServiceItem title="Digital Marketing" />
                </div>
                <div className="hero-service">
                  <ServiceItem title="Brand Identity" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Vertical lines */}
        <div className="absolute -bottom-20 w-full max-w-364 h-full flex justify-between items-stretch">
          <div className="w-px h-full bg-white/15" />
          <div className="w-px h-full bg-white/15" />
          <div className="w-px h-full bg-white/15" />
          <div className="w-px h-full bg-white/15" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;