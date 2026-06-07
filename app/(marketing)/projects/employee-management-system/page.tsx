import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { ArrowLeft, Github, ExternalLink, Users, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Employee Management System Case Study | Shresth Jindal",
  description:
    "Explore how Shresth Jindal built a full-stack Employee Management dashboard with Express, MongoDB, and secure role-based access configurations.",
  alternates: {
    canonical: "https://www.shresthjindal.com/projects/employee-management-system",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function EmployeeManagementCaseStudy() {
  const GITHUB_URL = "https://github.com/shresthjindal28";

  const SCHEMA = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Employee Management System",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "All",
    "programmingLanguage": ["JavaScript"],
    "downloadUrl": GITHUB_URL,
    "author": {
      "@type": "Person",
      "name": "Shresth Jindal",
      "url": "https://www.shresthjindal.com",
    },
    "description":
      "Full stack operations dashboard for assigning department tasks and configuring role permissions.",
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
              Operations Control Dashboard
            </span>
            <h1 className="font-h1 uppercase tracking-tight text-foreground mb-4">
              Employee Management <br />
              <span className="text-primary italic">System.</span>
            </h1>
            <p className="text-muted-foreground font-body-large mt-4 max-w-xl font-light">
              A business management dashboard controlling company organizational structures, 
              task tracking, and employee permissions.
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
                Managing company employee allocations, dynamic task boards, and configuring 
                role-based access control (RBAC) securely requires high-fidelity database schemas 
                and reliable validation checks.
              </p>
            </div>

            {/* The Solution */}
            <div className="space-y-4">
              <h2 className="font-h3 text-foreground border-b border-border pb-3">The Solution</h2>
              <p className="text-muted-foreground font-body-base leading-relaxed font-light">
                Developed a React frontend connected to a MERN stack backend. Created relational MongoDB 
                schemas with employee profile fields, linked to department tasks, and secured endpoints 
                using stateless JSON Web Token (JWT) validation middlewares.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-6">
              <h2 className="font-h3 text-foreground border-b border-border pb-3">Core Features</h2>
              <ul className="space-y-4">
                {[
                  { title: "Stateless Auth (JWT)", desc: "Secures database access routes by validating token payloads on the server." },
                  { title: "Task Assignment Board", desc: "Allows department managers to assign tasks to employees and track metrics." },
                  { title: "Role-Based Routing", desc: "Restricts client views and API operations based on permissions (Admin, Manager, Staff)." }
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
                  <span>React, Node.js, Express, MongoDB, Tailwind CSS</span>
                </div>
                <div>
                  <span className="font-bold text-foreground block">Authentication</span>
                  <span>JWT Stateless Middleware</span>
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
                  <span>GitHub Profile</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
