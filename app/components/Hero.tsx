"use client";

import { Github, Linkedin, Twitter } from "lucide-react";
import dynamic from "next/dynamic";

const Aurora = dynamic(() => import("./Aurora"), { ssr: false, loading: () => null });

const scrollTo = (id: string) => {
  const element = document.getElementById(id);
  if (element) element.scrollIntoView({ behavior: "smooth" });
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4"
    >
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Aurora
          raysOrigin="top-center"
          raysColor="#10B981"
          raysSpeed={1.5}
          lightSpread={3.5}
          rayLength={1.5}
          followMouse={true}
          mouseInfluence={0.3}
          noiseAmount={0.1}
          distortion={0.05}
          className="custom-rays"
        />
      </div>
      <div className="relative z-10 text-center max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700">
        <div className="space-y-2 mb-8">
          <p className="text-emerald-500 text-sm font-medium">
            Hello, I&apos;m
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            Freelance Web Developer in Bangalore
          </h1>
          <h2 className="text-lg sm:text-xl lg:text-2xl text-muted-foreground font-light">
            Full Stack Developer – React, Next.js, TypeScript
          </h2>
        </div>

        <p className="text-base sm:text-lg text-muted-foreground mb-8 leading-relaxed max-w-xl mx-auto">
          I help startups and businesses build fast, SEO-friendly websites and scalable web apps as a web developer freelancer specializing in React and Next.js.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button
            onClick={() => scrollTo("projects")}
            className="px-6 py-3 bg-emerald-100 text-emerald-700 font-medium rounded-full border border-emerald-200 hover:bg-emerald-200 transition-colors"
            aria-label="View projects by freelance web developer"
          >
            View Projects
          </button>
          <button
            onClick={() => scrollTo("contact")}
            className="px-6 py-3 bg-transparent backdrop-blur-2xl text-emerald-700 font-medium rounded-full border border-emerald-200 hover:bg-emerald-100 transition-colors"
            aria-label="Hire a freelance web developer in Bangalore"
          >
            Hire a Freelance Web Developer
          </button>
        </div>

        <div className="flex justify-center gap-6">
          <a
            href="https://github.com/shresthjindal28"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/shresth-jindal-b074ba28b/"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-emerald-500 transition-colors"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://x.com/shresth_ji76019"
            aria-label="Twitter"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-emerald-500 transition-colors"
          >
            <Twitter size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}
