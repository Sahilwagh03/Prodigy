"use client";
import { animateContactHero } from "@/animation/contact-hero";
import LetConnect from "@/components/let-connect";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

const ContactHero = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      animateContactHero(sectionRef.current);
    },
    { scope: sectionRef },
  );

  return (
    <section ref={sectionRef} className="py-12 lg:py-24">
      <div className="maz-w-340 mx-auto px-4">
        <h1 className="text-center lg:text-left text-[clamp(3rem,10vw,14rem)] font-semibold leading-[1.05] tracking-[-0.1rem]">
          <span className="block overflow-hidden">
            <span className="contact-line block whitespace-nowrap">
              Contact
            </span>
          </span>
        </h1>
        <LetConnect/>
      </div>
    </section>
  );
};

export default ContactHero;
