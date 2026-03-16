import { gsap } from "@/lib/gsap";

export const animateAboutSeparator = (container: HTMLElement | null) => {
  if (!container) return;

  const image = container.querySelector(".image-separator");
  if (!image) return;

  const mm = gsap.matchMedia();

  mm.add("(min-width: 1024px)", () => {
    gsap.set(image, {
      y: -192, // -12rem
      x: -288, // -18rem
    });

    // Intro animation
    const tl = gsap.timeline();

    tl.to(image, {
      scale: 1,
      opacity: 1,
      duration: 1,
      ease: "power3.out",
      delay: 2.6,
    });

    // Scroll animation
    gsap.to(image, {
      y: 0,
      x: 0,
      width: "100%",
      height: "37.5rem",
      ease: "power3.out",

      scrollTrigger: {
        trigger: container,
        start: "top 80%",
        end: "top 0%",
        scrub: 1.5,
      },
    });
  });
};