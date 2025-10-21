import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

// Mock content store — replace with real data or MDX in future
const POSTS: Record<string, { title: string; content: string; description: string }> = {
  'on-page-seo-for-react': {
    title: "A Developer’s Guide to On-Page SEO for React Apps",
    description: 'Practical steps to make React and Next.js apps SEO-friendly.',
    content:
      'On-page SEO for React and Next.js apps starts with the fundamentals: semantic HTML, proper heading hierarchy (h1, h2, h3), and descriptive meta tags. With Next.js, leverage the Metadata API to set title, description, and canonical URLs per page. Ensure each page has unique, intent-driven content that maps to target keywords.\n\nBeyond basics, optimize Core Web Vitals: use Next.js Image for responsive, lazy-loaded images, defer non-critical JS, and prefetch routes. Server Components can minimize client-side JS and improve TTFB. Finally, implement structured data (JSON-LD) where relevant—articles, products, and breadcrumbs—to help search engines understand your content.\n\nMeasure, iterate, repeat: use Lighthouse, WebPageTest, and Search Console to track improvements and address regressions early.'
  },
  'why-nextjs': {
    title: 'Why Next.js Is Perfect for High-Performance Websites',
    description: 'Performance and DX benefits of Next.js for modern web apps.',
    content:
      'Next.js blends performance, developer experience, and modern web standards. Static generation and server-side rendering give you control over TTFB and caching. The App Router with Server Components reduces client-side JavaScript and improves hydration times.\n\nBuilt-in routing, image optimization, middleware, and edge runtime unlock global performance with minimal configuration. Combined with Vercel, you get instant previews, fast deployments, and analytics out-of-the-box. For teams shipping portfolio sites, SaaS dashboards, or content-heavy experiences, Next.js provides a pragmatic balance of speed, maintainability, and scalability.'
  },
  'building-ai-agents-with-langgraph': {
    title: 'Building AI Agents with LangGraph: A Practical Guide',
    description: 'How I design, implement, and deploy task-oriented AI agents using LangGraph.',
    content:
      'LangGraph lets you model agents as graphs of nodes and edges, making complex workflows transparent and maintainable. I start by defining capabilities (tools/functions), context (memory/state), and control flows (branching, retries, timeouts). For production readiness, I add observability—logs, metrics, traces—and enforce strict input/output schemas.\n\nA good agent balances autonomy and guardrails: it knows when to call tools, how to handle failures, and when to ask for human oversight. To deploy, I containerize the agent, add a lightweight API, and monitor usage. The result is a reliable assistant that can research, summarize, act on APIs, and deliver results consistently.'
  },
  'production-nextjs-performance-optimizations': {
    title: 'Production Next.js Performance Optimization Playbook',
    description: 'Battle-tested tactics I use to keep Next.js apps fast in production.',
    content:
      'Performance is a discipline, not a one-off task. I profile slow routes, audit JavaScript payloads, and trim client-side code by migrating logic to Server Components. I use streaming for large data fetches, cache aggressively at the edge, and avoid unnecessary re-renders with memoization and stable props.\n\nImages are handled with responsive sizes, modern formats (WebP/AVIF), and quality tuning. Fonts are self-hosted with font-display: swap and preloading. I monitor Core Web Vitals continuously and set performance budgets in CI to catch regressions early.'
  },
  'case-study-dandoo-marketplace-redesign': {
    title: 'Case Study: Dandoo Marketplace Redesign',
    description: 'How I modernized Dandoo’s marketplace UX to improve conversions and trust.',
    content:
      'Dandoo’s marketplace needed clarity and speed. I simplified navigation, introduced trust signals (reviews, badges), and improved product discovery with better filters and search. Technically, I optimized rendering, compressed assets, and implemented smarter caching.\n\nPost-launch, bounce rates dropped and engagement improved. The redesign balanced brand personality with UX heuristics—clear CTAs, scannable content, and consistent component patterns.'
  },
  'case-study-devmaan-education-platform': {
    title: 'Case Study: Devmaan Education Platform',
    description: 'Building a robust learning experience with Next.js and accessible UI.',
    content:
      'For Devmaan, I focused on an accessible, distraction-free learning experience: readable typography, keyboard navigation, and consistent language across the interface. I integrated analytics to measure student progress and performance.\n\nThe stack leveraged Next.js App Router, server-side data hydration for lessons, and optimized media delivery. The result was a stable, scalable platform that supported growth and provided a better user experience.'
  },
  'case-study-gradora-b2b-website': {
    title: 'Case Study: Gradora B2B Website Revamp',
    description: 'Elevating a B2B brand with speed, clarity, and conversion-focused UX.',
    content:
      'Gradora’s audience values clarity and credibility. I streamlined messaging, emphasized proof (case studies, testimonials), and improved contact flows. Performance was tuned with caching, minimal client JS, and edge deployments.\n\nThe revamp improved lead quality and made the brand feel modern and authoritative without sacrificing clarity or performance.'
  },
  'case-study-tailum-landing-page': {
    title: 'Case Study: Tailum Landing Page Conversion Boost',
    description: 'Design and technical improvements that increased signups for Tailum.',
    content:
      'Tailum’s landing page needed sharper messaging and faster load times. I refined the hero section, added social proof, and clarified pricing. Technically, I reduced JS, optimized images, and added A/B testing with analytics.\n\nThe result was higher conversion rates and clearer audience fit, built on a clean, maintainable codebase.'
  },
  'building-accessible-react-ui': {
    title: 'Accessible React UI: Practical Patterns and Tools',
    description: 'Patterns, libraries, and habits I use to ship accessible interfaces.',
    content:
      'Accessibility is a product feature. I use semantic HTML, proper ARIA where necessary, and focus management patterns. Radix UI helps with accessible primitives, while testing includes keyboard-only navigation and screen readers.\n\nColor contrast, motion preferences, and form validation messages are all part of the experience. Accessibility benefits everyone and improves conversions and trust.'
  },
  'ship-fast-with-vercel': {
    title: 'Ship Fast on Vercel: Real-World Tips',
    description: 'How I use Vercel previews, edge caching, and analytics to move quickly.',
    content:
      'Vercel’s preview deployments let me validate changes with stakeholders instantly. Analytics and performance monitoring help keep sites fast globally. I use edge caching for public routes, environment variables for safe config, and protected previews for private work.\n\nCombined with Next.js, Vercel becomes a platform for fast, confident iteration.'
  },
  'tailwindcss-in-production-best-practices': {
    title: 'Tailwind CSS in Production: Best Practices',
    description: 'Tactics to keep your Tailwind apps lean, consistent, and maintainable.',
    content:
      'Tailwind shines in production when used with discipline: meaningful design tokens, utility-first patterns, and designer-friendly docs. I use componentized patterns for complex UIs and keep global styles minimal.\n\nAvoid class bloat with proper extraction, leverage Tailwind Merge for predictable overrides, and maintain a style guide to keep teams aligned.'
  },
  'portfolio-architecture-nextjs-app-router': {
    title: 'Portfolio Architecture with Next.js App Router',
    description: 'How I structure my portfolio for speed, SEO, and maintainability.',
    content:
      'My portfolio uses the App Router, server-rendered routes, and dynamic metadata. I keep client components small and focused on interactivity, while heavy logic stays on the server. Image optimization, prefetching, and sensible caching ensure the site feels instant.\n\nThe result is a codebase that is easy to extend—services pages, blog posts, and case studies—without sacrificing performance.'
  },
  'analytics-and-seo-nextjs': {
    title: 'Analytics + SEO for Next.js Sites',
    description: 'Combining measurement and discoverability to drive growth.',
    content:
      'I set up privacy-respecting analytics and track metrics that matter: conversions, engagement, and content performance. SEO work focuses on intent-driven pages, clean URL structure, and high-quality metadata.\n\nTogether, analytics and SEO create a feedback loop that informs content strategy and technical improvements.'
  },
  'automating-workflows-with-github-actions': {
    title: 'Automating Workflows with GitHub Actions',
    description: 'CI/CD pipelines I use to lint, test, build, and deploy with confidence.',
    content:
      'GitHub Actions lets me automate quality: linting, type checks, tests, and performance budgets. I build and deploy to staging automatically, run Lighthouse CI, and notify on failures.\n\nAutomation reduces manual effort and catches regressions early, so teams can move faster without breaking production.'
  },
  'creating-a-modern-contact-form-nextjs': {
    title: 'Creating a Modern Contact Form in Next.js',
    description: 'A practical guide to building a secure, accessible contact form.',
    content:
      'A great contact form balances usability and safety. I use accessible labels, helpful error messages, and progressive enhancement. Server-side validation protects against spam, and rate limiting keeps the endpoint healthy.\n\nAdd analytics to measure drop-offs and success rates, and test with keyboard-only navigation to ensure everyone can reach you.'
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
