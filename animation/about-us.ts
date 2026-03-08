import { gsap } from "@/lib/gsap";

export const animateAboutUs = (container: HTMLElement) => {
  const q = gsap.utils.selector(container);

  const heading = q(".about-heading");
  const paragraph = q(".about-paragraph");
  const button = q(".about-button");
  const number = q(".about-number");
  const image = q(".about-image");

  gsap.set(image, {
    x: 150,
    opacity: 0,
    filter: "blur(14px)",
  });

  gsap.to(image, {
    scrollTrigger: {
      trigger: image,
      start: "top 40%",
      toggleActions: "play none none reverse",
    },
    x: 0,
    opacity: 1,
    filter: "blur(0px)",
    duration: 1,
    ease: "power3.out",
  });

  gsap.set(heading, {
    y: 80,
    opacity: 0,
    filter: "blur(14px)",
  });

  gsap.to(heading, {
    scrollTrigger: {
      trigger: heading,
      start: "top 85%",
      toggleActions: "play none none reverse",
    },
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    duration: 1.2,
    ease: "power3.out",
  });

  gsap.set(paragraph, {
    y: 60,
    opacity: 0,
    filter: "blur(14px)",
  });

  gsap.to(paragraph, {
    scrollTrigger: {
      trigger: paragraph,
      start: "top 85%",
      toggleActions: "play none none reverse",
    },
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    duration: 1.1,
    ease: "power3.out",
  });

  button.forEach((el: Element) => {
    gsap.set(el, {
      y: 50,
      opacity: 0,
      filter: "blur(14px)",
    });

    gsap.to(el, {
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      duration: 1,
      ease: "power3.out",
    });
  });

  number.forEach((el: Element) => {
    const counter = { value: 0 };

    // ensure it starts visually at 0
    el.textContent = "0";

    gsap.to(counter, {
      value: 15,
      duration: 1.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        toggleActions: "play none none reverse",
        onEnter: () => {
          counter.value = 0;
          el.textContent = "0";
        },
      },
      onUpdate: () => {
        el.textContent = Math.round(counter.value).toString();
      },
      onComplete: () => {
        el.textContent = "15";
      },
    });
  });
};
