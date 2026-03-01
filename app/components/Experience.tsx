"use client";
import { useState, useRef, useEffect } from "react";
import { Briefcase } from "lucide-react";

interface ExperienceItem {
  company: string;
  position: string;
  duration: string;
  location: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

const experiences: ExperienceItem[] = [
  {
    company: "Dolt Technologies",
    position: "Full Stack Web Engineer",
    duration: "Feb 2025 - Sep 2025",
    location: "San Francisco, CA (Remote)",
    description:
      "Engineered and maintained scalable, full-stack web applications, focusing on creating robust backend services and dynamic, responsive user interfaces.",
    achievements: [],
    technologies: ["React", "TypeScript", "Node.js", "MongoDB", "Express", "Docker", "GSAP"],
  },
  {
    company: "JoeAF Digital",
    position: "Frontend Developer",
    duration: "Dec 2024 - Jan 2025",
    location: "New York, NY (Contract)",
    description:
      "Developed and styled interactive web applications, focusing on creating responsive and user-friendly interfaces from concept to deployment.",
    achievements: [],
    technologies: ["React", "JavaScript", "TailwindCSS", "Figma"],
  },
  {
    company: "Devmaan",
    position: "Full Stack Developer",
    duration: "Sep 2025 - Nov 2025",
    location: "Remote",
    description:
      "Contributed to both frontend and backend development, building new features, integrating APIs, and ensuring seamless performance across the application stack.",
    achievements: [],
    technologies: ["Next.js", "TypeScript", "Node.js", "TailwindCSS"],
  },
  {
    company: "FusionLabs",
    position: "Full Stack Developer",
    duration: "Sep 2025 - Current (Freelance)",
    location: "Remote",
    description:
      "Designed and developed full-stack solutions with a focus on integrating Agentic AI features to automate complex workflows and enhance user interaction.",
    achievements: [],
    technologies: ["Next.js", "TypeScript", "Node.js", "TailwindCSS", "Agentic AI"],
  },
  {
    company: "Tailum",
    position: "Full Stack Developer",
    duration: "2025",
    location: "Remote",
    description:
      "Built a modern website for an organic oil company using Next.js, Tailwind CSS, and GSAP. Implemented SEO optimization and performance improvements.",
    achievements: [],
    technologies: ["Next.js", "TailwindCSS", "GSAP", "SEO"],
  },
  {
    company: "LawVriksh",
    position: "Frontend Developer",
    duration: "Dec 2025 - current",
    location: "Remote",
    description:
      "LawVriksh is a microservices platform combining a gRPC Document Management System with GenAI that assesses risk, detects spam, scores authenticity, and generates notification templates. Shared protobuf contracts and Redis/S3/SQLAlchemy integrations power communication, storage, caching, and data processing.",
    achievements: [],
    technologies: ["Next.js", "GSAP", "React Query", "TypeScript", "Node.js", "TailwindCSS"],
  },
];

export default function Experience() {
  const [activeTab, setActiveTab] = useState(0);
  const sectionRef = useRef<HTMLElement | null>(null);

  const activeExperience = experiences[activeTab];

  return (
    <section id="experience" ref={sectionRef} className="py-24 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-start mb-20">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-400/10 border border-emerald-400/20 text-emerald-400 text-xs font-semibold tracking-widest uppercase mb-6">
          <Briefcase className="w-4 h-4" />
          Career Path
        </div>
        <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter">
          WORK <br className="md:hidden" />
          <span className="text-zinc-600 italic">HISTORY.</span>
        </h2>
      </div>

      <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
        {/* Tab Buttons */}
        <div className="flex lg:flex-col overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0 gap-2 lg:gap-0 lg:min-w-[240px] border-b lg:border-b-0 lg:border-l border-zinc-800 no-scrollbar">
          {experiences.map((exp, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`text-left text-sm md:text-base font-medium whitespace-nowrap px-6 py-4 transition-all duration-300 relative ${activeTab === index
                  ? "text-emerald-400 bg-emerald-400/5 lg:bg-transparent"
                  : "text-zinc-500 hover:text-zinc-300 hover:bg-zinc-900/50"
                }`}
            >
              {exp.company}
              {/* Active Tab Indicator */}
              {activeTab === index && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] lg:w-[2px] lg:h-full bg-emerald-400" />
              )}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="flex-1 min-h-[400px]">
          {activeExperience && (
            <div
              key={activeTab}
              className="flex flex-col animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6 gap-4">
                <div>
                  <h3 className="text-2xl md:text-3xl font-semibold text-white mb-2 tracking-tight">
                    {activeExperience.position}
                  </h3>
                  <div className="flex items-center gap-3 text-zinc-400">
                    <span className="font-medium text-emerald-400/90">{activeExperience.company}</span>
                    <span className="text-zinc-700">•</span>
                    <span className="text-sm">{activeExperience.location}</span>
                  </div>
                </div>
                <div>
                  <span className="inline-flex px-3 py-1 text-xs font-medium text-emerald-400/80 border border-emerald-400/20 bg-emerald-400/5 rounded-full">
                    {activeExperience.duration}
                  </span>
                </div>
              </div>

              <p className="text-zinc-400 leading-relaxed mb-8 text-base md:text-lg max-w-3xl">
                {activeExperience.description}
              </p>

              <div className="flex flex-wrap gap-3">
                {activeExperience.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 text-xs md:text-sm font-medium text-zinc-300 bg-zinc-900 border border-zinc-800 rounded-full hover:border-emerald-400/50 hover:text-emerald-400 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

