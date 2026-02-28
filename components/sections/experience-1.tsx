'use client'

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

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
      // Initial state
      gsap.set(
        [card1Ref.current, card2Ref.current, card3Ref.current, card4Ref.current],
        { y: 450 }
      );

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: centerRef.current,     // 🔥 trigger based on circle
          start: "center center",         // when circle hits center of viewport
          end: "+=300%",                  // scroll distance
          scrub: 1,
          pin: sectionRef.current,        // pin whole section
          anticipatePin: 1,
        },
      });


      // Small delay before cards
      tl.add("cardsStart", "+=0.2");

      // Cards wave animation
      tl.to(card1Ref.current, {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power3.out",
      }, "cardsStart")

      .to(card3Ref.current, {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power3.out",
      }, "cardsStart+=0.1")

      .to(card2Ref.current, {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power3.out",
      }, "cardsStart+=0.2")

      .to(card4Ref.current, {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power3.out",
      }, "cardsStart+=0.3");
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="relative h-auto bg-cover pt-8 lg:py-52"
    >
      <div className="w-full h-screen flex justify-center items-center">
        <div className="relative w-full max-w-375 mx-auto">

          {/* Cards Wrapper */}
          <div className="absolute z-10 inset-0 flex justify-between items-center px-4 lg:px-10">

            {/* Left Column */}
            <div className="flex flex-col gap-20">
              {/* Card 01 */}
              <div
                ref={card1Ref}
                className="relative bg-white px-10 py-12 rounded-2xl shadow-xl"
              >
                <div className="max-w-88 flex flex-col gap-6">
                  <h3 className="font-semibold text-lg">
                    Brand identity design strategy
                  </h3>
                  <p className="text-sm text-neutral-600">
                    We build strong brand foundations through research,
                    positioning and clear visual direction.
                  </p>
                </div>
                <div className="absolute top-5 right-5 w-10 h-10 bg-black text-white flex items-center justify-center rounded-full">
                  01
                </div>
              </div>

              {/* Card 02 */}
              <div
                ref={card2Ref}
                className="relative bg-white px-10 py-12 rounded-2xl shadow-xl ml-16"
              >
                <div className="max-w-88 flex flex-col gap-6">
                  <h3 className="font-semibold text-lg">
                    Brand positioning systems
                  </h3>
                  <p className="text-sm text-neutral-600">
                    Strategic alignment of voice, visuals and messaging
                    for long-term impact.
                  </p>
                </div>
                <div className="absolute top-5 right-5 w-10 h-10 bg-black text-white flex items-center justify-center rounded-full">
                  02
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="flex flex-col gap-20">
              {/* Card 03 */}
              <div
                ref={card3Ref}
                className="relative bg-white px-10 py-12 rounded-2xl shadow-xl"
              >
                <div className="max-w-88 flex flex-col gap-6">
                  <h3 className="font-semibold text-lg">
                    Digital brand experiences
                  </h3>
                  <p className="text-sm text-neutral-600">
                    Immersive and meaningful digital touchpoints
                    across platforms.
                  </p>
                </div>
                <div className="absolute top-5 right-5 w-10 h-10 bg-black text-white flex items-center justify-center rounded-full">
                  03
                </div>
              </div>

              {/* Card 04 */}
              <div
                ref={card4Ref}
                className="relative bg-white px-10 py-12 rounded-2xl shadow-xl"
              >
                <div className="max-w-88 flex flex-col gap-6">
                  <h3 className="font-semibold text-lg">
                    Creative system execution
                  </h3>
                  <p className="text-sm text-neutral-600">
                    From concept to launch — delivering scalable,
                    future-proof systems.
                  </p>
                </div>
                <div className="absolute top-5 right-5 w-10 h-10 bg-black text-white flex items-center justify-center rounded-full">
                  04
                </div>
              </div>
            </div>
          </div>

          {/* Center Circle */}
          <div
            ref={centerRef}
            className="relative flex flex-col justify-center items-center w-100 h-100 mx-auto rounded-full bg-white border border-dashed border-black"
          >
            <div className="absolute w-162.5 h-162.5 border border-dashed border-black/40 rounded-full pointer-events-none"></div>
            <div className="absolute w-225 h-225 border border-dashed border-black/40 rounded-full pointer-events-none"></div>

            <div className="text-2xl font-semibold text-center max-w-[320px] leading-snug">
              We turn your creative vision into powerful digital brand
              experiences
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;