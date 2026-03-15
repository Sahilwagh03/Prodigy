"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const ServiceVideo = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
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
          "<"
        )
        .to(
          ".video-box",
          {
            width: "95vw",
            height: "100vh",
            ease: "power2.out",
          },
          "<"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full h-screen bg-white overflow-hidden">
      <div className="relative max-w-340 mx-auto w-full h-full flex justify-center items-center">

        {/* Left text — absolutely anchored to right of center */}
        <div className="text-left absolute right-[calc(50%+4.75rem)] whitespace-nowrap text-[clamp(2.15rem,6vw,6.35rem)] font-semibold tracking-[-.125rem] leading-[1.2]">
          Creative
        </div>

        {/* Video — always at true center */}
        <div className="video-box relative w-30 h-17.5 overflow-hidden rounded-3xl shrink-0">
          <video
            src="/video.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right text — absolutely anchored to left of center */}
        <div className="text-right absolute left-[calc(50%+4.75rem)] whitespace-nowrap text-[clamp(2.15rem,6vw,6.35rem)] font-semibold tracking-[-.125rem] leading-[1.2]">
          Studio
        </div>

      </div>
    </section>
  );
};

export default ServiceVideo;