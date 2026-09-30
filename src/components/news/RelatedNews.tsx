'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import type { ArticleMeta } from '@/lib/news-shared';
import ArticleCard from './ArticleCard';

interface RelatedNewsProps {
  articles: ArticleMeta[];
  title?: string;
  description?: string;
  /** Link shown top-right, e.g. to the tag page. */
  moreHref?: string;
  moreLabel?: string;
  /** Visual style: `section` adds the standard page padding; `inline` does not. */
  layout?: 'section' | 'inline';
}

/**
 * Small grid of related articles. Renders nothing when there are no articles,
 * so it is safe to drop onto any page unconditionally.
 */
export default function RelatedNews({
  articles,
  title = 'Related news & analysis',
  description,
  moreHref = '/news',
  moreLabel = 'View all',
  layout = 'section',
}: RelatedNewsProps) {
  if (articles.length === 0) return null;

  const content = (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-8 flex flex-wrap items-end justify-between gap-4"
      >
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{title}</h2>
          {description && <p className="mt-2 max-w-2xl text-gray-600">{description}</p>}
        </div>
        <Link
          href={moreHref}
          className="inline-flex items-center text-sm font-semibold text-green-600 transition-colors hover:text-green-700"
        >
          {moreLabel}
          <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </motion.div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {articles.map((article, index) => (
          <ArticleCard key={article.slug} article={article} variant="compact" index={index} />
        ))}
      </div>
    </>
  );

  if (layout === 'inline') {
    return <section aria-label={title}>{content}</section>;
  }

  return (
    <section aria-label={title} className="mx-auto mt-16 max-w-4xl">
      {content}
    </section>
  );
}
