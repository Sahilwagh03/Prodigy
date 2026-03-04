"use client";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import ExperienceCard from "../experience-card";
import { gsap } from "@/lib/gsap";

const Experience = () => {
  const sectionRef = useRef(null);
  const centerRef = useRef(null);

  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const card3Ref = useRef(null);
  const card4Ref = useRef(null);

  const circle1Ref = useRef(null);
  const circle2Ref = useRef(null);

  const text1Ref = useRef(null);
  const text2Ref = useRef(null);
  const text3Ref = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      // DESKTOP ONLY (lg and above = 1024px+)
      mm.add("(min-width: 1024px)", () => {
        // Initial states
        gsap.set(card1Ref.current, { y: "80vh" });
        gsap.set(card2Ref.current, { y: "120vh" });
        gsap.set(card3Ref.current, { y: "100vh" });
        gsap.set(card4Ref.current, { y: "120vh" });

        gsap.set(circle1Ref.current, {
          scale: 0.8,
          opacity: 0.5,
          transformOrigin: "center center",
        });

        gsap.set(circle2Ref.current, {
          scale: 0,
          opacity: 0,
          transformOrigin: "center center",
        });

        gsap.set(text1Ref.current, {
          opacity: 1,
          filter: "blur(0px)",
          scale: 1,
        });

        gsap.set(text2Ref.current, {
          opacity: 0,
          filter: "blur(10px)",
          scale: 1.1,
        });

        gsap.set(text3Ref.current, {
          opacity: 0,
          filter: "blur(10px)",
          scale: 1.1,
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: centerRef.current,
            start: "center center",
            end: "+=300%",
            scrub: 1,
            pin: sectionRef.current,
            anticipatePin: 1,
            invalidateOnRefresh: true, 
          },
        });

        tl.add("cardsStart")

          .to(card1Ref.current, { y: 0, ease: "power3.out" }, "cardsStart")
          .to(card3Ref.current, { y: 0, ease: "power3.out" }, "cardsStart+=0.1")

          .to(
            circle1Ref.current,
            { scale: 1, opacity: 1, duration: 0.5, ease: "power2.out" },
            "cardsStart+=0.1",
          )

          .to(card2Ref.current, { y: 0, ease: "power3.out" }, "cardsStart+=0.2")

          .to(card4Ref.current, { y: 0, ease: "power3.out" }, "cardsStart+=0.3")

          .to(
            circle2Ref.current,
            { scale: 1, opacity: 1, duration: 0.5, ease: "power2.out" },
            "cardsStart+=0.3",
          )

          .to(
            text1Ref.current,
            {
              opacity: 0,
              filter: "blur(10px)",
              scale: 0.88,
              duration: 0.2,
              ease: "power2.in",
            },
            "cardsStart+=0.1",
          )

          .to(
            text2Ref.current,
            {
              opacity: 1,
              filter: "blur(0px)",
              scale: 1,
              duration: 0.25,
              ease: "power2.out",
            },
            "cardsStart+=0.22",
          )

          .to(
            text2Ref.current,
            {
              opacity: 0,
              filter: "blur(10px)",
              scale: 0.88,
              duration: 0.2,
              ease: "power2.in",
            },
            "cardsStart+=0.55",
          )

          .to(
            text3Ref.current,
            {
              opacity: 1,
              filter: "blur(0px)",
              scale: 1,
              duration: 0.25,
              ease: "power2.out",
            },
            "cardsStart+=0.67",
          );
      });

      return () => mm.revert();
    },
    { scope: sectionRef },
  );

  return (
    <section className="h-auto bg-cover py-8 lg:py-52" ref={sectionRef}>
      <div className="w-full h-auto lg:h-screen flex flex-col justify-center items-center">
        <div className="relative w-full">
          <div className="lg:absolute inset-0 flex flex-col lg:flex-row justify-between gap-7 items-center mx-auto max-w-380.5 px-3.5">
            <div className="relative flex flex-col gap-7 lg:gap-[6.4rem] items-start">
              <ExperienceCard
                ref={card1Ref}
                number="01"
                title="Web & Software Development"
                description="We engineer scalable digital products through performance, reliability and modern technology."
              />

              <ExperienceCard
                ref={card2Ref}
                number="02"
                title="Brand identity design strategy"
                description="We build strong brand foundations through research, positioning and clear visual direction."
                className="lg:ml-16"
              />
            </div>
            <div className="relative flex flex-col gap-7 lg:gap-[6.4rem] items-start">
              <ExperienceCard
                ref={card3Ref}
                number="03"
                title="AI & Automation Systems"
                description="We implement intelligent automation systems with precision and efficiency."
              />

              <ExperienceCard
                ref={card4Ref}
                number="04"
                title="UI/UX & Web Design"
                description="We design seamless user experiences through structure, simplicity and thoughtful interaction."
              />
            </div>
          </div>
          <div
            ref={centerRef}
            className="relative hidden lg:flex flex-col rounded-full justify-center items-center max-w-100 min-h-100 mx-auto bg-white border border-dashed border-black"
          >
            <div
              ref={circle1Ref}
              className="rounded-full pointer-events-none absolute w-full min-w-178 max-w-178 h-full min-h-178 border border-dashed border-black/40"
            />

            <div
              ref={circle2Ref}
              className="rounded-full pointer-events-none absolute w-full min-w-230 min-h-230 h-full border border-dashed border-black/40"
            />

            <div className="relative w-full flex justify-center items-center px-8 h-52">
              <div
                ref={text1Ref}
                className="absolute text-[1.875rem] text-center max-w-90 font-semibold tracking-[-.056rem] leading-[1.33]"
              >
                We turn your creative vision into powerful digital brand
                experiences
              </div>
              <div
                ref={text2Ref}
                className="absolute text-[1.875rem] text-center max-w-90 font-semibold tracking-[-.056rem] leading-[1.33]"
              >
                We build intelligent systems that automate, scale and evolve
                with your business
              </div>
              <div
                ref={text3Ref}
                className="absolute text-[1.875rem] text-center max-w-90 font-semibold tracking-[-.056rem] leading-[1.33]"
              >
                We craft seamless experiences where design meets purpose and
                technology
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
