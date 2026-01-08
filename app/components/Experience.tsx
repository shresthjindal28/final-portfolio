"use client";
import { useState, useRef, useEffect } from "react";
import { Briefcase, Sparkles } from "lucide-react";

// Interface for a single experience item
interface ExperienceItem {
  company: string;
  position: string;
  duration: string;
  location: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

// Array of professional experiences
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
    technologies: ["Next.js", "TypeScript", "Node.js", "TailwindCSS" ],
  },
  {
  company: "FusionLabs",
  position: "Full Stack Developer",
  duration: "Sep 2025 - Current (Freelance)",
  location: "Remote",
  description:
    "Designed and developed full-stack solutions with a focus on integrating Agentic AI features to automate complex workflows and enhance user interaction.",
  achievements: [],
  technologies: ["Next.js", "TypeScript", "Node.js", "TailwindCSS", "Agentic AI"]
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
    duration: "Dec 2025 - current (6 months internship)",
    location: "Remote",
    description:
      "LawVriksh is a microservices platform combining a gRPC Document Management System with GenAI that assesses risk, detects spam, scores authenticity, and generates notification templates. Shared protobuf contracts and Redis/S3/SQLAlchemy integrations power communication, storage, caching, and data processing.",
    achievements: [],
    technologies: ["Next.js", "GSAP", "React Query", "TypeScript", "Node.js", "TailwindCSS" ],
  }
];

// Experience component
export default function Experience() {
  const [activeTab, setActiveTab] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  // Intersection observer to trigger animations on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const currentSectionRef = sectionRef.current;
    if (currentSectionRef) {
      observer.observe(currentSectionRef);
    }

    return () => {
      if (currentSectionRef) {
        observer.unobserve(currentSectionRef);
      }
    };
  }, []);

  // Effect to inject CSS for animations
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes fade-in {
        from {
          opacity: 0;
          transform: translateY(10px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      .animate-fade-in {
        animation: fade-in 0.5s ease-in-out forwards;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);
  
  const activeExperience = experiences[activeTab];

  return (
    <section id="experience" ref={sectionRef} className="py-20 px-4 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Section Header */}
          <div className="text-center mb-24">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-400/5 border border-emerald-400/20 text-emerald-400 text-[10px] font-black tracking-[0.3em] uppercase mb-8">
              <Briefcase className="w-4 h-4" />
              Career Path
            </div>
            <h2 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter italic">
              WORK<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-100">HISTORY</span>
            </h2>
            <div className="w-24 h-1 bg-emerald-400 mx-auto rounded-full"></div>
          </div>

          <div className="flex flex-col md:flex-row gap-8 md:gap-12">
            {/* Tab Buttons */}
            <div className="flex md:flex-col overflow-x-auto md:overflow-x-visible -mx-4 px-4 md:-mx-0 md:px-0">
              <div className="flex md:flex-col border-b-2 md:border-b-0 md:border-l-2 border-card">
                {experiences.map((exp, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTab(index)}
                    className={`text-left text-sm md:text-base whitespace-nowrap px-4 py-3 transition-all duration-300 ${
                      activeTab === index
                        ? "text-emerald-400 bg-emerald-400/10 border-emerald-400"
                        : "text-muted-foreground hover:bg-card/50 hover:text-foreground border-transparent"
                    } ${index === 0 ? 'md:border-l-2' : 'md:border-l-2'} -ml-0.5`}
                  >
                    {exp.company}
                  </button>
                ))}
              </div>
            </div>

            {/* Tab Content */}
            <div className="flex-1 min-h-[350px]">
                {activeExperience && (
                     <div key={activeTab} className="bg-card/50 backdrop-blur-sm rounded-lg p-8 border border-transparent animate-fade-in">
                        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                            <div className="flex-1">
                                <h3 className="text-2xl font-semibold text-foreground mb-1">
                                    {activeExperience.position}
                                </h3>
                                <div className="flex items-center gap-3 text-muted-foreground mb-4">
                                    <span className="font-medium text-foreground">{activeExperience.company}</span>
                                    <span className="text-border">•</span>
                                    <span className="text-sm">{activeExperience.location}</span>
                                </div>
                            </div>
                             <div className="mt-2 md:mt-0">
                                <span className="inline-block px-3 py-1 text-xs font-medium text-emerald-400 bg-emerald-400/10 rounded-full">
                                    {activeExperience.duration}
                                </span>
                            </div>
                        </div>
                        <p className="text-muted-foreground leading-relaxed mb-6">
                            {activeExperience.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {activeExperience.technologies.map((tech, i) => (
                                <span key={i} className="px-3 py-1 text-sm text-foreground bg-card rounded-md">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

