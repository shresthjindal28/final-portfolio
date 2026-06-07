"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Zap, ChevronDown, Check } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { useSectionInView } from "@/hooks/use-section-in-view";
import { EASE_PREMIUM } from "@/lib/animations";

interface TechItem {
  name: string;
  description: string;
  projectsUsedIn: string[];
}

interface SkillCategory {
  title: string;
  items: TechItem[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    items: [
      {
        name: "React",
        description: "Primary client-side library for building dynamic component states.",
        projectsUsedIn: ["AI PDF Assistant", "Employee Management System", "Uber Clone", "Google Drive Clone"],
      },
      {
        name: "Next.js",
        description: "Meta-framework for Server Components, routing, sitemaps, and optimized assets.",
        projectsUsedIn: ["AI PDF Assistant", "Google Drive Clone", "LawVriksh Internship"],
      },
      {
        name: "TypeScript",
        description: "Strict typing for type safety, autocomplete, and cleaner code structures.",
        projectsUsedIn: ["AI PDF Assistant", "Uber Clone", "Offline Emergency Response"],
      },
      {
        name: "Tailwind CSS",
        description: "Utility-first CSS framework for rapid responsive design execution.",
        projectsUsedIn: ["All Projects"],
      },
    ],
  },
  {
    title: "Backend",
    items: [
      {
        name: "FastAPI",
        description: "High-performance Python ASGI API framework for RAG pipeline streaming.",
        projectsUsedIn: ["AI PDF Assistant", "Offline Emergency Response"],
      },
      {
        name: "Node.js",
        description: "V8 JavaScript runtime used for building scalable networking layers.",
        projectsUsedIn: ["Employee Management System", "Google Drive Clone"],
      },
      {
        name: "Express.js",
        description: "Minimalist Node.js routing library for handling REST payloads and middleware.",
        projectsUsedIn: ["Employee Management System", "Google Drive Clone"],
      },
    ],
  },
  {
    title: "Database",
    items: [
      {
        name: "MongoDB",
        description: "NoSQL document store used for flexible legal metadata and file models.",
        projectsUsedIn: ["Employee Management System", "Google Drive Clone", "Real-Time P2P Chat"],
      },
    ],
  },
  {
    title: "Tools",
    items: [
      {
        name: "Git & GitHub",
        description: "Version control and team pull request review coordination.",
        projectsUsedIn: ["All Projects & Internships"],
      },
      {
        name: "Postman",
        description: "API testing environment used to mock and validate response structures.",
        projectsUsedIn: ["All backend integration workflows"],
      },
    ],
  },
];

export default function Skills() {
  const { ref: sectionRef } = useSectionInView({ sectionId: "skills" });
  const shouldReduceMotion = useReducedMotion();
  const [selectedTech, setSelectedTech] = useState<string | null>(null);

  const toggleTech = (name: string) => {
    setSelectedTech(selectedTech === name ? null : name);
  };

  return (
    <Section id="skills" ref={sectionRef} className="border-t border-border bg-background">
      <Container variant="default">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent font-body-small mb-6">
            <Zap size={14} />
            <span>Core Stacks</span>
          </div>
          <h2 className="font-h1 uppercase tracking-tight text-foreground">
            What I Work <br className="md:hidden" />
            <span className="text-primary italic">With.</span>
          </h2>
          <p className="text-muted-foreground font-body-large mt-4 max-w-2xl font-light">
            An organized look at the languages, frameworks, and developer tools I deploy to build 
            production applications, with details on where they are used.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="p-6 md:p-8 bg-card border border-border rounded-2xl shadow-sm flex flex-col"
            >
              <h3 className="font-h3 text-primary mb-6 border-b border-border pb-3 uppercase tracking-tight">
                {category.title}
              </h3>

              <div className="space-y-4">
                {category.items.map((tech) => {
                  const isSelected = selectedTech === tech.name;

                  return (
                    <div
                      key={tech.name}
                      className="border border-border rounded-xl overflow-hidden transition-all duration-300 bg-secondary/5 hover:border-accent/30"
                    >
                      {/* Trigger Header */}
                      <button
                        onClick={() => toggleTech(tech.name)}
                        className="w-full flex items-center justify-between p-4 text-left font-body-large font-bold text-foreground focus:outline-none"
                      >
                        <span className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                          {tech.name}
                        </span>
                        <motion.div
                          animate={{ rotate: isSelected ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ChevronDown size={16} className="text-muted-foreground" />
                        </motion.div>
                      </button>

                      {/* Expandable Content */}
                      <AnimatePresence initial={false}>
                        {isSelected && (
                          <motion.div
                            initial={shouldReduceMotion ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: EASE_PREMIUM }}
                          >
                            <div className="p-4 pt-0 border-t border-border/40 text-xs font-body-base text-muted-foreground space-y-3">
                              <p className="leading-relaxed font-light">{tech.description}</p>
                              
                              <div className="flex flex-col gap-1 border-t border-border/20 pt-3">
                                <span className="text-[10px] uppercase font-caption text-accent font-semibold">
                                  Applied In:
                                </span>
                                <div className="flex flex-wrap gap-1.5 mt-1">
                                  {tech.projectsUsedIn.map((proj) => (
                                    <span
                                      key={proj}
                                      className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded bg-accent/10 border border-accent/20 text-accent font-body-small text-[10px]"
                                    >
                                      <Check size={10} />
                                      {proj}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
