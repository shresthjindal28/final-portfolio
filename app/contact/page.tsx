import Contact from '../components/Contact';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact — Freelance Web Developer in Bangalore | Shresth Jindal',
  description:
    "Get in touch with Shresth Jindal — freelance web developer in Bangalore. Email, phone, and social profiles to start your project.",
  alternates: { canonical: 'https://www.shresthjindal.com/#contact' },
  keywords: [
    'contact',
    'freelance web developer',
    'hire web developer Bangalore',
    'web development contact',
  ],
  openGraph: {
    title: 'Contact — Shresth Jindal',
    description:
      "Reach out to hire a freelance web developer in Bangalore. Email, phone, and social links to start your web project.",
    url: 'https://www.shresthjindal.com/#contact',
    siteName: 'Shresth Jindal',
    images: [
      {
        url: 'https://www.shresthjindal.com/og-image.png',
        alt: 'Contact Shresth Jindal',
      },
    ],
    type: 'profile',
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background text-foreground p-8">
      <div className="max-w-6xl mx-auto">
        <Contact />
      </div>
    </main>
  );
}
