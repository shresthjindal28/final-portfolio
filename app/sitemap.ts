import { MetadataRoute } from 'next';

const baseUrl = 'https://www.shresthjindal.com';

// Keep in sync with app routes and any dynamic sources (CMS/MDX)
const staticPages = [
  '/',
  '/web-design-services',
  '/website-redesign',
  '/nextjs-development',
  '/ai-agent-development',
  '/contact',
  '/privatePage',
  '/blog'
];

// Mirror the POSTS short list from /app/blog/[slug]/page.tsx
const blogSlugs = ['on-page-seo-for-react', 'why-nextjs'];

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: MetadataRoute.Sitemap = [];

  for (const path of staticPages) {
    pages.push({ url: `${baseUrl}${path}`, lastModified: new Date() });
  }

  for (const slug of blogSlugs) {
    pages.push({ url: `${baseUrl}/blog/${slug}`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 });
  }

  return pages;
}
