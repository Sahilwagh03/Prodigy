"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ServiceVideo = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // DESKTOP
      mm.add("(min-width: 768px)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "+=800",
            scrub: true,
            pin: true,
          },
        });

        tl.to(".text-left", {
          xPercent: -300,
          ease: "power2.out",
        })
          .to(
            ".text-right",
            {
              xPercent: 300,
              ease: "power2.out",
            },
            "<",
          )
          .to(
            ".video-box",
            {
              width: "95vw",
              height: "95vh",
              ease: "power2.out",
            },
            "<",
          );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full h-auto lg:h-screen bg-white overflow-hidden py-12 lg:py-0"
    >
      <div className="hidden relative max-w-340 mx-auto w-full h-full lg:flex justify-center items-center">
        <div className="text-left absolute right-[calc(50%+4.75rem)] whitespace-nowrap text-[clamp(2rem,6vw,6rem)] font-semibold tracking-[-.125rem] leading-[1.2]">
          Creative
        </div>

        <div className="video-box relative w-32 h-20 overflow-hidden rounded-3xl shrink-0">
          <video
            src="/video.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
        </div>

        <div className="text-right absolute left-[calc(50%+4.75rem)] whitespace-nowrap text-[clamp(2rem,6vw,6rem)] font-semibold tracking-[-.125rem] leading-[1.2]">
          Studio
        </div>
      </div>
      <div className="flex flex-col gap-4 lg:hidden px-4 h-full w-full">
        <div className="text-center text-[clamp(3rem,6vw,8rem)] font-semibold tracking-[-.125rem] leading-[1.2]">
          Creative Studio
        </div>
        <div className="video-box relative w-full h-60 overflow-hidden rounded-3xl shrink-0">
          <video
            src="/video.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default ServiceVideo;
