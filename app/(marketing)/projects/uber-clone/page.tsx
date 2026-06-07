import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { ArrowLeft, Github, CheckCircle } from "lucide-react";
import TrackedLink from "@/app/components/TrackedLink";

export const metadata: Metadata = {
  title: "Uber Clone Case Study | Shresth Jindal",
  description:
    "Explore how Shresth Jindal built a real-time Uber Clone with Mapbox routing maps, GPS trackers, and geolocation coordinate systems.",
  alternates: {
    canonical: "https://www.shresthjindal.com/projects/uber-clone",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Uber Clone Case Study | Shresth Jindal",
    description: "Explore how Shresth Jindal built a real-time Uber Clone with Mapbox routing maps, GPS trackers, and geolocation coordinate systems.",
    url: "https://www.shresthjindal.com/projects/uber-clone",
    images: [{ url: "https://www.shresthjindal.com/og-image.png", alt: "Uber Clone Case Study Shresth Jindal" }],
    type: "article",
  },
};

export default function UberCloneCaseStudy() {
  const GITHUB_URL = "https://github.com/shresthjindal28/Chat-app.git";

  const SCHEMA = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Uber Clone",
    "applicationCategory": "TravelApplication",
    "operatingSystem": "All",
    "programmingLanguage": ["TypeScript", "JavaScript"],
    "downloadUrl": GITHUB_URL,
    "author": {
      "@type": "Person",
      "name": "Shresth Jindal",
      "url": "https://www.shresthjindal.com",
    },
    "description":
      "Real-time location ride booking client integrating Mapbox vector maps routing interfaces and driver coordinate syncing.",
  };

  const BREADCRUMB_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.shresthjindal.com" },
      { "@type": "ListItem", "position": 2, "name": "Projects", "item": "https://www.shresthjindal.com/#projects" },
      { "@type": "ListItem", "position": 3, "name": "Uber Ride Clone", "item": "https://www.shresthjindal.com/projects/uber-clone" }
    ]
  };

  return (
    <main className="min-h-screen pt-24 pb-12 bg-background text-foreground">
      <Script id="project-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(SCHEMA)}
      </Script>
      <Script id="breadcrumb-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(BREADCRUMB_SCHEMA)}
      </Script>

      <Container variant="default">
        {/* Back Link */}
        <div className="py-4">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm font-body-small text-muted-foreground hover:text-foreground transition-colors group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            <span>Back to Portfolio</span>
          </Link>
        </div>

        {/* Title Header */}
        <Section className="py-10 md:py-12">
          <div className="max-w-3xl">
            <span className="font-caption text-xs font-semibold text-accent block mb-2">
              Geolocational Mobile Concept
            </span>
            <h1 className="font-h1 uppercase tracking-tight text-foreground mb-4">
              Uber Ride <br />
              <span className="text-primary italic">Clone.</span>
            </h1>
            <p className="text-muted-foreground font-body-large mt-4 max-w-xl font-light">
              A geolocation-enabled dashboard tracking coordinates, path route lines, and ride booking flows.
            </p>
          </div>
        </Section>

        {/* Details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-8">
          <div className="lg:col-span-2 space-y-12">
            {/* The Problem */}
            <div className="space-y-4">
              <h2 className="font-h3 text-foreground border-b border-border pb-3">The Problem</h2>
              <p className="text-muted-foreground font-body-base leading-relaxed font-light">
                Syncing driver location updates with passenger clients, displaying route geometry, 
                and updating ride ETA details in real time requires robust, lightweight state synchronization.
              </p>
            </div>

            {/* The Solution */}
            <div className="space-y-4">
              <h2 className="font-h3 text-foreground border-b border-border pb-3">The Solution</h2>
              <p className="text-muted-foreground font-body-base leading-relaxed font-light">
                Created a React Native client integrating Mapbox GL. Connected coordinate listeners that 
                trigger geometry line generation when pickup and destination markers are set, 
                calculating dynamic travel times.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-6">
              <h2 className="font-h3 text-foreground border-b border-border pb-3">Core Features</h2>
              <ul className="space-y-4">
                {[
                  { title: "Vector Routing Maps", desc: "Embeds Mapbox maps displaying direct routing paths between markers." },
                  { title: "Location Auto-Complete", desc: "Integrates Mapbox Geocoding API to suggest address locations as users type." },
                  { title: "Fare Calculations", desc: "Computes estimates based on geographic distance and estimated travel durations." }
                ].map((item) => (
                  <li key={item.title} className="flex items-start gap-3">
                    <CheckCircle className="text-accent shrink-0 mt-1" size={18} />
                    <div>
                      <h4 className="font-body-large font-bold text-foreground">{item.title}</h4>
                      <p className="text-muted-foreground text-sm font-body-base mt-1 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            <div className="p-6 border border-border bg-card rounded-2xl sticky top-28 space-y-6">
              <h3 className="font-h4 text-foreground">Specifications</h3>
              
              <div className="space-y-3 text-xs font-body-base text-muted-foreground">
                <div>
                  <span className="font-bold text-foreground block">Stack</span>
                  <span>React Native, TypeScript, Node.js, Express</span>
                </div>
                <div>
                  <span className="font-bold text-foreground block">Geolocation Client</span>
                  <span>Mapbox GL / Address API</span>
                </div>
              </div>

              <div className="space-y-3 pt-4 border-t border-border">
                <TrackedLink
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  eventName="project_github_clicked"
                  params={{ project: "uber-clone" }}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-primary text-primary-foreground font-body-small font-semibold rounded-xl shadow-md transition-transform hover:scale-[1.01] active:scale-[0.99]"
                >
                  <Github size={16} />
                  <span>GitHub Repository</span>
                </TrackedLink>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
