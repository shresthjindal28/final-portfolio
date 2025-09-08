import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "@/app/components/theme-provider";
import LenisProvider from "@/app/components/lenis-provider";
import Script from "next/script";
import "./globals.css";

// ✅ Global SEO Metadata
export const metadata: Metadata = {
  title: "Shresth Jindal - Software Engineer",
  description:
    "I am a software developer, skilled in building amazing websites. Currently learning real software dev.",
  metadataBase: new URL("https://www.shresthjindal.com"),
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Shresth Jindal – Full Stack Developer",
    description:
      "I build scalable web applications with modern tools and clean code.",
    url: "https://www.shresthjindal.com",
    type: "website",
    images: [
      {
        url: "/og-image.png", // 1200x630 recommended
        width: 1200,
        height: 630,
        alt: "Shresth Jindal – Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shresth Jindal – Full Stack Developer",
    description:
      "I build scalable web applications with modern tools and clean code.",
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
    {/* ✅ Favicons for all platforms */}
    <link rel="icon" href="/favicon.ico" sizes="any" />
    <link rel="icon" type="image/svg+xml" href="/icon0.svg" />
    <link rel="apple-touch-icon" href="/apple-icon.png" />
    <link rel="manifest" href="/manifest.json" />

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
