import { gsap } from "@/lib/gsap";

export const animateHeroElements = (container: HTMLElement) => {
  const q = gsap.utils.selector(container);

  const tl = gsap.timeline({
    defaults: {
      ease: "power4.out",
    },
  });

  // 🔥 HEADINGS (staggered left/right)
  const headings = q(".hero-heading-line");

  headings.forEach((el: Element, i: number) => {
    const fromX = i === 0 ? -120 : 120;

    gsap.set(el, {
      x: fromX,
      opacity: 0,
      filter: "blur(12px)",
      scale: 1.04,
    });

    tl.to(
      el,
      {
        x: 0,
        opacity: 1,
        filter: "blur(0px)",
        scale: 1,
        duration: 1.1,
      },
      i * 0.08 // 🔥 smooth stagger (no big delay)
    );
  });

  // 🔥 PARAGRAPH
  q(".hero-paragraph").forEach((el: Element) => {
    gsap.set(el, {
      y: 40,
      opacity: 0,
      filter: "blur(12px)",
    });

    tl.to(
      el,
      {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        duration: 0.9,
      },
      "-=0.6" // overlaps nicely with headings
    );
  });

  // 🔥 BUTTON
  q(".hero-button").forEach((el: Element) => {
    gsap.set(el, {
      y: 40,
      opacity: 0,
      filter: "blur(12px)",
    });

    tl.to(
      el,
      {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        duration: 0.8,
      },
      "-=0.5"
    );
  });

  // 🔥 SERVICES (cards/icons etc)
  q(".hero-service").forEach((el: Element, i: number) => {
    gsap.set(el, {
      y: 30,
      opacity: 0,
      filter: "blur(10px)",
    });

    tl.to(
      el,
      {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        duration: 0.8,
      },
      "-=0.4" + i * 0.06 // slight stagger inside overlap
    );
  });

  // 🔥 OPTIONAL: Scroll trigger for entire timeline
  gsap.timeline({
    scrollTrigger: {
      trigger: container,
      start: "top bottom-=100",
      toggleActions: "play none none reverse",
    },
  }).add(tl);
};