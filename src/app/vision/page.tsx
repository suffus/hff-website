import { Metadata } from 'next';
import VisionClient from './VisionClient';

export const metadata: Metadata = {
  title: 'Our Vision - Human Freedom Foundation',
  description: 'Discover our vision for a future where AI amplifies human potential and serves humanity\'s highest aspirations.',
};

export default function Vision() {
  return <VisionClient />;
}



