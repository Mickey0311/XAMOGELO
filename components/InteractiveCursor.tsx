"use client";

import { useEffect, useRef } from "react";

/** A non-blocking accent around the native cursor, on fine pointers only. */
export default function InteractiveCursor() {
  const cursor = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = cursor.current;
    if (!element) return;
    const enabled = window.matchMedia("(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)");
    let frame = 0;
    const hide = () => {
      cancelAnimationFrame(frame);
      element.dataset.visible = "false";
      element.dataset.pressed = "false";
    };
    const move = (event: PointerEvent) => {
      if (!enabled.matches || event.pointerType === "touch") { hide(); return; }
      const target = event.target instanceof Element ? event.target : null;
      if (target?.closest("input, textarea, select, [contenteditable='true']")) { hide(); return; }
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        element.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;
        element.dataset.visible = "true";
        element.dataset.active = String(Boolean(target?.closest("a, button, summary, [role='button']")));
      });
    };
    const down = () => { element.dataset.pressed = "true"; };
    const up = () => { element.dataset.pressed = "false"; };
    const onVisibility = () => { if (document.hidden) hide(); };
    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("pointerdown", down, { passive: true });
    window.addEventListener("pointerup", up, { passive: true });
    window.addEventListener("blur", hide);
    window.addEventListener("keydown", hide);
    document.documentElement.addEventListener("pointerleave", hide);
    document.addEventListener("visibilitychange", onVisibility);
    enabled.addEventListener("change", hide);
    return () => {
      hide();
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerdown", down);
      window.removeEventListener("pointerup", up);
      window.removeEventListener("blur", hide);
      window.removeEventListener("keydown", hide);
      document.documentElement.removeEventListener("pointerleave", hide);
      document.removeEventListener("visibilitychange", onVisibility);
      enabled.removeEventListener("change", hide);
    };
  }, []);

  return <div ref={cursor} className="interactive-cursor" aria-hidden="true"><span /></div>;
}
