"use client";
import { animatePartners } from "@/animation/partners";
import PartnerCard from "../../../components/partner-card";
import { useRef } from "react";
import { gsap } from "@/lib/gsap";
import { useGSAP } from "@gsap/react";

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
      className="h-auto bg-cover pt-8 lg:pt-20 bg-no-repeat bg-position-[50%] bg-[url(/dotted-bg.webp)]"
    >
      <div className="flex flex-col gap-6 px-4">
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
