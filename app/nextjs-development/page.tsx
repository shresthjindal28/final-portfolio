import Script from 'next/script';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Next.js Development Services | Shresth Jindal',
  description:
    'Next.js development for production apps: SSR/SSG, performant pages, and scale-ready architecture for startups.',
  alternates: { canonical: 'https://www.shresthjindal.com/nextjs-development' },
  openGraph: {
    url: 'https://www.shresthjindal.com/nextjs-development',
    images: [
      { url: 'https://www.shresthjindal.com/og-image.png', alt: 'Next.js development and performance engineering by Shresth Jindal' },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['https://www.shresthjindal.com/twitter-card.png'],
  },
};

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Next.js Development',
  serviceType: 'Next.js Development, React, Server-side Rendering',
  provider: { '@type': 'Person', name: 'Shresth Jindal', url: 'https://www.shresthjindal.com' },
  url: 'https://www.shresthjindal.com/nextjs-development',
};

export default function NextJsDevelopment() {
  return (
    <main className="min-h-screen bg-background text-foreground p-8">
      <Script id="nextjs-service-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(SCHEMA)}
      </Script>

      <section className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold">Next.js Development Services</h1>
        <p className="mt-3 text-muted-foreground">
          I build scalable Next.js applications with a focus on SEO, performance, and developer experience. From SSR and SSG to incremental static regeneration and API routes — I can help ship production-ready features fast.
        </p>

        <div className="mt-6">
          <a href="/contact" className="btn-primary">Get a Quote</a>
          <Link href="/web-design-services" className="ml-4 text-emerald-500">Web Design Services</Link>
        </div>

        <section className="mt-8">
          <h2 className="text-xl font-semibold">What I implement</h2>
          <ul className="mt-3 list-disc ml-6 text-muted-foreground">
            <li>SSR/SSG and hybrid rendering strategies</li>
            <li>Type-safe APIs and backend integration</li>
            <li>Authentication, payments, and deployment pipelines</li>
          </ul>
        </section>
      </section>
    </main>
  );
}
