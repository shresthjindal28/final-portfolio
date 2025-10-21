'use client';

import { ReactNode, useEffect, useRef } from 'react';
import Lenis from 'lenis';

interface LenisProviderProps {
  children: ReactNode;
}

export default function LenisProvider({ children }: LenisProviderProps) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      // Skip initializing Lenis for users who prefer reduced motion
      const handleScrollTo = (event: CustomEvent) => {
        const target = event.detail.target as string;
        const element = document.querySelector(target) as HTMLElement | null;
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      };

      window.addEventListener('scrollTo', handleScrollTo as EventListener);
      return () => {
        window.removeEventListener('scrollTo', handleScrollTo as EventListener);
      };
    }

    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    lenisRef.current = lenis;

    // Animation frame function
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Add global scroll-to functionality
    const scrollToElement = (target: string) => {
      const element = document.querySelector(target) as HTMLElement | null;
      if (element) {
        if (lenisRef.current) {
          lenisRef.current.scrollTo(element, {
            offset: -80, // Account for fixed header
            duration: 1.5,
          });
        } else {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    };

    // Listen for custom scroll events
    const handleScrollTo = (event: CustomEvent) => {
      scrollToElement(event.detail.target);
    };

    window.addEventListener('scrollTo', handleScrollTo as EventListener);

    // Cleanup function
    return () => {
      window.removeEventListener('scrollTo', handleScrollTo as EventListener);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  return <>{children}</>;
}
