"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Compass, Code2, Layers, Award, Milestone } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { useSectionInView } from "@/hooks/use-section-in-view";
import { EASE_PREMIUM } from "@/lib/animations";

interface JourneyItem {
  stage: string;
  title: string;
  description: string;
  icon: React.ElementType;
}

const journeyItems: JourneyItem[] = [
  {
    stage: "Discovering Web Systems",
    title: "Focusing on Frontend Precision",
    description:
      "Ignited a passion for responsive layout design. Focused heavily on HTML/CSS precision, standard layout grids, and clean visual typography.",
    icon: Code2,
  },
  {
    stage: "Expanding Capabilities",
    title: "Bridging Full-Stack Features",
    description:
      "Reached beyond client layouts. Integrated Node.js, Express, and FastAPI to construct structured database models and manage asynchronous data flows.",
    icon: Layers,
  },
  {
    stage: "Focusing on Craftsmanship",
    title: "Shipping Complete Applications",
    description:
      "Moved to building interactive products. Focused on developer libraries, performance optimization (Lighthouse/CWVs), and user-centric features.",
    icon: Compass,
  },
  {
    stage: "Transitioning to Industry",
    title: "Team-Based Collaborations",
    description:
      "Joined LawVriksh as an intern. Gained experience coordinating code reviews, resolving compiler type gaps, and optimizing dashboard user experiences.",
    icon: Award,
  },
];

export default function MyJourney() {
  const { ref: sectionRef } = useSectionInView({ sectionId: "journey" });
  const shouldReduceMotion = useReducedMotion();

  return (
    <Section id="journey" ref={sectionRef} className="border-t border-border bg-secondary/5">
      <Container variant="default">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent font-body-small mb-6">
            <Milestone size={14} />
            <span>Story of Growth</span>
          </div>
          <h2 className="font-h2 tracking-tight text-foreground">
            My Developer <br className="md:hidden" />
            <span className="text-primary italic">Journey.</span>
          </h2>
          <p className="text-muted-foreground font-body-large mt-4 max-w-2xl font-light">
            A narrative of engineering milestones, from initial styling grids to coordinating 
            asynchronous client states in a professional team.
          </p>
        </div>

        {/* Journey Row Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {journeyItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: shouldReduceMotion ? 0 : index * 0.1, ease: EASE_PREMIUM }}
                className="flex flex-col p-6 bg-card border border-border rounded-2xl relative shadow-sm group hover:border-accent/30 transition-all duration-300"
              >
                {/* Stage Indicator */}
                <span className="text-[10px] font-caption text-accent font-semibold tracking-wider block mb-4">
                  {item.stage}
                </span>

                {/* Icon wrapper */}
                <div className="w-10 h-10 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                  <Icon size={20} />
                </div>

                {/* Copy */}
                <h3 className="font-h4 text-foreground mb-3 leading-tight font-bold">
                  {item.title}
                </h3>
                
                <p className="text-muted-foreground text-xs leading-relaxed font-body-base font-light">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
