import Hero from '@/app/components/Hero';
import Experience from '@/app/components/Experience';
import MyJourney from '@/app/components/MyJourney';
import Skills from '@/app/components/Skills';
import FeaturedProject from '@/app/components/FeaturedProject';
import Projects from '@/app/components/Projects';
import CurrentlyBuilding from '@/app/components/CurrentlyBuilding';
import Resume from '@/app/components/Resume';
import Contact from '@/app/components/Contact';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://www.shresthjindal.com',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Hero />
      <Experience />
      <MyJourney />
      <Skills />
      <FeaturedProject />
      <Projects />
      <CurrentlyBuilding />
      <Resume />
      <Contact />
    </div>
  );
}
