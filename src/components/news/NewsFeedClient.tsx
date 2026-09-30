'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import type { ReactNode } from 'react';
import type { ArticleMeta, Category } from '@/lib/news-shared';
import ArticleCard from './ArticleCard';
import CategoryTabs from './CategoryTabs';

interface NewsFeedClientProps {
  title: string;
  description: string;
  articles: ArticleMeta[];
  activeCategory: Category | null;
  /** Show the newest long-form piece as a featured hero above the list. */
  showFeatured?: boolean;
  /** Optional element rendered under the tabs (e.g. tag chips). */
  aside?: ReactNode;
  emptyMessage?: string;
}

export default function NewsFeedClient({
  title,
  description,
  articles,
  activeCategory,
  showFeatured = true,
  aside,
  emptyMessage = 'No articles yet. Check back soon.',
}: NewsFeedClientProps) {
  const featured = showFeatured
    ? (articles.find((a) => a.format === 'analysis') ?? articles[0])
    : undefined;
  const rest = featured ? articles.filter((a) => a.slug !== featured.slug) : articles;

  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-6xl"
        >
          <div className="flex items-start justify-center gap-8">
            <div className="max-w-2xl text-center lg:text-left">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">{title}</h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">{description}</p>
            </div>
            <div className="mt-4 hidden lg:block">
              <Image
                src="/hff-tree.png"
                alt="Human Freedom Foundation Tree Logo"
                width={190}
                height={190}
                className="object-contain"
                priority
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mx-auto mt-12 flex max-w-6xl flex-col gap-6 lg:flex-row lg:items-center lg:justify-between"
        >
          <CategoryTabs active={activeCategory} />
          <Link
            href="/news/rss.xml"
            className="inline-flex items-center gap-2 self-start text-sm font-medium text-gray-500 transition-colors hover:text-green-700 lg:self-auto"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M6.18 15.64a2.18 2.18 0 1 1 0 4.36 2.18 2.18 0 0 1 0-4.36zM4 4.44A15.56 15.56 0 0 1 19.56 20h-2.83A12.73 12.73 0 0 0 4 7.27V4.44zm0 5.66a9.9 9.9 0 0 1 9.9 9.9h-2.83A7.07 7.07 0 0 0 4 12.93V10.1z" />
            </svg>
            RSS feed
          </Link>
        </motion.div>

        {aside && <div className="mx-auto mt-6 max-w-6xl">{aside}</div>}

        <div className="mx-auto mt-12 max-w-6xl">
          {articles.length === 0 ? (
            <div className="rounded-2xl bg-white p-12 text-center text-gray-500 shadow-sm ring-1 ring-gray-200">
              {emptyMessage}
            </div>
          ) : (
            <div className="space-y-10">
              {featured && <ArticleCard article={featured} variant="featured" animate={false} />}
              {rest.length > 0 && (
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  {rest.map((article, index) => (
                    <ArticleCard
                      key={article.slug}
                      article={article}
                      variant={article.format === 'brief' ? 'compact' : 'full'}
                      index={index}
                    />
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
