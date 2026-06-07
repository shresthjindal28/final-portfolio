"use client";

import React, { useState } from "react";
import { Mail, Sparkles, Copy, Check, MessageSquare, Calendar, Github, Linkedin, ArrowRight } from "lucide-react";
import { useSectionInView } from "@/hooks/use-section-in-view";
import {
  trackEmailClicked,
  trackLinkedinClicked,
  trackGithubClicked,
} from "@/lib/analytics";

export default function Contact({ isSubpage = false }: { isSubpage?: boolean } = {}) {
  const { ref: sectionRef } = useSectionInView({ sectionId: "contact" });
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("shresthjindal28@gmail.com");
    setCopied(true);
    trackEmailClicked("contact_card");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-24 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 bg-background"
    >
      {/* Premium Dark Container */}
      <div className="w-full bg-[#0F1617] text-white border border-[#223A3E] rounded-3xl p-8 md:p-12 lg:p-16 relative overflow-hidden shadow-2xl">
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1b2b2e_1px,transparent_1px),linear-gradient(to_bottom,#1b2b2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />

        <div className="relative z-10 space-y-10">

          {/* Centered Header */}
          <div className="text-center max-w-xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#2A9D8F]/10 border border-[#2A9D8F]/20 text-[#2A9D8F] text-xs font-mono">
              <Sparkles size={14} className="animate-pulse" />
              <span>Let&apos;s Connect</span>
            </div>

            {isSubpage && (
              <h1 className="sr-only">Contact Shresth Jindal - Full Stack Developer</h1>
            )}

            <h2 className="font-h2 tracking-tight text-[#F8F3E9] leading-tight">
              Let&apos;s build{" "}
              <span className="text-[#2A9D8F] italic">something.</span>
            </h2>

            <p className="text-[#9BB3B6] text-sm font-light leading-relaxed">
              Have a project in mind, an open full-stack role, or looking to hire a freelance
              developer? Reach out through any channel below.
            </p>
          </div>

          {/* Contact Cards Grid — equal sizing */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

            {/* Email */}
            <button
              onClick={copyEmail}
              className="flex items-center gap-4 p-5 bg-[#142022] border border-[#223A3E] hover:border-[#2A9D8F]/40 hover:bg-[#1C3236] rounded-2xl text-left transition-all duration-200 group"
            >
              <div className="w-10 h-10 rounded-xl bg-[#264653] border border-[#223A3E] flex items-center justify-center text-[#2A9D8F] shrink-0">
                <Mail size={18} />
              </div>
              <div className="min-w-0 flex-1">
                <span className="text-[10px] font-mono text-[#6A888C] block uppercase font-bold tracking-wider">Email</span>
                <span className="text-sm font-mono text-white block truncate">shresthjindal28@gmail.com</span>
              </div>
              <div className="text-[#6A888C] group-hover:text-white shrink-0">
                {copied ? <Check size={16} className="text-[#2A9D8F]" /> : <Copy size={16} />}
              </div>
            </button>

            {/* WhatsApp */}
            <a
              href="https://wa.me/917461835970"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 bg-[#142022] border border-[#223A3E] hover:border-[#2A9D8F]/40 hover:bg-[#1C3236] rounded-2xl text-left transition-all duration-200 group"
            >
              <div className="w-10 h-10 rounded-xl bg-[#264653] border border-[#223A3E] flex items-center justify-center text-[#2A9D8F] shrink-0">
                <MessageSquare size={18} />
              </div>
              <div className="min-w-0 flex-1">
                <span className="text-[10px] font-mono text-[#6A888C] block uppercase font-bold tracking-wider">WhatsApp</span>
                <span className="text-sm font-mono text-white block">Message me</span>
              </div>
              <ArrowRight size={16} className="text-[#6A888C] group-hover:text-white group-hover:translate-x-0.5 transition-transform shrink-0" />
            </a>

            {/* Phone */}
            <a
              href="tel:+917461835970"
              className="flex items-center gap-4 p-5 bg-[#142022] border border-[#223A3E] hover:border-[#2A9D8F]/40 hover:bg-[#1C3236] rounded-2xl text-left transition-all duration-200 group"
            >
              <div className="w-10 h-10 rounded-xl bg-[#264653] border border-[#223A3E] flex items-center justify-center text-[#2A9D8F] shrink-0">
                <Calendar size={18} />
              </div>
              <div className="min-w-0 flex-1">
                <span className="text-[10px] font-mono text-[#6A888C] block uppercase font-bold tracking-wider">Direct Call</span>
                <span className="text-sm font-mono text-white block">+91 74618 35970</span>
              </div>
              <ArrowRight size={16} className="text-[#6A888C] group-hover:text-white group-hover:translate-x-0.5 transition-transform shrink-0" />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/shresth-jindal-b074ba28b/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackLinkedinClicked("contact_card")}
              className="flex items-center gap-4 p-5 bg-[#142022] border border-[#223A3E] hover:border-[#2A9D8F]/40 hover:bg-[#1C3236] rounded-2xl text-left transition-all duration-200 group"
            >
              <div className="w-10 h-10 rounded-xl bg-[#264653] border border-[#223A3E] flex items-center justify-center text-[#2A9D8F] shrink-0">
                <Linkedin size={18} />
              </div>
              <div className="min-w-0 flex-1">
                <span className="text-[10px] font-mono text-[#6A888C] block uppercase font-bold tracking-wider">LinkedIn</span>
                <span className="text-sm font-mono text-white block">Connect with me</span>
              </div>
              <ArrowRight size={16} className="text-[#6A888C] group-hover:text-white group-hover:translate-x-0.5 transition-transform shrink-0" />
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/shresthjindal28"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackGithubClicked("contact_card")}
              className="flex items-center gap-4 p-5 bg-[#142022] border border-[#223A3E] hover:border-[#2A9D8F]/40 hover:bg-[#1C3236] rounded-2xl text-left transition-all duration-200 group"
            >
              <div className="w-10 h-10 rounded-xl bg-[#264653] border border-[#223A3E] flex items-center justify-center text-[#2A9D8F] shrink-0">
                <Github size={18} />
              </div>
              <div className="min-w-0 flex-1">
                <span className="text-[10px] font-mono text-[#6A888C] block uppercase font-bold tracking-wider">GitHub</span>
                <span className="text-sm font-mono text-white block">View my code</span>
              </div>
              <ArrowRight size={16} className="text-[#6A888C] group-hover:text-white group-hover:translate-x-0.5 transition-transform shrink-0" />
            </a>

            {/* Availability Card */}
            <div className="flex items-center gap-4 p-5 bg-[#142022] border border-[#223A3E] rounded-2xl">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400"></span>
                </span>
              </div>
              <div className="min-w-0 flex-1">
                <span className="text-[10px] font-mono text-[#6A888C] block uppercase font-bold tracking-wider">Status</span>
                <span className="text-sm font-mono text-white block">
                  Available <span className="text-[#2A9D8F] font-bold">Q3 2026</span>
                </span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
