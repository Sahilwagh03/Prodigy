"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { animateAboutCore } from "@/animation/about-core";
import { coreDetails } from "@/constant/about-page";
import Image from "next/image";

const AboutCore = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      animateAboutCore(sectionRef.current);
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="h-auto bg-cover py-8 lg:py-28 bg-no-repeat bg-position-[50%] bg-[url(/dotted-bg.webp)]"
    >
      <div className="max-w-340 mx-auto px-4">
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
          <h6 className="lg:w-[45%] text-[0.8rem] leading-[1.75] tracking-[.0675rem] font-semibold uppercase">
            Our Core
          </h6>

          <p className="core-text lg:w-[55%] max-w-[45ch] text-[clamp(1.6rem,3vw,2.5rem)] leading-tight tracking-[-.075rem] font-semibold">
            We transform ideas into meaningful design experiences, creativity,
            blending, innovation, and precision to craft brands that communicate
            clearly and connect with people.
          </p>
        </div>
        <div className="flex justify-between gap-6 pt-6 lg:pt-12">
          <div className="hidden lg:flex lg:w-[45%] relative rounded-2xl overflow-hidden">
            <Image src='/about-core.jpeg' alt="About Core" fill className="object-cover object-center" />
          </div>
          <div className="w-full border-t border-[#4444] lg:w-[55%]">
            <div className="pt-6 lg:flex grid md:grid-cols-2 lg:flex-col gap-6 lg:gap-12">
              {
                coreDetails.map((coreData)=>(
                  <AboutCoreItem {...coreData}/>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const AboutCoreItem = ({
  matrix,
  description,
}: {
  matrix: string;
  description: string;
}) => {
  return (
    <div className="flex flex-col lg:flex-row gap-6 justify-between lg:items-center">
      <div className="text-[clamp(2.1rem,5vw,3.75rem)] font-semibold">{matrix}</div>
      <div className="max-w-114 text-[#4d4d4d]">{description}</div>
    </div>
  );
};

export default AboutCore;
