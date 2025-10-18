import Script from 'next/script';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Website Redesign Services — Freelance Web Developer in Bangalore',
  description:
    'Professional website redesign services: UX improvements, performance optimization, SEO, and conversion-focused design by freelance developer Shresth Jindal in Bangalore.',
  alternates: { canonical: 'https://www.shresthjindal.com/website-redesign' },
  keywords: [
    'website redesign',
    'website redesign services',
    'website refresh',
    'UX redesign',
    'website performance',
    'hire web developer Bangalore',
  ],
  openGraph: {
    title: 'Website Redesign Services — Shresth Jindal',
    description:
      'Redesign your website for faster performance, better SEO, and higher conversions. Freelance web developer in Bangalore.',
    url: 'https://www.shresthjindal.com/website-redesign',
    images: [
      { url: 'https://www.shresthjindal.com/og-image.png', alt: 'Website redesign by Shresth Jindal' },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['https://www.shresthjindal.com/twitter-card.png'],
  },
};

const SERVICE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Website Redesign',
  serviceType: 'Website redesign, UX refresh, performance optimization, SEO',
  provider: {
    '@type': 'Person',
    name: 'Shresth Jindal',
    url: 'https://www.shresthjindal.com',
  },
  description:
    'Professional website redesign services focused on speed, accessibility, SEO, and measurable conversion improvements.',
  url: 'https://www.shresthjindal.com/website-redesign',
};

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How long does a website redesign take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Typical timelines range from 2–6 weeks depending on scope. I provide a project plan and milestones before starting.',
      },
    },
    {
      '@type': 'Question',
      name: 'Will you migrate content and keep SEO?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — I keep SEO in mind, maintain URL structure where possible, and add redirects + structured data to preserve rankings.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you optimize for Core Web Vitals?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely — performance optimization and Core Web Vitals improvements are part of the redesign process.',
      },
    },
  ],
};

export default function WebsiteRedesign() {
  return (
    <main className="min-h-screen bg-background text-foreground p-8">
      <Script id="service-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(SERVICE_SCHEMA)}
      </Script>
      <Script id="faq-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(FAQ_SCHEMA)}
      </Script>

      <section className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold">Website Redesign Services</h1>
        <p className="mt-3 text-muted-foreground">
          I redesign and modernize existing websites to improve user experience, boost page
          speed, and increase conversions. Typical improvements include accessibility fixes,
          SEO-focused content structure, responsive layouts, and Core Web Vitals optimizations.
        </p>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div>
            <h2 className="text-xl font-semibold">What I offer</h2>
            <ul className="list-disc ml-5 mt-2 text-muted-foreground">
              <li>UX & visual redesign with conversion-focused layout</li>
              <li>Performance & Core Web Vitals tuning</li>
              <li>SEO improvements: metadata, structured data, and content guidance</li>
              <li>Migration, redirects, and technical SEO preservation</li>
              <li>Responsive and accessible implementation (WCAG basics)</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold">Quick wins</h2>
            <p className="text-muted-foreground mt-2">Examples of fast improvements I implement:</p>
            <ol className="list-decimal ml-5 mt-2 text-muted-foreground">
              <li>Compress and lazy-load images; serve modern formats (WebP/AVIF).</li>
              <li>Minify and split critical CSS; defer non-critical JavaScript.</li>
              <li>Optimize font loading and preconnect key origins.</li>
              <li>Add structured data (FAQ, Service, Contact) for rich results.</li>
            </ol>
          </div>
        </div>

        <div className="mt-8">
          <a href="/contact" className="btn-primary mr-4">Get a free quote</a>
          <a href="#projects" className="btn-secondary">See recent work</a>
        </div>

        <div className="mt-10">
          <h3 className="text-2xl font-semibold">FAQ</h3>
          <div className="mt-4 space-y-4 text-muted-foreground">
            <div>
              <h4 className="font-medium">How much does a redesign cost?</h4>
              <p className="mt-1">Costs vary by scope — small sites start at modest budgets; complex apps require tailored estimates.</p>
            </div>
            <div>
              <h4 className="font-medium">Will I be able to edit the site after?</h4>
              <p className="mt-1">Yes — I use CMS-friendly patterns or plain static content with a simple editing workflow depending on your needs.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
