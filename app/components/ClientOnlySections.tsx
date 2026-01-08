'use client';
import dynamic from 'next/dynamic';


// Dynamic imports with ssr: false must live in a client component
const About = dynamic(() => import('./About'), { ssr: false });
const Skills = dynamic(() => import('./Skills'), { ssr: false });
const Experience = dynamic(() => import('./Experience'), { ssr: false });
const Projects = dynamic(() => import('./Projects'), { ssr: false });
const Certificates = dynamic(() => import('./Certificates'), { ssr: false });
const HackathonExperiences = dynamic(() => import('./HackathonExperiences'), { ssr: false });
const Contact = dynamic(() => import('./Contact'), { ssr: false });
const Footer = dynamic(() => import('./Footer'), { ssr: false });

export default function ClientOnlySections() {
  return (
    <>
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Certificates />
      <HackathonExperiences/>
      <Contact />
      <Footer />
    </>
  );
}
