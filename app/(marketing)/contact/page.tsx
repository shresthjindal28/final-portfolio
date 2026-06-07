import Contact from '@/app/components/Contact';
import type { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Contact — Freelance Web Developer in Bangalore | Shresth Jindal',
  description:
    "Get in touch with Shresth Jindal — freelance web developer in Bangalore. Email, phone, and social profiles to start your project.",
  alternates: { canonical: 'https://www.shresthjindal.com/contact' },
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
    url: 'https://www.shresthjindal.com/contact',
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
  const CONTACT_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Shresth Jindal",
    "url": "https://www.shresthjindal.com/contact",
    "description": "Reach out to hire a freelance full stack web developer in Bangalore for Next.js, React, and TypeScript projects.",
    "mainEntity": {
      "@type": "Person",
      "name": "Shresth Jindal",
      "jobTitle": "Freelance Web Developer",
      "email": "shresthjindal28@gmail.com",
      "url": "https://www.shresthjindal.com"
    }
  };

  const BREADCRUMB_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.shresthjindal.com" },
      { "@type": "ListItem", "position": 2, "name": "Contact", "item": "https://www.shresthjindal.com/contact" }
    ]
  };

  return (
    <main className="min-h-screen bg-background text-foreground p-8">
      <Script id="contact-page-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(CONTACT_SCHEMA)}
      </Script>
      <Script id="contact-breadcrumb-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(BREADCRUMB_SCHEMA)}
      </Script>
      <div className="max-w-6xl mx-auto">
        <Contact isSubpage={true} />
      </div>
    </main>
  );
}
