"use client";
import { animateServiceHero } from "@/animation/service-hero";
import TalkButton from "@/components/talk-button";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { useRef } from "react";

const ServiceHero = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      animateServiceHero(sectionRef.current);
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="bg-[url(/dotted-bg.webp)] bg-no-repeat bg-position-[50%_0] bg-size-[1875px] lg:bg-cover lg:bg-center py-8 lg:pt-28"
    >
      <div className="max-w-340 mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between gap-4 lg:gap-0 lg:items-center pb-8 lg:pb-24">
          <h1 className="text-[clamp(3rem,10vw,14rem)] font-semibold leading-[1.05] tracking-[-0.1rem]">
            <span className="block overflow-hidden">
              <span className="services-line block whitespace-nowrap">
                Services
              </span>
            </span>
          </h1>
          <div className="max-w-100 flex flex-col gap-4">
            <p className="service-text">
              We provide digital solutions to boost your brand’s online
              presence, from web design to branding and content creation, all
              tailored to your business needs.
            </p>
            <div className="service-btn">
              <TalkButton className="w-fit" />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4 lg:gap-8 items-start">
          {/* Left */}
          <div className="service-img overflow-hidden rounded-2xl lg:rounded-3xl mt-6 lg:mt-12">
            <Image
              src="https://i.pinimg.com/1200x/6e/c7/e9/6ec7e93aada2d813a7e8dcfc4a0d3679.jpg"
              alt="Services Hero Image"
              width={1280}
              height={800}
              className="w-full h-35 sm:h-45 md:h-60 lg:h-120 object-cover"
              priority
            />
          </div>

          {/* Middle */}
          <div className="service-img overflow-hidden rounded-2xl lg:rounded-3xl">
            <Image
              src="https://i.pinimg.com/736x/2e/16/f6/2e16f648bce37594a027137d4aaa2ea2.jpg"
              alt="Services Hero Image"
              width={1280}
              height={800}
              className="w-full h-35 sm:h-45 md:h-60 lg:h-120 object-cover"
              priority
            />
          </div>

          {/* Right */}
          <div className="service-img overflow-hidden rounded-2xl lg:rounded-3xl mt-6 lg:mt-12">
            <Image
              src="https://i.pinimg.com/736x/ea/51/50/ea5150e1203e05d38def50bdce6b56f1.jpg"
              alt="Services Hero Image"
              width={1280}
              height={800}
              className="w-full h-35 sm:h-45 md:h-60 lg:h-120 object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;
