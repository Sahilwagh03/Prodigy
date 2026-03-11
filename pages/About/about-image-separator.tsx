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
    <div ref={sectionRef} className="max-w-340 mx-auto w-full aspect-video h-150 px-4 flex justify-center ">
      <div className="image-separator w-60 h-40 rounded-2xl overflow-hidden opacity-0 scale-0">
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
