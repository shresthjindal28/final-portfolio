import Script from 'next/script';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Agent Development Services | Shresth Jindal',
  description:
    'Build AI agents and chatbots integrated into your product — prompt engineering, orchestration, and deployment.',
  alternates: { canonical: 'https://www.shresthjindal.com/ai-agent-development' },
  openGraph: {
    url: 'https://www.shresthjindal.com/ai-agent-development',
    images: [{ url: 'https://www.shresthjindal.com/og-image.png', alt: 'AI agent and chatbot development by Shresth Jindal' }],
  },
  twitter: { card: 'summary_large_image', images: ['https://www.shresthjindal.com/twitter-card.png'] },
};

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'AI Agent Development',
  serviceType: 'AI Agent Development, Chatbots, Prompt Engineering',
  provider: { '@type': 'Person', name: 'Shresth Jindal', url: 'https://www.shresthjindal.com' },
  url: 'https://www.shresthjindal.com/ai-agent-development',
};

export default function AIAgentDevelopment() {
  return (
    <main className="min-h-screen bg-background text-foreground p-8">
      <Script id="ai-agent-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(SCHEMA)}
      </Script>

      <section className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold">AI Agent Development</h1>
        <p className="mt-3 text-muted-foreground">
          Design and ship AI agents that automate workflows, answer customer queries, and add conversational interfaces to your product. I handle model integration, prompt design, and safe orchestration.
        </p>

        <div className="mt-6">
          <a href="/contact" className="btn-primary">Book a Discovery Call</a>
          <Link href="/#projects" className="ml-4 text-emerald-500">View AI-related projects</Link>
        </div>
      </section>
    </main>
  );
}
