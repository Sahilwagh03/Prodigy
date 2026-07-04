"use client";
import Image from "next/image";
import FeatureCard from "../../../components/feature-card";
import TalkButton from "../../../components/talk-button";
import { animateFeatureWork } from "@/animation/feature";
import { useRef } from "react";
import { gsap } from "@/lib/gsap";
import { useGSAP } from "@gsap/react";

const FeatureWork = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      animateFeatureWork(sectionRef.current!);
    }, sectionRef);

    return () => ctx.revert();
  }, []);
  return (
    <section ref={sectionRef} className="h-full mx-4">
      <div className="py-8 lg:py-32.5 rounded-[1.875rem] bg-white mx-auto max-w-340">
        <div className="px-4">
          <div className="flex flex-col">
            <div className="flex flex-col lg:flex-row gap-7.5 justify-between mb-8 lg:mb-16.25">
              <div className="flex-1">
                <h1 className="feature-title text-[clamp(2.15rem,10vw,9.3rem)] lg:tracking-[-.28125rem] leading-[0.9] font-semibold">
                  <span className="line block overflow-hidden whitespace-nowrap">Featured</span>
                  <span className="line block overflow-hidden whitespace-nowrap">Work</span>
                </h1>
              </div>

              <div className="flex-1 flex flex-col gap-10 justify-between max-w-78.75 self-stretch">
                <div className="feature-right-item bg-neutral-100 px-2 rounded-full flex justify-center items-center h-24 max-w-24 overflow-hidden">
                  <Image
                    src="/fire-logo.svg"
                    alt="feature-work-logo"
                    width={130}
                    height={130}
                    className="scale-450"
                  />
                </div>

                <p className="feature-right-item text-[#4d4d4d] text-[1rem] leading-relaxed font-normal">
                  We blend creativity with technical expertise to craft
                  experiences that captivate audiences and communicate your
                  brand message.
                </p>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
              <FeatureCard
                title="AI Personal Branding"
                year="2024"
                image="https://res.cloudinary.com/dmrjruik5/image/upload/v1783157431/featured-work-1_ljtgd4.jpg"
              />

              <FeatureCard
                title="AI Avtar"
                year="2026"
                image="https://res.cloudinary.com/dmrjruik5/image/upload/v1783157432/featured-work-4_gwlt3r.jpg"
              />

              <FeatureCard
                title="Fitness Content Creator"
                year="2026"
                image="https://res.cloudinary.com/dmrjruik5/image/upload/v1783157432/featured-work-2_a7fuxz.jpg"
              />

              <FeatureCard
                title="AI Automation"
                year="2025"
                image="https://res.cloudinary.com/dmrjruik5/image/upload/v1783157431/featured-work-3_zmsekw.jpg"
              />
            </div>

            <div className="flex justify-center">
              <TalkButton
                label="View more"
                className="group mt-8 lg:mt-16 w-fit bg-black text-white hover:bg-[#f3350c]"
                dotClassName="bg-[#f3350c] group-hover:bg-white"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureWork;
