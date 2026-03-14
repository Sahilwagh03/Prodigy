'use client';
import FluidSimulation from "../../../components/fluid-simulation";
import TalkButton from "../../../components/talk-button";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap  } from "@/lib/gsap";

const CTA = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const cardRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(min-width: 1024px)", () => {
        gsap.fromTo(
          cardRef.current,
          { width: "80%", borderRadius: "2rem" },
          {
            width: "100%",
            borderRadius: "1rem",
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top-=20px top",
              end: "+=200%",
              scrub: 1.5,
              pin: true,
              anticipatePin: 1,
            },
          }
        );
      });

      return () => mm.revert();
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="lg:h-screen bg-cover mx-4 bg-no-repeat bg-[url(/dotted-bg.webp)] flex justify-center"
    >
      <div
        ref={cardRef}
        className="max-w-340 mx-auto relative h-full overflow-hidden rounded-4xl"
        style={{ willChange: "width" }}
      >
        <div className="absolute inset-0 z-0">
          <FluidSimulation />
        </div>

        <div className="absolute inset-0 bg-black/10 z-1" />

        <div className="lg:h-screen py-12 lg:py-0 relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <h2 className="text-white font-bold text-[clamp(2.1rem,5vw,3.75rem)] leading-tight tracking-[-.075rem] max-w-4xl">
            We Build Digital Experiences That Drive Growth
          </h2>

          <div className="mt-10 flex flex-col lg:flex-row gap-4">
            <TalkButton title="Start Your Project" className="justify-center" />

            <button className="cursor-pointer px-6 py-2 rounded-full border text-white bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-200 active:scale-[0.98]">
              View Our Work
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;