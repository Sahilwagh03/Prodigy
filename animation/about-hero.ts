import { gsap, SplitText } from "@/lib/gsap";

export const animateAboutHero = (container: HTMLElement | null) => {
  if (!container) return;

  const about = container.querySelector(".about-line");
  const prodigy = container.querySelector(".prodigy-line");
  const images = container.querySelectorAll(".hero-image");
  const separatorSection = document.querySelector(".image-separator");

  if (!about || !prodigy) return;

  const aboutSplit = new SplitText(about, { type: "chars" });
  const prodigySplit = new SplitText(prodigy, { type: "chars" });

  const tl = gsap.timeline();

  gsap.set([...aboutSplit.chars, ...prodigySplit.chars], {
    yPercent: 120,
    opacity: 0,
  });

  gsap.set(images, {
    scale: 0,
    opacity: 0,
  });

  tl.to(aboutSplit.chars, {
    yPercent: 0,
    opacity: 1,
    stagger: 0.1,
    duration: 0.9,
    ease: "back.out(1.7)",
  })
    .to(
      prodigySplit.chars,
      {
        yPercent: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 0.9,
        ease: "back.out(1.7)",
      },
      "-=0.5"
    )
    .to(
      images,
      {
        scale: 1,
        opacity: 1,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
      },
      "-=0.3"
    );

  if (separatorSection) {
    gsap.to(images[0], {
      x: "-300%",
      y: "-80",
      ease: "none",
      scrollTrigger: {
        trigger: separatorSection,
        start: "top 95%",
        end: "top 20%",
        scrub: 1.5,
      },
    });

    gsap.to(images[1], {
      x: "300%",
      y: "-60",
      ease: "none",
      scrollTrigger: {
        trigger: separatorSection,
        start: "top 95%",
        end: "top 20%",
        scrub: 1.5,
      },
    });

    gsap.to(images[2], {
      x: "300%",
      y: "80",
      ease: "none",
      scrollTrigger: {
        trigger: separatorSection,
        start: "top 95%",
        end: "top 20%",
        scrub: 1.5,
      },
    });
  }
};