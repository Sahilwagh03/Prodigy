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

  const elements = [
    ...q(".testimonial-heading"),
    ...q(".testimonial-card"),
    ...q(".bento-item"),
  ];

  if (!elements.length) return;

  gsap.set(elements, {
    opacity: 0,
    y: 50,
    scale: 0.96,
    filter: "blur(14px)",
  });

  const animations: gsap.core.Tween[] = [];

  elements.forEach((el) => {
    const tween = gsap.to(el, {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });

    animations.push(tween);
  });

  return () => {
    animations.forEach((t) => t.kill());
  };
};