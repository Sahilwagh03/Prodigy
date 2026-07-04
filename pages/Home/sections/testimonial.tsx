"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { animateTestimonial } from "@/animation/testimonial";

const Testimonial = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!sectionRef.current) return;
      return animateTestimonial({ sectionRef: sectionRef.current });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="testimonial-section h-auto bg-cover pt-12 lg:pt-24 pb-0 lg:pb-0 bg-no-repeat bg-[url(/dotted-bg.webp)] bg-center bg-[#f8f7f3]"
    >
      <div className="w-full h-full px-4 max-w-340 mx-auto">
        <div className="flex flex-col">
          {/* Heading - Matches WorkShowcaseSection & AIPersonalBranding heading style */}
          <div className="testimonial-heading mx-auto mb-14 flex max-w-3xl flex-col items-center justify-center text-center">
            <h2 className="text-[2rem] font-semibold leading-tight tracking-[-.075rem] text-black lg:text-[2.5rem]">
              Designs That Deliver. Clients That Trust.
            </h2>
            <p className="mt-4 max-w-md text-zinc-600">
              See how we help founders, creators, and brands automate, scale, and elevate their digital presence.
            </p>
          </div>

          {/* Testimonial Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            
            {/* Card 1: Left Tall Card (Spans 5 columns out of 12 on desktop) */}
            <div className="testimonial-card md:col-span-5 bg-white border border-zinc-200/80 rounded-[32px] p-8 shadow-sm flex flex-col justify-between h-full min-h-[380px] md:min-h-[480px] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-2 hover:scale-[1.01] hover:shadow-lg hover:border-zinc-300/90 cursor-pointer">
              <div>
                <div className="flex flex-col gap-1 mb-6">
                  <div className="text-5xl md:text-6xl font-bold tracking-tight text-black">
                    8X
                  </div>
                  <span className="text-lg font-semibold text-zinc-900 leading-tight">
                    Increase in conversion rate
                  </span>
                </div>

                <div className="flex flex-col justify-center mb-8">
                  <span className="text-[#f02508] text-4xl font-serif leading-none select-none mb-1 block">
                    “
                  </span>
                  <p className="text-zinc-600 text-sm md:text-base leading-relaxed">
                    "We needed a modern, high-converting website, and the Prodigy team delivered beyond expectations. Their design and SEO expertise helped us increase conversion rate by 800% in just two weeks. Highly recommend!"
                  </p>
                </div>
              </div>

              <div className="border-t border-zinc-100 pt-4">
                <p className="font-bold text-sm text-zinc-900 leading-tight">
                  Nivara Nest
                </p>
                <p className="text-xs text-zinc-500 font-medium mt-0.5">
                  Partner Client
                </p>
              </div>
            </div>

            {/* Right Side Container (Spans 7 columns out of 12 on desktop) */}
            <div className="md:col-span-7 flex flex-col gap-6">
              
              {/* Card 2: Right Top Wide Card */}
              <div className="testimonial-card bg-white border border-zinc-200/80 rounded-[32px] p-8 shadow-sm flex flex-col justify-between h-full min-h-[220px] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-2 hover:scale-[1.01] hover:shadow-lg hover:border-zinc-300/90 cursor-pointer">
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 mb-6">
                    <span className="text-5xl md:text-6xl font-bold tracking-tight text-black">2X</span>
                    <span className="text-lg md:text-xl font-bold tracking-tight text-zinc-900">Increase in lead generation</span>
                  </div>

                  <div className="flex flex-col justify-center mb-6">
                    <span className="text-[#f02508] text-4xl font-serif leading-none select-none mb-1 block">
                      “
                    </span>
                    <p className="text-zinc-600 text-sm md:text-base leading-relaxed">
                      "From branding to website design, every detail was meticulously handled. The team's expertise helped us launch faster, and the results have been phenomenal!"
                    </p>
                  </div>
                </div>

                <div className="border-t border-zinc-100 pt-4">
                  <p className="font-bold text-sm text-zinc-900 leading-tight">
                    Hudeox Hud
                  </p>
                  <p className="text-xs text-zinc-500 font-medium mt-0.5">
                    Partner Client
                  </p>
                </div>
              </div>

              {/* Bottom Row Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Card 3: Bottom Left Card */}
                <div className="testimonial-card bg-white border border-zinc-200/80 rounded-[32px] p-8 shadow-sm flex flex-col justify-between h-full min-h-[220px] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-2 hover:scale-[1.01] hover:shadow-lg hover:border-zinc-300/90 cursor-pointer">
                  <div className="flex flex-col justify-center mb-6">
                    <span className="text-[#f02508] text-4xl font-serif leading-none select-none mb-1 block">
                      “
                    </span>
                    <p className="text-zinc-600 text-sm leading-relaxed">
                      "Their animation work took our product videos to the next level. The team truly understands user experience and storytelling."
                    </p>
                  </div>

                  <div className="border-t border-zinc-100 pt-4">
                    <p className="font-bold text-sm text-zinc-900 leading-tight">
                      Living Hindu
                    </p>
                    <p className="text-xs text-zinc-500 font-medium mt-0.5">
                      Partner Client
                    </p>
                  </div>
                </div>

                {/* Card 4: Bottom Right Card (dark card) */}
                <div className="testimonial-card bg-zinc-900 text-white rounded-[32px] p-8 shadow-sm flex flex-col justify-between h-full min-h-[220px] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-2 hover:scale-[1.01] hover:shadow-lg hover:bg-zinc-950 cursor-pointer">
                  <div className="flex flex-col justify-center mb-6">
                    <span className="text-[#f02508] text-4xl font-serif leading-none select-none mb-1 block">
                      “
                    </span>
                    <p className="text-zinc-200 text-sm leading-relaxed">
                      "The team nailed our MVP design with a fast turnaround and incredible attention to detail. The final product felt polished and professional."
                    </p>
                  </div>

                  <div className="border-t border-zinc-800 pt-4">
                    <p className="font-bold text-sm text-white leading-tight">
                      ApniFitness
                    </p>
                    <p className="text-xs text-zinc-400 font-medium mt-0.5">
                      Partner Client
                    </p>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;