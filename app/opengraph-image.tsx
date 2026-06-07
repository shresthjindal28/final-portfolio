import { ImageResponse } from 'next/og';
import { generateOGImage } from '@/lib/og-generator';

export const alt = 'Shresth Jindal | Full Stack Developer Portfolio';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    generateOGImage({
      title: 'Shresth Jindal.',
      subtitle: 'Crafting high-performance, SEO-first applications and scalable architectures with Next.js, FastAPI, and TypeScript.',
      category: 'Developer Portfolio',
      tags: ['Next.js', 'React', 'FastAPI', 'TypeScript'],
    }),
    {
      ...size,
    }
  );
}
