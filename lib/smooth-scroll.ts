'use client';

// Utility function to trigger smooth scroll to a section
export const scrollToSection = (sectionId: string) => {
  const event = new CustomEvent('scrollTo', {
    detail: { target: `#${sectionId}` }
  });
  window.dispatchEvent(event);
};

// Hook for using smooth scroll
export const useSmoothScroll = () => {
  return {
    scrollToSection,
  };
};
