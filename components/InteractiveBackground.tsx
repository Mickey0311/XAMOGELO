"use client";

import { useEffect, useRef } from "react";

/** Decorative pointer light, with no React renders or continuous animation loop. */
export default function InteractiveBackground() {
  const layer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = layer.current;
    const section = element?.parentElement;
    if (!element || !section) return;
    const motion = window.matchMedia("(prefers-reduced-motion: no-preference) and (hover: hover) and (pointer: fine)");
    let frame = 0;
    const reset = () => {
      cancelAnimationFrame(frame);
      frame = 0;
      element.style.removeProperty("--light-x");
      element.style.removeProperty("--light-y");
    };
    const move = (event: PointerEvent) => {
      if (!motion.matches || event.pointerType === "touch") return;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const bounds = section.getBoundingClientRect();
        element.style.setProperty("--light-x", `${event.clientX - bounds.left}px`);
        element.style.setProperty("--light-y", `${event.clientY - bounds.top}px`);
        frame = 0;
      });
    };
    section.addEventListener("pointermove", move, { passive: true });
    section.addEventListener("pointerleave", reset);
    motion.addEventListener("change", reset);
    return () => {
      reset();
      section.removeEventListener("pointermove", move);
      section.removeEventListener("pointerleave", reset);
      motion.removeEventListener("change", reset);
    };
  }, []);

  return <div ref={layer} className="interactive-background" aria-hidden="true"><span className="ambient-orb ambient-orb-blue" /><span className="ambient-orb ambient-orb-gold" /><span className="ambient-grid" /></div>;
}
