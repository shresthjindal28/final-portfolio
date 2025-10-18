import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | Shresth Jindal',
  description: 'Articles, tutorials, and case studies about web development, Next.js, and AI agents.',
  alternates: { canonical: 'https://www.shresthjindal.com/blog' },
};

// Placeholder posts list (replace with real content or CMS later)
const POSTS = [
  { title: 'A Developer’s Guide to On-Page SEO for React Apps', slug: 'on-page-seo-for-react' },
  { title: 'Why Next.js Is Perfect for High-Performance Websites', slug: 'why-nextjs' },
];

export default function BlogIndex() {
  return (
    <main className="min-h-screen bg-background text-foreground p-8">
      <section className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold">Blog</h1>
        <p className="mt-3 text-muted-foreground">Case studies, tutorials, and notes on web development and AI agents.</p>

        <ul className="mt-6 space-y-4">
          {POSTS.map((post) => (
            <li key={post.slug} className="border p-4 rounded-md">
              <h2 className="text-xl font-semibold">
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </h2>
              <Link href={`/blog/${post.slug}`} className="text-sm text-emerald-500">Read →</Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
