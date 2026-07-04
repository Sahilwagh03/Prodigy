"use client";

import { gsap } from "@/lib/gsap";

interface AnimateTestimonialProps {
  sectionRef: HTMLElement | null;
}

export const animateTestimonial = ({
  sectionRef,
}: AnimateTestimonialProps) => {
  if (!sectionRef) return;

  const q = gsap.utils.selector(sectionRef);

  const headingTitle = q(".testimonial-heading h2");
  const headingParagraph = q(".testimonial-heading p");
  const cards = q(".testimonial-card");

  if (!cards.length) return;

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: sectionRef,
      start: "top 85%",
      toggleActions: "play none none reverse",
    },
  });

  // 1. Heading Title Animation
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

  // 2. Heading Paragraph Animation
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

  // 3. Staggered Card Pop Animation - Matches AIPersonalBranding style exactly
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
      clearProps: "transform,scale,filter", // Clear props so hover transitions work smoothly
    },
    "-=0.7"
  );

  return () => {
    tl.kill();
  };
};