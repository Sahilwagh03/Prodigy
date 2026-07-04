"use client";

import { gsap } from "@/lib/gsap";

interface AnimateFaqProps {
  sectionRef: HTMLElement | null;
}

export const animateFaq = ({ sectionRef }: AnimateFaqProps) => {
  if (!sectionRef) return;

  const q = gsap.utils.selector(sectionRef);

  const headingTitle = q(".faq-heading h2");
  const headingParagraph = q(".faq-heading p");
  const cta = q(".faq-cta");
  const accordion = q(".faq-accordion");
  const items = q(".faq-item");

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: sectionRef,
      start: "top 85%",
      toggleActions: "play none none reverse",
    },
  });

  // 🔹 Heading Title (Fades & slides up quickly)
  tl.fromTo(
    headingTitle,
    {
      opacity: 0,
      y: 30,
      filter: "blur(12px)",
    },
    {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      duration: 0.8,
      ease: "power3.out",
    }
  )

  // 🔹 Heading Paragraph (Tighter overlap)
  .fromTo(
    headingParagraph,
    {
      opacity: 0,
      y: 25,
      filter: "blur(12px)",
    },
    {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      duration: 0.8,
      ease: "power3.out",
    },
    "-=0.6"
  )

  // 🔹 CTA Container & Accordion Container (Simultaneous snappy entry)
  .fromTo(
    [cta, accordion],
    {
      opacity: 0,
      y: 30,
      filter: "blur(8px)",
    },
    {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      duration: 0.8,
      ease: "power3.out",
    },
    "-=0.6"
  )

  // 🔹 FAQ Items (Snappy staggered pop reveal similar to AI Personal Branding)
  .fromTo(
    items,
    {
      opacity: 0,
      scale: 0.96,
      y: 20,
      filter: "blur(6px)",
    },
    {
      opacity: 1,
      scale: 1,
      y: 0,
      filter: "blur(0px)",
      duration: 0.6,
      ease: "power3.out",
      stagger: 0.05, // Snappy stagger to eliminate delays
    },
    "-=0.5"
  );

  return () => {
    tl.kill();
  };
};