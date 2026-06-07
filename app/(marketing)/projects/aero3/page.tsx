import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { ArrowLeft, Github, CheckCircle } from "lucide-react";
import TrackedLink from "@/app/components/TrackedLink";

export const metadata: Metadata = {
  title: "Aero3 Clinical AI Copilot Case Study | Shresth Jindal",
  description:
    "Explore how Shresth Jindal built Aero3, an AI clinical copilot designed to generate structured SOAP notes from consultations and automate healthcare documentation.",
  alternates: {
    canonical: "https://www.shresthjindal.com/projects/aero3",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Aero3 Clinical AI Copilot Case Study | Shresth Jindal",
    description: "Explore how Shresth Jindal built Aero3, an AI clinical copilot designed to generate structured SOAP notes from consultations and automate healthcare documentation.",
    url: "https://www.shresthjindal.com/projects/aero3",
    images: [{ url: "https://www.shresthjindal.com/projects/aero3/opengraph-image", alt: "Aero3 Clinical AI Copilot Case Study Shresth Jindal" }],
    type: "article",
  },
};

export default function Aero3CaseStudy() {
  const GITHUB_URL = "https://github.com/shresthjindal28/aero3";

  const SCHEMA = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Aero3 AI Clinical Copilot",
    "applicationCategory": "HealthApplication",
    "operatingSystem": "All",
    "programmingLanguage": ["TypeScript", "Python", "JavaScript"],
    "downloadUrl": GITHUB_URL,
    "author": {
      "@type": "Person",
      "name": "Shresth Jindal",
      "url": "https://www.shresthjindal.com",
    },
    "description":
      "AI clinical copilot helping healthcare professionals generate structured SOAP notes and extract medical insights from patient consultations.",
  };

  const BREADCRUMB_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.shresthjindal.com" },
      { "@type": "ListItem", "position": 2, "name": "Projects", "item": "https://www.shresthjindal.com/#projects" },
      { "@type": "ListItem", "position": 3, "name": "Aero3", "item": "https://www.shresthjindal.com/projects/aero3" }
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
              Healthcare AI Assistant
            </span>
            <h1 className="font-h1 uppercase tracking-tight text-foreground mb-4">
              Aero3 <br />
              <span className="text-primary italic">Clinical copilot.</span>
            </h1>
            <p className="text-muted-foreground font-body-large mt-4 max-w-xl font-light">
              An AI-powered clinical assistant built to reduce healthcare documentation overhead, 
              generating structured SOAP notes and medical entities directly from patient consultations.
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
                Healthcare professionals spend a significant portion of their workday compiling, organizing, 
                and entering clinical notes (SOAP records) into EHR databases. This documentation overhead 
                causes severe clinical fatigue and detracts from active patient care.
              </p>
            </div>

            {/* The Solution */}
            <div className="space-y-4">
              <h2 className="font-h3 text-foreground border-b border-border pb-3">The Solution</h2>
              <p className="text-muted-foreground font-body-base leading-relaxed font-light">
                Aero3 is a clinical AI copilot that assists doctors during patient visits. By taking audio recordings 
                or transcripts of consultations, the system generates clean, structured Subjective, Objective, Assessment, 
                and Plan (SOAP) clinical summaries. It handles medical entity extraction and structures medical logs 
                automatically, allowing doctors to focus on clinical decisions.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-6">
              <h2 className="font-h3 text-foreground border-b border-border pb-3">Core Features</h2>
              <ul className="space-y-4">
                {[
                  { title: "Clinical AI Transcription Processing", desc: "Processes multilingual patient-doctor consultation recordings and transcripts using local or remote language models." },
                  { title: "Structured SOAP Note Generation", desc: "Translates conversational transcripts into medical Subjective, Objective, Assessment, and Plan summaries." },
                  { title: "Medical Entity Extraction", desc: "Recognizes symptoms, anatomical regions, prescribed medications, and clinical parameters." },
                  { title: "EHR Integration Concepts (Future Scope)", desc: "Designed to map structured note summaries directly to standard Electronic Health Record API payloads." }
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
                  <span>Next.js, FastAPI, Google Gemini, Python</span>
                </div>
                <div>
                  <span className="font-bold text-foreground block">Category</span>
                  <span>Clinical AI Assistant (SOAP)</span>
                </div>
                <div>
                  <span className="font-bold text-foreground block">Project Class</span>
                  <span>Prototype / Research Project</span>
                </div>
              </div>

              <div className="space-y-3 pt-4 border-t border-border">
                <TrackedLink
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  eventName="project_github_clicked"
                  params={{ project: "aero3" }}
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
