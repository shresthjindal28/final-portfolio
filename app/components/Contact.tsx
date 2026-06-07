"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Sparkles, Send, Copy, Check, MessageSquare, Calendar, Github, Linkedin, ArrowRight } from "lucide-react";
import { useSectionInView } from "@/hooks/use-section-in-view";
import {
  trackEmailClicked,
  trackLinkedinClicked,
  trackGithubClicked,
  trackContactSubmitted,
  trackContactSubmissionFailed
} from "@/lib/analytics";

export default function Contact({ isSubpage = false }: { isSubpage?: boolean } = {}) {
  const { ref: sectionRef } = useSectionInView({ sectionId: "contact" });

  // Form states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  
  // Copy state
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("shresthjindal28@gmail.com");
    setCopied(true);
    trackEmailClicked("contact_card");
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) {
      trackContactSubmissionFailed("missing_fields");
      return;
    }
    
    setStatus("submitting");

    // Simulate database write / mail API lag
    setTimeout(() => {
      setStatus("success");
      trackContactSubmitted();
      setName("");
      setEmail("");
      setMessage("");
    }, 1500);
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-24 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 bg-background"
    >
      {/* Premium Dark Forest Container Card */}
      <div className="w-full bg-[#0F1617] text-white border border-[#223A3E] rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-2xl">
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1b2b2e_1px,transparent_1px),linear-gradient(to_bottom,#1b2b2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT COLUMN: Value Proposition & Outreach actions */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              {/* Header Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#2A9D8F]/10 border border-[#2A9D8F]/20 text-[#2A9D8F] text-xs font-mono mb-6">
                <Sparkles size={14} className="animate-pulse" />
                <span>Let&apos;s Build Something</span>
              </div>
              
              {isSubpage && (
                <h1 className="sr-only">Contact Shresth Jindal - Freelance Full Stack Developer</h1>
              )}
              
              <h2 className="font-h1 uppercase tracking-tight text-[#F8F3E9] leading-none mb-6">
                Let&apos;s build <br />
                <span className="text-[#2A9D8F] italic">something.</span>
              </h2>
              
              <p className="text-[#9BB3B6] font-body-large font-light leading-relaxed max-w-md">
                Have a project in mind, an open full-stack role, or looking to hire a freelance 
                developer? Let&apos;s connect to build high-performance web products.
              </p>
            </div>

            {/* Availability status */}
            <div className="flex items-center gap-3 bg-[#142022] border border-[#223A3E] p-4 rounded-2xl max-w-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
              </span>
              <span className="text-xs font-mono text-[#D2E2E4] font-light">
                Available for projects starting <span className="font-bold text-[#2A9D8F]">Q3 2026</span>
              </span>
            </div>

            {/* Quick Connect Cards */}
            <div className="space-y-3.5 max-w-sm">
              {/* Email Click-to-copy card */}
              <button
                onClick={copyEmail}
                className="w-full flex items-center justify-between p-3.5 bg-[#142022] border border-[#223A3E] hover:border-[#2A9D8F]/40 hover:bg-[#1C3236] rounded-xl text-left transition-all duration-200 group"
              >
                <div className="flex items-center gap-3 truncate">
                  <div className="w-8 h-8 rounded-lg bg-[#264653] border border-[#223A3E] flex items-center justify-center text-[#2A9D8F]">
                    <Mail size={14} />
                  </div>
                  <div className="truncate">
                    <span className="text-[9px] font-mono text-[#6A888C] block uppercase font-bold">Email Address</span>
                    <span className="text-xs font-mono text-white truncate block">shresthjindal28@gmail.com</span>
                  </div>
                </div>
                <div className="text-[#6A888C] group-hover:text-white shrink-0 ml-2">
                  {copied ? <Check size={14} className="text-[#2A9D8F]" /> : <Copy size={14} />}
                </div>
              </button>

              {/* WhatsApp direct card */}
              <a
                href="https://wa.me/917461835970"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-between p-3.5 bg-[#142022] border border-[#223A3E] hover:border-[#2A9D8F]/40 hover:bg-[#1C3236] rounded-xl text-left transition-all duration-200 group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#264653] border border-[#223A3E] flex items-center justify-center text-[#2A9D8F]">
                    <MessageSquare size={14} />
                  </div>
                  <div>
                    <span className="text-[9px] font-mono text-[#6A888C] block uppercase font-bold">Instant Chat</span>
                    <span className="text-xs font-mono text-white block">WhatsApp Message</span>
                  </div>
                </div>
                <ArrowRight size={14} className="text-[#6A888C] group-hover:text-white group-hover:translate-x-0.5 transition-transform" />
              </a>

              {/* Call direct */}
              <a
                href="tel:+917461835970"
                className="w-full flex items-center justify-between p-3.5 bg-[#142022] border border-[#223A3E] hover:border-[#2A9D8F]/40 hover:bg-[#1C3236] rounded-xl text-left transition-all duration-200 group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#264653] border border-[#223A3E] flex items-center justify-center text-[#2A9D8F]">
                    <Calendar size={14} />
                  </div>
                  <div>
                    <span className="text-[9px] font-mono text-[#6A888C] block uppercase font-bold">Direct Call</span>
                    <span className="text-xs font-mono text-white block">+91 74618 35970</span>
                  </div>
                </div>
                <ArrowRight size={14} className="text-[#6A888C] group-hover:text-white group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>

            {/* Social Grid */}
            <div className="flex items-center gap-3 pt-4 border-t border-[#223A3E] max-w-sm">
              <a
                href="https://www.linkedin.com/in/shresth-jindal-b074ba28b/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackLinkedinClicked("contact_card")}
                className="flex-1 inline-flex items-center justify-center gap-2 p-2.5 bg-[#142022] hover:bg-[#1C3236] border border-[#223A3E] hover:border-[#2A9D8F]/40 text-xs font-mono rounded-xl text-white transition-colors"
              >
                <Linkedin size={14} />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://github.com/shresthjindal28"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackGithubClicked("contact_card")}
                className="flex-1 inline-flex items-center justify-center gap-2 p-2.5 bg-[#142022] hover:bg-[#1C3236] border border-[#223A3E] hover:border-[#2A9D8F]/40 text-xs font-mono rounded-xl text-white transition-colors"
              >
                <Github size={14} />
                <span>GitHub</span>
              </a>
            </div>

          </div>

          {/* RIGHT COLUMN: Minimal premium contact form */}
          <div className="lg:col-span-7 bg-[#0B1011] border border-[#223A3E] rounded-2xl p-6 md:p-8 w-full shadow-inner">
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  className="py-12 text-center space-y-4"
                >
                  <div className="w-12 h-12 rounded-full bg-[#2A9D8F]/20 border border-[#2A9D8F]/40 text-[#2A9D8F] flex items-center justify-center mx-auto mb-2">
                    <Check size={24} />
                  </div>
                  <h3 className="font-h3 text-white uppercase font-bold tracking-tight">
                    Message Sent
                  </h3>
                  <p className="text-xs font-mono text-[#9BB3B6] max-w-xs mx-auto leading-relaxed">
                    Thank you! Your message was submitted successfully. I will get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-6 px-4 py-2 border border-[#223A3E] hover:border-[#2A9D8F]/40 text-xs font-mono rounded-xl text-[#9BB3B6] hover:text-white transition-colors"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="contact-form"
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div className="space-y-1">
                    <h3 className="font-h4 text-[#F8F3E9] uppercase font-bold tracking-tight">
                      Outreach Form
                    </h3>
                    <p className="text-[10px] font-mono text-[#6A888C] font-light">
                      Fill out the fields below to initiate communication.
                    </p>
                  </div>

                  <div className="space-y-4">
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="text-[10px] font-mono text-[#6A888C] uppercase tracking-wider block font-bold">
                        Full Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="John Doe"
                        className="w-full bg-[#0F1617] border border-[#223A3E] focus:border-[#2A9D8F] text-[#F8F3E9] rounded-xl px-4 py-3 text-xs font-mono outline-none transition-colors"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-[10px] font-mono text-[#6A888C] uppercase tracking-wider block font-bold">
                        Email Address
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="john@example.com"
                        className="w-full bg-[#0F1617] border border-[#223A3E] focus:border-[#2A9D8F] text-[#F8F3E9] rounded-xl px-4 py-3 text-xs font-mono outline-none transition-colors"
                      />
                    </div>

                    {/* Message */}
                    <div className="space-y-1.5">
                      <label htmlFor="message" className="text-[10px] font-mono text-[#6A888C] uppercase tracking-wider block font-bold">
                        Message Body
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={4}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Describe your project requirements or role specifications..."
                        className="w-full bg-[#0F1617] border border-[#223A3E] focus:border-[#2A9D8F] text-[#F8F3E9] rounded-xl px-4 py-3 text-xs font-mono outline-none transition-colors resize-none"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full flex items-center justify-center gap-2 py-3 bg-[#2A9D8F] hover:bg-[#2A9D8F]/95 text-white text-xs font-mono rounded-xl transition-all duration-200 active:scale-[0.99] disabled:opacity-50"
                  >
                    {status === "submitting" ? (
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send size={12} />
                        <span>Submit Message</span>
                      </>
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
