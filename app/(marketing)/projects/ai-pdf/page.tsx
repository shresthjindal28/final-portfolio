import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { ArrowLeft, Github, CheckCircle } from "lucide-react";
import TrackedLink from "@/app/components/TrackedLink";

export const metadata: Metadata = {
  title: "AI PDF Assistant (VeriVox LedgerDocs) Case Study | Shresth Jindal",
  description:
    "Explore how Shresth Jindal built a secure, offline RAG system for PDF document QA using FAISS embeddings, FastAPI, and Next.js.",
  alternates: {
    canonical: "https://www.shresthjindal.com/projects/ai-pdf",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "AI PDF Assistant (VeriVox LedgerDocs) Case Study | Shresth Jindal",
    description: "Explore how Shresth Jindal built a secure, offline RAG system for PDF document QA using FAISS embeddings, FastAPI, and Next.js.",
    url: "https://www.shresthjindal.com/projects/ai-pdf",
    images: [{ url: "https://www.shresthjindal.com/og-image.png", alt: "AI PDF Assistant Case Study Shresth Jindal" }],
    type: "article",
  },
};

export default function AIPDFAssistantCaseStudy() {
  const GITHUB_URL = "https://github.com/shresthjindal28/verivox-ledgerdocs";

  const SCHEMA = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "AI PDF Assistant (VeriVox LedgerDocs)",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "All",
    "programmingLanguage": ["TypeScript", "Python", "JavaScript"],
    "downloadUrl": GITHUB_URL,
    "author": {
      "@type": "Person",
      "name": "Shresth Jindal",
      "url": "https://www.shresthjindal.com",
    },
    "description":
      "AI-Powered PDF Intelligence Platform using local FAISS vector index retrieval and streaming client interfaces.",
  };

  const BREADCRUMB_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.shresthjindal.com" },
      { "@type": "ListItem", "position": 2, "name": "Projects", "item": "https://www.shresthjindal.com/#projects" },
      { "@type": "ListItem", "position": 3, "name": "AI PDF Assistant", "item": "https://www.shresthjindal.com/projects/ai-pdf" }
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
              Featured Flagship Project
            </span>
            <h1 className="font-h1 uppercase tracking-tight text-foreground mb-4">
              AI PDF Assistant <br />
              <span className="text-primary italic">VeriVox LedgerDocs.</span>
            </h1>
            <p className="text-muted-foreground font-body-large mt-4 max-w-xl font-light">
              An intelligent offline RAG (Retrieval-Augmented Generation) document search engine 
              designed to inspect legal and technical PDFs securely.
            </p>
          </div>
        </Section>

        {/* Project Details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-8">
          {/* Main write-up */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* The Problem */}
            <div className="space-y-4">
              <h2 className="font-h3 text-foreground border-b border-border pb-3">The Problem</h2>
              <p className="text-muted-foreground font-body-base leading-relaxed font-light">
                Auditors and document teams must analyze and compare huge collections of legal papers. 
                Running simple search queries fails to extract context, while querying public AI APIs leaks 
                confidential metadata and file logs to corporate nodes.
              </p>
            </div>

            {/* The Solution */}
            <div className="space-y-4">
              <h2 className="font-h3 text-foreground border-b border-border pb-3">The Solution</h2>
              <p className="text-muted-foreground font-body-base leading-relaxed font-light">
                VeriVox LedgerDocs establishes a local RAG pipeline. It handles document text parsing, 
                generates text embeddings, indexes metadata inside a local FAISS vector store, and 
                prompts offline language models, returning markdown context via a Next.js streaming client.
              </p>
            </div>

            {/* Architecture breakdown */}
            <div className="space-y-6">
              <h2 className="font-h3 text-foreground border-b border-border pb-3">System Architecture</h2>
              <div className="p-6 border border-border bg-card rounded-2xl space-y-4">
                <div className="flex flex-col md:flex-row items-center gap-4 justify-between">
                  <div className="p-4 bg-secondary/5 border border-border rounded-xl text-center w-full md:w-1/3">
                    <span className="font-caption text-xs font-bold text-accent block mb-1">1. Processing</span>
                    <p className="text-xs text-muted-foreground font-light">PDF parsing & chunk extraction</p>
                  </div>
                  <div className="h-[2px] w-6 bg-border hidden md:block" />
                  <div className="p-4 bg-secondary/5 border border-border rounded-xl text-center w-full md:w-1/3">
                    <span className="font-caption text-xs font-bold text-accent block mb-1">2. Embeddings</span>
                    <p className="text-xs text-muted-foreground font-light">Semantic FAISS Vector Indexing</p>
                  </div>
                  <div className="h-[2px] w-6 bg-border hidden md:block" />
                  <div className="p-4 bg-secondary/5 border border-border rounded-xl text-center w-full md:w-1/3">
                    <span className="font-caption text-xs font-bold text-accent block mb-1">3. Generation</span>
                    <p className="text-xs text-muted-foreground font-light">Local LLM Context Injection</p>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed text-center pt-2">
                  This multi-stage pipeline ensures legal data never traverses the internet, fulfilling privacy constraints.
                </p>
              </div>
            </div>

            {/* Key Features */}
            <div className="space-y-6">
              <h2 className="font-h3 text-foreground border-b border-border pb-3">Key Deliverables</h2>
              <ul className="space-y-4">
                {[
                  { title: "Semantic Retrieval", desc: "Allows users to ask conversational legal questions instead of relying on exact keyword searches." },
                  { title: "FAISS Vector Store", desc: "Integrates FAISS vector indices, achieving local document lookup times of under 2 seconds." },
                  { title: "Streaming Typewriter UI", desc: "Renders server response tokens chunk-by-chunk using a fast server-sent events stream client." },
                  { title: "Local Privacy Bounds", desc: "Ensures legal documents and user logs remain completely local, preventing leak vulnerabilities." }
                ].map((item) => (
                  <li key={item.title} className="flex items-start gap-3">
                    <CheckCircle className="text-accent shrink-0 mt-1" size={18} />
                    <div>
                      <h4 className="font-body-large font-bold text-foreground">{item.title}</h4>
                      <p className="text-muted-foreground text-sm font-body-base mt-1 leading-relaxed">
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
                  <span className="font-bold text-foreground block">Role</span>
                  <span>Lead Developer</span>
                </div>
                <div>
                  <span className="font-bold text-foreground block">Stack</span>
                  <span>Next.js, FastAPI, FAISS, Python</span>
                </div>
                <div>
                  <span className="font-bold text-foreground block">Vector Database</span>
                  <span>FAISS (Local Index)</span>
                </div>
              </div>

              <div className="space-y-3 pt-4 border-t border-border">
                <TrackedLink
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  eventName="ai_pdf_github_clicked"
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
