'use client';
import dynamic from 'next/dynamic';

// Dynamic imports with ssr: false must live in a client component
const Experience = dynamic(() => import('./Experience'), { ssr: false });
const MyJourney = dynamic(() => import('./MyJourney'), { ssr: false });
const Skills = dynamic(() => import('./Skills'), { ssr: false });
const FeaturedProject = dynamic(() => import('./FeaturedProject'), { ssr: false });
const Projects = dynamic(() => import('./Projects'), { ssr: false });
const CurrentlyBuilding = dynamic(() => import('./CurrentlyBuilding'), { ssr: false });
const Resume = dynamic(() => import('./Resume'), { ssr: false });
const Contact = dynamic(() => import('./Contact'), { ssr: false });

export default function ClientOnlySections() {
  return (
    <>
      <Experience />
      <MyJourney />
      <Skills />
      <FeaturedProject />
      <Projects />
      <CurrentlyBuilding />
      <Resume />
      <Contact />
    </>
  );
}
