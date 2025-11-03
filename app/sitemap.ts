import { MetadataRoute } from 'next';

const baseUrl = 'https://www.shresthjindal.com';

// Keep in sync with app routes and any dynamic sources (CMS/MDX)
const staticPages = [
  '/',
  '/web-design-services',
  '/website-redesign',
  '/nextjs-development',
  '/ai-agent-development',
  '/projects',
  '/contact',
  '/privatePage',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: MetadataRoute.Sitemap = [];

  for (const path of staticPages) {
    pages.push({ url: `${baseUrl}${path}`, lastModified: new Date() });
  }

  return pages;
}
