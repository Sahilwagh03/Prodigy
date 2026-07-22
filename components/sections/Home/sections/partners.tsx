"use client";
import { animatePartners } from "@/animation/partners";
import PartnerCard from "@/components/partner-card";
import { useRef } from "react";
import { gsap } from "@/lib/gsap";
import { useGSAP } from "@gsap/react";

import Image from "next/image";

const Partners = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      animatePartners(sectionRef.current!);
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative h-auto pt-8 lg:pt-20 overflow-hidden"
    >
      {/* Optimized LCP Background Image */}
      <Image
        src="/dotted-bg.webp"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center -z-10 pointer-events-none"
      />
      <div className="relative z-10 flex flex-col gap-6 px-4">
        <div className="flex flex-col gap-4 lg:flex-row justify-center">
          <h6 className="partner-title text-[0.8rem] leading-[1.75] tracking-[.0675rem] font-semibold uppercase">
            Our Partners
          </h6>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-6">
          <PartnerCard blackText="Nivara Nest" whiteText="Nivara Nest" />

          <PartnerCard blackText="Hudeox Hud" whiteText="Hudeox Hud" />

          <PartnerCard blackText="Living Hindu" whiteText="Living Hindu" />

          <PartnerCard blackText="ApniFitness" whiteText="ApniFitness" />
        </div>
      </div>
    </div>
  );
};

export default Partners;
