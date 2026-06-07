import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { ArrowLeft, Github, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Offline Emergency Response (SentinelOS) Case Study | Shresth Jindal",
  description:
    "Explore how Shresth Jindal designed and built a privacy-first, fully offline multi-agent framework utilizing local LLMs for system diagnostics and automated failovers.",
  alternates: {
    canonical: "https://www.shresthjindal.com/projects/offline-emergency-response",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function OfflineEmergencyResponseCaseStudy() {
  const GITHUB_URL = "https://github.com/shresthjindal28/SentinelOS";

  const SCHEMA = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "SentinelOS Offline Emergency Response System",
    "applicationCategory": "UtilitiesApplication",
    "operatingSystem": "Linux, macOS, Windows",
    "programmingLanguage": ["TypeScript", "Python", "Shell"],
    "downloadUrl": GITHUB_URL,
    "author": {
      "@type": "Person",
      "name": "Shresth Jindal",
      "url": "https://www.shresthjindal.com",
    },
    "description":
      "A privacy-first, fully offline framework powered by a local LLM for system diagnostics, file verification, and failover automation.",
  };

  const BREADCRUMB_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.shresthjindal.com" },
      { "@type": "ListItem", "position": 2, "name": "Projects", "item": "https://www.shresthjindal.com/#projects" },
      { "@type": "ListItem", "position": 3, "name": "Offline Emergency Response", "item": "https://www.shresthjindal.com/projects/offline-emergency-response" }
    ]
  };

  return (
    <main className="min-h-screen pt-24 pb-12 bg-background text-foreground">
      <Script id="project-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(SCHEMA)}
      </Script>
      <Script id="breadcrumb-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(BREADCRUMB_SCHEMA)}
      </Script>

      <Container variant="default">
        {/* Back Link */}
        <div className="py-4">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm font-body-small text-muted-foreground hover:text-foreground transition-colors group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            <span>Back to Portfolio</span>
          </Link>
        </div>

        {/* Title Header */}
        <Section className="py-10 md:py-12">
          <div className="max-w-3xl">
            <span className="font-caption text-xs font-semibold text-accent block mb-2">
              System Orchestration Project
            </span>
            <h1 className="font-h1 uppercase tracking-tight text-foreground mb-4">
              Offline Emergency <br />
              <span className="text-primary italic">Response.</span>
            </h1>
            <p className="text-muted-foreground font-body-large mt-4 max-w-xl font-light">
              A privacy-first, fully offline orchestration framework powered by local LLMs 
              to execute diagnostics and automate system failover states.
            </p>
          </div>
        </Section>

        {/* Details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-8">
          <div className="lg:col-span-2 space-y-12">
            
            {/* The Problem */}
            <div className="space-y-4">
              <h2 className="font-h3 text-foreground border-b border-border pb-3">The Problem</h2>
              <p className="text-muted-foreground font-body-base leading-relaxed font-light">
                Monitoring and recovering systems in high-security, network-isolated environments or 
                during active disaster recovery outages is critical. Standard operations control suites 
                depend heavily on cloud telemetry endpoints, which fail immediately when network channels are down.
              </p>
            </div>

            {/* The Solution */}
            <div className="space-y-4">
              <h2 className="font-h3 text-foreground border-b border-border pb-3">The Solution</h2>
              <p className="text-muted-foreground font-body-base leading-relaxed font-light">
                Developed SentinelOS: a fully self-contained local runner. Built using a FastAPI command controller 
                and a TypeScript client, the framework executes local models (via Llama.cpp) to evaluate system alerts, 
                conduct local file signature checks, trigger script updates, and perform auto-remediation routines 
                without internet dependency.
              </p>
            </div>

            {/* Pipeline Block */}
            <div className="space-y-6">
              <h2 className="font-h3 text-foreground border-b border-border pb-3">Remediation Architecture</h2>
              <div className="p-6 border border-border bg-card rounded-2xl space-y-4">
                <div className="flex flex-col md:flex-row items-center gap-4 justify-between">
                  <div className="p-4 bg-secondary/5 border border-border rounded-xl text-center w-full md:w-1/3">
                    <span className="font-caption text-xs font-bold text-accent block mb-1">1. Health Check</span>
                    <p className="text-xs text-muted-foreground font-light">System telemetry collection</p>
                  </div>
                  <div className="h-[2px] w-6 bg-border hidden md:block" />
                  <div className="p-4 bg-secondary/5 border border-border rounded-xl text-center w-full md:w-1/3">
                    <span className="font-caption text-xs font-bold text-accent block mb-1">2. Local Inference</span>
                    <p className="text-xs text-muted-foreground font-light">Local LLM logs review</p>
                  </div>
                  <div className="h-[2px] w-6 bg-border hidden md:block" />
                  <div className="p-4 bg-secondary/5 border border-border rounded-xl text-center w-full md:w-1/3">
                    <span className="font-caption text-xs font-bold text-accent block mb-1">3. Automated Act</span>
                    <p className="text-xs text-muted-foreground font-light">Safe failover script run</p>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed text-center pt-2 font-mono">
                  This execution loop provides robust, offline redundancy.
                </p>
              </div>
            </div>

            {/* Features */}
            <div className="space-y-6">
              <h2 className="font-h3 text-foreground border-b border-border pb-3">Core Capabilities</h2>
              <ul className="space-y-4">
                {[
                  { title: "Local Inference Engine", desc: "Performs log diagnosis and analysis using local quantized models, bypassing WAN connections." },
                  { title: "Self-Healing Workflows", desc: "Spawns automated recovery scripts to restore database states, prune temp directories, or reset active adapters." },
                  { title: "Integrity Verification Checks", desc: "Runs regular file hash audits to identify localized alterations or unauthorized access." }
                ].map((item) => (
                  <li key={item.title} className="flex items-start gap-3">
                    <CheckCircle className="text-accent shrink-0 mt-1" size={18} />
                    <div>
                      <h4 className="font-body-large font-bold text-foreground">{item.title}</h4>
                      <p className="text-muted-foreground text-sm font-body-base mt-1 leading-relaxed font-light">
                        {item.desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            <div className="p-6 border border-border bg-card rounded-2xl sticky top-28 space-y-6">
              <h3 className="font-h4 text-foreground">Specifications</h3>
              
              <div className="space-y-3 text-xs font-body-base text-muted-foreground">
                <div>
                  <span className="font-bold text-foreground block">Stack</span>
                  <span>FastAPI, TypeScript, Python, Shell scripting</span>
                </div>
                <div>
                  <span className="font-bold text-foreground block">Local Runner</span>
                  <span>Llama.cpp / GGUF Models</span>
                </div>
                <div>
                  <span className="font-bold text-foreground block">Network State</span>
                  <span>100% Isolated / Offline Capable</span>
                </div>
              </div>

              <div className="space-y-3 pt-4 border-t border-border">
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-primary text-primary-foreground font-body-small font-semibold rounded-xl shadow-md transition-transform hover:scale-[1.01] active:scale-[0.99]"
                >
                  <Github size={16} />
                  <span>GitHub Repository</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
