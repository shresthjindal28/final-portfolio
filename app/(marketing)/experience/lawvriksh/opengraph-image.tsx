import { ImageResponse } from 'next/og';
import { generateOGImage } from '@/lib/og-generator';

export const alt = 'LawVriksh Internship Case Study | Shresth Jindal';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    generateOGImage({
      title: 'Full Stack Intern @ LawVriksh.',
      subtitle: 'Building a core SaaS platform, implementing Next.js dashboards, and connecting FastAPI backend controllers.',
      category: 'Experience Case Study',
      tags: ['Next.js', 'FastAPI', 'SaaS', 'TypeScript'],
    }),
    {
      ...size,
    }
  );
}
