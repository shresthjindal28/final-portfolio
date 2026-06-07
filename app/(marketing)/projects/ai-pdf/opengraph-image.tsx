import { ImageResponse } from 'next/og';
import { generateOGImage } from '@/lib/og-generator';

export const alt = 'AI PDF Assistant Case Study | Shresth Jindal';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    generateOGImage({
      title: 'AI PDF Assistant (VeriVox).',
      subtitle: 'A secure, offline RAG system for legal document QA using local FAISS embeddings, FastAPI, and Next.js.',
      category: 'Flagship Project',
      tags: ['Next.js', 'FastAPI', 'FAISS', 'Python'],
    }),
    {
      ...size,
    }
  );
}
