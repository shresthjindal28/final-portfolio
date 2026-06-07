"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform, animate, useInView, useReducedMotion } from "framer-motion";
import { Briefcase, Award, Code, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { EASE_PREMIUM } from "@/lib/animations";
import { useSectionInView } from "@/hooks/use-section-in-view";

// Reusable animated counter component with reduced motion support
function AnimatedCounter({ value, duration = 2 }: { value: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) {
      setCount(value);
      return;
    }
    if (isInView) {
      const controls = animate(0, value, {
        duration,
        ease: "easeOut",
        onUpdate: (latest) => setCount(Math.floor(latest)),
      });
      return () => controls.stop();
    }
  }, [value, duration, isInView, shouldReduceMotion]);

  return <span ref={ref}>{shouldReduceMotion ? value : count}</span>;
}

export default function Hero() {
  const { ref: sectionRef } = useSectionInView({ sectionId: "hero" });
  const shouldReduceMotion = useReducedMotion();
  
  // Spotlight tracking variables
  const containerRef = useRef<HTMLElement | null>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for cursor spotlight movement
  const spotlightX = useSpring(mouseX, { damping: 50, stiffness: 300 });
  const spotlightY = useSpring(mouseY, { damping: 50, stiffness: 300 });

  // Spotlight background gradients (bypass on reduced motion)
  const spotlightBg = useTransform(
    [spotlightX, spotlightY],
    ([x, y]) => shouldReduceMotion
      ? "none"
      : `radial-gradient(400px circle at ${x}px ${y}px, var(--spotlight-color), transparent 80%)`
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion) return;
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const name = "Shresth Jindal";
  const subtitleWords = "Crafting Scalable Full Stack Web Experiences".split(" ");

  // Stagger variants
  const letterVariants = {
    hidden: { y: 60, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: EASE_PREMIUM,
      },
    },
  };

  const wordVariants = {
    hidden: { y: 20, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: EASE_PREMIUM,
      },
    },
  };

  return (
    <section
      id="hero"
      ref={(el) => {
        sectionRef.current = el;
        containerRef.current = el;
      }}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex flex-col justify-between pt-32 pb-12 overflow-hidden bg-background text-foreground"
      style={{
        ["--spotlight-color" as string]: "rgba(42, 157, 143, 0.08)",
      }}
    >
      {/* 1. Option A Background: CSS Mesh Gradient (bypass on reduced motion) */}
      <div className="absolute inset-0 -z-20 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-background" />
        {!shouldReduceMotion && (
          <>
            {/* Drifting radial gradient 1 */}
            <div className="absolute top-[-20%] left-[-10%] w-[80vw] h-[80vw] rounded-full bg-accent/5 dark:bg-accent/3 blur-[120px] animate-mesh-drift-1" />
            {/* Drifting radial gradient 2 */}
            <div className="absolute bottom-[-10%] right-[-10%] w-[70vw] h-[70vw] rounded-full bg-primary/5 dark:bg-primary/5 blur-[120px] animate-mesh-drift-2" />
          </>
        )}
      </div>

      {/* 2. Cursor follow spotlight layer */}
      {!shouldReduceMotion && (
        <motion.div
          className="absolute inset-0 -z-10 pointer-events-none"
          style={{ background: spotlightBg }}
        />
      )}

      {/* 3. Tactical Paper Noise Filter Overlay */}
      <div className="absolute inset-0 -z-10 pointer-events-none opacity-[0.02] dark:opacity-[0.035] bg-[url('/icon0.svg')] bg-repeat bg-[size:400px_400px] mix-blend-overlay" />

      {/* Main Content Area */}
      <div className="flex-1 flex items-center">
        <Container variant="default">
          <div className="max-w-4xl">
            {/* Availability Badge */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: EASE_PREMIUM }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent font-body-small mb-8"
            >
              <span className="relative flex h-2 w-2">
                {!shouldReduceMotion && (
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                )}
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              <span>Available for Projects</span>
            </motion.div>

            {/* Character-by-character Heading Reveal */}
            <h1 
              aria-label={name}
              className="font-display leading-[0.95] uppercase tracking-tighter text-foreground mb-6 select-none"
            >
              {shouldReduceMotion ? (
                <span>{name}</span>
              ) : (
                <motion.span
                  aria-hidden="true"
                  initial="hidden"
                  animate="show"
                  variants={{
                    show: {
                      transition: {
                        staggerChildren: 0.04,
                      },
                    },
                  }}
                  className="flex flex-wrap overflow-hidden"
                >
                  {name.split(" ").map((word, wordIdx) => (
                    <span key={wordIdx} className="flex overflow-hidden mr-4">
                      {word.split("").map((char, charIdx) => (
                        <motion.span
                          key={charIdx}
                          variants={letterVariants}
                          className="inline-block origin-bottom"
                        >
                          {char}
                        </motion.span>
                      ))}
                    </span>
                  ))}
                </motion.span>
              )}
            </h1>

            {/* Word-by-word Subtitle Reveal */}
            <div className="font-h3 text-primary/80 dark:text-foreground/90 font-medium tracking-tight mb-8">
              {shouldReduceMotion ? (
                <span>Crafting Scalable Full Stack Web Experiences</span>
              ) : (
                <motion.div
                  initial="hidden"
                  animate="show"
                  variants={{
                    show: {
                      transition: {
                        staggerChildren: 0.08,
                        delayChildren: 0.5,
                      },
                    },
                  }}
                  className="flex flex-wrap gap-x-2"
                >
                  {subtitleWords.map((word, idx) => (
                    <span key={idx} className="overflow-hidden inline-block">
                      <motion.span variants={wordVariants} className="inline-block">
                        {word}
                      </motion.span>
                    </span>
                  ))}
                </motion.div>
              )}
            </div>

            {/* Description Fade Mask */}
            <motion.p
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9, ease: EASE_PREMIUM }}
              className="font-body-large text-muted-foreground max-w-2xl mb-10 leading-relaxed font-light"
            >
              I partner with startups and founders to design and build high-performance,
              <span className="text-foreground font-medium"> SEO-first applications</span> and
              <span className="text-foreground font-medium"> scalable architectures</span> using React,
              Next.js, and TypeScript. Focused on craftsmanship, performance, and impact.
            </motion.p>

            {/* Credibility Indicators Strip */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="flex flex-wrap gap-y-3 gap-x-8 text-sm text-muted-foreground font-body-small mb-12 border-t border-border/40 pt-6 max-w-3xl"
            >
              <div className="flex items-center gap-2">
                <Briefcase size={16} className="text-accent" />
                <span>Full Stack Intern @ Lawvriksh</span>
              </div>
              <div className="flex items-center gap-2">
                <Code size={16} className="text-accent" />
                <span>Full Stack Specialist</span>
              </div>
              <div className="flex items-center gap-2">
                <Award size={16} className="text-accent" />
                <span>Open to Opportunities</span>
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2, ease: EASE_PREMIUM }}
              className="flex flex-wrap gap-4"
            >
              <button
                onClick={() => scrollTo("experience")}
                className="group flex items-center gap-2 px-6 py-3.5 bg-primary hover:bg-primary/95 text-primary-foreground font-body-small rounded-xl shadow-lg shadow-primary/10 transition-all duration-200 active:scale-[0.98]"
              >
                <span>Explore Experience</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => scrollTo("contact")}
                className="px-6 py-3.5 bg-card hover:bg-secondary/20 text-foreground font-body-small rounded-xl border border-border transition-all duration-200 active:scale-[0.98]"
              >
                Let&apos;s Build Something
              </button>
            </motion.div>
          </div>
        </Container>
      </div>

      {/* Trust Strip & Stats Indicator (Directly below Hero) */}
      <motion.div
        initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.4 }}
        className="w-full border-t border-border/40 mt-16 pt-8"
      >
        <Container variant="default">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col">
              <span className="font-display text-4xl text-primary leading-none">
                <AnimatedCounter value={1} />
              </span>
              <span className="text-xs font-caption text-muted-foreground mt-2">
                Internship Experience
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-display text-4xl text-primary leading-none flex items-center">
                <AnimatedCounter value={5} />+
              </span>
              <span className="text-xs font-caption text-muted-foreground mt-2">
                Major Projects Completed
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-display text-4xl text-primary leading-none flex items-center">
                <AnimatedCounter value={10} />+
              </span>
              <span className="text-xs font-caption text-muted-foreground mt-2">
                Core Technologies
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-display text-4xl text-primary leading-none flex items-center">
                <AnimatedCounter value={100} />%
              </span>
              <span className="text-xs font-caption text-muted-foreground mt-2">
                Focus on Craftsmanship
              </span>
            </div>
          </div>
        </Container>
      </motion.div>
    </section>
  );
}
