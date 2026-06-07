import Hero from '@/app/components/Hero';
import ClientOnlySections from '@/app/components/ClientOnlySections';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://www.shresthjindal.com',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Hero />
      <ClientOnlySections />
    </div>
  );
}
