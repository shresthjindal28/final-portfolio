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
  { title: 'Building AI Agents with LangGraph: A Practical Guide', slug: 'building-ai-agents-with-langgraph' },
  { title: 'Production Next.js Performance Optimization Playbook', slug: 'production-nextjs-performance-optimizations' },
  { title: 'Case Study: Dandoo Marketplace Redesign', slug: 'case-study-dandoo-marketplace-redesign' },
  { title: 'Case Study: Devmaan Education Platform', slug: 'case-study-devmaan-education-platform' },
  { title: 'Case Study: Gradora B2B Website Revamp', slug: 'case-study-gradora-b2b-website' },
  { title: 'Case Study: Tailum Landing Page Conversion Boost', slug: 'case-study-tailum-landing-page' },
  { title: 'Accessible React UI: Practical Patterns and Tools', slug: 'building-accessible-react-ui' },
  { title: 'Ship Fast on Vercel: Real-World Tips', slug: 'ship-fast-with-vercel' },
  { title: 'Tailwind CSS in Production: Best Practices', slug: 'tailwindcss-in-production-best-practices' },
  { title: 'Portfolio Architecture with Next.js App Router', slug: 'portfolio-architecture-nextjs-app-router' },
  { title: 'Analytics + SEO for Next.js Sites', slug: 'analytics-and-seo-nextjs' },
  { title: 'Automating Workflows with GitHub Actions', slug: 'automating-workflows-with-github-actions' },
  { title: 'Creating a Modern Contact Form in Next.js', slug: 'creating-a-modern-contact-form-nextjs' },
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
