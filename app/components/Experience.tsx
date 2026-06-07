"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Briefcase, ArrowRight, Calendar, FileText, ArrowUpRight, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { useSectionInView } from "@/hooks/use-section-in-view";
import { EASE_PREMIUM } from "@/lib/animations";
import { trackLawvrikshCaseStudyViewed, trackLawvrikshPdfDownloaded } from "@/lib/analytics";

export default function Experience() {
  const { ref: sectionRef } = useSectionInView({ sectionId: "experience" });
  const shouldReduceMotion = useReducedMotion();

  return (
    <Section id="experience" ref={sectionRef} className="border-t border-border bg-background">
      <Container variant="default">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent font-body-small mb-6">
            <Briefcase size={14} />
            <span>Featured Career Highlight</span>
          </div>
          <h2 className="font-h2 tracking-tight text-foreground">
            Featured <br className="md:hidden" />
            <span className="text-primary italic">Experience.</span>
          </h2>
          <p className="text-muted-foreground font-body-large mt-4 max-w-2xl font-light">
            Deep dive into a professional full-stack role demonstrating shipping real-world product workflows and production systems engineering.
          </p>
        </div>

        {/* Large Editorial Card */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: EASE_PREMIUM }}
          className="relative w-full rounded-3xl border border-border/80 dark:border-border/30 bg-card/40 dark:bg-card/20 p-8 md:p-12 shadow-xl backdrop-blur-sm overflow-hidden group flex flex-col gap-10"
        >
          {/* Subtle overlay decorative grid inside card */}
          <div className="absolute inset-0 bg-gradient-to-br from-accent/[0.02] to-transparent pointer-events-none" />

          {/* Two-Column Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 relative z-10 border-b border-border/40 pb-8">
            {/* Left Column (span 5) */}
            <div className="lg:col-span-5 flex flex-col items-start gap-4">
              <span className="text-xs font-caption text-accent font-bold uppercase tracking-widest">
                Current Role
              </span>
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground leading-none">
                Lawvriksh
              </h3>
              <div className="flex flex-col gap-1.5 mt-2">
                <span className="text-lg font-body-base text-foreground font-bold">
                  Full Stack Intern
                </span>
                <span className="text-sm font-body-small text-muted-foreground flex items-center gap-2">
                  <Calendar size={14} />
                  Dec 2025 – Jun 2026
                </span>
              </div>

              {/* Verification Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 font-body-small text-xs font-semibold mt-4">
                <ShieldCheck size={14} />
                <span>Experience Letter Available</span>
              </div>
            </div>

            {/* Right Column (span 7) */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <p className="font-body-large text-foreground/90 text-base md:text-lg leading-relaxed font-light">
                Stepped directly into a fast-paced environment to build and deploy critical capabilities for a production document intelligence SaaS platform. Collaborated in an agile workflow, taking ownership of customer-facing dashboards and integrating complex Next.js features with high-throughput FastAPI endpoints. Gained deep exposure to developer operations, automated code delivery pipelines, and professional team workflows.
              </p>
            </div>
          </div>

          {/* Spanning Row: Three Info Blocks */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {/* Block 1: Responsibilities */}
            <div className="flex flex-col gap-3">
              <h4 className="text-xs font-caption text-muted-foreground uppercase tracking-widest font-semibold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                Responsibilities
              </h4>
              <ul className="text-sm font-body-base text-foreground/85 leading-relaxed space-y-2 list-disc pl-4 font-light">
                <li>Shipped key responsive pages and web layouts for SaaS customers.</li>
                <li>Wired frontend data providers with FastAPI backend services.</li>
                <li>Assisted product managers in specifying requirements and onboarding new developers.</li>
              </ul>
            </div>

            {/* Block 2: Technologies */}
            <div className="flex flex-col gap-3">
              <h4 className="text-xs font-caption text-muted-foreground uppercase tracking-widest font-semibold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                Technologies
              </h4>
              <div className="flex flex-wrap gap-2">
                {["Next.js", "React", "TypeScript", "FastAPI", "Python", "Tailwind CSS", "Git"].map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 text-[11px] font-body-small font-medium bg-secondary/20 border border-border text-foreground/95 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Block 3: What I Learned */}
            <div className="flex flex-col gap-3">
              <h4 className="text-xs font-caption text-muted-foreground uppercase tracking-widest font-semibold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                What I Learned
              </h4>
              <ul className="text-sm font-body-base text-foreground/85 leading-relaxed space-y-2 list-disc pl-4 font-light">
                <li>Executing robust type-safe code delivery using strict TypeScript configurations.</li>
                <li>Bridging API contracts safely between async backend engines and web clients.</li>
                <li>Participating in structured team reviews and production code deployment sequences.</li>
              </ul>
            </div>
          </div>

          {/* Bottom Actions Row */}
          <div className="flex flex-wrap gap-4 items-center border-t border-border/40 pt-8 mt-4 relative z-10">
            <Link
              href="/experience/lawvriksh"
              onClick={() => trackLawvrikshCaseStudyViewed()}
              className="group inline-flex items-center gap-2 px-6 py-3.5 bg-primary hover:bg-primary/95 text-primary-foreground font-body-small font-semibold rounded-xl transition-all duration-200 active:scale-[0.98]"
            >
              <span>View Case Study</span>
              <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>

            <a
              href="/experiance_certificate/Experience_Letter_Shresth_Jindal_Lawvriksh_Private_Limited.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackLawvrikshPdfDownloaded()}
              className="group inline-flex items-center gap-2 px-6 py-3.5 bg-card hover:bg-secondary/40 text-foreground font-body-small font-semibold rounded-xl border border-border transition-all duration-200 active:scale-[0.98]"
            >
              <FileText size={15} className="text-muted-foreground group-hover:text-foreground transition-colors" />
              <span>View Experience Letter</span>
              <ArrowUpRight size={14} className="opacity-60 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
