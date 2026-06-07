import { ImageResponse } from 'next/og';
import { generateOGImage } from '@/lib/og-generator';

export const alt = 'Employee Management System Case Study | Shresth Jindal';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    generateOGImage({
      title: 'Employee Management System.',
      subtitle: 'A full-stack operations dashboard controlling company organizational structures, task tracking, and role permissions.',
      category: 'Operations Project',
      tags: ['React', 'Node.js', 'Express', 'MongoDB'],
    }),
    {
      ...size,
    }
  );
}
