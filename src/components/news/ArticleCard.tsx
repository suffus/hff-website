'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { formatDateShort, tagHref, tagLabel, type ArticleMeta } from '@/lib/news-shared';
import CategoryBadge from './CategoryBadge';

interface ArticleCardProps {
  article: ArticleMeta;
  /**
   * - `featured`: large hero card for the top of the feed
   * - `full`: standard feed card
   * - `compact`: single-line style used for briefs and sidebars
   */
  variant?: 'featured' | 'full' | 'compact';
  /** Stagger index for the entrance animation. */
  index?: number;
  /** Disable in-view animation (e.g. above the fold). */
  animate?: boolean;
}

function Meta({ article, className = '' }: { article: ArticleMeta; className?: string }) {
  return (
    <div className={`flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-gray-500 ${className}`}>
      <time dateTime={article.date}>{formatDateShort(article.date)}</time>
      <span aria-hidden="true">&middot;</span>
      <span>{article.readingTimeMinutes} min read</span>
      {article.format === 'brief' && (
        <>
          <span aria-hidden="true">&middot;</span>
          <span className="font-medium uppercase tracking-wide text-gray-400">Brief</span>
        </>
      )}
      {article.draft && (
        <>
          <span aria-hidden="true">&middot;</span>
          <span className="rounded bg-red-100 px-1.5 py-0.5 font-semibold uppercase tracking-wide text-red-700">
            Draft
          </span>
        </>
      )}
    </div>
  );
}

function Tags({ tags }: { tags: string[] }) {
  if (tags.length === 0) return null;
  return (
    <ul className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <li key={tag}>
          <Link
            href={tagHref(tag)}
            className="inline-block rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-600 transition-colors hover:bg-green-100 hover:text-green-700"
          >
            {tagLabel(tag)}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default function ArticleCard({
  article,
  variant = 'full',
  index = 0,
  animate = true,
}: ArticleCardProps) {
  const motionProps = animate
    ? {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.5, delay: Math.min(index, 6) * 0.08 },
      }
    : {};

  if (variant === 'compact') {
    return (
      <motion.article {...motionProps} className="group">
        <Link
          href={article.href}
          className="block rounded-2xl bg-white p-5 shadow-sm ring-1 ring-gray-200 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md hover:ring-green-200"
        >
          <div className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-2">
            <CategoryBadge category={article.category} link={false} />
            <Meta article={article} />
          </div>
          <h3 className="text-base font-semibold leading-snug text-gray-900 transition-colors group-hover:text-green-700">
            {article.title}
          </h3>
          <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-gray-600">{article.summary}</p>
        </Link>
      </motion.article>
    );
  }

  if (variant === 'featured') {
    return (
      <motion.article {...motionProps} className="group">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white to-gray-50 p-8 shadow-lg ring-1 ring-gray-200/60 transition-all duration-300 hover:shadow-xl hover:ring-green-200/60 lg:p-12">
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <div className="relative">
            <div className="mb-4 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center rounded-full bg-green-600 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
                Featured
              </span>
              <CategoryBadge category={article.category} size="md" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              <Link href={article.href} className="transition-colors group-hover:text-green-700">
                {article.title}
              </Link>
            </h2>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-gray-600">{article.summary}</p>
            <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
              <div>
                <div className="text-sm font-medium text-gray-900">{article.author}</div>
                <Meta article={article} className="mt-1" />
              </div>
              <Tags tags={article.tags} />
            </div>
            <Link
              href={article.href}
              className="mt-8 inline-flex items-center font-semibold text-green-600 transition-transform duration-200 group-hover:translate-x-1"
            >
              Read the analysis
              <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </motion.article>
    );
  }

  return (
    <motion.article {...motionProps} className="group">
      <div className="flex h-full flex-col rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:ring-green-200">
        <div className="mb-3 flex flex-wrap items-center justify-between gap-x-3 gap-y-2">
          <CategoryBadge category={article.category} />
          <Meta article={article} />
        </div>
        <h3 className="text-xl font-bold leading-snug text-gray-900 transition-colors group-hover:text-green-700">
          <Link href={article.href}>{article.title}</Link>
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-600">{article.summary}</p>
        <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
          <span className="text-xs font-medium text-gray-500">{article.author}</span>
          <Tags tags={article.tags} />
        </div>
      </div>
    </motion.article>
  );
}
