'use client'
import { createContext, useContext, type RefObject } from "react";
import type Lenis from "lenis";

type LenisContextValue = RefObject<Lenis | null> | null;

export const LenisContext = createContext<LenisContextValue>(null);

export function useLenis(): RefObject<Lenis | null> {
  const ctx = useContext(LenisContext);
  if (!ctx) throw new Error("useLenis must be used inside <LenisProvider>");
  return ctx;
}

