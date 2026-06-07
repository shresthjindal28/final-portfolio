import { ImageResponse } from 'next/og';
import { generateOGImage } from '@/lib/og-generator';

export const alt = 'Google Drive Clone Case Study | Shresth Jindal';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    generateOGImage({
      title: 'Google Drive Clone.',
      subtitle: 'A full-featured cloud storage dashboard replicating directory nesting, AWS S3 file chunks upload, and folder permissions.',
      category: 'Cloud Storage Project',
      tags: ['Next.js', 'Express', 'MongoDB', 'AWS S3'],
    }),
    {
      ...size,
    }
  );
}
