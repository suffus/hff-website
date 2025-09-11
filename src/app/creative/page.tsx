import { Metadata } from 'next';
import CreativeClient from './CreativeClient';

export const metadata: Metadata = {
  title: 'Creative AI - Human Freedom Foundation',
  description: 'Unleashing artistic potential through AI tools that enhance visual arts, literature, music, and creative expression for everyone.',
};

export default function Creative() {
  return <CreativeClient />;
}
