import { gsap, SplitText } from "@/lib/gsap";

export const animateAboutCore = (container: HTMLElement | null) => {
  if (!container) return;

  const text = container.querySelector(".core-text");

  if (!text) return;

  const split = new SplitText(text, {
    type: "lines",
    linesClass: "core-line",
  });

  const lines = split.lines;

  // initial state
  gsap.set(lines, {
    backgroundImage: "linear-gradient(to right, #000 0%, #000 100%)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "0% 100%",
    WebkitBackgroundClip: "text",
    color: "rgba(0,0,0,0.25)",
    display: "inline-block",
  });

  // Build a timeline so each line fully completes before the next begins
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: text,
      start: "top 60%",
      end: "bottom 40%",
      scrub: true,
    },
  });

  lines.forEach((line) => {
    tl.to(line, {
      backgroundSize: "100% 100%",
      ease: "none",
      duration: 1, // relative unit — all lines get equal scroll share
    });
  });
};