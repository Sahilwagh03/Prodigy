"use client";

import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { animateAIPersonalBranding } from "@/animation/ai-personal-branding";
import Link from "next/link";

const brandingCards = [
  {
    id: 1,
    title: "Content That Performs",
    category: "Organic Growth",
    description:
      "Turn every post into a growth engine with AI-powered content strategies designed to maximize reach, engagement, and millions of organic views.",
    image:
      "https://res.cloudinary.com/dmrjruik5/image/upload/c_scale,w_600/v1783157432/featured-work-4_gwlt3r.jpg",
    insta_url: "https://www.instagram.com/p/DaRza4XEfia/?img_index=1"
  },
  {
    id: 2,
    title: "Audience Authority",
    category: "Personal Brand",
    description:
      "Build a recognizable personal brand that attracts loyal followers, establishes credibility, and creates lasting influence across social platforms.",
    image:
      "https://res.cloudinary.com/dmrjruik5/image/upload/c_scale,w_600/v1783157432/featured-work-2_a7fuxz.jpg",
    insta_url: "https://www.instagram.com/p/DaUcuD8FvNW/?img_index=1"
  },
  {
    id: 3,
    title: "Scalable Content",
    category: "AI Strategy",
    description:
      "Leverage AI workflows to consistently produce high-performing content, accelerate audience growth, and position yourself as an industry leader.",
    image:
      "https://res.cloudinary.com/dmrjruik5/image/upload/c_scale,w_600/v1783159346/ai-personal-branding_kp777m.jpg",
    insta_url: "https://www.instagram.com/p/DaXO7ivDoKh/?img_index=1"
  },
];

export default function AIPersonalBranding() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!sectionRef.current) return;
      return animateAIPersonalBranding({ sectionRef: sectionRef.current });
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="h-auto py-10 lg:py-20 relative overflow-hidden">
      <div className="relative z-10 mx-auto max-w-7xl px-4">
        {/* Heading & Paragraph - Matches WorkShowcaseSection styling */}
        <div className="branding-heading mx-auto mb-14 flex max-w-3xl flex-col items-center justify-center text-center">
          <h2 className="text-[2rem] font-semibold leading-tight tracking-[-.075rem] text-black lg:text-[2.5rem]">
            AI Personal Branding
          </h2>

          <p className="mt-4 max-w-md text-zinc-600">
            Scale your digital presence, influence, and authority globally using cutting-edge AI replication technologies.
          </p>
        </div>

        {/* Grid - 3 cards of 3:4 aspect ratio */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {brandingCards.map((card) => (
            <Link href={card.insta_url} target="_blank" key={card.id}>
              <div
                className="branding-card group relative aspect-[3/4] overflow-hidden rounded-[32px] border border-zinc-200 bg-zinc-100 shadow-sm cursor-pointer"
              >
                {/* Card Image Wrapper */}
                <div className="relative w-full h-full">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    sizes="(max-width: 640px) 450px, (max-width: 1024px) 50vw, 450px"
                    className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Aesthetic Dark Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent transition-opacity duration-300 group-hover:from-black/70 group-hover:via-black/20" />

                  {/* Corner Accent Line Grid to match Prodigy Theme */}
                  <div className="absolute inset-0 border border-white/5 pointer-events-none rounded-[32px]" />

                  {/* Content Overlay */}
                  <div className="absolute inset-0 flex flex-col justify-end p-8 z-10">
                    <span className="text-xs font-semibold uppercase tracking-wider text-orange-400 mb-2">
                      {card.category}
                    </span>

                    <h3 className="text-2xl font-bold text-white mb-3 tracking-tight transition-transform duration-300 group-hover:-translate-y-1">
                      {card.title}
                    </h3>

                    <p className="text-sm text-zinc-300 leading-relaxed opacity-0 max-h-0 overflow-hidden transition-all duration-500 ease-out group-hover:opacity-100 group-hover:max-h-24">
                      {card.description}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
