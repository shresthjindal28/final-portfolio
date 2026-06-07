import { MetadataRoute } from 'next';

const baseUrl = 'https://www.shresthjindal.com';

const staticPages = [
  '/',
  '/web-design-services',
  '/website-redesign',
  '/nextjs-development',
  '/ai-agent-development',
  '/projects',
  '/projects/ai-pdf',
  '/projects/aero3',
  '/projects/offline-emergency-response',
  '/projects/p2p-chat-app',
  '/projects/komi-extension',
  '/projects/employee-management-system',
  '/experience/lawvriksh',
  '/insights',
  '/contact',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: MetadataRoute.Sitemap = [];

  for (const path of staticPages) {
    pages.push({ url: `${baseUrl}${path}`, lastModified: new Date() });
  }

  return pages;
}
