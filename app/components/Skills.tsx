"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Cpu, Zap, Layers, Server, Database, Terminal, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { useSectionInView } from "@/hooks/use-section-in-view";
import { EASE_PREMIUM } from "@/lib/animations";

interface TechTool {
  name: string;
  subtitle: string;
  description: string;
  projects: string[];
}

interface ToolkitCategory {
  id: string;
  name: string;
  items: TechTool[];
}

const toolkitCategories: ToolkitCategory[] = [
  {
    id: "frontend",
    name: "Frontend Engineering",
    items: [
      {
        name: "React",
        subtitle: "Client-Side Library",
        description: "Powers reactive component states and rich interactive web views.",
        projects: ["VeriVox LedgerDocs", "P2P Chat App", "Portfolio"],
      },
      {
        name: "Next.js",
        subtitle: "Meta-Framework",
        description: "Handles Server Components, static routes, sitemaps, and assets optimization.",
        projects: ["VeriVox LedgerDocs", "Portfolio"],
      },
      {
        name: "TypeScript",
        subtitle: "Strict Type System",
        description: "Enforces static types, preventing runtime client-server interface failures.",
        projects: ["VeriVox LedgerDocs", "SentinelOS", "P2P Chat App", "Employee Management System"],
      },
      {
        name: "Tailwind CSS",
        subtitle: "Utility-First Styling",
        description: "Accelerates responsive layouts via standard utility-first CSS utility classes.",
        projects: ["All Portfolio Projects"],
      },
      {
        name: "Framer Motion",
        subtitle: "Animation Engine",
        description: "Executes GPU-accelerated micro-interactions, spring layouts, and page reveals.",
        projects: ["Portfolio Website"],
      },
    ],
  },
  {
    id: "backend",
    name: "Backend Engineering",
    items: [
      {
        name: "FastAPI",
        subtitle: "Python ASGI Framework",
        description: "Builds high-performance, asynchronous endpoints and streaming RAG routes.",
        projects: ["VeriVox LedgerDocs", "SentinelOS", "Aero3"],
      },
      {
        name: "Node.js",
        subtitle: "JavaScript Runtime",
        description: "Hosts scalable server processes, voice listeners, and event-driven compilers.",
        projects: ["Komi Extension", "Employee Management System"],
      },
      {
        name: "Express.js",
        subtitle: "Minimalist Router",
        description: "Coordinates REST controllers, token verifiers, and CORS middleware.",
        projects: ["Employee Management System"],
      },
      {
        name: "Python",
        subtitle: "Programming Language",
        description: "Drives AI data pipelines, semantic text indexing, and PDF scraping scripts.",
        projects: ["VeriVox LedgerDocs", "SentinelOS", "Aero3"],
      },
      {
        name: "REST APIs",
        subtitle: "Communication Protocol",
        description: "Exposes structured HTTP endpoints with clear response contracts.",
        projects: ["All Active Repositories"],
      },
      {
        name: "WebSockets",
        subtitle: "Bi-Directional Channels",
        description: "Enables real-time, low-latency client-server messaging streams.",
        projects: ["P2P Chat App", "Komi Extension"],
      },
      {
        name: "JWT Authentication",
        subtitle: "Token-Based Security",
        description: "Secures routes using encrypted payloads signed with environment secrets.",
        projects: ["Employee Management System"],
      },
    ],
  },
  {
    id: "storage",
    name: "Databases & Storage",
    items: [
      {
        name: "MongoDB",
        subtitle: "NoSQL Document Store",
        description: "Saves legal document schemas, transcriptions, and relational object records.",
        projects: ["VeriVox LedgerDocs", "P2P Chat App", "Employee Management System"],
      },
      {
        name: "Local Storage",
        subtitle: "Client Cache",
        description: "Persists editor preferences, voice configurations, and offline network state.",
        projects: ["Komi Extension", "P2P Chat App"],
      },
    ],
  },
  {
    id: "ai",
    name: "AI & Intelligent Systems",
    items: [
      {
        name: "RAG",
        subtitle: "Retrieval-Augmented Gen",
        description: "Indexes document text in vector stores to provide LLMs with semantic context.",
        projects: ["VeriVox LedgerDocs", "Aero3"],
      },
      {
        name: "OpenAI APIs",
        subtitle: "Model Integration",
        description: "Queries advanced frontier models for semantic synthesis and structured output.",
        projects: ["VeriVox LedgerDocs", "Aero3"],
      },
      {
        name: "Whisper",
        subtitle: "Speech-To-Text Model",
        description: "Processes user audio streams for low-latency command transcribing.",
        projects: ["Komi Extension"],
      },
      {
        name: "AI Agents",
        subtitle: "Autonomous Pipelines",
        description: "Constructs loop-based reasoning systems with structured tool call maps.",
        projects: ["Komi Extension", "Aero3"],
      },
      {
        name: "Prompt Engineering",
        subtitle: "System Instructions",
        description: "Designs structured prompt templates returning strict JSON contracts.",
        projects: ["VeriVox LedgerDocs", "Komi Extension", "Aero3"],
      },
    ],
  },
  {
    id: "dev-tools",
    name: "Developer Tools",
    items: [
      {
        name: "Git",
        subtitle: "Version Control",
        description: "Maintains project branching, pull requests, and commit logs.",
        projects: ["All Active Repositories"],
      },
      {
        name: "GitHub",
        subtitle: "Collaboration Hub",
        description: "Manages project pull request reviews, issue logs, and release versions.",
        projects: ["All Active Repositories"],
      },
      {
        name: "Postman",
        subtitle: "API Testing Suite",
        description: "Mocks and executes request tests to validate payload schemas.",
        projects: ["All Integration Workflows"],
      },
      {
        name: "VS Code",
        subtitle: "Target Host Editor",
        description: "Runs integrated DevOps panels, sidebars, and voice control bindings.",
        projects: ["Komi Extension"],
      },
      {
        name: "Vercel",
        subtitle: "Deployment Hosting",
        description: "Triggers automated git-linked preview builds and serves production pages.",
        projects: ["Portfolio Website", "Aero3"],
      },
    ],
  },
  {
    id: "exploring",
    name: "Currently Exploring",
    items: [
      {
        name: "Redis",
        subtitle: "In-Memory Store",
        description: "Caching high-throughput sessions and managing message broker pub-sub queues.",
        projects: ["Real-Time Systems"],
      },
      {
        name: "OAuth",
        subtitle: "Identity Management",
        description: "Securing third-party user logins via federated identity providers.",
        projects: ["Authentication Frameworks"],
      },
      {
        name: "Microservices",
        subtitle: "Architecture Pattern",
        description: "Designing decoupled services communicating via lightweight RPCs or events.",
        projects: ["System Scale"],
      },
      {
        name: "Real-Time Systems",
        subtitle: "Low-Latency Streams",
        description: "Architecting responsive messaging loops and live web synchronization pipelines.",
        projects: ["WebSockets & SSE"],
      },
      {
        name: "Healthcare AI",
        subtitle: "Clinical Assistant",
        description: "Building HIPAA-compliant prompts generating accurate clinical SOAP notes.",
        projects: ["Aero3 Copilot"],
      },
    ],
  },
];

const categoryIcons: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  frontend: Layers,
  backend: Server,
  storage: Database,
  ai: Cpu,
  "dev-tools": Terminal,
  exploring: Sparkles,
};

export default function Skills() {
  const { ref: sectionRef } = useSectionInView({ sectionId: "skills" });
  const shouldReduceMotion = useReducedMotion();
  const [activeCategory, setActiveCategory] = useState<string>("frontend");

  const activeCategoryData = toolkitCategories.find((cat) => cat.id === activeCategory);

  return (
    <Section id="skills" ref={sectionRef} className="border-t border-border bg-background !overflow-visible">
      <Container variant="default">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent font-body-small mb-6">
            <Zap size={14} />
            <span>Interactive Workbench</span>
          </div>
          <h2 className="font-h2 tracking-tight text-foreground">
            My Engineering <br className="md:hidden" />
            <span className="text-primary italic">Toolkit.</span>
          </h2>
          <p className="text-muted-foreground font-body-large mt-4 max-w-2xl font-light">
            A structured ecosystem of frontend frameworks, backend engines, and intelligent integrations connected directly to the production projects where they are applied.
          </p>
        </div>

        {/* Workbench Panel Interface */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Mobile Swipeable Tab Selector */}
          <div 
            role="tablist" 
            aria-label="Engineering toolkit categories" 
            className="flex overflow-x-auto gap-2 pb-4 lg:hidden scrollbar-none snap-x snap-mandatory w-full border-b border-border/40"
          >
            {toolkitCategories.map((category) => {
              const Icon = categoryIcons[category.id] || Sparkles;
              const isActive = activeCategory === category.id;

              return (
                <button
                  key={category.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`panel-${category.id}`}
                  id={`tab-${category.id}`}
                  onClick={() => setActiveCategory(category.id)}
                  className={`snap-center shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-semibold border select-none transition-all duration-300 ${
                    isActive
                      ? "bg-accent text-accent-foreground border-accent shadow-md shadow-accent/10"
                      : "bg-card/40 border-border text-muted-foreground hover:text-foreground hover:border-border/80"
                  }`}
                >
                  <Icon size={14} />
                  <span>{category.name}</span>
                </button>
              );
            })}
          </div>

          {/* Desktop Left Sidebar Tab Selector */}
          <div 
            role="tablist" 
            aria-label="Engineering toolkit categories" 
            className="hidden lg:flex lg:col-span-3 flex-col gap-2 border-r border-border/40 pr-6 sticky top-24 self-start"
          >
            {toolkitCategories.map((category) => {
              const Icon = categoryIcons[category.id] || Sparkles;
              const isActive = activeCategory === category.id;

              return (
                <button
                  key={category.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`panel-${category.id}`}
                  id={`tab-${category.id}`}
                  onClick={() => setActiveCategory(category.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl text-left text-sm font-semibold transition-all duration-300 relative ${
                    isActive
                      ? "bg-accent/10 text-accent"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary/40"
                  }`}
                >
                  {isActive && !shouldReduceMotion && (
                    <motion.div
                      layoutId="activeTabIndicator"
                      className="absolute left-0 top-1/4 bottom-1/4 w-1 bg-accent rounded-r"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <Icon size={16} className={isActive ? "text-accent" : "text-muted-foreground"} />
                  <span>{category.name}</span>
                </button>
              );
            })}
          </div>

          {/* Right Grid Content Area */}
          <div 
            id={`panel-${activeCategory}`}
            role="tabpanel" 
            aria-labelledby={`tab-${activeCategory}`}
            className="lg:col-span-9"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: -15 }}
                transition={{ duration: 0.4, ease: EASE_PREMIUM }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                {activeCategoryData?.items.map((item) => (
                  <motion.div
                    key={item.name}
                    whileHover={shouldReduceMotion ? {} : { y: -4 }}
                    transition={{ duration: 0.2 }}
                    className="group relative bg-card/40 dark:bg-card/15 border border-border/70 dark:border-border/25 rounded-2xl p-6 md:p-8 flex flex-col justify-between shadow-sm hover:border-accent/40 dark:hover:border-accent/30 hover:shadow-lg hover:shadow-accent/[0.01] transition-all duration-300 overflow-hidden"
                  >
                    {/* Glowing card background overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/[0.015] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                    <div className="relative z-10 flex flex-col gap-3">
                      {/* Name & Badge Row */}
                      <div className="flex items-start justify-between gap-4">
                        <h3 className="text-lg font-bold text-foreground tracking-tight leading-none">
                          {item.name}
                        </h3>
                        <span className="text-[10px] font-caption text-accent uppercase tracking-wider font-bold bg-accent/10 px-2 py-0.5 rounded border border-accent/20">
                          {item.subtitle}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-xs font-body-base leading-relaxed text-muted-foreground font-light">
                        {item.description}
                      </p>
                    </div>

                    {/* Project Association Tags */}
                    <div className="relative z-10 mt-6 pt-4 border-t border-border/40">
                      <span className="text-[10px] uppercase font-caption text-muted-foreground tracking-wider block mb-2 font-semibold">
                        Applied In:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {item.projects.map((proj) => (
                          <span
                            key={proj}
                            className="inline-flex items-center px-2 py-0.5 rounded-md bg-secondary/30 dark:bg-secondary/15 border border-border text-foreground/80 font-body-small text-[10px] font-medium transition-colors group-hover:border-accent/25 group-hover:text-foreground"
                          >
                            {proj}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </Section>
  );
}
