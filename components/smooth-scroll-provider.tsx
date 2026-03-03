'use client'
import { type ReactNode } from "react";
import { LenisContext } from "@/context/LenisContext";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";

export default function SmoothScrollProvider({ children }: { children: ReactNode }) {
  const lenisRef = useSmoothScroll();

  return (
    <LenisContext.Provider value={lenisRef}>
      {children}
    </LenisContext.Provider>
  );
}