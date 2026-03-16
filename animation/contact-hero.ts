import { gsap, SplitText } from "@/lib/gsap";

export const animateContactHero = (container: HTMLElement | null) => {
  if (!container) return;

  const contactTitle = container.querySelector(".contact-line");

  if (!contactTitle) return;

  const contactSplit = new SplitText(contactTitle, { type: "chars" });

  const tl = gsap.timeline();

  gsap.set(contactSplit.chars, {
    yPercent: 120,
  });

    tl.to(
    contactSplit.chars,
    {
      yPercent: 0,
      stagger: 0.05,
      duration: 0.9,
      ease: "back.out(1.7)",
    },
    0,
  )
};
