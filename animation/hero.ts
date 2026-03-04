import { gsap } from "@/lib/gsap";

export const animateHeroElements = (container: HTMLElement) => {
  const q = gsap.utils.selector(container);

  // ✅ Global extra delay (adjust this value)
  const EXTRA_DELAY = 0.6; // increase if you want more delay

  const headings = q(".hero-heading-line");

  headings.forEach((el: Element, i: number) => {
    const fromX = i === 0 ? -150 : 150;

    gsap.set(el, {
      x: fromX,
      opacity: 0,
      filter: "blur(14px)",
      scale: 1.05,
    });

    gsap.to(el, {
      scrollTrigger: {
        trigger: el,
        start: "top bottom-=120",
        toggleActions: "play none none reverse",
      },
      x: 0,
      opacity: 1,
      filter: "blur(0px)",
      scale: 1,
      duration: 1.4,
      ease: "power4.out",
      delay: EXTRA_DELAY + 0.2 + i * 0.1, // 🔥 added here
    });
  });

  q(".hero-paragraph").forEach((el: Element) => {
    gsap.set(el, {
      y: 60,
      opacity: 0,
      filter: "blur(14px)",
    });

    gsap.to(el, {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      duration: 1.1,
      ease: "power4.out",
      delay: EXTRA_DELAY + 0.25, // 🔥 added here
    });
  });

  q(".hero-button").forEach((el: Element) => {
    gsap.set(el, {
      y: 50,
      opacity: 0,
      filter: "blur(14px)",
    });

    gsap.to(el, {
      scrollTrigger: {
        trigger: el,
        start: "top bottom-=80",
        toggleActions: "play none none reverse",
      },
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      duration: 1,
      ease: "power4.out",
      delay: EXTRA_DELAY, // 🔥 added here
    });
  });

  q(".hero-service").forEach((el: Element, i: number) => {
    gsap.set(el, {
      y: 40,
      opacity: 0,
      filter: "blur(14px)",
    });

    gsap.to(el, {
      scrollTrigger: {
        trigger: el,
        start: "top bottom-=15",
        toggleActions: "play none none reverse",
      },
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      duration: 1,
      ease: "power3.out",
      delay: EXTRA_DELAY + 0.2 + i * 0.08, // 🔥 added here
    });
  });
};