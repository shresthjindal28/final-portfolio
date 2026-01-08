'use client';

import dynamic from 'next/dynamic';

const Ballpit = dynamic(() => import('../components/Ballpit'), {
  ssr: false,
  loading: () => null,
});

type Props = {
  count: number;
  gravity: number;
  friction: number;
  wallBounce: number;
  followCursor: boolean;
  colors: number[];
};

export default function BallpitBackground(props: Props) {
  return <Ballpit {...props} />;
}

