import { Metadata } from 'next';
import MedicalClient from './MedicalClient';
import { getArticlesByTag } from '@/lib/news';

export const metadata: Metadata = {
  title: 'Medical AI - Human Freedom Foundation',
  description: 'Revolutionizing healthcare through AI-assisted diagnosis, early disease detection, robotic surgery, and medical advancement.',
};

export default function Medical() {
  return <MedicalClient relatedArticles={getArticlesByTag('medical', 3)} />;
}
