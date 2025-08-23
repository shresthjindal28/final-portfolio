'use client';

import { ReactNode, useEffect, useRef } from 'react';
import Lenis from 'lenis';

interface LenisProviderProps {
  children: ReactNode;
}

export default function LenisProvider({ children }: LenisProviderProps) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
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
      const element = document.querySelector(target) as HTMLElement;
      if (element) {
        lenis.scrollTo(element, {
          offset: -80, // Account for fixed header
          duration: 1.5,
        });
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
