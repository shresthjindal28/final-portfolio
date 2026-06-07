"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { FolderGit2, Github, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { useSectionInView } from "@/hooks/use-section-in-view";
import { EASE_PREMIUM } from "@/lib/animations";
import { trackProjectGithubClicked } from "@/lib/analytics";

interface ProjectItem {
  title: string;
  description: string;
  impact: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  slug: string;
}

const otherProjects: ProjectItem[] = [
  {
    title: "Aero3",
    description:
      "An AI clinical copilot designed to reduce healthcare documentation overhead. The system assists healthcare professionals by generating structured SOAP notes from consultations and medical language understanding.",
    impact: "Automates structured SOAP note generation from audio transcripts.",
    technologies: ["Next.js", "FastAPI", "Google Gemini", "Tailwind CSS"],
    githubUrl: "https://github.com/shresthjindal28/aero3",
    liveUrl: "/projects/aero3",
    slug: "aero3",
  },
  {
    title: "SentinelOS",
    description:
      "Offline emergency and disaster response platform designed to operate without internet connectivity. Provides emergency guidance, hazard awareness, first-aid support, and decision assistance.",
    impact: "Provides 100% offline emergency workflows and rule-based decision engines.",
    technologies: ["Next.js", "TypeScript", "LlamaIndex", "Local LLM"],
    githubUrl: "https://github.com/shresthjindal28/SentinelOS",
    liveUrl: "/projects/offline-emergency-response",
    slug: "offline-emergency-response",
  },
  {
    title: "P2P Chat App",
    description:
      "A real-time messaging platform built to explore scalable communication systems, authentication workflows, media sharing, voice notes, and modern backend architecture.",
    impact: "Coordinates real-time message sync with low latency socket connections.",
    technologies: ["React", "Node.js", "WebSockets", "Redis", "OAuth"],
    githubUrl: "https://github.com/shresthjindal28/p2p-chat-app",
    liveUrl: "/projects/p2p-chat-app",
    slug: "p2p-chat-app",
  },
  {
    title: "Komi Extension",
    description:
      "Always-on, wake-word activated, voice + command-palette DevOps copilot for Git & GitHub automation powered by Google Gemini.",
    impact: "Translates natural language intent into structured local Git and remote API commands.",
    technologies: ["VS Code API", "Node.js", "Google Gemini", "Git CLI"],
    githubUrl: "https://github.com/shresthjindal28/Komi-extension",
    liveUrl: "/projects/komi-extension",
    slug: "komi-extension",
  },
];

export default function Projects() {
  const { ref: sectionRef } = useSectionInView({ sectionId: "projects" });
  const shouldReduceMotion = useReducedMotion();

  return (
    <Section id="projects" ref={sectionRef} className="border-t border-border bg-background">
      <Container variant="default">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent font-body-small mb-6">
            <FolderGit2 size={14} />
            <span>Product Archive</span>
          </div>
          <h2 className="font-h2 tracking-tight text-foreground">
            Other Things <br className="md:hidden" />
            <span className="text-primary italic">I&apos;ve Built.</span>
          </h2>
          <p className="text-muted-foreground font-body-large mt-4 max-w-2xl font-light">
            A curated archive of full-stack platforms and tools designed to solve specific 
            data, location-tracking, and system orchestration requirements.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {otherProjects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: shouldReduceMotion ? 0 : index * 0.1, ease: EASE_PREMIUM }}
              className="group flex flex-col justify-between p-6 bg-card border border-border rounded-2xl shadow-sm hover:border-accent/30 transition-all duration-300 relative overflow-hidden"
            >
              {/* Card Hover Spotlight (Bypassed on reduced motion) */}
              {!shouldReduceMotion && (
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(350px_circle_at_var(--mouse-x,_50%)_var(--mouse-y,_50%),_rgba(42,_157,_143,_0.02),_transparent_80%)] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              )}

              <div>
                {/* Header Tag */}
                <span className="text-[10px] font-caption text-accent font-semibold tracking-wider block mb-1">
                  Product Spec
                </span>
                
                {/* Title */}
                <h3 className="font-h3 text-foreground leading-tight mb-3 font-extrabold uppercase">
                  {project.title}
                </h3>
                
                {/* Description */}
                <p className="text-muted-foreground text-xs leading-relaxed font-body-base font-light mb-4 min-h-[40px]">
                  {project.description}
                </p>

                {/* Impact Statement */}
                <div className="bg-secondary/5 p-3 rounded-lg border border-border/40 mb-6 text-left">
                  <span className="text-[9px] font-caption text-accent font-bold block mb-1">
                    System Impact:
                  </span>
                  <p className="text-muted-foreground text-[11px] font-body-base leading-relaxed font-light">
                    {project.impact}
                  </p>
                </div>
              </div>

              {/* Technologies & Links Footer */}
              <div className="space-y-4 border-t border-border/40 pt-4 mt-auto">
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 text-[10px] font-body-small font-semibold bg-secondary/10 border border-border text-foreground/80 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3 pt-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackProjectGithubClicked(project.slug)}
                    className="inline-flex items-center gap-1 text-xs font-body-small font-semibold text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Github size={12} />
                    <span>Repo</span>
                  </a>

                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-body-small font-semibold text-accent hover:text-accent/80 transition-colors ml-auto"
                  >
                    <span>Product Specs</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </Section>
  );
}