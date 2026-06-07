import { ImageResponse } from 'next/og';
import { generateOGImage } from '@/lib/og-generator';

export const alt = 'Aero3 AI Clinical Copilot Case Study | Shresth Jindal';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    generateOGImage({
      title: 'Aero3 Clinical AI.',
      subtitle: 'AI clinical copilot designed to reduce healthcare documentation overhead, generating structured SOAP notes from consultations.',
      category: 'Healthcare AI',
      tags: ['Next.js', 'FastAPI', 'Google Gemini', 'SOAP Notes'],
    }),
    {
      ...size,
    }
  );
}
