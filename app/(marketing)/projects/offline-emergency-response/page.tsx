import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { ArrowLeft, Github, CheckCircle } from "lucide-react";
import TrackedLink from "@/app/components/TrackedLink";

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
  openGraph: {
    title: "Offline Emergency Response (SentinelOS) Case Study | Shresth Jindal",
    description:
      "Explore how Shresth Jindal designed and built a privacy-first, fully offline multi-agent framework utilizing local LLMs for system diagnostics and automated failovers.",
    url: "https://www.shresthjindal.com/projects/offline-emergency-response",
    images: [
      {
        url: "https://www.shresthjindal.com/og-image.png",
        alt: "Offline Emergency Response Case Study Shresth Jindal",
      },
    ],
    type: "article",
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
              Emergency Response System
            </span>
            <h1 className="font-h1 uppercase tracking-tight text-foreground mb-4">
              SentinelOS <br />
              <span className="text-primary italic">Emergency response.</span>
            </h1>
            <p className="text-muted-foreground font-body-large mt-4 max-w-xl font-light">
              An offline emergency and disaster response platform designed to operate without internet connectivity.
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
                During natural disasters, infrastructure failures, or active emergencies, network coverage and internet 
                lines frequently collapse. This leaves individuals and local community response teams isolated, cut off 
                from critical medical instructions, hazard awareness info, or coordination guides.
              </p>
            </div>

            {/* The Solution */}
            <div className="space-y-4">
              <h2 className="font-h3 text-foreground border-b border-border pb-3">The Solution</h2>
              <p className="text-muted-foreground font-body-base leading-relaxed font-light">
                SentinelOS establishes a completely offline-first resource client. By utilizing a rule-based decision 
                engine, emergency workflows, disaster preparedness checklists, first-aid support, and voice-assisted 
                interactions, the system operates completely independent of active WAN connections.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-6">
              <h2 className="font-h3 text-foreground border-b border-border pb-3">Core Capabilities</h2>
              <ul className="space-y-4">
                {[
                  { title: "Offline-First Architecture", desc: "Designed to operate entirely without internet access, utilizing local database caches and assets." },
                  { title: "Rule-Based Decision Engine", desc: "Evaluates incident reports and user symptoms to deliver rapid, structured first-aid guidance and checklists." },
                  { title: "Emergency Workflows", desc: "Coordinates structured step-by-step guides for disaster preparedness, hazard awareness, and community response." },
                  { title: "Voice-Assisted Interactions", desc: "Supports hands-free audio announcements and text-to-speech cues to assist operators in high-stress disaster scenarios." }
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
                  <span>TypeScript, Node.js, HTML/CSS</span>
                </div>
                <div>
                  <span className="font-bold text-foreground block">Engine</span>
                  <span>Rule-Based Decision Logic</span>
                </div>
                <div>
                  <span className="font-bold text-foreground block">Connectivity</span>
                  <span>100% Offline-First (No API dependency)</span>
                </div>
              </div>

              <div className="space-y-3 pt-4 border-t border-border">
                <TrackedLink
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  eventName="project_github_clicked"
                  params={{ project: "offline-emergency-response" }}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-primary text-primary-foreground font-body-small font-semibold rounded-xl shadow-md transition-transform hover:scale-[1.01] active:scale-[0.99]"
                >
                  <Github size={16} />
                  <span>GitHub Repository</span>
                </TrackedLink>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
