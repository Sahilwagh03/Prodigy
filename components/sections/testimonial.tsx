"use client";

import Image from "next/image";
import BentoGrid from "../bentogrid";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { animateTestimonial } from "@/animation/testimonial";

const Testimonial = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const cleanup = animateTestimonial({
      sectionRef: sectionRef.current,
    });

    return cleanup;
  }, []);

  return (
    <section
      ref={sectionRef}
      className="testimonial-section h-auto bg-cover pt-8 lg:pt-28 bg-no-repeat bg-position-[50%] bg-[url(/dotted-bg.webp)]"
    >
      <div className="w-full h-full px-4 max-w-340 mx-auto">
        <div className="flex flex-col gap-7">
          <div className="testimonial-heading w-full h-full max-w-lg text-center mx-auto">
            <h2 className="text-[2rem] lg:text-[2.5rem] font-semibold leading-tight tracking-[-.075rem]">
              Designs That Deliver. Clients That Trust.
            </h2>
          </div>

          <div className="flex flex-col gap-5">
            <div className="testimonial-card bg-white rounded-2xl lg:rounded-3xl py-8 px-5 sm:px-7 lg:px-10">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 lg:gap-6">
                <div className="text-lg sm:text-xl lg:text-[1.4rem] font-semibold tracking-[-.02rem] lg:tracking-[-.045rem] leading-snug max-w-full lg:max-w-76">
                  Driving growth with strategies tailored for success
                </div>

                <div className="flex items-center gap-6 sm:gap-8">
                  <div className="text-4xl sm:text-5xl lg:text-[clamp(2.1rem,5vw,3.75rem)] font-semibold leading-none">
                    85%
                  </div>

                  <p className="text-sm sm:text-base max-w-40 sm:max-w-44 text-gray-600">
                    Analyze and monitor business reporting data
                  </p>
                </div>

                <div className="flex items-center gap-6 sm:gap-8">
                  <div className="text-4xl sm:text-5xl lg:text-[clamp(2.1rem,5vw,3.75rem)] font-semibold leading-none">
                    4.5
                  </div>

                  <div className="flex flex-col gap-2">
                    <Image
                      src="https://cdn.prod.website-files.com/691d92c72b801c04cbc08bec/6927de76d882941441c645cc_stars%20(3).svg"
                      alt="Stars"
                      width={100}
                      height={20}
                      className="w-20 sm:w-24 lg:w-28 h-auto"
                    />

                    <p className="text-sm sm:text-base text-gray-600">
                      Top rated company
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="testimonial-bento">
              <BentoGrid />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;