import { useEffect, useRef } from "react";
import Lenis, { type LenisOptions } from "lenis";
import { gsap, ScrollTrigger } from "@/lib/gsap";

export function useSmoothScroll(options: LenisOptions = {}) {
  const lenisRef = useRef<Lenis | null>(null);
  const optionsRef = useRef<LenisOptions>(options);

  useEffect(() => {
    optionsRef.current = options;
  });

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.05, // ← lower = smoother (default is 0.1)
      smoothWheel: true,
      ...options,
    });

    lenisRef.current = lenis;

    lenis.on("scroll", ScrollTrigger.update);

    const tick = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(tick);
      lenis.destroy();
    };
  }, []);

  return lenisRef;
}
