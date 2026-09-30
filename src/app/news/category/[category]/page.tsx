import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Layout from '@/components/Layout';
import NewsFeedClient from '@/components/news/NewsFeedClient';
import { CATEGORIES, CATEGORY_IDS, getArticlesByCategory, isCategory } from '@/lib/news';
import { absoluteUrl } from '@/lib/site';

interface Params {
  category: string;
}

export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return CATEGORY_IDS.map((category) => ({ category }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { category } = await params;
  if (!isCategory(category)) return {};
  const info = CATEGORIES[category];
  const title = `${info.label} - News & Analysis - Human Freedom Foundation`;
  return {
    title,
    description: info.description,
    alternates: { canonical: absoluteUrl(info.href) },
    openGraph: { title, description: info.description, url: absoluteUrl(info.href), type: 'website' },
  };
}

export default async function CategoryPage({ params }: { params: Promise<Params> }) {
  const { category } = await params;
  if (!isCategory(category)) notFound();

  const info = CATEGORIES[category];
  const articles = getArticlesByCategory(category);

  return (
    <Layout>
      <NewsFeedClient
        title={info.label}
        description={info.description}
        articles={articles}
        activeCategory={category}
        showFeatured={category !== 'news'}
        emptyMessage={`No ${info.label.toLowerCase()} articles yet. Check back soon.`}
      />
    </Layout>
  );
}
