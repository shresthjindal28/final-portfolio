import { ImageResponse } from 'next/og';
import { generateOGImage } from '@/lib/og-generator';

export const alt = 'Komi Extension Case Study | Shresth Jindal';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    generateOGImage({
      title: 'Komi Extension.',
      subtitle: 'Always-on, wake-word activated, voice + command-palette DevOps copilot for Git & GitHub automation powered by Google Gemini.',
      category: 'Browser Extension',
      tags: ['VS Code API', 'Node.js', 'Google Gemini', 'Git CLI'],
    }),
    {
      ...size,
    }
  );
}
