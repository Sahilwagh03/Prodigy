import { gsap } from "@/lib/gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const animateAboutServices = (container: HTMLElement | null) => {
  if (!container) return;

  const section = container;
  const aboutServicesContainer = container.querySelector(
    ".about-services-container",
  );
  const bgCircle = container.querySelector(".bg-circle");
  const crystal = container.querySelector(".crystal-img");
  const services = container.querySelectorAll(".service-item");

  if (!bgCircle || !crystal || !aboutServicesContainer) return;

  const size = Math.max(window.innerWidth, window.innerHeight);

  gsap.set(bgCircle, {
    width: size,
    height: size,
    xPercent: -50,
    yPercent: -50,
    scale: 0,
  });

  // place services around circle
  const radius = 280;

  services.forEach((el, i) => {
    const angle = (i / services.length) * Math.PI * 2;

    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;

    gsap.set(el, {
      x,
      y,
      opacity: 0,
      scale: 0.8,
    });
  });

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: aboutServicesContainer,
      start: "top top",
      end: "+=200%",
      scrub: 1,
      pin: section,
      anticipatePin: 1,
      invalidateOnRefresh: true,
    },
  });

  // expand circle
  tl.to(bgCircle, {
    scale: 3,
    ease: "none",
  });

  // blur crystal
  tl.to(
    crystal,
    {
      filter: "blur(8px)",
      scale: 0.75,
      ease: "power1.out",
    },
    0,
  );

  // reveal services
  tl.to(
    services,
    {
      opacity: 1,
      scale: 1,
      stagger: 0.1,
      ease: "power2.out",
    },
    0.3,
  );

  tl.to(
    ".services-wrapper",
    {
      rotateX: "140deg",
      scrollTrigger: {
        trigger: aboutServicesContainer,
        start: "top top",
        end: "+=300%",
        scrub: 1,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    },
    0.3,
  );

  tl.to(
    crystal,
    {
      filter: "blur(0px)",
      scale: 1,
      ease: "power1.out",
    },
  );
};
