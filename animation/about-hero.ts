import { gsap , SplitText } from "@/lib/gsap";

export const animateAboutHero = (container: HTMLElement | null) => {
  if (!container) return;

  const about = container.querySelector(".about-line");
  const prodigy = container.querySelector(".prodigy-line");
  const images = container.querySelectorAll(".hero-image");

  if (!about || !prodigy) return;

  const aboutSplit = new SplitText(about, { type: "chars" });
  const prodigySplit = new SplitText(prodigy, { type: "chars" });

  const tl = gsap.timeline();

  gsap.set([...aboutSplit.chars, ...prodigySplit.chars], {
    yPercent: 110,
    opacity: 0,
  });

  gsap.set(images, {
    scale: 0,
    opacity: 0,
  });

  tl.to(aboutSplit.chars, {
    yPercent: 0,
    opacity: 1,
    stagger: 0.04,
    duration: 1,
    ease: "power3.out",
  })
    .to(
      prodigySplit.chars,
      {
        yPercent: 0,
        opacity: 1,
        stagger: 0.04,
        duration: 1,
        ease: "power3.out",
      },
      "-=0.4"
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
      "-=0.2"
    );
};