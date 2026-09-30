import type { Metadata } from 'next';
import Layout from '@/components/Layout';
import NewsFeedClient from '@/components/news/NewsFeedClient';
import TagChips from '@/components/news/TagChips';
import { getAllArticles, getAllTags } from '@/lib/news';
import { absoluteUrl } from '@/lib/site';

export const metadata: Metadata = {
  title: 'News & Analysis - Human Freedom Foundation',
  description:
    'AI industry news, technical explainers and financial analysis from the Human Freedom Foundation.',
  alternates: {
    canonical: absoluteUrl('/news'),
    types: { 'application/rss+xml': absoluteUrl('/news/rss.xml') },
  },
  openGraph: {
    title: 'News & Analysis - Human Freedom Foundation',
    description:
      'AI industry news, technical explainers and financial analysis from the Human Freedom Foundation.',
    url: absoluteUrl('/news'),
    type: 'website',
  },
};

export default function NewsPage() {
  const articles = getAllArticles();
  const tags = getAllTags();

  return (
    <Layout>
      <NewsFeedClient
        title="News & Analysis"
        description="What is happening in AI, and what it means for people. Industry news, technical explainers and financial analysis from the Human Freedom Foundation."
        articles={articles}
        activeCategory={null}
        aside={<TagChips tags={tags} />}
      />
    </Layout>
  );
}
