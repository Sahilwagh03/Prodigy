"use client";

import { animateAboutServices } from "@/animation/about-services";
import { cn } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { useRef } from "react";

const AboutServices = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      animateAboutServices(sectionRef.current);
    },
    { scope: sectionRef },
  );

  const services = [
    "Branding identity",
    "UI/UX design",
    "Web development",
    "Visual design",
    "Photography",
    "Product design",
  ];

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen overflow-hidden mb-4 lg:mb-12"
    >
      <div className="about-services-container relative w-full h-full flex justify-center items-center">
        <Image
          src="/crystal.png"
          alt="Crystal"
          width={1024}
          height={1024}
          className="crystal-img w-62.5 lg:w-[clamp(320px,30vw,520px)] h-auto shrink-0 rotate-[-20deg] z-20"
          priority
        />

        <div
          className="bg-circle absolute left-1/2 top-1/2
          bg-black rounded-full
          -translate-x-1/2 -translate-y-1/2 z-10"
        ></div>

        <div className="absolute perspective-[130vw] origin-[50%] w-full h-svh z-30">
          <div className="services-wrapper text-white">
            {services.map((service,idx) => (
              <div key={service} className={cn("service-content text-center text-[clamp(0.9rem,4vw,1.6rem)] lg:text-[clamp(1.5rem,7vw,9.37rem)] font-semibold",`service-${idx+1}`)}>{service}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutServices;
