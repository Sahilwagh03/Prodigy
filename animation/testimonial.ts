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

  const heading = q(".testimonial-heading");
  const card = q(".testimonial-card");
  const bentoItems = q(".bento-item");

  const elements = [
    ...heading,
    ...card,
    ...bentoItems,
  ];

  if (!elements.length) return;

  gsap.set(elements, {
    opacity: 0,
    y: 40,
    filter: "blur(14px)",
  });

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: sectionRef,
      start: "top 80%",
      end: "bottom 20%",
      invalidateOnRefresh: true,
    },
  });

  tl.to(heading, {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    duration: 1,
    ease: "power3.out",
  })
    .to(
      card,
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 1,
        ease: "power3.out",
      },
      "-=0.6"
    )
    .to(
      bentoItems,
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 1,
        ease: "power3.out",
        stagger: 0.12,
      },
      "-=0.6"
    );

  return () => tl.kill();
};