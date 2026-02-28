"use client";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const sectionRef = useRef(null);
  const centerRef = useRef(null);
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const card3Ref = useRef(null);
  const card4Ref = useRef(null);

  useGSAP(
    () => {
      gsap.set(card1Ref.current, { y: "80vh" });
      gsap.set(card2Ref.current, { y: "120vh" });
      gsap.set(card3Ref.current, { y: "100vh" });
      gsap.set(card4Ref.current, { y: "120vh" });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: centerRef.current,
          start: "center center",
          end: "+=300%",
          scrub: 1,
          pin: sectionRef.current,
          anticipatePin: 1,
        },
      });

      tl.add("cardsStart")

        .to(
          card1Ref.current,
          {
            y: 0,
            opacity: 1,
            ease: "power3.out",
          },
          "cardsStart",
        )

        .to(
          card3Ref.current,
          {
            y: 0,
            opacity: 1,
            ease: "power3.out",
          },
          "cardsStart+=0.1",
        )

        .to(
          card2Ref.current,
          {
            y: 0,
            opacity: 1,
            ease: "power3.out",
          },
          "cardsStart+=0.2",
        )

        .to(
          card4Ref.current,
          {
            y: 0,
            opacity: 1,
            ease: "power3.out",
          },
          "cardsStart+=0.3",
        );
    },
    { scope: sectionRef },
  );

  return (
    <section className="h-auto bg-cover pt-8 lg:py-52" ref={sectionRef}>
      <div className="w-full h-screen flex flex-col justify-center items-center">
        <div className="relative w-full">
          <div className="absolute inset-0 flex flex-row justify-between gap-7 items-center mx-auto max-w-380.5 px-3.5">
            <div className="relative flex flex-col lg:gap-[6.4rem] items-start">
              <div className="relative bg-white px-10 py-13 rounded-2xl z-10" ref={card1Ref}>
                <div className="max-w-[21.6rem] flex flex-col gap-12">
                  <div className="max-w-[10.2rem] font-semibold">
                    Brand identity design strategy
                  </div>
                  <p className="text-[1rem] text-[#4d4d4d]">
                    We build strong brand foundations through research,
                    positioning and clear visual direction.
                  </p>
                </div>
                <div className="absolute inset-[1.25rem_1.25rem_auto_auto]">
                  <div className="w-10 h-10 bg-black text-white text-center flex justify-center items-center rounded-full">
                    <div>01</div>
                  </div>
                </div>
              </div>
              <div className="relative bg-white px-10 py-13 rounded-2xl z-10 ml-16" ref={card2Ref}>
                <div className="max-w-[21.6rem] flex flex-col gap-12">
                  <div className="max-w-[10.2rem] font-semibold">
                    Brand identity design strategy
                  </div>
                  <p className="text-[1rem] text-[#4d4d4d]">
                    We build strong brand foundations through research,
                    positioning and clear visual direction.
                  </p>
                </div>
                <div className="absolute inset-[1.25rem_1.25rem_auto_auto]">
                  <div className="w-10 h-10 bg-black text-white text-center flex justify-center items-center rounded-full">
                    <div>02</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative flex flex-col lg:gap-[6.4rem] items-start">
              <div className="relative bg-white px-10 py-13 rounded-2xl z-10" ref={card3Ref}>
                <div className="max-w-[21.6rem] flex flex-col gap-12">
                  <div className="max-w-[10.2rem] font-semibold">
                    Brand identity design strategy
                  </div>
                  <p className="text-[1rem] text-[#4d4d4d]">
                    We build strong brand foundations through research,
                    positioning and clear visual direction.
                  </p>
                </div>
                <div className="absolute inset-[1.25rem_1.25rem_auto_auto]">
                  <div className="w-10 h-10 bg-black text-white text-center flex justify-center items-center rounded-full">
                    <div>01</div>
                  </div>
                </div>
              </div>
              <div className="relative bg-white px-10 py-13 rounded-2xl z-10" ref={card4Ref}>
                <div className="max-w-[21.6rem] flex flex-col gap-12">
                  <div className="max-w-[10.2rem] font-semibold">
                    Brand identity design strategy
                  </div>
                  <p className="text-[1rem] text-[#4d4d4d]">
                    We build strong brand foundations through research,
                    positioning and clear visual direction.
                  </p>
                </div>
                <div className="absolute inset-[1.25rem_1.25rem_auto_auto]">
                  <div className="w-10 h-10 bg-black text-white text-center flex justify-center items-center rounded-full">
                    <div>02</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            ref={centerRef}
            className="relative flex flex-col rounded-full justify-center items-center max-w-100 min-h-100 mx-auto bg-white border border-dashed border-black"
          >
            <div className="rounded-full pointer-events-none absolute w-full min-w-178 max-w-178 h-full min-h-178 border border-dashed border-black/40"></div>
            <div className="rounded-full pointer-events-none absolute w-full min-w-230 min-h-230 h-full border border-dashed border-black/40"></div>
            <div className="flex flex-col justify-center items-center">
              <div className="text-[1.875rem] text-center max-w-90 font-semibold tracking-[-.056rem] leading-[1.33]">
                We turn your creative vision into powerful digital brand
                experiences
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
