"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ArrowRight, Github, Sparkles, Database, ShieldAlert, Cpu, Terminal } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { useSectionInView } from "@/hooks/use-section-in-view";
import { trackAiPdfGithubClicked } from "@/lib/analytics";

// Interactive Typewriter response simulator
const SIMULATED_STREAMING_WORDS = [
  "Based", "on", "Section", "4.2", "of", "the", "submitted", "agreement,", 
  "the", "indemnification", "liability", "is", "capped", "at", "$50,000.", 
  "The", "governing", "law", "is", "defined", "under", "the", "state", "of", "California.",
  "No", "third-party", "data", "sharing", "is", "authorized", "without", "prior", 
  "written", "consent", "from", "the", "licensor."
];

export default function FeaturedProject() {
  const { ref: sectionRef } = useSectionInView({ sectionId: "featured-project" });
  const shouldReduceMotion = useReducedMotion();
  const [activeTab, setActiveTab] = useState<"engine" | "rag" | "security">("engine");
  
  // Chat typing simulation states
  const [typedWords, setTypedWords] = useState<string[]>([]);
  const [isTyping, setIsTyping] = useState(true);
  const typingTimerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    let currentWordIdx = 0;
    setTypedWords([]);
    setIsTyping(true);

    const typeNextWord = () => {
      if (currentWordIdx < SIMULATED_STREAMING_WORDS.length) {
        setTypedWords((prev) => [...prev, SIMULATED_STREAMING_WORDS[currentWordIdx]]);
        currentWordIdx++;
        typingTimerRef.current = setTimeout(typeNextWord, shouldReduceMotion ? 20 : 120);
      } else {
        setIsTyping(false);
        // Reset and restart after a delay
        typingTimerRef.current = setTimeout(() => {
          setTypedWords([]);
          currentWordIdx = 0;
          setIsTyping(true);
          typeNextWord();
        }, 5000);
      }
    };

    typeNextWord();

    return () => {
      if (typingTimerRef.current) clearTimeout(typingTimerRef.current);
    };
  }, [shouldReduceMotion]);

  const tabs = {
    engine: {
      title: "System Engine",
      icon: Cpu,
      subtitle: "Secure Document Processing",
      desc: "Handles chunked parsing of large PDF structures on local resources. Extracts structured layouts and tables, converting raw documents into clean semantic data frames.",
      metrics: [
        { label: "Parsing Latency", value: "Under 1s" },
        { label: "Memory Footprint", value: "Low RAM Usage" },
        { label: "OCR Fallback", value: "Tesseract Local" }
      ]
    },
    rag: {
      title: "RAG Pipeline",
      icon: Database,
      subtitle: "Local Semantic Caching",
      desc: "Indexes document embeddings using a high-density local FAISS vector store. Calculates cosine similarity queries under 2 seconds, serving precise context blocks to local LLMs.",
      metrics: [
        { label: "Search Speed", value: "Under 1.5s" },
        { label: "Vector Database", value: "FAISS Index" },
        { label: "Prompt Strategy", value: "LlamaIndex RAG" }
      ]
    },
    security: {
      title: "Privacy Bounds",
      icon: ShieldAlert,
      subtitle: "Offline Data Containment",
      desc: "Guarantees absolute privacy by locking data routing to local host nodes. Zero external API calls, ensuring contract records and query sessions never leak to third-party providers.",
      metrics: [
        { label: "Network Activity", value: "0% External" },
        { label: "LLM Compliance", value: "Fully Local" },
        { label: "Audit Trails", value: "Encrypted Logs" }
      ]
    }
  };

  return (
    <Section id="featured-project" ref={sectionRef} className="border-t border-border bg-background relative overflow-hidden">
      <Container variant="default">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent font-body-small mb-6">
            <Sparkles size={14} className="animate-pulse" />
            <span>Flagship Release</span>
          </div>
          <h2 className="font-h2 tracking-tight text-foreground">
            Flagship <br className="md:hidden" />
            <span className="text-primary italic">Product.</span>
          </h2>
          <p className="text-muted-foreground font-body-large mt-4 max-w-2xl font-light">
            My primary full-stack engineering release: A private, fully local intelligence assistant 
            designed to parse, index, and conduct semantic Q&amp;A over heavy legal agreements.
          </p>
        </div>

        {/* Flagship Product Showcase Container - Extremely Visual Weight */}
        <div className="w-full bg-[#0F1617] text-white border border-[#223A3E] rounded-3xl overflow-hidden shadow-2xl relative">
          {/* Subtle grid background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1b2b2e_1px,transparent_1px),linear-gradient(to_bottom,#1b2b2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 relative z-10">
            {/* LEFT SIDE: Interactive Product Mockup (HTML/CSS) - 7 cols on large screens */}
            <div className="lg:col-span-7 p-6 md:p-8 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[#223A3E] min-h-[480px]">
              
              {/* Product Header / Tab Indicator Mock */}
              <div className="flex items-center justify-between border-b border-[#223A3E] pb-4 mb-6">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block" />
                  </div>
                  <span className="text-[10px] font-mono text-[#6A888C] ml-2">ledgerdocs-workspace-v1.0</span>
                </div>
                <span className="px-2 py-0.5 rounded bg-[#2A9D8F]/10 border border-[#2A9D8F]/30 text-[#2A9D8F] text-[10px] font-mono">
                  Offline Core Active
                </span>
              </div>

              {/* HTML/CSS Workspace Layout Replica */}
              <div className="flex-1 grid grid-cols-1 md:grid-cols-12 gap-4 items-stretch">
                
                {/* 1. Workspace Document Sidebar Mock */}
                <div className="md:col-span-4 bg-[#142022] border border-[#223A3E] rounded-xl p-3 flex flex-col justify-between text-[11px] font-mono">
                  <div>
                    <span className="text-[#6A888C] text-[9px] uppercase tracking-wider block mb-2 font-bold">Files Loaded</span>
                    <div className="space-y-1.5">
                      <div className="p-1.5 rounded bg-[#1C3236] border border-[#2A9D8F]/30 text-white flex items-center gap-1.5 truncate">
                        <Terminal size={10} className="text-[#2A9D8F]" />
                        <span className="truncate">liability_sec4.pdf</span>
                      </div>
                      <div className="p-1.5 rounded bg-transparent text-[#6A888C] flex items-center gap-1.5 truncate opacity-70">
                        <Terminal size={10} />
                        <span className="truncate">licensing_contract.pdf</span>
                      </div>
                      <div className="p-1.5 rounded bg-transparent text-[#6A888C] flex items-center gap-1.5 truncate opacity-70">
                        <Terminal size={10} />
                        <span className="truncate">confidentiality_nda.pdf</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 pt-3 border-t border-[#223A3E] text-[#6A888C] text-[9px]">
                    FAISS Embeddings: <span className="text-white">Active</span>
                  </div>
                </div>

                {/* 2. Central QA Chat Window Mock */}
                <div className="md:col-span-8 bg-[#142022] border border-[#223A3E] rounded-xl p-4 flex flex-col justify-between text-xs">
                  {/* Message History */}
                  <div className="space-y-4 flex-1 overflow-y-auto max-h-[240px] pr-1">
                    {/* User message */}
                    <div className="flex items-start gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-[#264653] border border-[#223A3E] text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                        U
                      </div>
                      <div className="p-2.5 rounded-lg bg-[#1D2E30] text-white font-light max-w-[85%]">
                        What are the liability limits under Section 4?
                      </div>
                    </div>

                    {/* AI streaming message */}
                    <div className="flex items-start gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-[#2A9D8F] text-white flex items-center justify-center text-[9px] font-bold shrink-0 mt-0.5">
                        AI
                      </div>
                      <div className="p-2.5 rounded-lg bg-[#1C3236] border border-[#2A9D8F]/20 text-[#D2E2E4] font-mono leading-relaxed max-w-[85%] min-h-[50px] relative">
                        <span>
                          {typedWords.join(" ")}
                        </span>
                        {isTyping && (
                          <span className="inline-block w-1.5 h-3.5 bg-[#2A9D8F] ml-1 animate-pulse" />
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Input form mockup */}
                  <div className="mt-4 pt-3 border-t border-[#223A3E] flex gap-2">
                    <div className="flex-1 bg-[#0F1617] border border-[#223A3E] rounded-lg px-3 py-2 text-[#6A888C] text-[11px] font-mono flex items-center justify-between">
                      <span>Ask AI PDF Assistant...</span>
                      <Terminal size={12} className="text-[#2A9D8F]" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Product Actions */}
              <div className="mt-8 flex flex-wrap gap-4 items-center">
                <a
                  href="https://github.com/shresthjindal28/VeriVox-LedgerDocs"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackAiPdfGithubClicked()}
                  className="flex items-center gap-1.5 px-4 py-2.5 bg-[#142022] border border-[#223A3E] hover:border-[#2A9D8F]/40 hover:bg-[#1C3236] text-white text-xs font-mono rounded-xl transition-all duration-200"
                >
                  <Github size={14} />
                  <span>GitHub Repository</span>
                </a>
                
                <Link
                  href="/projects/ai-pdf"
                  className="flex items-center gap-1.5 px-5 py-2.5 bg-[#2A9D8F] hover:bg-[#2A9D8F]/90 text-white text-xs font-mono rounded-xl transition-all duration-200 ml-auto group"
                >
                  <span>Read Product Case Study</span>
                  <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>

            {/* RIGHT SIDE: Product Technical Spec Tabs - 5 cols on large screens */}
            <div className="lg:col-span-5 p-6 md:p-8 flex flex-col justify-between bg-[#0B1011]">
              <div>
                <span className="text-[10px] font-mono text-[#2A9D8F] uppercase tracking-wider block mb-2 font-bold">
                  System Architecture
                </span>
                <h3 className="font-h3 text-white uppercase font-extrabold mb-6 tracking-tight">
                  VeriVox LedgerDocs
                </h3>

                {/* Tab buttons */}
                <div className="flex bg-[#142022] border border-[#223A3E] p-1 rounded-xl gap-1 mb-8">
                  {Object.keys(tabs).map((key) => {
                    const tab = tabs[key as keyof typeof tabs];
                    const Icon = tab.icon;
                    const isActive = activeTab === key;

                    return (
                      <button
                        key={key}
                        onClick={() => setActiveTab(key as any)}
                        className={`flex-1 flex items-center justify-center gap-1.5 py-2 text-[10px] font-mono rounded-lg transition-all duration-200 ${
                          isActive
                            ? "bg-[#2A9D8F] text-white shadow"
                            : "text-[#6A888C] hover:text-white hover:bg-[#1C3236]"
                        }`}
                      >
                        <Icon size={12} />
                        <span>{tab.title}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Tab Content Display */}
                <div className="min-h-[160px]">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeTab}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-4"
                    >
                      <div>
                        <span className="text-[10px] font-mono text-[#6A888C] uppercase block mb-1">
                          Pipeline Stage
                        </span>
                        <h4 className="text-sm font-bold text-[#2A9D8F] font-mono">
                          {tabs[activeTab].subtitle}
                        </h4>
                      </div>
                      <p className="text-xs text-[#9BB3B6] leading-relaxed font-light font-mono">
                        {tabs[activeTab].desc}
                      </p>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              {/* Metrics block */}
              <div className="mt-8 border-t border-[#223A3E] pt-6">
                <span className="text-[10px] font-mono text-[#6A888C] uppercase tracking-wider block mb-4 font-bold">
                  Verified Benchmarks
                </span>
                
                <div className="grid grid-cols-3 gap-2">
                  {tabs[activeTab].metrics.map((metric, i) => (
                    <div key={i} className="bg-[#142022] border border-[#223A3E] p-2.5 rounded-xl text-center">
                      <span className="text-[10px] font-mono text-white font-bold block truncate">
                        {metric.value}
                      </span>
                      <span className="text-[8px] font-mono text-[#6A888C] mt-1 block truncate">
                        {metric.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
