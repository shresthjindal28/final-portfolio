import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { ArrowLeft, FileText, Download, Calendar, MapPin, CheckCircle, ExternalLink, ShieldCheck, Award } from "lucide-react";
import AnalyticsOnMount from "@/app/components/AnalyticsOnMount";
import TrackedLink from "@/app/components/TrackedLink";

export const metadata: Metadata = {
  title: "Full Stack Intern Case Study @ Lawvriksh | Shresth Jindal",
  description:
    "Explore Shresth Jindal's internship contributions at Lawvriksh Private Limited, focusing on Next.js development and FastAPI backend integration.",
  alternates: {
    canonical: "https://www.shresthjindal.com/experience/lawvriksh",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Full Stack Intern Case Study @ Lawvriksh | Shresth Jindal",
    description: "Explore Shresth Jindal's internship contributions at Lawvriksh Private Limited, focusing on Next.js development and FastAPI backend integration.",
    url: "https://www.shresthjindal.com/experience/lawvriksh",
    images: [{ url: "https://www.shresthjindal.com/og-image.png", alt: "Lawvriksh Case Study Shresth Jindal" }],
    type: "article",
  },
};

export default function LawvrikshCaseStudy() {
  const certificateUrl = "/experiance_certificate/Experience_Letter_Shresth_Jindal_Lawvriksh_Private_Limited.pdf";

  const CASE_STUDY_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Full Stack Intern Case Study @ Lawvriksh – Shresth Jindal",
    "url": "https://www.shresthjindal.com/experience/lawvriksh",
    "description": "Case study outlining Shresth Jindal's contribution as a Full Stack Intern at Lawvriksh, building SaaS platform pages and connecting FastAPI backend services.",
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.shresthjindal.com" },
        { "@type": "ListItem", "position": 2, "name": "Experience", "item": "https://www.shresthjindal.com/#experience" },
        { "@type": "ListItem", "position": 3, "name": "Lawvriksh", "item": "https://www.shresthjindal.com/experience/lawvriksh" }
      ]
    },
    "mainEntity": {
      "@type": "WorkObtainingExperience",
      "jobTitle": "Full Stack Intern",
      "organization": {
        "@type": "Organization",
        "name": "LawVriksh Private Limited",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Bengaluru",
          "addressCountry": "IN"
        }
      },
      "startDate": "2025-12-20",
      "endDate": "2026-06-20"
    }
  };

  return (
    <main className="min-h-screen pt-24 pb-12 bg-background text-foreground">
      <Script id="lawvriksh-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(CASE_STUDY_SCHEMA)}
      </Script>
      <AnalyticsOnMount eventName="lawvriksh_case_study_viewed" />

      <Container variant="default">
        {/* Back Link */}
        <div className="py-4">
          <Link
            href="/#experience"
            className="inline-flex items-center gap-2 text-sm font-body-small text-muted-foreground hover:text-foreground transition-colors group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            <span>Back to Portfolio</span>
          </Link>
        </div>

        {/* Title Section */}
        <Section className="py-10 md:py-12">
          <div className="max-w-3xl">
            <span className="font-caption text-xs font-semibold text-accent block mb-2">
              Internship Case Study
            </span>
            <h1 className="font-h1 uppercase tracking-tight text-foreground mb-4">
              Full Stack Intern @ <br className="hidden md:block" />
              <span className="text-primary italic">LawVriksh.</span>
            </h1>

            <div className="flex flex-wrap gap-x-6 gap-y-2 mt-6 text-sm text-muted-foreground font-body-small">
              <div className="flex items-center gap-1.5">
                <Calendar size={16} className="text-accent" />
                <span>Dec 2025 - Jun 2026</span>
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin size={16} className="text-accent" />
                <span>Remote / Bangalore, India</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck size={16} className="text-accent" />
                <span>Verified Internship</span>
              </div>
            </div>
          </div>
        </Section>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-8">
          {/* Main Case Study Text */}
          <div className="lg:col-span-2 space-y-12">
            {/* Overview */}
            <div className="space-y-4">
              <h2 className="font-h3 text-foreground border-b border-border pb-3">Company Context</h2>
              <p className="text-muted-foreground font-body-base leading-relaxed font-light">
                LawVriksh is a software company building a core SaaS platform for business workflows. 
                During my tenure, the engineering team focused on creating robust frontend pages and establishing 
                backend services for data verification and management.
              </p>
            </div>

            {/* Role & Scope */}
            <div className="space-y-4">
              <h2 className="font-h3 text-foreground border-b border-border pb-3">My Role & Scope</h2>
              <p className="text-muted-foreground font-body-base leading-relaxed font-light">
                As a Full Stack Intern, I collaborated with the engineering department to build and connect 
                user-facing dashboard screens and write clean FastAPI backend controllers. I focused on delivering 
                type-safe, responsive components, coordinating technical requirements with the product team, 
                and helping onboard incoming engineers.
              </p>
            </div>

            {/* Core Contributions */}
            <div className="space-y-6">
              <h2 className="font-h3 text-foreground border-b border-border pb-3">Core Contributions</h2>
              <ul className="space-y-4">
                {[
                  {
                    title: "Developed Multiple Core Pages of SaaS Platform",
                    desc: "Implemented dashboard screens and client management views using Next.js and Tailwind CSS, focusing on visual precision and responsive usability across devices.",
                  },
                  {
                    title: "Developed and Connected FastAPI Backend Code",
                    desc: "Wrote backend endpoints in FastAPI (Python) and connected them to the frontend interface to handle active user data flow and database schemas.",
                  },
                  {
                    title: "Collaborated to Define Technical Requirements",
                    desc: "Partnered directly with the product team to define requirements, analyze features, review design systems, and ensure timely deliverables.",
                  },
                  {
                    title: "Mentored New Hires During Onboarding",
                    desc: "Guided incoming interns and junior developers in setting up their local developer systems, configuring dependencies, and navigating the Git repository.",
                  },
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
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

            {/* What I Learned Section */}
            <div className="space-y-4 bg-secondary/5 border border-border p-6 md:p-8 rounded-2xl">
              <h2 className="font-h3 text-foreground flex items-center gap-2 mb-2">
                <Award size={20} className="text-accent" />
                <span>What I Learned</span>
              </h2>
              <div className="space-y-4 text-muted-foreground text-sm font-body-base leading-relaxed font-light">
                <p>
                  <strong>1. Full-Stack API Integration:</strong> Coordinating the FastAPI backend and Next.js frontend taught me the importance of clear REST API contracts, proper response serialization, and handling loading/error states in React.
                </p>
                <p>
                  <strong>2. Collaborative Product Alignment:</strong> Collaborating with the product team showed me how engineering choices directly impact business objectives and how to translate design requirements into technical specifications.
                </p>
                <p>
                  <strong>3. Team Leadership & Support:</strong> Onboarding and mentoring new hires helped me improve my communication skills, write better internal documentation, and structure git pull requests for easier team reviews.
                </p>
              </div>
            </div>

            {/* Technologies */}
            <div className="space-y-4">
              <h2 className="font-h3 text-foreground border-b border-border pb-3">Technologies Deployed</h2>
              <div className="flex flex-wrap gap-2.5">
                {[
                  "Next.js",
                  "React",
                  "TypeScript",
                  "FastAPI (Python)",
                  "Tailwind CSS",
                  "Git & GitHub",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-3.5 py-1.5 text-xs font-body-small font-medium bg-secondary/10 border border-border text-foreground/80 rounded-lg"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar with Document Preview */}
          <div className="lg:col-span-1 space-y-8">
            <div className="p-6 border border-border bg-card rounded-2xl sticky top-28 space-y-6">
              <h3 className="font-h4 text-foreground">Verified Letter</h3>
              
              <p className="text-muted-foreground text-xs leading-relaxed font-body-base">
                Below is the verified Experience Letter issued by LawVriksh, confirming my 
                milestones, contributions, and internship deliverables.
              </p>

              {/* Action Buttons */}
              <div className="space-y-3">
                <TrackedLink
                  href={certificateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  eventName="lawvriksh_pdf_downloaded"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-primary text-primary-foreground font-body-small font-semibold rounded-xl shadow-md transition-transform hover:scale-[1.01] active:scale-[0.99]"
                >
                  <FileText size={16} />
                  <span>View Full Letter</span>
                  <ExternalLink size={14} className="ml-1 opacity-70" />
                </TrackedLink>

                <TrackedLink
                  href={certificateUrl}
                  download="Experience_Letter_Shresth_Jindal_Lawvriksh.pdf"
                  eventName="lawvriksh_pdf_downloaded"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-card border border-border hover:bg-secondary/10 text-foreground font-body-small font-semibold rounded-xl transition-colors"
                >
                  <Download size={16} />
                  <span>Download PDF</span>
                </TrackedLink>
              </div>

              {/* Certificate visual preview */}
              <div className="border border-border/80 rounded-xl overflow-hidden aspect-[4/3] bg-secondary/5 relative flex items-center justify-center group">
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent z-10" />
                <iframe
                  src={`${certificateUrl}#toolbar=0&navpanes=0&scrollbar=0`}
                  title="Lawvriksh Experience Certificate Preview"
                  className="w-full h-full border-0 select-none scale-105 pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
