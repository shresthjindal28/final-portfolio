import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "@/app/components/theme-provider";
import LenisProvider from "@/app/components/lenis-provider";
import Script from "next/script";
import "./globals.css";

// ✅ Global SEO Metadata
export const metadata: Metadata = {
  title: {
    default: "Freelance Web Developer in Bangalore – Shresth Jindal",
    template: "%s | Shresth Jindal",
  },
  description:
    "Freelance web developer and full-stack engineer in Bangalore building fast, SEO-friendly websites and web apps.",
  keywords: [
    "web developer",
    "freelance web developer",
    "full stack developer",
    "React developer",
    "Next.js developer",
    "web developer Bangalore",
    "hire web developer",
    "software engineer",
    "portfolio",
    // Expanded semantic coverage
    "web developer freelancer",
    "freelance web developer Bangalore",
    "hire freelance web developer",
    "React freelancer Bangalore",
    "Next.js freelancer Bangalore",
    "web development services Bangalore",
    "full-stack freelancer",
    "contract web developer",
    "independent web developer"
  ],
  metadataBase: new URL("https://www.shresthjindal.com"),
  alternates: {
    canonical: "https://www.shresthjindal.com",
  },
  openGraph: {
    title: "Freelance Web Developer in Bangalore – Shresth Jindal",
    description:
      "I build fast, SEO-friendly websites and scalable web applications using Next.js, React, and TypeScript.",
    url: "https://www.shresthjindal.com",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Freelance Web Developer in Bangalore – Shresth Jindal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Freelance Web Developer in Bangalore – Shresth Jindal",
    description:
      "I build fast, SEO-friendly websites and scalable web applications using Next.js, React, and TypeScript.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* ✅ Web App Manifest */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="apple-mobile-web-app-title" content="Portfolio" />

        {/* ✅ Favicons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/svg+xml" href="/icon0.svg" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        <link rel="mask-icon" href="/icon0.svg" color="#000000" />
        <link rel="alternate icon" href="/logo.png" type="image/png" sizes="32x32" />

        {/* ✅ Structured Data */}
        <Script id="structured-data" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Shresth Jindal",
            "jobTitle": "Freelance Web Developer",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Bangalore",
              "addressCountry": "India"
            },
            "url": "https://www.shresthjindal.com",
            "email": "mailto:shresthjindal28@gmail.com",
            "sameAs": [
              "https://github.com/shresthjindal28",
              "https://www.linkedin.com/in/shresth-jindal-b074ba28b/",
              "https://x.com/shresth_ji76019"
            ]
          })}
        </Script>
        <Script id="website-structured-data" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Shresth Jindal Portfolio",
            "url": "https://www.shresthjindal.com",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://www.shresthjindal.com/?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          })}
        </Script>
        {/* ProfessionalService Structured Data to reinforce service intent */}
        <Script id="service-structured-data" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "Freelance Web Developer",
            "provider": {
              "@type": "Person",
              "name": "Shresth Jindal"
            },
            "areaServed": {
              "@type": "AdministrativeArea",
              "name": "Bangalore, India"
            },
            "serviceType": "Web Development, React/Next.js, SEO Optimization",
            "url": "https://www.shresthjindal.com",
            "sameAs": [
              "https://github.com/shresthjindal28",
              "https://www.linkedin.com/in/shresth-jindal-b074ba28b/",
              "https://x.com/shresth_ji76019"
            ],
            "offers": {
              "@type": "Offer",
              "priceCurrency": "INR",
              "price": "40000-200000",
              "availability": "https://schema.org/InStock"
            }
          })}
        </Script>

        {/* ✅ Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-F9E2071HFR"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);} 
            gtag('js', new Date());
            gtag('config', 'G-F9E2071HFR');
          `}
        </Script>
      </head>
      <body className="antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LenisProvider>{children}</LenisProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}