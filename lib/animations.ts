import { Variants } from "framer-motion";

// Standard ease curves for premium feel (Linear-like / Apple-like)
export const EASE_PREMIUM = [0.16, 1, 0.3, 1] as const; // custom cubic-bezier
export const EASE_OUT = [0.25, 0.1, 0.25, 1] as const;

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 15 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: EASE_PREMIUM,
    },
  },
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: typeof delay === "number" ? delay : 0,
      ease: EASE_PREMIUM,
    },
  }),
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: (delay = 0) => ({
    opacity: 1,
    transition: {
      duration: 0.8,
      delay: typeof delay === "number" ? delay : 0,
      ease: EASE_OUT,
    },
  }),
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  show: (delay = 0) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.7,
      delay: typeof delay === "number" ? delay : 0,
      ease: EASE_PREMIUM,
    },
  }),
};

export const revealMask: Variants = {
  hidden: { clipPath: "inset(0 100% 0 0)" },
  show: (delay = 0) => ({
    clipPath: "inset(0 0% 0 0)",
    transition: {
      duration: 1.1,
      delay: typeof delay === "number" ? delay : 0,
      ease: EASE_PREMIUM,
    },
  }),
};

export const pageTransition: Variants = {
  initial: {
    opacity: 0,
    y: 10,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: EASE_PREMIUM,
    },
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: {
      duration: 0.3,
      ease: EASE_OUT,
    },
  },
};
