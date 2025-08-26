"use client";

import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  title: string;
  description: string;
  image: string;
  liveUrl: string;
  githubUrl: string;
}

const projects: Project[] = [
  {
    title: "Chating Web",
    description:
      "A real-time chat application with Firebase integration, offering seamless communication experience.",
    image: "/chat.png",
    liveUrl: "https://chat-app-0809.netlify.app/",
    githubUrl: "https://github.com/shresthjindal28/Chat-app.git",
  },
  {
    title: "Gradient Library",
    description:
      "A comprehensive UI library with beautiful gradient collections and modern design components.",
    image: "/gradora.png",
    liveUrl: "https://gradora.vercel.app/",
    githubUrl: "https://github.com/shresthjindal28/gradient-library.git",
  },
  {
    title: "Note App",
    description:
      "A powerful note-taking application with authentication and cloud storage capabilities.",
    image: "/noteforge.png",
    liveUrl: "https://note-app-jet-one.vercel.app/",
    githubUrl: "https://github.com/shresthjindal28/Note-app",
  },
  {
    title: "Twitter Status Card",
    description:
      "Generate beautiful Twitter status cards with custom styling and real-time preview.",
    image: "/twitter-card.png",
    liveUrl: "https://twitter-card-generator.vercel.app/",
    githubUrl: "https://github.com/shresthjindal28/twitter-card-generator",
  },
  {
    title: "D0LT",
    description:
      "A comprehensive service platform connecting users with various digital solutions and services.",
    image: "/d0lt.png",
    liveUrl: "https://d0lt.com/",
    githubUrl: "https://github.com/shresthjindal28/Doit-mainwebsite",
  },
  {
    title: "Joeaf Fruit",
    description:
      "An e-commerce platform for fresh fruits with modern design and seamless shopping experience.",
    image: "/joeaf-fruit.png",
    liveUrl: "https://www.joeaffruits.com/",
    githubUrl: "https://github.com/shresthjindal28/joeaf_fruits",
  },
  {
    title: "Dandoo",
    description:
      "A cool and minimal website for blogging, distraction free. Built using MERN stack with JWT authentication. Also has a cool landing page.",
    image: "/dandoo.png",
    liveUrl: "https://dandooo.netlify.app/",
    githubUrl: "https://github.com/shaikhFaris",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-10 px-6">
      <h2 className="text-2xl font-bold text-white mb-6 text-center">
        My Projects
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((project) => (
          <div
            key={project.title}
            className="rounded-lg overflow-hidden bg-[#111] border border-border/40 hover:border-emerald-400/40 transition-all duration-500"
          >
            {/* Project image (shorter height for compact cards) */}
            <div className="aspect-[21/9] relative">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="p-3">
              <h3 className="text-base font-semibold text-white mb-1">
                {project.title}
              </h3>
              <p className="text-xs text-gray-400 mb-2 line-clamp-1">
                {project.description}
              </p>

              {/* Links */}
              <div className="flex items-center gap-3 text-xs">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-emerald-400 hover:underline"
                >
                  <ExternalLink className="w-3 h-3" /> Live
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-emerald-400 hover:underline"
                >
                  <Github className="w-3 h-3" /> Repo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
