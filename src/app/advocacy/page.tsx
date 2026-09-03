import { Metadata } from 'next';
import AdvocacyClient from './AdvocacyClient';

export const metadata: Metadata = {
  title: 'AI and the Arc of Human Progress - Human Freedom Foundation',
  description: 'A comprehensive advocacy piece exploring how AI represents the next great liberation in human history, following the pattern of transformative technologies that have expanded human potential.',
  keywords: ['AI advocacy', 'human progress', 'artificial intelligence', 'technology liberation', 'human potential'],
  authors: [{ name: 'Human Freedom Foundation' }],
  openGraph: {
    title: 'AI and the Arc of Human Progress: The Next Great Liberation',
    description: 'Exploring how AI represents the next great liberation in human history, following the pattern of transformative technologies that have expanded human potential.',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI and the Arc of Human Progress: The Next Great Liberation',
    description: 'Exploring how AI represents the next great liberation in human history.',
  },
};

export default function AdvocacyPage() {
  return <AdvocacyClient />;
}




