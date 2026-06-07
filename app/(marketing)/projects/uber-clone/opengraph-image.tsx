import { ImageResponse } from 'next/og';
import { generateOGImage } from '@/lib/og-generator';

export const alt = 'Uber Clone Case Study | Shresth Jindal';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    generateOGImage({
      title: 'Uber Ride Clone.',
      subtitle: 'A geolocation-enabled dashboard tracking GPS coordinates, Mapbox routing lines, and ride booking flows.',
      category: 'Mobile Concept Project',
      tags: ['React Native', 'Mapbox GL', 'Node.js', 'Express'],
    }),
    {
      ...size,
    }
  );
}
