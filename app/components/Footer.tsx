"use client";

import React from "react";
import { Terminal, ArrowUp, Linkedin, Github, FileText, ShieldCheck, ExternalLink } from "lucide-react";
import Link from "next/link";
import { trackResumeDownloaded, trackGithubClicked, trackLinkedinClicked } from "@/lib/analytics";

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const caseStudies = [
    { name: "AI PDF Assistant", href: "/projects/ai-pdf" },
    { name: "Emergency Response", href: "/projects/offline-emergency-response" },
    { name: "Lawvriksh Internship", href: "/experience/lawvriksh" },
  ];

  const services = [
    { name: "Next.js Development", href: "/nextjs-development" },
    { name: "AI Integration", href: "/ai-agent-development" },
    { name: "Web Design", href: "/web-design-services" },
    { name: "Website Redesign", href: "/website-redesign" },
  ];

  const socialLinks = [
    { name: "LinkedIn", href: "https://www.linkedin.com/in/shresth-jindal-b074ba28b/", icon: Linkedin },
    { name: "GitHub", href: "https://github.com/shresthjindal28", icon: Github },
    { name: "Resume", href: "/shresth_jinadl_resume.pdf", icon: FileText, download: true },
  ];

  return (
    <footer className="relative bg-background border-t border-border mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          
          {/* 1. Left column: Brand & Identity (4 cols) */}
          <div className="md:col-span-4 space-y-6">
            <Link
              href="/"
              onClick={(e) => {
                if (window.location.pathname === "/") {
                  e.preventDefault();
                  document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="flex items-center gap-2 text-lg font-bold text-foreground tracking-tight select-none w-fit"
            >
              <Terminal size={18} className="text-accent" />
              <span>
                Shresth<span className="text-accent italic font-light font-sans">.</span>Jindal
              </span>
            </Link>
            
            <p className="text-muted-foreground text-xs leading-relaxed max-w-sm font-light font-body-base">
              A full-stack engineer and freelance developer specializing in Next.js, FastAPI, and TypeScript, 
              focusing on craftsmanship, clean semantic code, and technical performance.
            </p>

            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-accent/5 border border-accent/10 text-xs">
              <ShieldCheck size={14} className="text-accent" />
              <span className="text-[10px] font-mono text-muted-foreground">
                Open to Opportunities Q3 2026
              </span>
            </div>
          </div>

          {/* 2. Right columns: Links Directory (8 cols) */}
          <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8">
            
            {/* Column A: Case Studies */}
            <div className="space-y-4">
              <span className="text-[9px] font-mono text-accent uppercase tracking-wider block font-bold">
                Case Studies
              </span>
              <ul className="space-y-2">
                {caseStudies.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-xs text-muted-foreground hover:text-foreground transition-colors font-light font-body-small"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column B: Services */}
            <div className="space-y-4">
              <span className="text-[9px] font-mono text-accent uppercase tracking-wider block font-bold">
                Services
              </span>
              <ul className="space-y-2">
                {services.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-xs text-muted-foreground hover:text-foreground transition-colors font-light font-body-small"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column C: Social Hub */}
            <div className="space-y-4 col-span-2 sm:col-span-1">
              <span className="text-[9px] font-mono text-accent uppercase tracking-wider block font-bold">
                Social Hub
              </span>
              <ul className="space-y-2">
                {socialLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <li key={link.name}>
                      {link.download ? (
                        <a
                          href={link.href}
                          download="Shresth_Jindal_Resume.pdf"
                          onClick={() => trackResumeDownloaded()}
                          className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors font-light font-body-small"
                        >
                          <Icon size={12} />
                          <span>{link.name}</span>
                        </a>
                      ) : (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => {
                            if (link.name.toLowerCase() === "github") {
                              trackGithubClicked("footer");
                            } else if (link.name.toLowerCase() === "linkedin") {
                              trackLinkedinClicked("footer");
                            }
                          }}
                          className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors font-light font-body-small"
                        >
                          <Icon size={12} />
                          <span>{link.name}</span>
                          <ExternalLink size={8} className="opacity-50" />
                        </a>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>

          </div>
        </div>

        {/* Divider & Bottom Row */}
        <div className="border-t border-border/60 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          
          {/* Copyright */}
          <div className="text-muted-foreground text-xs font-light font-mono">
            © {year} Shresth Jindal. All rights reserved.
          </div>

          {/* Dynamic Spring Back-to-Top Button */}
          <button
            type="button"
            onClick={scrollToTop}
            className="group inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors px-3 py-1.5 rounded-lg hover:bg-secondary/10"
            aria-label="Scroll back to top of page"
          >
            <span>Back to Top</span>
            <ArrowUp size={12} className="group-hover:-translate-y-0.5 transition-transform duration-200" />
          </button>

        </div>

      </div>
    </footer>
  );
}
