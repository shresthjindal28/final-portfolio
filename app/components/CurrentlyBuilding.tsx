"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Hammer, Loader2, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { useSectionInView } from "@/hooks/use-section-in-view";
import { EASE_PREMIUM } from "@/lib/animations";

interface RoadmapItem {
  title: string;
  stage: string;
  status: "Planned" | "In Development" | "Refining";
  progress: number;
  description: string;
}

const roadmapItems: RoadmapItem[] = [
  {
    title: "AI PDF Assistant (Vector Upgrades)",
    stage: "Core Feature Refining",
    status: "Refining",
    progress: 90,
    description: "Adding multi-format legal document chunking support and optimized metadata-filtered queries within the FAISS indexing layer.",
  },
  {
    title: "Real-Time P2P Chat Application",
    stage: "WebSocket & Caching Layer",
    status: "In Development",
    progress: 60,
    description: "Engineering low-latency peer-to-peer data syncing with local message queue caching and secure E2E encryption handshakes.",
  },
  {
    title: "Offline Emergency Response (Multi-Agent)",
    stage: "Local LLM Tool Integration",
    status: "Planned",
    progress: 20,
    description: "Defining secure shell actions and structured system status prompts for offline Llama.cpp agents to execute during network isolation.",
  },
];

export default function CurrentlyBuilding() {
  const { ref: sectionRef } = useSectionInView({ sectionId: "currently-building" });
  const shouldReduceMotion = useReducedMotion();

  return (
    <Section id="currently-building" ref={sectionRef} className="border-t border-border bg-secondary/5">
      <Container variant="default">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent font-body-small mb-6">
            <Hammer size={14} />
            <span>Active Roadmap</span>
          </div>
          <h2 className="font-h1 uppercase tracking-tight text-foreground">
            Currently <br className="md:hidden" />
            <span className="text-primary italic">Building.</span>
          </h2>
          <p className="text-muted-foreground font-body-large mt-4 max-w-2xl font-light">
            Continuous growth in action. Below is the active product roadmap for personal tools 
            and API features currently undergoing design or system testing.
          </p>
        </div>

        {/* Roadmap List */}
        <div className="max-w-4xl mx-auto space-y-8">
          {roadmapItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: shouldReduceMotion ? 0 : index * 0.1, ease: EASE_PREMIUM }}
              className="p-6 bg-card border border-border rounded-2xl shadow-sm relative overflow-hidden flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-accent/30 transition-all duration-300"
            >
              {/* Info Column */}
              <div className="flex-1 space-y-3">
                <div className="flex flex-wrap items-center gap-3">
                  <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-caption font-semibold ${
                    item.status === "Refining" 
                      ? "bg-accent/10 text-accent border border-accent/20" 
                      : item.status === "In Development"
                      ? "bg-primary/10 text-primary border border-primary/20"
                      : "bg-muted text-muted-foreground border border-border"
                  }`}>
                    {item.status}
                  </span>
                  <span className="text-xs text-muted-foreground font-body-small">
                    {item.stage}
                  </span>
                </div>

                <h3 className="font-h4 text-foreground font-bold leading-tight">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-xs leading-relaxed font-body-base font-light">
                  {item.description}
                </p>
              </div>

              {/* Progress Column */}
              <div className="w-full md:w-48 space-y-2 flex flex-col justify-center shrink-0">
                <div className="flex items-center justify-between text-xs font-body-small">
                  <span className="text-muted-foreground flex items-center gap-1">
                    {item.status === "In Development" && <Loader2 size={12} className="animate-spin text-accent" />}
                    <span>Progress</span>
                  </span>
                  <span className="font-bold text-foreground">{item.progress}%</span>
                </div>
                {/* Progress bar container */}
                <div className="w-full h-2 rounded-full bg-secondary overflow-hidden border border-border">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.progress}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.2, ease: EASE_PREMIUM }}
                    className="h-full bg-accent rounded-full"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
