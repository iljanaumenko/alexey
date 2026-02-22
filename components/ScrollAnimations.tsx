"use client";

import { useEffect, useRef } from "react";

export default function ScrollAnimations({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("entered");
          }
        });
      },
      { root: null, rootMargin: "0px", threshold: 0.1 }
    );

    const selectors = [".work-link", ".enter", ".enter-title"];
    const elements: Element[] = [];
    selectors.forEach((sel) => {
      container.querySelectorAll(sel).forEach((el) => {
        elements.push(el);
        observer.observe(el);
      });
    });

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, [children]);

  return <div ref={containerRef}>{children}</div>;
}
