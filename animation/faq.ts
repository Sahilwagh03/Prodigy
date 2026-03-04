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
      start: "top 40%",
      toggleActions: "play none none reverse",
    },
  });

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
    },
  )

    // 🔹 Paragraph (slightly after title)
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
      "-=0.7",
    )

    // 🔹 CTA + Accordion together
    .fromTo(
      [cta, accordion],
      {
        opacity: 0,
        y: 40,
        filter: "blur(8px)",
      },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 1,
        ease: "power3.out",
      },
      "-=0.8",
    )

    // 🔹 FAQ items staggered (in sync with container)
    .fromTo(
      items,
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
        stagger: 0.08,
      },
      "-=0.8",
    );
};