import { gsap, SplitText } from "@/lib/gsap";

export const animateServiceHero = (container: HTMLElement | null) => {
  if (!container) return;

  const serviceTitle = container.querySelector(".services-line");
  const text = container.querySelector(".service-text");
  const button = container.querySelector(".service-btn");
  const images = container.querySelectorAll(".service-img");

  if (!serviceTitle) return;

  const serviceSplit = new SplitText(serviceTitle, { type: "chars" });

  const tl = gsap.timeline();

  // Initial states
  gsap.set(serviceSplit.chars, {
    yPercent: 120,
    opacity: 0,
  });

  gsap.set([text, button], {
    opacity: 0,
    y: 30,
    filter: "blur(14px)",
  });

  gsap.set(images, {
    scale: 0.65,
    transformPerspective: 1000,
    transformOrigin: "center center",
    force3D: true,
  });

  // Hero intro animation
  tl.to(
    serviceSplit.chars,
    {
      yPercent: 0,
      opacity: 1,
      stagger: 0.05,
      duration: 0.9,
      ease: "back.out(1.7)",
    },
    0,
  )
    .to(
      [text, button],
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 0.9,
        ease: "power3.out",
      },
      0,
    )
    .to(
      images,
      {
        scale: 1,
        duration: 1.5,
        ease: "power2.out",
      },
      0.2,
    );

  // Desktop-only scroll animation
  const mm = gsap.matchMedia();

  mm.add("(min-width: 1024px)", () => {
    gsap.to(images, {
      y: -120,
      ease: "power3.out",
      scrollTrigger: {
        trigger: container.querySelector(".grid"),
        start: "top 60%",
        end: "bottom top",
        scrub: true,
      },
    });
  });
};