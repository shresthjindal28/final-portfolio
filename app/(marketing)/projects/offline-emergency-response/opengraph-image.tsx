import { ImageResponse } from 'next/og';
import { generateOGImage } from '@/lib/og-generator';

export const alt = 'Offline Emergency Response (SentinelOS) Case Study | Shresth Jindal';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    generateOGImage({
      title: 'Offline Emergency Response (SentinelOS).',
      subtitle: 'A privacy-first, fully offline framework powered by a local LLM for system diagnostics, file verification, and automated failover scripts.',
      category: 'System Orchestration',
      tags: ['FastAPI', 'TypeScript', 'Python', 'Llama.cpp'],
    }),
    {
      ...size,
    }
  );
}
