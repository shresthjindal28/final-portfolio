import { ImageResponse } from 'next/og';
import { generateOGImage } from '@/lib/og-generator';

export const alt = 'Insights & Engineering Articles | Shresth Jindal';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    generateOGImage({
      title: 'Insights & Articles.',
      subtitle: 'Technical articles, deep dives into full-stack development, Next.js optimization, and engineering learnings by Shresth Jindal.',
      category: 'Engineering Blog',
      tags: ['Next.js', 'React', 'TypeScript', 'Software Architecture'],
    }),
    {
      ...size,
    }
  );
}
