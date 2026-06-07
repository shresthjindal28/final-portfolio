export interface Project {
  title: string;
  description: string;
  image: string;
  liveUrl: string;
  githubUrl: string;
}

export const projects: Project[] = [
  {
    title: "VeriVox LedgerDocs",
    image: "/sentinelos.png",
    description:
      "AI-Powered PDF Intelligence Platform. Built a PDF Q&A platform using RAG, semantic search with FAISS vector embeddings, secure APIs, and real-time response streaming.",
    liveUrl: "/projects/ai-pdf",
    githubUrl: "https://github.com/shresthjindal28/VeriVox-LedgerDocs",
  },
  {
    title: "Aero3",
    image: "/verivox.png",
    description:
      "AI clinical copilot designed to reduce healthcare documentation overhead. Assists healthcare professionals by generating structured SOAP notes from consultations and medical language understanding.",
    liveUrl: "/projects/aero3",
    githubUrl: "https://github.com/shresthjindal28/aero3",
  },
  {
    title: "SentinelOS",
    description:
      "Offline emergency and disaster response platform designed to operate without internet connectivity. Provides emergency guidance, hazard awareness, first-aid support, and decision assistance.",
    image: "/sentinelos.png",
    liveUrl: "/projects/offline-emergency-response",
    githubUrl: "https://github.com/shresthjindal28/SentinelOS",
  },
  {
    title: "P2P Chat App",
    description:
      "A real-time messaging platform built to explore scalable communication systems, authentication workflows, media sharing, voice notes, and modern WebSockets backend architecture.",
    image: "/chat.png",
    liveUrl: "/projects/p2p-chat-app",
    githubUrl: "https://github.com/shresthjindal28/p2p-chat-app",
  },
  {
    title: "Komi Extension",
    description:
      "Always-on, wake-word activated, voice + command-palette DevOps copilot for Git & GitHub automation powered by Google Gemini.",
    image: "/extension.png",
    liveUrl: "/projects/komi-extension",
    githubUrl: "https://github.com/shresthjindal28/Komi-extension",
  },
  {
    title: "Employee Management System",
    description:
      "Full stack operations dashboard for assigning department tasks and configuring role permissions with secure role-based access configurations.",
    image: "/devmaan.png",
    liveUrl: "/projects/employee-management-system",
    githubUrl: "https://github.com/shresthjindal28/Employee-Management-System",
  },
  {
    title: "Devmaan",
    description:
      "A full stack web application built during internship at Devmaan. Focused on developing both frontend and backend features with modern web technologies.",
    image: "/devmaan.png",
    liveUrl: "https://devmaan.in",
    githubUrl: "/privatePage",
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
      "Build & ship production AI faster. We partner with founders & product teams to design, build, and scale intelligent products: autonomous agents, RAG knowledge systems, internal copilots, and workflow automations that create compounding leverage.",
    image: "/fusionlabs.png",
    liveUrl: "https://www.fusionlabsai.io/",
    githubUrl: "/privatePage",
  },
];
