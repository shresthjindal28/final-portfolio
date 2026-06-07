"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform, animate, useInView, useReducedMotion } from "framer-motion";
import { Briefcase, Award, ArrowRight, Download, Sparkles, ArrowUpRight, Cpu, FolderGit2 } from "lucide-react";
import { Container } from "@/components/ui/container";
import { EASE_PREMIUM } from "@/lib/animations";
import { useSectionInView } from "@/hooks/use-section-in-view";
import { trackResumeDownloaded } from "@/lib/analytics";
import Link from "next/link";

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

  const headline = "Full Stack Intern at Lawvriksh building document intelligence and AI voice automation.";

  // Stagger variants for grid content elements
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
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
      {/* 1. CSS Mesh Gradient Background */}
      <div className="absolute inset-0 -z-20 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-background" />
        {!shouldReduceMotion && (
          <>
            <div className="absolute top-[-20%] left-[-10%] w-[80vw] h-[80vw] rounded-full bg-accent/5 dark:bg-accent/3 blur-[120px] animate-mesh-drift-1" />
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

      {/* 3. Paper Noise Overlay */}
      <div className="absolute inset-0 -z-10 pointer-events-none opacity-[0.02] dark:opacity-[0.035] bg-[url('/icon0.svg')] bg-repeat bg-[size:400px_400px] mix-blend-overlay" />

      {/* Main Grid Content */}
      <div className="flex-1 flex items-center">
        <Container variant="default">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center"
          >
            {/* Left Column: Hero Copy & Actions */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              {/* Small Credibility Badges */}
              <motion.div variants={itemVariants} className="flex flex-wrap gap-2 mb-6">
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent font-body-small text-[10px] md:text-xs font-semibold uppercase tracking-wider">
                  <Briefcase size={12} />
                  Full Stack Intern @ Lawvriksh
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent font-body-small text-[10px] md:text-xs font-semibold uppercase tracking-wider">
                  <Cpu size={12} />
                  AI Voice Automation
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent font-body-small text-[10px] md:text-xs font-semibold uppercase tracking-wider">
                  <Award size={12} />
                  Open To Opportunities
                </div>
              </motion.div>

              {/* Main Headline — personal, no buzzwords */}
              <motion.h1 
                variants={itemVariants}
                aria-label={headline}
                className="text-2xl md:text-3xl lg:text-4xl leading-[1.2] tracking-tight text-foreground mb-6 font-bold"
              >
                I&apos;m Shresth — a Full Stack Intern at Lawvriksh, building{" "}
                <span className="text-accent">document intelligence</span>{" "}
                and AI voice automation tools.
              </motion.h1>

              {/* Hero Story-driven Paragraph (Reduced size by 25%, highly specific description) */}
              <motion.p
                variants={itemVariants}
                className="font-body-large text-muted-foreground max-w-2xl mb-10 leading-relaxed font-light text-sm md:text-base"
              >
                At Lawvriksh, I integrated Next.js frontend pages with FastAPI backend services. Independently, I build practical tools like <span className="text-foreground font-semibold">VeriVox LedgerDocs</span> to transform PDFs into conversational systems, and <span className="text-foreground font-semibold">Komi Extension</span> to automate Git tasks using speech recognition.
              </motion.p>

              {/* CTA Section */}
              <motion.div
                variants={itemVariants}
                className="flex flex-wrap gap-4 items-center"
              >
                <button
                  onClick={() => scrollTo("experience")}
                  className="group flex items-center gap-2 px-5 py-3.5 bg-primary hover:bg-primary/95 text-primary-foreground font-body-small font-semibold rounded-xl shadow-lg shadow-primary/10 transition-all duration-200 active:scale-[0.98] cursor-pointer"
                >
                  <span>View Experience</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={() => scrollTo("projects")}
                  className="group flex items-center gap-2 px-5 py-3.5 bg-card hover:bg-secondary/40 text-foreground font-body-small font-semibold rounded-xl border border-border transition-all duration-200 active:scale-[0.98] cursor-pointer"
                >
                  <span>View Projects</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform rotate-90" />
                </button>

                <a
                  href="/shresth_jinadl_resume.pdf"
                  download="Shresth_Jindal_Resume.pdf"
                  onClick={() => trackResumeDownloaded()}
                  className="group flex items-center gap-2 px-4 py-2 text-muted-foreground hover:text-foreground font-body-small font-semibold transition-colors border-b-2 border-transparent hover:border-accent"
                >
                  <Download size={15} />
                  <span>Download Resume</span>
                </a>
              </motion.div>
            </div>

            {/* Right Column: Professional Snapshot Card */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-5 flex justify-center lg:justify-end w-full"
            >
              <motion.div
                whileHover={shouldReduceMotion ? {} : { y: -6, scale: 1.01 }}
                transition={{ duration: 0.3, ease: EASE_PREMIUM }}
                className="relative w-full max-w-[420px] rounded-3xl border border-border/80 dark:border-border/25 bg-card/75 dark:bg-card/45 p-6 md:p-8 shadow-2xl backdrop-blur-lg overflow-hidden group flex flex-col gap-6"
              >
                {/* Decorative glow inside card */}
                <div className="absolute -top-12 -right-12 w-36 h-36 rounded-full bg-accent/10 dark:bg-accent/5 blur-3xl pointer-events-none group-hover:bg-accent/15 transition-all duration-500" />
                
                <div className="flex items-center justify-between border-b border-border/40 pb-4">
                  <span className="text-xs font-caption text-muted-foreground uppercase tracking-widest font-semibold flex items-center gap-1.5">
                    <Sparkles size={13} className="text-accent" />
                    Snapshot
                  </span>
                  <span className="relative flex h-2.5 w-2.5">
                    {!shouldReduceMotion && (
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                    )}
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent"></span>
                  </span>
                </div>

                {/* Snapshot Items */}
                <div className="flex flex-col gap-4">
                  {/* Lawvriksh */}
                  <Link href="/experience/lawvriksh" className="flex items-start gap-4 p-3 rounded-2xl hover:bg-secondary/35 dark:hover:bg-secondary/15 transition-all group/item border border-transparent hover:border-border/50">
                    <div className="p-2.5 rounded-xl bg-accent/10 text-accent group-hover/item:scale-105 transition-transform">
                      <Briefcase size={18} />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs font-caption text-muted-foreground font-medium uppercase tracking-wider">Internship</span>
                      <span className="text-sm font-body-base text-foreground font-bold group-hover/item:text-accent transition-colors flex items-center gap-1">
                        Full Stack Intern @ Lawvriksh
                        <ArrowUpRight size={14} className="opacity-0 group-hover/item:opacity-100 group-hover/item:translate-x-0.5 group-hover/item:-translate-y-0.5 transition-all" />
                      </span>
                    </div>
                  </Link>

                  {/* 5 Projects */}
                  <button onClick={() => scrollTo("projects")} className="flex items-start gap-4 p-3 rounded-2xl hover:bg-secondary/35 dark:hover:bg-secondary/15 transition-all group/item text-left border border-transparent hover:border-border/50 w-full">
                    <div className="p-2.5 rounded-xl bg-accent/10 text-accent group-hover/item:scale-105 transition-transform">
                      <FolderGit2 size={18} />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs font-caption text-muted-foreground font-medium uppercase tracking-wider">Engineering</span>
                      <span className="text-sm font-body-base text-foreground font-bold group-hover/item:text-accent transition-colors flex items-center gap-1">
                        5 Major Projects Completed
                        <ArrowUpRight size={14} className="opacity-0 group-hover/item:opacity-100 group-hover/item:translate-x-0.5 group-hover/item:-translate-y-0.5 transition-all" />
                      </span>
                    </div>
                  </button>

                  {/* Flagship Project */}
                  <Link href="/projects/ai-pdf" className="flex items-start gap-4 p-3 rounded-2xl hover:bg-secondary/35 dark:hover:bg-secondary/15 transition-all group/item border border-transparent hover:border-border/50">
                    <div className="p-2.5 rounded-xl bg-accent/10 text-accent group-hover/item:scale-105 transition-transform">
                      <Cpu size={18} />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs font-caption text-muted-foreground font-medium uppercase tracking-wider">Flagship Platform</span>
                      <span className="text-sm font-body-base text-foreground font-bold group-hover/item:text-accent transition-colors flex items-center gap-1">
                        VeriVox LedgerDocs
                        <ArrowUpRight size={14} className="opacity-0 group-hover/item:opacity-100 group-hover/item:translate-x-0.5 group-hover/item:-translate-y-0.5 transition-all" />
                      </span>
                    </div>
                  </Link>

                  {/* Open Opportunities */}
                  <button onClick={() => scrollTo("contact")} className="flex items-start gap-4 p-3 rounded-2xl hover:bg-secondary/35 dark:hover:bg-secondary/15 transition-all group/item text-left border border-transparent hover:border-border/50 w-full">
                    <div className="p-2.5 rounded-xl bg-accent/10 text-accent group-hover/item:scale-105 transition-transform">
                      <Award size={18} />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs font-caption text-muted-foreground font-medium uppercase tracking-wider">Status</span>
                      <span className="text-sm font-body-base text-foreground font-bold group-hover/item:text-accent transition-colors flex items-center gap-1">
                        Open To Opportunities
                        <ArrowUpRight size={14} className="opacity-0 group-hover/item:opacity-100 group-hover/item:translate-x-0.5 group-hover/item:-translate-y-0.5 transition-all" />
                      </span>
                    </div>
                  </button>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </Container>
      </div>

      {/* Trust Strip & Stats Indicator (Directly below Hero, typography reduced by 25%) */}
      <motion.div
        initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8, ease: EASE_PREMIUM }}
        className="w-full border-t border-border/40 mt-20 pt-10"
      >
        <Container variant="default">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {/* Card 1: Internship */}
            <div className="p-5 bg-card/50 dark:bg-card/30 border border-border/50 rounded-2xl flex flex-col justify-between hover:border-accent/30 transition-all duration-300 shadow-sm">
              <span className="text-xl md:text-2xl text-primary dark:text-foreground/90 font-bold leading-none">
                <AnimatedCounter value={1} />
              </span>
              <span className="text-[11px] font-caption text-muted-foreground mt-3 uppercase tracking-wider font-semibold">
                Lawvriksh Internship
              </span>
            </div>

            {/* Card 2: AI & Projects */}
            <div className="p-5 bg-card/50 dark:bg-card/30 border border-border/50 rounded-2xl flex flex-col justify-between hover:border-accent/30 transition-all duration-300 shadow-sm">
              <span className="text-xl md:text-2xl text-primary dark:text-foreground/90 font-bold leading-none flex items-center">
                <AnimatedCounter value={5} />+
              </span>
              <span className="text-[11px] font-caption text-muted-foreground mt-3 uppercase tracking-wider font-semibold">
                AI & Major Projects
              </span>
            </div>

            {/* Card 3: Full Stack */}
            <div className="p-5 bg-card/50 dark:bg-card/30 border border-border/50 rounded-2xl flex flex-col justify-between hover:border-accent/30 transition-all duration-300 shadow-sm">
              <span className="text-xl md:text-2xl text-primary dark:text-foreground/90 font-bold leading-none">
                100%
              </span>
              <span className="text-[11px] font-caption text-muted-foreground mt-3 uppercase tracking-wider font-semibold">
                Full Stack Focus
              </span>
            </div>

            {/* Card 4: Open To Work */}
            <div className="p-5 bg-card/50 dark:bg-card/30 border border-border/50 rounded-2xl flex flex-col justify-between hover:border-accent/30 transition-all duration-300 shadow-sm">
              <span className="text-xl md:text-2xl text-accent font-bold leading-none flex items-center gap-2">
                Active
              </span>
              <span className="text-[11px] font-caption text-muted-foreground mt-3 uppercase tracking-wider font-semibold">
                Open To Work
              </span>
            </div>
          </div>
        </Container>
      </motion.div>
    </section>
  );
}


