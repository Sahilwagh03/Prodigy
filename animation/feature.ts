"use client";

import { gsap, SplitText } from "@/lib/gsap";

export const animateFeatureWork = (container: HTMLElement) => {
  const q = gsap.utils.selector(container);

  const title = q(".feature-title")[0] as HTMLElement;

  if (title) {
    const split = new SplitText(title, { type: "chars" });

    gsap.set(split.chars, {
      yPercent: 120,
      opacity: 0,
    });

    gsap.to(split.chars, {
      yPercent: 0,
      opacity: 1,
      stagger: 0.03,
      duration: 1.2,
      ease: "power4.out",
      scrollTrigger: {
        trigger: title,
        start: "top 85%",
      },
    });
  }

  const rightItems = q(".feature-right-item");

  if (rightItems.length) {
    gsap.set(rightItems, {
      y: 40,
      opacity: 0,
      filter: "blur(10px)",
    });

    gsap.to(rightItems, {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      duration: 1.2,
      ease: "power3.out",
      stagger: 0.15,
      scrollTrigger: {
        trigger: rightItems[0],
        start: "top 85%",
      },
    });
  }

  const cards = q(".feature-card");

  cards.forEach((card: Element) => {
    const bg = card.querySelector(".card-bg");
    const blur = card.querySelector(".card-blur");
    const preview = card.querySelector(".preview-img");
    const marqueeWrapper = card.querySelector(".card-marquee");
    const marqueeTrack = card.querySelector(".marquee-track");

    if (!bg || !blur || !preview || !marqueeWrapper || !marqueeTrack) return;

    gsap.set(card, {
      scale: 0.85,
      transformPerspective: 1000,
      transformOrigin: "center center",
      force3D: true,
    });

    gsap.set(preview, { scale: 0, y: 40, rotate: -8, force3D: true });
    gsap.set(marqueeWrapper, { opacity: 0 });
    gsap.set(marqueeTrack, { x: 0 });

    gsap.to(card, {
      scale: 1,
      duration: 1.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: card,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });

    const marqueeTween = gsap.to(marqueeTrack, {
      x: "-50%",
      duration: 14,
      ease: "none",
      repeat: -1,
      paused: true,
    });

    const tl = gsap.timeline({ paused: true });

    tl.to(bg, {
      scale: 1.08,
      duration: 0.8,
      ease: "power3.out",
    })
      .to(
        blur,
        {
          backdropFilter: "blur(12px)",
          backgroundColor: "rgba(0,0,0,0.25)",
          duration: 0.8,
          ease: "power3.out",
        },
        0,
      )
      .to(
        marqueeWrapper,
        {
          opacity: 1, // full opacity — white band is the visual
          duration: 0.35,
          ease: "power2.out",
        },
        0,
      )
      .to(
        preview,
        {
          scale: 1,
          y: 0,
          rotate: 0,
          duration: 1,
          ease: "expo.out",
        },
        0.1,
      );

    card.addEventListener("mouseenter", () => {
      tl.timeScale(1).play();
      marqueeTween.play();
    });

    card.addEventListener("mouseleave", () => {
      tl.timeScale(2).reverse();
      marqueeTween.pause();
    });
  });
};
