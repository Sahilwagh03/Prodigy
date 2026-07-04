"use client";

import { gsap } from "@/lib/gsap";

interface AnimateAIPersonalBrandingProps {
  sectionRef: HTMLElement | null;
}

export const animateAIPersonalBranding = ({ sectionRef }: AnimateAIPersonalBrandingProps) => {
  if (!sectionRef) return;

  const q = gsap.utils.selector(sectionRef);

  const headingTitle = q(".branding-heading h2");
  const headingParagraph = q(".branding-heading p");
  const cards = q(".branding-card");

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: sectionRef,
      start: "top 85%",
      toggleActions: "play none none reverse",
    },
  });

  // 🔹 Heading Title Animation
  tl.fromTo(
    headingTitle,
    {
      opacity: 0,
      y: 40,
      filter: "blur(14px)",
    },
    {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      duration: 1,
      ease: "power3.out",
    }
  )

  // 🔹 Heading Paragraph Animation
  .fromTo(
    headingParagraph,
    {
      opacity: 0,
      y: 40,
      filter: "blur(14px)",
    },
    {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      duration: 1,
      ease: "power3.out",
    },
    "-=0.7"
  )

  // 🔹 Card Pop Animation (Staggered scale & fade with back easing for pop feel)
  .fromTo(
    cards,
    {
      opacity: 0,
      scale: 0.8,
      y: 50,
      filter: "blur(10px)",
    },
    {
      opacity: 1,
      scale: 1,
      y: 0,
      filter: "blur(0px)",
      duration: 0.9,
      ease: "back.out(1.4)",
      stagger: 0.15,
    },
    "-=0.7"
  );

  return () => {
    tl.kill();
  };
};
