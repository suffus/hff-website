'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import type { ArticleMeta } from '@/lib/news-shared';
import ArticleCard from './news/ArticleCard';

interface LatestNewsProps {
  articles: ArticleMeta[];
}

/**
 * Homepage strip showing the most recent articles. Renders nothing if there
 * are no published articles.
 */
export default function LatestNews({ articles }: LatestNewsProps) {
  if (articles.length === 0) return null;

  return (
    <section aria-labelledby="latest-news-heading" className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10 flex flex-wrap items-end justify-between gap-4"
          >
            <div>
              <div className="mb-3 inline-flex items-center rounded-full bg-green-50 px-4 py-2 text-sm font-medium text-green-600">
                News & Analysis
              </div>
              <h2 id="latest-news-heading" className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Latest from HFF
              </h2>
              <p className="mt-3 max-w-2xl text-lg text-gray-600">
                Industry news, technical explainers and financial analysis, written from the
                perspective of people rather than platforms.
              </p>
            </div>
            <Link
              href="/news"
              className="inline-flex items-center rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-green-700 shadow-sm ring-1 ring-gray-200 transition-all hover:bg-green-50 hover:ring-green-200"
            >
              View all articles
              <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article, index) => (
              <ArticleCard key={article.slug} article={article} variant="full" index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
