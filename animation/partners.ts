import { gsap } from "@/lib/gsap";

export const animatePartners = (container: HTMLElement) => {
  if (!container) return;
  const q = gsap.utils.selector(container);

  const label = q(".partner-title");
  const cards = q(".partner-card");

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: container,
      start: "top 95%",
      once: true,
    },
  });

  if (label.length > 0) {
    tl.fromTo(
      label,
      {
        y: 30,
        opacity: 0,
        filter: "blur(10px)",
      },
      {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        duration: 0.6,
        ease: "power3.out",
      }
    );
  }

  if (cards.length > 0) {
    tl.fromTo(
      cards,
      {
        y: 30,
        opacity: 0,
        filter: "blur(10px)",
      },
      {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        duration: 0.6,
        ease: "power3.out",
      },
      "-=0.5"
    );
  }
};
