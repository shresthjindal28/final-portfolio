import { ImageResponse } from 'next/og';
import { generateOGImage } from '@/lib/og-generator';

export const alt = 'P2P Chat App Case Study | Shresth Jindal';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    generateOGImage({
      title: 'P2P Chat App.',
      subtitle: 'A real-time messaging platform built to explore scalable communication systems, WebSockets, and Redis backend architecture.',
      category: 'Real-Time Communication',
      tags: ['React', 'Node.js', 'WebSockets', 'Redis'],
    }),
    {
      ...size,
    }
  );
}
