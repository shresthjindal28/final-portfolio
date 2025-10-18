import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

// Mock content store — replace with real data or MDX in future
const POSTS: Record<string, { title: string; content: string; description: string }> = {
  'on-page-seo-for-react': {
    title: "A Developer’s Guide to On-Page SEO for React Apps",
    description: 'Practical steps to make React and Next.js apps SEO-friendly.',
    content: 'Long-form article content goes here. Replace with MDX or CMS.'
  },
  'why-nextjs': {
    title: 'Why Next.js Is Perfect for High-Performance Websites',
    description: 'Performance and DX benefits of Next.js for modern web apps.',
    content: 'Long-form article content goes here. Replace with MDX or CMS.'
  }
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = POSTS[slug];
  if (!post) return { title: 'Post not found' };
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `https://www.shresthjindal.com/blog/${slug}` },
  };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = POSTS[slug];
  if (!post) return notFound();

  return (
    <main className="min-h-screen bg-background text-foreground p-8">
      <article className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold">{post.title}</h1>
        <p className="mt-3 text-muted-foreground">{post.description}</p>
        <section className="mt-6 text-muted-foreground">
          <p>{post.content}</p>
        </section>
      </article>
    </main>
  );
}
