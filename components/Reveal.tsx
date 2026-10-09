"use client";

import { useEffect } from "react";

// Fades and lifts elements marked with data-reveal into place as they scroll into view.
// Content stays fully visible without JavaScript, and for visitors who prefer reduced motion.
export default function Reveal() {
  useEffect(() => {
    const items = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    if (items.length === 0) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) return;

    // Stagger siblings: each marked element waits a little longer than the one before it.
    for (const el of items) {
      const siblings = Array.from(el.parentElement?.children ?? []).filter((c) => c.hasAttribute("data-reveal"));
      const index = siblings.indexOf(el);
      if (index > 0) el.style.setProperty("--reveal-delay", `${Math.min(index, 6) * 150}ms`);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-revealed");
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.12 },
    );

    for (const el of items) {
      // Anything already above the fold or scrolled past shows at once, without animating.
      if (el.getBoundingClientRect().top < window.innerHeight * 0.9) el.classList.add("is-revealed");
      else observer.observe(el);
    }
    document.documentElement.classList.add("reveal-ready");

    return () => observer.disconnect();
  }, []);

  return null;
}
