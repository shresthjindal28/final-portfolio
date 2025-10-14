"use client";

import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";
import Script from "next/script";
import { useRef, useEffect } from "react";
import type React from "react";

interface Project {
  title: string;
  description: string;
  image: string;
  liveUrl: string;
  githubUrl: string;
}

const projects: Project[] = [
  {
    title: "Devmaan",
    description:
      "A full stack web application built during internship at Devmaan. Focused on developing both frontend and backend features with modern web technologies.",
    image: "/devmaan.png",
    liveUrl: "https://devmaan.in",
    githubUrl: "/privatePage",
  },
  {
    title: "Chating Web",
    description:
      "A real-time chat application with Firebase integration, offering seamless communication experience.",
    image: "/chat.png",
    liveUrl: "https://chat-app-0809.netlify.app/",
    githubUrl: "https://github.com/shresthjindal28/Chat-app.git",
  },
  {
    title: "Gradient Library",
    description:
      "A comprehensive UI library with beautiful gradient collections and modern design components.",
    image: "/gradora.png",
    liveUrl: "https://gradora.vercel.app/",
    githubUrl: "https://github.com/shresthjindal28/gradient-library.git",
  },
  {
    title: "Note App",
    description:
      "A powerful note-taking application with authentication and cloud storage capabilities.",
    image: "/noteforge.png",
    liveUrl: "https://note-app-jet-one.vercel.app/",
    githubUrl: "https://github.com/shresthjindal28/Note-app",
  },
  {
    title: "Twitter Status Card",
    description:
      "Generate beautiful Twitter status cards with custom styling and real-time preview.",
    image: "/twitter-card.png",
    liveUrl: "https://twitter-card.shresthjindal.com",
    githubUrl: "https://github.com/shresthjindal28/twitter-card-generator",
  },
  {
    title: "Dandoo",
    description:
      "A cool and minimal website for blogging, distraction free. Built using MERN stack with JWT authentication. Also has a cool landing page.",
    image: "/dandoo.png",
    liveUrl: "https://dandooo.netlify.app/",
    githubUrl: "https://github.com/shaikhFaris",
  },
  {
    title: "Tailum",
    description:
      "Organic oil company website built as a full-stack project using Next.js, Tailwind CSS, and GSAP. Implemented on-page SEO optimization to improve visibility.",
    image: "/tailum.png",
    liveUrl: "https://www.thetailum.com/",
    githubUrl: "/privatePage",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-10 px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
          My Projects
        </h2>
        <div className="w-20 h-1 bg-emerald-400 mx-auto mb-4"></div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-10 max-w-6xl mx-auto px-4 sm:px-6">
        {projects.map((project) => (
          <InteractiveProjectCard key={project.title} project={project} />
        ))}
      </div>

      {/* Structured data */}
      <ProjectsStructuredData />
    </section>
  );
}

// Structured Data: ItemList for projects
export function ProjectsStructuredData() {
  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": projects.map((p, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "url": p.liveUrl,
      "name": p.title,
      "description": p.description,
    })),
  };
  return (
    <Script id="projects-structured-data" type="application/ld+json" strategy="afterInteractive">
      {JSON.stringify(itemList)}
    </Script>
  );
}

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

    el.style.transform = "perspective(900px) rotateX(var(--rx)) rotateY(var(--ry))";
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

  const styleVars: React.CSSProperties & Record<"--rx" | "--ry" | "--mx" | "--my", string> = {
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
      <div className="aspect-[21/9] relative" style={{ transform: "translateZ(30px)" }}>
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
