import { Metadata } from 'next';
import AccessibilityClient from './AccessibilityClient';
import { getArticlesByTag } from '@/lib/news';

export const metadata: Metadata = {
  title: 'Accessibility - Human Freedom Foundation',
  description: 'Breaking barriers with AI solutions that empower disabled individuals and provide equal access to technology for everyone.',
};

export default function Accessibility() {
  return <AccessibilityClient relatedArticles={getArticlesByTag('accessibility', 3)} />;
}
