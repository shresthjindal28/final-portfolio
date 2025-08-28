import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "@/app/components/theme-provider";
import LenisProvider from "@/app/components/lenis-provider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shresth Jindal - Software Engineer",
  description:
    "I am a software developer, skilled in building amazing websites. Currently learning real software dev.",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    images: ["/logo.png"],
    title: "Shresth Jindal - Software Engineer",
    description:
      "I am a software developer, skilled in building amazing websites. Currently learning real software dev.",
    url: "https://your-domain.com", // Replace with your actual domain
    type: "website",
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
        <link rel="icon" href="/logo.png" />
      </head>
      <body className={`antialiased`}>
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
