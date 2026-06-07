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
  '/projects/google-drive-clone',
  '/projects/uber-clone',
  '/projects/employee-management-system',
  '/projects/offline-emergency-response',
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
