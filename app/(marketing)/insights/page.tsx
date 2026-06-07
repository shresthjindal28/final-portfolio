import type { Metadata } from "next";
import Script from "next/script";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "Insights & Engineering Articles | Shresth Jindal",
  description:
    "Technical articles, deep dives into full-stack development, Next.js optimization, and engineering learnings by Shresth Jindal.",
  alternates: {
    canonical: "https://www.shresthjindal.com/insights",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function InsightsPage() {
  const COLLECTION_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Insights & Engineering Articles – Shresth Jindal",
    "url": "https://www.shresthjindal.com/insights",
    "description":
      "Read technical articles, write-ups on React, Next.js, and backend microservices written by Full Stack Developer Shresth Jindal.",
    "publisher": {
      "@type": "Person",
      "name": "Shresth Jindal",
      "url": "https://www.shresthjindal.com",
    },
  };

  return (
    <main className="min-h-screen pt-24 pb-12 bg-background text-foreground">
      <Script id="insights-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(COLLECTION_SCHEMA)}
      </Script>

      <Section>
        <Container variant="narrow">
          <div className="flex flex-col items-center text-center mt-12">
            <div className="w-16 h-16 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent mb-6">
              <BookOpen size={28} />
            </div>
            <h1 className="font-h1 uppercase tracking-tight text-foreground mb-4">
              Insights & <br />
              <span className="text-primary italic">Articles.</span>
            </h1>
            <p className="text-muted-foreground font-body-large max-w-lg mb-12 font-light leading-relaxed">
              Deep dives, technical write-ups, and architectural insights covering React, Next.js, 
              Node.js, microservices, and modern frontend engineering.
            </p>
            <div className="w-full p-8 border border-border bg-card rounded-2xl">
              <h2 className="font-h4 text-foreground mb-2">Publishing Soon</h2>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-md mx-auto">
                Articles are currently in draft. Check back soon for guides on Next.js 15 performance 
                tuning, gRPC communication in Node.js, and TypeScript best practices.
              </p>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
