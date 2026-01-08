import type { Metadata } from 'next';
import Script from 'next/script';
import Link from 'next/link';
import { Button } from '../../components/ui/button';

import BallpitBackground from './BallpitBackground';

export const metadata: Metadata = {
  title: 'Web Design Services That Convert | Shresth Jindal',
  description:
    'Web design services focused on conversion and performance — responsive sites, accessibility, and SEO-first development for startups and small businesses.',
  robots: { index: true, follow: true },
  keywords: [
    'web design services',
    'Next.js developer',
    'SEO optimized websites',
    'responsive web design',
    'Tailwind CSS developer',
    'startup websites',
    'business website design',
    'conversion-focused web design',
    'Shresth Jindal web developer',
  ],
  authors: [{ name: 'Shresth Jindal', url: 'https://www.shresthjindal.com' }],
  creator: 'Shresth Jindal',
  publisher: 'Shresth Jindal',
  alternates: {
    canonical: 'https://www.shresthjindal.com/web-design-services',
  },
  openGraph: {
    title: 'Web Design Services That Convert | Shresth Jindal',
    description:
      'Fast, accessible, and SEO-first web design services built with Next.js. Turn your visitors into customers.',
    url: 'https://www.shresthjindal.com/web-design-services',
    siteName: 'Shresth Jindal',
    type: 'website',
    locale: 'en_IN',
    images: [
      {
        url: 'https://www.shresthjindal.com/images/og-web-design.jpg',
        width: 1200,
        height: 630,
        alt: 'Professional web design services by Shresth Jindal',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Design Services That Convert | Shresth Jindal',
    description:
      'Modern, SEO-friendly web design built with Next.js & Tailwind CSS for startups and small businesses.',
    creator: '@shresthjindal',
    images: ['https://www.shresthjindal.com/images/og-web-design.jpg'],
  },
  metadataBase: new URL('https://www.shresthjindal.com'),
};

export default function WebDesignServices() {
  const SERVICE_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Web Design Services",
    "serviceType": "Web Design, UX/UI, Performance Optimization",
    "provider": {
      "@type": "Person",
      "name": "Shresth Jindal",
      "url": "https://www.shresthjindal.com"
    },
    "areaServed": "India",
    "description": "End-to-end web design and development focused on conversions, accessibility, and speed.",
    "url": "https://www.shresthjindal.com/web-design-services",
    "offers": {
      "@type": "Offer",
      "priceCurrency": "INR",
      "price": "40000",
      "availability": "https://schema.org/InStock"
    }
  };

  return (
    <main aria-labelledby="web-design-hero" className="relative min-h-screen bg-background text-foreground p-8">
      {/* Decorative aurora/light rays background — pointer events none so it doesn't interfere with interactions */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div style={{position: 'relative', overflow: 'hidden', minHeight: '500px', maxHeight: '500px', width: '100%'}}>
          <BallpitBackground
            count={200}
            gravity={0.7}
            friction={0.8}
            wallBounce={0.95}
            followCursor={true}
            colors={[0x7dd3fc, 0x0ea5e9, 0x0284c7]}
          />
        </div>
      </div>

      <div className="mx-auto max-w-7xl">
      {/* JSON-LD for this specific service page */}
      <Script id="web-design-service-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(SERVICE_SCHEMA)}
      </Script>

      <section id="hero" className="max-w-4xl mx-auto text-center py-12">
        <h1 id="web-design-hero" className="text-4xl sm:text-5xl font-extrabold leading-tight text-balance">
          Web design that turns visitors into customers
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          I design and build fast, accessible, SEO-first websites for startups and small businesses. Every site ships with measurable conversion goals, performance optimizations, and an emphasis on long-term growth.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button asChild>
            <Link href="/contact">Book a Free Consultation</Link>
          </Button>
          <Button asChild variant="outline">
            <a href="#process">See Process</a>
          </Button>
        </div>
      </section>

      <section id="overview" className="max-w-4xl mx-auto mt-16">
  <h2 className="text-2xl font-semibold">Overview — Who This Is For</h2>
        <p className="mt-3 text-muted-foreground">
          This service is built for founders and small teams who need a professional, high-performance website without the overhead of a large agency. Whether you&apos;re launching a new brand, replatforming an existing site, or optimising for search and conversions, I deliver sites that are fast, accessible, and designed to convert.
        </p>

        <p className="mt-4 text-muted-foreground">
          Typical clients see improvements in organic traffic, lower bounce rates, and increased lead volume within the first 60–90 days thanks to a combination of technical SEO, performance tuning, and UX that focuses visitors toward the key actions you care about (contact, sign-up, purchase).
        </p>

        <h3 className="mt-6 font-medium">Why choose this service?</h3>
        <ul className="mt-3 list-disc ml-6 text-muted-foreground">
          <li>
            <strong>Next.js expertise:</strong> Server and static rendering patterns that improve SEO and UX while keeping deployment simple with Vercel or other providers.
          </li>
          <li>
            <strong>SEO-first approach:</strong> I craft title tags, meta descriptions, semantic HTML, and JSON-LD schema so search engines understand your offering.
          </li>
          <li>
            <strong>Performance & Core Web Vitals:</strong> Image optimization, adaptive loading, and code-splitting to keep Lighthouse scores high.
          </li>
          <li>
            <strong>Accessibility & maintainability:</strong> Accessible components and clear documentation so your team can update content safely.
          </li>
          <li>
            <strong>Conversion-focused design:</strong> Layouts and microcopy designed to reduce friction and increase trust (testimonials, clear CTAs, social proof).
          </li>
        </ul>
      </section>

      <section id="process" className="max-w-4xl mx-auto mt-16">
  <h2 className="text-2xl font-semibold">My 5-step Process</h2>
        <ol className="mt-4 list-decimal ml-6 text-muted-foreground space-y-4">
          <li>
            <strong>Discovery & Strategy:</strong> Goals, target customers, keyword opportunities, and conversion points are defined.
          </li>
          <li>
            <strong>Design & Prototyping:</strong> I create wireframes and interactive prototypes that validate user flows and conversion funnels. This stage keeps feedback loops short and prevents rework during development.
          </li>
          <li>
            <strong>Build:</strong> Development follows the design closely using Next.js and Tailwind CSS. I implement component-driven architecture so features scale and content editors can update pages without developer intervention.
          </li>
          <li>
            <strong>SEO & Performance:</strong> I add structured data (Service, Person, Breadcrumb), generate sitemaps, and optimise images and critical CSS. I also set up analytics and basic conversion tracking.
          </li>
          <li>
            <strong>Launch & Iterate:</strong> After launch I monitor key metrics, fix edge-case bugs, and provide a short roadmap for A/B tests and growth improvements.
          </li>
        </ol>
      </section>

      <section id="deliverables" className="max-w-4xl mx-auto mt-16">
  <h2 className="text-2xl font-semibold">Deliverables</h2>
        <ul className="mt-4 list-disc ml-6 text-muted-foreground space-y-2">
          <li>
            <strong>Fully responsive site:</strong> Mobile-first layouts, performance budgets, and cross-device testing.
          </li>
          <li>
            <strong>SEO setup:</strong> Titles, descriptions, OpenGraph, Twitter cards, JSON-LD, and an XML sitemap ready for Search Console submission.
          </li>
          <li>
            <strong>Performance tuning:</strong> Optimised images, lazy-loading, code-splitting, and caching strategies to improve Core Web Vitals.
          </li>
          <li>
            <strong>Accessibility improvements:</strong> ARIA attributes, keyboard navigation, and colour-contrast checks.
          </li>
          <li>
            <strong>Handoff & support:</strong> Documentation, a post-launch checklist, and 30 days of bug-fix support included.
          </li>
        </ul>

        <p className="mt-6 text-muted-foreground">
          I document every decision so your team can continue to publish content and run experiments. If you prefer, I can integrate a lightweight CMS (Sanity, Contentful, or Git-based solutions) so non-technical users can edit content.
        </p>
      </section>

        <section id="case-studies" className="max-w-4xl mx-auto mt-12">
          <h2 className="text-2xl font-semibold">Selected Case Studies</h2>
          <p className="mt-3 text-muted-foreground">
            See how these projects improved engagement and conversions. <Link href="/#projects" className="text-emerald-500">View projects</Link>. Each case study includes the original brief, the approach taken, and measurable results such as traffic, conversion uplift, or speed improvements.
          </p>
          <ul className="mt-4 list-disc ml-6 text-muted-foreground">
            <li>
              <strong>Tailum:</strong> Dashboard redesign that reduced user task time by 32%. The project focused on simplifying the primary workflow, reducing clicks, and surfacing important metrics earlier in the flow.
            </li>
            <li>
              <strong>DevMaan:</strong> Landing page & conversion funnel for a SaaS MVP — improved signup rate through clearer pricing, trust signals, and faster load times.
            </li>
            <li>
              <strong>K.C. Narayana E.M. High School:</strong> Responsive redesign with easy content editing for staff and parents, resulting in better discovery of admission information and events.
            </li>
          </ul>
        </section>

        <section id="pricing" className="max-w-4xl mx-auto mt-12">
          <h2 className="text-2xl font-semibold">Pricing (starting points)</h2>
          <p className="mt-3 text-muted-foreground">Projects typically start at:</p>
          <ul className="mt-2 list-disc ml-6 text-muted-foreground">
            <li>Basic website: ₹40,000</li>
            <li>Small business site with CMS: ₹80,000+</li>
            <li>SaaS landing + signup flow: ₹120,000+</li>
          </ul>
        </section>

        <section id="testimonials" className="max-w-4xl mx-auto mt-12">
          <h2 className="text-2xl font-semibold">Testimonials</h2>
          <blockquote className="mt-4 border-l-4 pl-4 italic text-muted-foreground">
            “Shresth delivered a polished website on time — our lead volume doubled in two months.” — Client, Tailum
          </blockquote>
        </section>

      <section id="faq" className="max-w-4xl mx-auto mt-16">
        <h2 className="text-2xl font-semibold">FAQ</h2>
        <div className="mt-4 text-muted-foreground">
          <h3 className="font-medium">How much does a website cost?</h3>
          <p className="mt-1">
            Projects typically start at ₹40,000 and scale based on functionality,
            integrations, and custom design needs.
          </p>
          <h3 className="mt-4 font-medium">
            What technologies do you use for web design?
          </h3>
          <p className="mt-1">
            I primarily use Next.js, React, Tailwind CSS, and Node.js — optimized
            for SEO, performance, and long-term maintainability.
          </p>
        </div>
      </section>

        <section id="cta" className="max-w-4xl mx-auto mt-12 mb-20">
          <h2 className="text-2xl font-semibold">Ready to start?</h2>
    <p className="mt-3 text-muted-foreground">Book a free 30-minute consultation and I&apos;ll review your current site and share a short action plan.</p>
          <div className="mt-6">
              <Button asChild>
                <Link href="/contact">Book a Free Consultation</Link>
              </Button>
              <Button asChild variant="ghost">
                <a className="ml-0" href="mailto:shresthjindal28@gmail.com">Email me</a>
              </Button>
          </div>
        </section>
        </div>
      </main>
  );
}
