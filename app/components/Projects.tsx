"use client";

import Image from "next/image";
import { ExternalLink, Github, FolderGit2, Sparkles } from "lucide-react";
import Script from "next/script";
import { useRef, useEffect } from "react";
import type React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

// --- GSAP Imports ---
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import type { Project } from "../../lib/projects-data";
import { projects } from "../../lib/projects-data";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  // --- Refs for GSAP ---
  // Ref for the main section container (the "trigger" and "pin")
  const sectionRef = useRef<HTMLElement | null>(null);
  // Ref for the horizontally scrolling track
  const trackRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;

    // Ensure elements are mounted
    if (!section || !track) return;

    // --- GSAP ScrollTrigger Animation ---
    // This animation will move the `track` horizontally
    // as the user scrolls vertically.

    // Calculate the total distance the track needs to move
    // This is the track's total width minus the width of the viewport
    const trackScrollWidth = () => track.scrollWidth - section.clientWidth;

    // Create the GSAP tween and ScrollTrigger
    const tween = gsap.to(track, {
      // Animate the 'x' property to move the track horizontally
      // We use a function-based value to ensure it's re-calculated on resize
      x: () => `-${trackScrollWidth()}px`,
      ease: "none", // No easing for a 1:1 scroll-linked animation
      scrollTrigger: {
        trigger: section, // The element that triggers the animation
        pin: true, // Pin the `section` element while the animation is active
        scrub: 1, // Smoothly link animation progress to scroll (1-second "catch-up")
        start: "top top", // Start when the top of the section hits the top of the viewport
        end: () => `+=${trackScrollWidth()}`, // End after scrolling the calculated distance
        // markers: true, // Uncomment for debugging
      },
    });

    // --- Cleanup ---
    return () => {
      tween.kill(); // Kill the tween
      // Kill any ScrollTriggers associated with this section
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger === section) {
          st.kill();
        }
      });
    };
  }, []); // Run this effect only once on mount

  return (
    // The `sectionRef` is our main trigger and will be pinned.
    // `overflow-hidden` is crucial to hide the cards outside the viewport.
    <section
      id="projects"
      ref={sectionRef}
      className="py-10 px-0 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-400/5 border border-emerald-400/20 text-emerald-400 text-[10px] font-black tracking-[0.3em] uppercase mb-8">
            <FolderGit2 className="w-4 h-4" />
            Portfolio
          </div>
          <h2 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter italic">
            FEATURED<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-100">PROJECTS</span>
          </h2>
          <div className="w-24 h-1 bg-emerald-400 mx-auto rounded-full"></div>
        </div>
        <div 
          className="absolute inset-x-0 bottom-0 py-8 bg-gradient-to-b from-transparent to-background/80 flex justify-center backdrop-blur-sm z-20"
        >
          <p className="text-xs font-black text-emerald-400 tracking-[0.4em] uppercase animate-pulse">
            Scroll Down to View Gallery
          </p>
        </div>
      </div>

      {/* This 'track' div is wider than the screen and holds the cards.
        GSAP will animate its 'x' transform.
        `w-max-content` tells it to be as wide as its children.
      */}
      <div
        ref={trackRef}
        className="flex gap-8 items-center h-auto px-4 sm:px-6"
        style={{ width: "max-content" }}
      >
        {projects.slice(0, 6).map((project: Project) => (
          // This wrapper div defines the size of each card in the horizontal track
          // `shrink-0` is essential to prevent flex items from shrinking
          <div
            key={project.title}
            className="w-[80vw] sm:w-[45vw] lg:w-[480px] shrink-0"
          >
            <InteractiveProjectCard project={project} />
          </div>
        ))}
      </div>

      {/* This content is outside the pinning/scrolling "track"
        so it will appear normally after the horizontal scroll is finished.
        We add `position: relative` and `z-index: 10` to ensure it
        appears *after* the pinned section (which is also `relative`).
      */}
      <div className="mt-16 flex justify-center relative z-10">
        <Button asChild>
          <Link href="/project" aria-label="See all projects">
            See more
          </Link>
        </Button>
      </div>

      {/* Structured data (no changes) */}
      <ProjectsStructuredData />
    </section>
  );
}

// Structured Data: ItemList for projects
// (This component is unchanged)
export function ProjectsStructuredData() {
  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": projects.slice(0, 4).map((p: Project, index: number) => ({
      "@type": "ListItem",
      "position": index + 1,
      "url": p.liveUrl,
      "name": p.title,
      "description": p.description,
    })),
  };
  return (
    <Script
      id="projects-structured-data"
      type="application/ld+json"
      strategy="afterInteractive"
    >
      {JSON.stringify(itemList)}
    </Script>
  );
}

// InteractiveProjectCard
// (This component is unchanged)
function InteractiveProjectCard({ project }: { project: Project }) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);

  const updateStyles = (x: number, y: number, rect: DOMRect) => {
    const el = cardRef.current;
    if (!el) return;

    const px = x / rect.width;
    const py = y / rect.height;

    const rx = (py - 0.5) * 12; // tilt range on X
    const ry = (0.5 - px) * 12; // tilt range on Y

    el.style.setProperty("--rx", `${rx}deg`);
    el.style.setProperty("--ry", `${ry}deg`);
    el.style.setProperty("--mx", `${x}px`);
    el.style.setProperty("--my", `${y}px`);

    el.style.transform =
      "perspective(900px) rotateX(var(--rx)) rotateY(var(--ry))";
  };

  const handlePointerMove: React.PointerEventHandler<HTMLDivElement> = (e) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => updateStyles(x, y, rect));
  };

  const handlePointerLeave = () => {
    const el = cardRef.current;
    if (!el) return;
    el.style.setProperty("--rx", `0deg`);
    el.style.setProperty("--ry", `0deg`);
    el.style.setProperty("--mx", `50%`);
    el.style.setProperty("--my", `50%`);
    el.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg)";
  };

  useEffect(() => {
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const styleVars: React.CSSProperties &
    Record<"--rx" | "--ry" | "--mx" | "--my", string> = {
    transform: "perspective(900px) rotateX(0deg) rotateY(0deg)",
    "--rx": "0deg",
    "--ry": "0deg",
    "--mx": "50%",
    "--my": "50%",
  };

  return (
    <div
      ref={cardRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className="group relative rounded-lg overflow-hidden bg-[#0b0b0b] border border-border/40 transition-[box-shadow,border-color] duration-300 hover:border-emerald-400/50 shadow-[0_12px_30px_-10px_rgba(16,185,129,0.35)] hover:shadow-[0_25px_60px_-15px_rgba(16,185,129,0.6)] [transform-style:preserve-3d] transform-gpu will-change-transform"
      style={styleVars}
    >
      {/* Emerald glow that traces the mouse */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background:
            "radial-gradient(600px circle at var(--mx) var(--my), rgba(16,185,129,0.12), transparent 40%)",
        }}
      />

      {/* Project image (raised for 3D parallax) */}
      <div
        className="aspect-[21/9] relative"
        style={{ transform: "translateZ(30px)" }}
      >
        <Image
          src={project.image}
          alt={`${project.title} – portfolio project by freelance web developer`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* soft inner highlight towards cursor */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
          style={{
            background:
              "radial-gradient(400px circle at var(--mx) var(--my), rgba(16,185,129,0.08), transparent 45%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="p-3" style={{ transform: "translateZ(1px)" }}>
        <h3 className="text-base font-semibold text-white mb-1">
          {project.title}
        </h3>
        <p className="text-xs text-gray-400 mb-2 line-clamp-1">
          {project.description}
        </p>

        {/* Links */}
        <div className="flex items-center gap-3 text-xs">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-emerald-400 hover:underline hover:text-emerald-300"
          >
            <ExternalLink className="w-3 h-3" /> Live
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-emerald-400 hover:underline hover:text-emerald-300"
          >
            <Github className="w-3 h-3" /> Repo
          </a>
        </div>
      </div>
    </div>
  );
}