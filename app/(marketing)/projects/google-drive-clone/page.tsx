import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { ArrowLeft, Github, ExternalLink, HardDrive, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Google Drive Clone Case Study | Shresth Jindal",
  description:
    "Explore how Shresth Jindal built a full-featured Google Drive clone using React, Next.js, Express, and MongoDB storage.",
  alternates: {
    canonical: "https://www.shresthjindal.com/projects/google-drive-clone",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function GoogleDriveCloneCaseStudy() {
  const GITHUB_URL = "https://github.com/shresthjindal28/Note-app";

  const SCHEMA = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Google Drive Clone",
    "applicationCategory": "UtilitiesApplication",
    "operatingSystem": "All",
    "programmingLanguage": ["TypeScript", "JavaScript"],
    "downloadUrl": GITHUB_URL,
    "author": {
      "@type": "Person",
      "name": "Shresth Jindal",
      "url": "https://www.shresthjindal.com",
    },
    "description":
      "Full cloud storage replica supporting nested folder paths, file upload structures, and sharing permissions.",
  };

  return (
    <main className="min-h-screen pt-24 pb-12 bg-background text-foreground">
      <Script id="project-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(SCHEMA)}
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
              Cloud Storage Project
            </span>
            <h1 className="font-h1 uppercase tracking-tight text-foreground mb-4">
              Google Drive <br />
              <span className="text-primary italic">Clone.</span>
            </h1>
            <p className="text-muted-foreground font-body-large mt-4 max-w-xl font-light">
              A responsive cloud-storage dashboard replicating directory nesting, secure uploads, 
              and folder permissions.
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
                Replicating file system hierarchies inside a relational or non-relational database 
                is difficult. Representing parents, children, and nesting paths dynamically without 
                causing query recursion bottlenecks requires careful model structuring.
              </p>
            </div>

            {/* The Solution */}
            <div className="space-y-4">
              <h2 className="font-h3 text-foreground border-b border-border pb-3">The Solution</h2>
              <p className="text-muted-foreground font-body-base leading-relaxed font-light">
                Built a Node/Express middleware using MongoDB documents to save folders as nodes with 
                path parent pointers. Utilized React states to manage drag-and-drop file inputs, 
                streamlining file chunk processing before uploading to a secure object storage.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-6">
              <h2 className="font-h3 text-foreground border-b border-border pb-3">Core Features</h2>
              <ul className="space-y-4">
                {[
                  { title: "Dynamic Directory Paths", desc: "Generates breadcrumb link tracks dynamically by querying parent document arrays." },
                  { title: "Drag & Drop Uploads", desc: "Handles multi-file inputs seamlessly, providing upload progress status overlays." },
                  { title: "Sharing Permissions", desc: "Allows users to generate shared links or restrict read/write folder access rules." }
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
                  <span className="font-bold text-foreground block">Stack</span>
                  <span>React, Next.js, Node.js, MongoDB, Express</span>
                </div>
                <div>
                  <span className="font-bold text-foreground block">File Storage</span>
                  <span>AWS S3 / Local Mock</span>
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
