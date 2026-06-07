"use client";

import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { FileText, Download, Eye, Award, ExternalLink, X } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { useSectionInView } from "@/hooks/use-section-in-view";
import { Dialog, DialogContent } from "@radix-ui/react-dialog";
import { EASE_PREMIUM } from "@/lib/animations";
import { trackResumeViewed, trackResumeDownloaded } from "@/lib/analytics";

export default function Resume() {
  const { ref: sectionRef } = useSectionInView({ sectionId: "resume" });
  const shouldReduceMotion = useReducedMotion();
  const [open, setOpen] = useState(false);
  const resumeUrl = "/shresth_jinadl_resume.pdf";

  const handleViewResume = () => {
    setOpen(true);
    trackResumeViewed();
  };

  return (
    <Section id="resume" ref={sectionRef} className="border-t border-border bg-background">
      <Container variant="default">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent font-body-small mb-6">
            <FileText size={14} />
            <span>Qualifications</span>
          </div>
          <h2 className="font-h1 uppercase tracking-tight text-foreground">
            Curriculum <br className="md:hidden" />
            <span className="text-primary italic">Vitae.</span>
          </h2>
          <p className="text-muted-foreground font-body-large mt-4 max-w-2xl font-light">
            Access credentials, engineering skills summaries, and academic benchmarks.
          </p>
        </div>

        {/* Credentials Showcase Card */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: EASE_PREMIUM }}
            className="p-8 bg-card border border-border rounded-3xl shadow-sm relative overflow-hidden flex flex-col md:flex-row gap-8 items-center justify-between hover:border-accent/30 transition-all duration-300"
          >
            {/* Left Content column */}
            <div className="flex-1 space-y-4">
              <div className="flex items-center gap-2 text-accent font-caption text-xs font-semibold">
                <Award size={16} />
                <span>Full Stack Developer</span>
              </div>
              <h3 className="font-h3 text-foreground font-extrabold leading-tight">
                Shresth Jindal
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed font-body-base font-light max-w-md">
                Equipped with real-world internship experience, a deep focus on Next.js frontend performance, 
                and backend schema structures. Download my complete CV to inspect detailed course projects, 
                academic grades, and frameworks profiles.
              </p>
            </div>

            {/* Action buttons column */}
            <div className="w-full md:w-auto flex flex-col gap-3 shrink-0">
              <button
                onClick={handleViewResume}
                className="w-full md:w-56 inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-primary text-primary-foreground font-body-small font-semibold rounded-xl shadow-md transition-transform hover:scale-[1.01] active:scale-[0.99]"
              >
                <Eye size={16} />
                <span>View Resume</span>
              </button>

              <a
                href={resumeUrl}
                download="Shresth_Jindal_Resume.pdf"
                onClick={() => trackResumeDownloaded()}
                className="w-full md:w-56 inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-card border border-border hover:bg-secondary/10 text-foreground font-body-small font-semibold rounded-xl transition-colors"
              >
                <Download size={16} />
                <span>Download Resume</span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Accessible Fullscreen Iframe Modal for View Resume */}
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="fixed inset-0 bg-background/80 backdrop-blur-sm transition-opacity duration-300" />
            <div className="relative w-full max-w-4xl h-[85vh] overflow-hidden rounded-2xl border border-border bg-card shadow-2xl transition-all duration-300 flex flex-col animate-in fade-in zoom-in-95">
              
              {/* Modal Header */}
              <div className="h-14 border-b border-border px-6 flex items-center justify-between bg-card shrink-0">
                <span className="font-caption text-xs font-semibold text-foreground">
                  Resume Preview – Shresth Jindal
                </span>
                <button
                  onClick={() => setOpen(false)}
                  className="p-1.5 rounded-lg border border-border hover:bg-secondary/10 text-muted-foreground hover:text-foreground"
                  aria-label="Close resume preview"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Iframe content */}
              <div className="flex-1 bg-secondary/5 relative">
                <iframe
                  src={`${resumeUrl}#toolbar=0`}
                  title="Shresth Jindal Resume PDF Preview"
                  className="w-full h-full border-0"
                />
              </div>

              {/* Modal Footer */}
              <div className="h-16 border-t border-border px-6 flex items-center justify-end bg-card gap-3 shrink-0">
                <a
                  href={resumeUrl}
                  download="Shresth_Jindal_Resume.pdf"
                  onClick={() => trackResumeDownloaded()}
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-primary text-primary-foreground text-xs font-body-small font-semibold rounded-lg shadow-sm"
                >
                  <Download size={14} />
                  <span>Download PDF</span>
                </a>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </Container>
    </Section>
  );
}
