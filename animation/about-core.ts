import { gsap, SplitText, ScrollTrigger } from "@/lib/gsap";

export const animateAboutCore = (container: HTMLElement | null) => {
  if (!container) return;

  const text = container.querySelector(".core-text");
  if (!text) return;

  let split: SplitText;

  const initAnimation = () => {
    // revert previous split
    split?.revert();

    split = new SplitText(text, {
      type: "lines",
      linesClass: "core-line",
    });

    const lines = split.lines;

    gsap.set(lines, {
      backgroundImage: "linear-gradient(to right, #000 0%, #000 100%)",
      backgroundRepeat: "no-repeat",
      backgroundSize: "0% 100%",
      WebkitBackgroundClip: "text",
      color: "rgba(0,0,0,0.25)",
      display: "inline-block",
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: text,
        start: "top 75%", // better for mobile
        end: "bottom 40%",
        scrub: true,
        invalidateOnRefresh: true,
      },
    });

    lines.forEach((line) => {
      tl.to(line, {
        backgroundSize: "100% 100%",
        ease: "none",
        duration: 1,
      });
    });
  };

  initAnimation();

  // refresh on resize (important for mobile)
  ScrollTrigger.addEventListener("refreshInit", () => split?.revert());
  ScrollTrigger.addEventListener("refresh", initAnimation);

  ScrollTrigger.refresh();
};