'use client'
import { animateAboutSeparator } from "@/animation/about-separator";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { useRef } from "react";

const AboutImageSeparator = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      animateAboutSeparator(sectionRef.current);
    },
    { scope: sectionRef },
  );

  return (
    <div ref={sectionRef} className="max-w-340 mx-auto w-full aspect-video h-70 lg:h-150 px-4 flex justify-center">
      <div className="image-separator w-full h-full lg:w-60 lg:h-40 rounded-2xl overflow-hidden opacity-100 scale-100 lg:opacity-0 lg:scale-0">
        <Image
          src="https://images.unsplash.com/photo-1707836885248-2b0e3cb0c76e"
          alt="portrait"
          fill
          className="object-cover object-center"
        />
      </div>
    </div>
  );
};

export default AboutImageSeparator;
