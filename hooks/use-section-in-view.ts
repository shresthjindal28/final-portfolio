"use client";

import { useEffect, useRef, useState } from "react";
import { track } from "@vercel/analytics";

interface UseSectionInViewOptions {
  threshold?: number | number[];
  rootMargin?: string;
  sectionId: string;
}

export function useSectionInView({
  threshold = 0.2, // 20% in view triggers it
  rootMargin = "-20% 0px -50% 0px", // custom vertical window tracking offset
  sectionId,
}: UseSectionInViewOptions) {
  const ref = useRef<HTMLElement | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            
            // Track view event in Vercel Analytics
            try {
              track("section_view", { sectionId });
            } catch (err) {
              // Ignore analytics block/load errors
            }

            // Track view event in Google Analytics
            if (typeof window !== "undefined" && (window as any).gtag) {
              (window as any).gtag("event", "section_view", {
                section_id: sectionId,
              });
            }

            // Dispatch custom event to let components (like Navbar) know this section is active
            window.dispatchEvent(
              new CustomEvent("active-section-change", {
                detail: { sectionId },
              })
            );
          } else {
            setIsInView(false);
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [sectionId, threshold, rootMargin]);

  return { ref, isInView };
}
