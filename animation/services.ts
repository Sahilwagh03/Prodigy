"use client";

import { gsap } from "@/lib/gsap";

interface AnimateServicesProps {
  pinRef: HTMLDivElement | null;
  highlightRef: HTMLDivElement | null;
  rowRefs: (HTMLDivElement | null)[];
  imageClipRefs: (HTMLDivElement | null)[];
  imageInnerRefs: (HTMLDivElement | null)[];
  servicesLength: number;
  rowHeight: number;
}

export const animateServices = ({
  pinRef,
  highlightRef,
  rowRefs,
  imageClipRefs,
  imageInnerRefs,
  servicesLength,
  rowHeight,
}: AnimateServicesProps) => {
  if (!pinRef) return;

  const q = gsap.utils.selector(pinRef);

  const heading = q(".services-heading");
  const button = q(".services-button");

  gsap.set([heading, button], {
    opacity: 0,
    y: 40,
    filter: "blur(14px)",
  });

  [...heading, ...button].forEach((el: Element) => {
    gsap.to(el, {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: el,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });
  });

  const mm = gsap.matchMedia();

  mm.add("(min-width: 1024px)", () => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: pinRef,
        start: "top-=20px top",
        end: "+=300%",
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });

    for (let index = 0; index < servicesLength; index++) {
      if (index === 0) {
        tl.to({}, { duration: 0.5 });
        continue;
      }

      const label = `service${index}`;
      tl.addLabel(label);

      tl.to(
        highlightRef,
        { y: index * rowHeight, duration: 0.5, ease: "power3.out" },
        label,
      );

      tl.to(
        rowRefs[index - 1],
        { color: "#000000", duration: 0.25, ease: "none" },
        label,
      );

      tl.to(
        rowRefs[index],
        { color: "#ffffff", duration: 0.25, ease: "none" },
        `${label}+=0.25`,
      );

      tl.to(
        imageClipRefs[index],
        { height: "100%", duration: 0.5, ease: "power3.out" },
        label,
      );

      tl.to(
        imageInnerRefs[index],
        { y: "0%", duration: 0.5, ease: "power3.out" },
        label,
      );

      tl.to({}, { duration: index === servicesLength - 1 ? 1 : 0.5 });
    }
  });

  return () => mm.revert();
};
