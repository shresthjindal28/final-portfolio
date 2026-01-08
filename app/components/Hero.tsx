"use client";

import { Github, Linkedin, Twitter } from "lucide-react";
import dynamic from "next/dynamic";

const Ballpit = dynamic(() => import("./Ballpit"), { ssr: false, loading: () => null });

const scrollTo = (id: string) => {
  const element = document.getElementById(id);
  if (element) element.scrollIntoView({ behavior: "smooth" });
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4 py-20"
      style={{ touchAction: 'manipulation' }}
    >
      {/* Desktop: Ballpit Background */}
      <div className="hidden md:block absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <Ballpit
          count={80}
          gravity={0.4}
          friction={0.98}
          wallBounce={0.9}
          followCursor={true}
          colors={[0x10B981, 0x059669, 0x022c22]}
        />
        {/* Subtle overlays to improve readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/40 to-background/80 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.5)_100%)] pointer-events-none" />
      </div>

      {/* Mobile: Gradient Background */}
      <div className="md:hidden absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/20 via-background to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,0.1)_0%,transparent_50%)]" />
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <div className="relative group">
          {/* Glassmorphism Card */}
          {/* <div className="relative bg-background/5 backdrop-blur-3xl border border-white/5 p-8 sm:p-12 md:p-16 rounded-[3rem] shadow-[0_0_80px_-20px_rgba(16,185,129,0.1)] animate-in fade-in slide-in-from-bottom-8 duration-1000"> */}
          <div className="space-y-4 mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold tracking-widest uppercase mb-4">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Available for Projects
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black tracking-tight text-white leading-[1.1]">
              Freelance Web <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-200 to-teal-400">
                Developer
              </span>
            </h1>

            <h2 className="text-xl sm:text-2xl text-emerald-100/60 font-medium tracking-wide">
              Full Stack Specialist • Bangalore, India
            </h2>
          </div>

          <p className="text-lg sm:text-xl text-zinc-300 mb-12 leading-relaxed max-w-2xl mx-auto font-light">
            I partner with startups and businesses to build high-performance,
            <span className="text-white font-normal"> SEO-optimized websites</span> and
            <span className="text-white font-normal"> scalable web applications</span> using React and Next.js.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <button
              onClick={() => scrollTo("projects")}
              className="group relative px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-white font-bold rounded-2xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-emerald-500/25 overflow-hidden"
            >
              <span className="relative z-10">View Portfolio</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </button>

            <button
              onClick={() => scrollTo("contact")}
              className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-bold rounded-2xl border border-white/5 backdrop-blur-md transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] hover:border-white/10"
            >
              Start a Project
            </button>
          </div>
          <div className="w-full flex item-center justify-center">
            <div className="flex justify-center gap-10 w-[70%] md:w-[30%] bg-transparent border backdrop-blur py-3 rounded-full">
              {[
                { icon: Github, href: "https://github.com/shresthjindal28", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/shresth-jindal-b074ba28b/", label: "LinkedIn" },
                { icon: Twitter, href: "https://x.com/shresth_ji76019", label: "Twitter" }
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-emerald-400 transition-all duration-300 transform hover:scale-125"
                >
                  <social.icon size={22} strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Decorative background glow */}
        <div className="absolute -inset-4 bg-emerald-500/5 blur-3xl rounded-[3rem] -z-10 group-hover:bg-emerald-500/10 transition-colors duration-1000" />
        {/* </div> */}
      </div>
    </section>
  );
}
