import type { Metadata } from 'next';
import Script from 'next/script';
import type { Project } from '@/lib/projects-data';
import { projects } from '@/lib/projects-data';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'All Projects | Shresth Jindal',
  description: 'Explore all projects including web apps, UI libraries, and client work by Shresth Jindal.',
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://www.shresthjindal.com/projects' },
  openGraph: {
    title: 'All Projects | Shresth Jindal',
    description: 'Explore all projects including web apps, UI libraries, and client work by Shresth Jindal.',
    url: 'https://www.shresthjindal.com/projects',
    images: [{ url: 'https://www.shresthjindal.com/og-image.png', alt: 'Projects by Shresth Jindal' }],
  },
  twitter: { card: 'summary_large_image', images: ['https://www.shresthjindal.com/twitter-card.png'] },
};

export default function AllProjectsPage() {
  const ITEM_LIST_PAGE_SCHEMA = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Projects',
    url: 'https://www.shresthjindal.com/projects',
  };

  return (
    <main className="min-h-screen bg-background text-foreground p-8">
      <section className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">All Projects</h1>
        <p className="text-muted-foreground mb-10">A complete list of personal and client projects I&nbsp;have worked on.</p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-10">
          {projects.map((project: Project) => (
            <article key={project.title} className="rounded-lg overflow-hidden bg-[#0b0b0b] border border-border/40 shadow-[0_12px_30px_-10px_rgba(16,185,129,0.35)]">
              <div className="aspect-[21/9] relative">
                <Image
                  src={project.image}
                  alt={`${project.title} – portfolio project`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h2 className="text-lg font-semibold text-white">{project.title}</h2>
                <p className="text-sm text-muted-foreground mt-1">{project.description}</p>
                <div className="flex items-center gap-4 mt-3">
                  <Link href={project.liveUrl} className="text-emerald-400 hover:underline" target="_blank" rel="noopener noreferrer">Live</Link>
                  <Link href={project.githubUrl} className="text-emerald-400 hover:underline" target="_blank" rel="noopener noreferrer">Repo</Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* JSON-LD for the page */}
      <Script id="projects-collection-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(ITEM_LIST_PAGE_SCHEMA)}
      </Script>

      {/* ItemList structured data for all projects (server-safe) */}
      <Script id="projects-itemlist-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          itemListElement: projects.map((p: Project, index: number) => ({
            "@type": "ListItem",
            position: index + 1,
            url: p.liveUrl,
            name: p.title,
            description: p.description,
          })),
        })}
      </Script>
    </main>
  );
}