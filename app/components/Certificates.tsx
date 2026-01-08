"use client";
import { useEffect, useRef, useState } from "react";
import { FileText, ExternalLink, Award, Sparkles } from "lucide-react";

export default function Certificates() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.1 });

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Certificates list
  const certificates = [
    {
      title: "Build AI Agents and Chatbots with LangGraph",
      href: "/CertificateOfCompletion_Build AI Agents and Chatbots with LangGraph.pdf",
    },
    {
      title: "Practical GitHub Actions",
      href: "/CertificateOfCompletion_Practical GitHub Actions.pdf",
    },
    {
      title: "Introduction to Front-End Development",
      href: "/Coursera 2ZF29SHBZJ6A.pdf",
    },
    {
      title: "Prompt Engineering Generative AI for Marketing & Advertising",
      href: "/Coursera CSWUFXV7QGA9.pdf",
    },
    {
      title: "Jira: Basic Administration",
      href: "/CertificateOfCompletion_Jira Basic Administration.pdf",
    },
    {
      title: "Learning Jira Software",
      href: "/CertificateOfCompletion_Learning Jira Software.pdf",
    },
    {
      title: "Agile Project Management with Jira Cloud: 1 Projects, Boards, and Issues",
      href: "/agile",
    },
    {
      title: "Hack-Ula Hackathon Participation",
      href: "/86499555-61b5-4908-a15d-f94c76eac338.jpg",
    },
  ];

  return (
    <section id="certificates" ref={sectionRef} className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="text-center mb-24">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-400/5 border border-emerald-400/20 text-emerald-400 text-[10px] font-black tracking-[0.3em] uppercase mb-8">
              <Award className="w-4 h-4" />
              Certifications
            </div>
            <h2 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter italic">
              ACADEMIC<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-100">WINS</span>
            </h2>
            <div className="w-24 h-1 bg-emerald-400 mx-auto rounded-full"></div>
          </div>

          {/* Certificates Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certificates.map((cert) => (
              <a
                key={cert.title}
                href={encodeURI(cert.href)}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block overflow-hidden rounded-xl border border-border bg-card p-6 text-foreground transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                aria-label={`Open certificate: ${cert.title}`}
              >
                {/* subtle overlay for hover effect */}
                <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-white/0 via-white/5 to-white/10" />

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-border bg-background transition-transform duration-300 group-hover:scale-105">
                    <FileText className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base font-semibold leading-snug line-clamp-2">{cert.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">PDF • Click to view</p>
                  </div>
                </div>

                <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="inline-flex items-center gap-2 rounded-md border border-border px-3 py-1 transition-colors duration-300 group-hover:text-foreground">
                    <ExternalLink className="h-4 w-4" />
                    Open PDF
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}