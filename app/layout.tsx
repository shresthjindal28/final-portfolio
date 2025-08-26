import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from '@vercel/analytics/next';
import { ThemeProvider } from "@/app/components/theme-provider";
import LenisProvider from "@/app/components/lenis-provider";
import "./globals.css";

// NOTE: Set `siteUrl` to your production URL.
const siteUrl = "https://www.shresthjindal.com";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Shresth Jindal — Software Engineer",
    template: "%s | Shresth Jindal",
  },
  description:
    "Shresth Jindal — Full-stack developer building modern web apps with React and Next.js. Portfolio showcasing projects, experience, and ways to get in touch.",
  keywords: [
    "Shresth Jindal",
    "software engineer",
    "full-stack",
    "portfolio",
    "React",
    "Next.js",
    "TypeScript",
  ],
  authors: [
    {
      name: "Shresth Jindal",
      url: siteUrl,
    },
  ],
  icons: {
    icon: "/logo.png",
  },
  openGraph: {
    title: "Shresth Jindal — Software Engineer",
    description:
      "Portfolio of Shresth Jindal — projects, skills, and contact information.",
    url: siteUrl,
    siteName: "Shresth Jindal",
    images: [
      {
  // Use the `logo.png` in /public as the social preview image. Replace that file in /public to change the head image.
  url: `${siteUrl}/logo.png`,
        width: 1200,
        height: 630,
        alt: "Shresth Jindal portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shresth Jindal — Software Engineer",
    description:
      "Portfolio of Shresth Jindal — projects, skills, and contact information.",
  images: [`${siteUrl}/logo.png`],
  },
  alternates: {
    canonical: siteUrl,
  },
  // Basic robots metadata for Next.js metadata system
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const siteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  url: siteUrl,
  name: "Shresth Jindal",
  author: {
    "@type": "Person",
    name: "Shresth Jindal",
  },
  description:
    "Portfolio of Shresth Jindal — projects, skills, and contact information.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* JSON-LD structured data (search engines pick this up from body too) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteSchema) }}
        />
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <LenisProvider>
              {children}
            </LenisProvider>
          </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
