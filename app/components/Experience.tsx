"use client";

import React, { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Briefcase, ArrowRight, Award, Calendar, MapPin } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { useSectionInView } from "@/hooks/use-section-in-view";
import { EASE_PREMIUM } from "@/lib/animations";

interface ExperienceItem {
  company: string;
  position: string;
  duration: string;
  location: string;
  description: string;
  technologies: string[];
  featured?: boolean;
  slug?: string;
  certificateUrl?: string;
}

const experiences: ExperienceItem[] = [
  {
    company: "Lawvriksh Private Limited",
    position: "Full Stack Intern",
    duration: "Dec 2025 - Jun 2026",
    location: "Remote / Bangalore, India",
    description:
      "Developed multiple core pages of the SaaS platform and connected the FastAPI backend with the Next.js frontend. Collaborated with the product team to define technical requirements and assisted with onboarding new hires.",
    technologies: ["Next.js", "React", "TypeScript", "FastAPI", "Python", "Tailwind CSS", "Git"],
    featured: true,
    slug: "lawvriksh",
  },
  {
    company: "Devmaan",
    position: "Full Stack Developer",
    duration: "Sep 2025 - Nov 2025",
    location: "Remote / Noida, India",
    description:
      "Architected both frontend layouts and backend APIs for a full-stack SaaS platform. Implemented secure authentication flows, optimized database schemas, and structured responsive components.",
    technologies: ["Next.js", "TypeScript", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
  },
  {
    company: "Dolt Technologies",
    position: "Full Stack Web Engineer",
    duration: "Feb 2025 - Sep 2025",
    location: "Remote / San Francisco, CA",
    description:
      "Maintained scalable full-stack web applications, developing structured database schemas, REST APIs, and UI animations. Focused on bridging backend reliability and smooth frontend interaction.",
    technologies: ["React", "TypeScript", "Node.js", "MongoDB", "Express.js", "Docker", "GSAP"],
  },
];

export default function Experience() {
  const { ref: sectionRef } = useSectionInView({ sectionId: "experience" });
  const timelineRef = useRef<HTMLDivElement | null>(null);

  // Track scroll position to draw the timeline line
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"],
  });

  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <Section id="experience" ref={sectionRef} className="border-t border-border bg-background">
      <Container variant="default">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent font-body-small mb-6">
            <Briefcase size={14} />
            <span>Career Path</span>
          </div>
          <h2 className="font-h1 uppercase tracking-tight text-foreground">
            Featured <br className="md:hidden" />
            <span className="text-primary italic">Experience.</span>
          </h2>
          <p className="text-muted-foreground font-body-large mt-4 max-w-2xl font-light">
            Highlighting internships and contract software engineering roles demonstrating 
            impact, technical execution, and professional growth.
          </p>
        </div>

        {/* Timeline wrapper */}
        <div ref={timelineRef} className="relative max-w-4xl mx-auto pl-6 md:pl-0">
          {/* Animated vertical timeline bar */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-border -translate-x-1/2 hidden md:block">
            <motion.div
              style={{ scaleY, originY: 0 }}
              className="w-full h-full bg-accent"
            />
          </div>

          <div className="absolute left-[3px] top-0 bottom-0 w-[2px] bg-border md:hidden">
            <motion.div
              style={{ scaleY, originY: 0 }}
              className="w-full h-full bg-accent"
            />
          </div>

          {/* Timeline Nodes */}
          <div className="space-y-16 md:space-y-24">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={exp.company}
                  className={`flex flex-col md:flex-row relative ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline bullet dot */}
                  <div className="absolute left-[-23px] md:left-1/2 w-4 h-4 rounded-full border-2 border-accent bg-background z-10 -translate-x-1/2 top-2" />

                  {/* Left spacer for desktop alignment */}
                  <div className="w-full md:w-1/2 md:px-8 hidden md:block" />

                  {/* Experience Card */}
                  <div className="w-full md:w-1/2 md:px-8">
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.8, ease: EASE_PREMIUM }}
                      className={`relative p-6 md:p-8 bg-card border rounded-2xl transition-all duration-300 ${
                        exp.featured
                          ? "border-accent/40 shadow-xl shadow-accent/5 ring-1 ring-accent/20"
                          : "border-border hover:border-accent/30"
                      }`}
                    >
                      {/* Featured badge */}
                      {exp.featured && (
                        <span className="absolute top-4 right-4 inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-accent/10 text-accent text-[10px] font-caption">
                          <Award size={10} />
                          <span>Flagship Role</span>
                        </span>
                      )}

                      {/* Header */}
                      <div className="mb-4">
                        <span className="font-caption text-accent text-xs font-semibold block mb-1">
                          {exp.position}
                        </span>
                        <h3 className="font-h3 text-foreground mb-2">{exp.company}</h3>

                        <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground font-body-small">
                          <span className="flex items-center gap-1">
                            <Calendar size={12} />
                            {exp.duration}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin size={12} />
                            {exp.location}
                          </span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-muted-foreground text-sm font-body-base leading-relaxed mb-6">
                        {exp.description}
                      </p>

                      {/* Tech stack */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 text-[11px] font-body-small font-medium bg-secondary/10 border border-border text-foreground/80 rounded-md"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Action buttons */}
                      {exp.slug && (
                        <div className="flex flex-wrap gap-3 border-t border-border pt-6 mt-4">
                          <Link
                            href={`/experience/${exp.slug}`}
                            className="inline-flex items-center gap-1.5 text-xs font-body-small font-semibold text-accent hover:text-accent/80 transition-colors"
                          >
                            <span>Read Case Study</span>
                            <ArrowRight size={14} />
                          </Link>
                        </div>
                      )}
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}
