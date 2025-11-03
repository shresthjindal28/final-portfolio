export interface Project {
  title: string;
  description: string;
  image: string;
  liveUrl: string;
  githubUrl: string;
}

export const projects: Project[] = [
  {
    title: "Devmaan",
    description:
      "A full stack web application built during internship at Devmaan. Focused on developing both frontend and backend features with modern web technologies.",
    image: "/devmaan.png",
    liveUrl: "https://devmaan.in",
    githubUrl: "/privatePage",
  },
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
    liveUrl: "https://twitter-card.shresthjindal.com",
    githubUrl: "https://github.com/shresthjindal28/twitter-card-generator",
  },
  {
    title: "Dandoo",
    description:
      "A cool and minimal website for blogging, distraction free. Built using MERN stack with JWT authentication. Also has a cool landing page.",
    image: "/dandoo.png",
    liveUrl: "https://dandooo.netlify.app/",
    githubUrl: "https://github.com/shaikhFaris",
  },
  {
    title: "Tailum",
    description:
      "Organic oil company website built as a full-stack project using Next.js, Tailwind CSS, and GSAP. Implemented on-page SEO optimization to improve visibility.",
    image: "/tailum.png",
    liveUrl: "https://www.thetailum.com/",
    githubUrl: "/privatePage",
  },
  {
    title: "fusionlabsai",
    description:
      "Build & ship production AI faster. We partner with founders & product teams to design, build, and scale intelligent products: autonomous agents, RAG knowledge systems, internal copilots, and workflow automations  that create compounding leverage.",
    image: "/fusionlabs.png",
    liveUrl: "https://www.fusionlabsai.io/",
    githubUrl: "/privatePage",
  },
  {
    title: "VS Code Voice AI Extension",
    description:
      "A voice-based AI companion for VS Code that performs Git operations hands-free (status, commit, push, etc.).",
    image: "/extension.png",
    liveUrl: "/privatePage",
    githubUrl: "https://github.com/shresthjindal28/ai-agent-voice-based-command",
  },
];