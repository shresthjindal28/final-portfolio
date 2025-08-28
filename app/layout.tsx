import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "@/app/components/theme-provider";
import LenisProvider from "@/app/components/lenis-provider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shresth Jindal - Software Engineer",
  description:
    "I am a software developer, skilled in building amazing websites. Currently learning real software dev.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
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
