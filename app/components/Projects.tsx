"use client";

import { FolderGit2 } from "lucide-react";
import Script from "next/script";

import type { Project } from "../../lib/projects-data";
import { projects } from "../../lib/projects-data";
import FlowingMenu from "./FlowingMenu";

export default function Projects() {
  const menuItems = projects.slice(0, 6).map(proj => ({
    link: proj.liveUrl || proj.githubUrl || "#",
    text: proj.title,
    image: proj.image
  }));

  return (
    <section id="projects" className="py-24 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-start mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-400/10 border border-emerald-400/20 text-emerald-400 text-xs font-semibold tracking-widest uppercase mb-6">
          <FolderGit2 className="w-4 h-4" />
          Archive
        </div>
        <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter">
          SELECTED <br className="md:hidden" />
          <span className="text-zinc-600 italic">WORKS.</span>
        </h2>
      </div>

      <div className="w-full relative rounded-2xl overflow-hidden border border-zinc-800" style={{ height: 'min(900px, 80vh)' }}>
        <FlowingMenu
          items={menuItems}
          speed={15}
          textColor="#ffffff"
          bgColor="#0b0b0b"
          marqueeBgColor="#34d399"
          marqueeTextColor="#050505"
          borderColor="#27272a"
        />
      </div>

      <ProjectsStructuredData />
    </section>
  );
}

export function ProjectsStructuredData() {
  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": projects.slice(0, 4).map((p: Project, index: number) => ({
      "@type": "ListItem",
      "position": index + 1,
      "url": p.liveUrl,
      "name": p.title,
      "description": p.description,
    })),
  };
  return (
    <Script
      id="projects-structured-data"
      type="application/ld+json"
      strategy="afterInteractive"
    >
      {JSON.stringify(itemList)}
    </Script>
  );
}