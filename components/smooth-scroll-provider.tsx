'use client'
import { type ReactNode } from "react";
import { LenisContext } from "@/context/LenisContext";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import { VideoPlaybackProvider } from "@/context/VideoPlaybackContext";

export default function SmoothScrollProvider({ children }: { children: ReactNode }) {
  const lenisRef = useSmoothScroll();

  return (
    <VideoPlaybackProvider>
      <LenisContext.Provider value={lenisRef}>
        {children}
      </LenisContext.Provider>
    </VideoPlaybackProvider>
  );
}