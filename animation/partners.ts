import { gsap } from "@/lib/gsap";

export const animatePartners = (container: HTMLElement) => {
  const q = gsap.utils.selector(container);

  const label = q(".partner-title");
  const heading = q(".partner-paragraph");
  const cards = q(".partner-card");

  gsap.set(label, {
    y: 60,
    opacity: 0,
    filter: "blur(14px)",
  });

  gsap.to(label, {
    scrollTrigger: {
      trigger: label,
      start: "top bottom-=80",
      toggleActions: "play none none reverse",
    },
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    duration: 1,
    ease: "power3.out",
  });

  gsap.set(heading, {
    y: 60,
    opacity: 0,
    filter: "blur(14px)",
  });

  gsap.to(heading, {
    scrollTrigger: {
      trigger: heading,
      start: "top bottom-=80",
      toggleActions: "play none none reverse",
    },
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    duration: 1,
    ease: "power3.out",
  });

  gsap.set(cards, {
    y: 60,
    opacity: 0,
    filter: "blur(14px)",
  });

  gsap.to(cards, {
    scrollTrigger: {
      trigger: cards[0],
      start: "top 110%",
      toggleActions: "play none none reverse",
    },
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    duration: 0.9,
    ease: "power3.out",
    stagger: 0.15,
  });
};
