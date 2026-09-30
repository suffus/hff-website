import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import Layout from '@/components/Layout';
import FadeIn from '@/components/FadeIn';
import CategoryBadge from '@/components/news/CategoryBadge';
import RelatedNews from '@/components/news/RelatedNews';
import FinancialDisclaimer from '@/components/mdx/FinancialDisclaimer';
import SourceList from '@/components/mdx/SourceList';
import { mdxComponents } from '@/components/mdx/mdx-components';
import {
  CATEGORIES,
  formatDate,
  getAllSlugs,
  getArticleBySlug,
  getRelatedArticles,
  tagHref,
  tagLabel,
} from '@/lib/news';
import { SITE_NAME, absoluteUrl } from '@/lib/site';

interface Params {
  slug: string;
}

// All known articles are prerendered at build time. Unknown slugs fall through
// to the page, which returns 404 via notFound(). Leaving dynamicParams enabled
// means a freshly scaffolded draft is visible in `next dev` without a restart.
export const dynamicParams = true;

export function generateStaticParams(): Params[] {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};

  const url = absoluteUrl(article.href);
  const title = `${article.title} - ${SITE_NAME}`;
  const images = article.heroImage
    ? [article.heroImage.startsWith('http') ? article.heroImage : absoluteUrl(article.heroImage)]
    : undefined;

  return {
    title,
    description: article.summary,
    authors: [{ name: article.author }],
    keywords: article.tags,
    alternates: { canonical: url },
    robots: article.draft ? 'noindex, nofollow' : undefined,
    openGraph: {
      title: article.title,
      description: article.summary,
      url,
      type: 'article',
      siteName: SITE_NAME,
      publishedTime: article.date,
      authors: [article.author],
      tags: article.tags,
      images,
    },
    twitter: {
      card: images ? 'summary_large_image' : 'summary',
      title: article.title,
      description: article.summary,
      images,
    },
  };
}

export default async function ArticlePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const related = getRelatedArticles(article, 3);
  const categoryInfo = CATEGORIES[article.category];
  const bodyHasSourceList = /<SourceList\b/.test(article.content);

  const components = {
    ...mdxComponents,
    // Bind the frontmatter sources so authors can write a bare <SourceList />.
    SourceList: (props: { title?: string }) => <SourceList {...props} sources={article.sources} />,
  };

  return (
    <Layout>
      <article className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn className="mx-auto max-w-3xl">
            <nav aria-label="Breadcrumb" className="mb-8 text-sm text-gray-500">
              <ol className="flex flex-wrap items-center gap-2">
                <li>
                  <Link href="/news" className="hover:text-green-700">
                    News & Analysis
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li>
                  <Link href={categoryInfo.href} className="hover:text-green-700">
                    {categoryInfo.label}
                  </Link>
                </li>
              </ol>
            </nav>

            <header>
              <div className="mb-4 flex flex-wrap items-center gap-3">
                <CategoryBadge category={article.category} size="md" />
                {article.format === 'brief' && (
                  <span className="text-xs font-semibold uppercase tracking-wide text-gray-400">Brief</span>
                )}
                {article.draft && (
                  <span className="rounded bg-red-100 px-2 py-0.5 text-xs font-semibold uppercase tracking-wide text-red-700">
                    Draft - not published
                  </span>
                )}
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">{article.title}</h1>
              <p className="mt-6 text-xl leading-8 text-gray-600">{article.summary}</p>

              <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-y border-gray-200 py-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-emerald-500 text-sm font-bold text-white">
                    {initials(article.author)}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900">{article.author}</div>
                    <div className="text-xs text-gray-500">
                      <time dateTime={article.date}>{formatDate(article.date)}</time>
                      <span aria-hidden="true"> &middot; </span>
                      {article.readingTimeMinutes} min read
                    </div>
                  </div>
                </div>
                {article.tags.length > 0 && (
                  <ul className="flex flex-wrap gap-2">
                    {article.tags.map((tag) => (
                      <li key={tag}>
                        <Link
                          href={tagHref(tag)}
                          className="inline-block rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600 transition-colors hover:bg-green-100 hover:text-green-700"
                        >
                          {tagLabel(tag)}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </header>
          </FadeIn>

          {article.heroImage && (
            <FadeIn delay={0.1} className="mx-auto mt-10 max-w-4xl">
              <div className="relative aspect-[2/1] overflow-hidden rounded-3xl bg-gray-100 shadow-lg ring-1 ring-gray-200">
                <Image
                  src={article.heroImage}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 896px, 100vw"
                  className="object-cover"
                  priority
                  unoptimized={article.heroImage.startsWith('http')}
                />
              </div>
            </FadeIn>
          )}

          <FadeIn delay={0.15} className="mx-auto mt-12 max-w-3xl">
            <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200 sm:p-12">
              <div className="prose prose-lg prose-gray max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-gray-900 prose-a:font-medium prose-a:text-green-700 prose-a:underline prose-a:decoration-green-300 prose-a:underline-offset-2 hover:prose-a:decoration-green-500 prose-strong:text-gray-900 prose-blockquote:border-green-500 prose-blockquote:text-gray-700 prose-code:rounded prose-code:bg-gray-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:text-sm prose-code:font-normal prose-code:text-gray-800 prose-code:before:content-none prose-code:after:content-none prose-pre:bg-gray-900 prose-li:marker:text-green-600 prose-img:rounded-2xl prose-hr:border-gray-200">
                <MDXRemote
                  source={article.content}
                  components={components}
                  options={{
                    // Content is authored in-repo and trusted; allow JSX attribute
                    // expressions such as `items={[...]}`.
                    blockJS: false,
                    mdxOptions: { remarkPlugins: [remarkGfm] },
                  }}
                />
                {!bodyHasSourceList && <SourceList sources={article.sources} />}
                {article.category === 'financial' && <FinancialDisclaimer />}
              </div>
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-between gap-4 text-sm">
              <Link
                href="/news"
                className="inline-flex items-center font-semibold text-green-600 transition-colors hover:text-green-700"
              >
                <svg className="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to News & Analysis
              </Link>
              <Link href="/contact" className="text-gray-500 transition-colors hover:text-green-700">
                Have a correction or a tip? Contact us
              </Link>
            </div>
          </FadeIn>

          <RelatedNews
            articles={related}
            title="Related reading"
            moreHref={categoryInfo.href}
            moreLabel={`More ${categoryInfo.label.toLowerCase()}`}
          />
        </div>
      </article>
    </Layout>
  );
}

function initials(name: string): string {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return 'HFF';
  if (parts.length === 1) return parts[0].slice(0, 3).toUpperCase();
  return parts
    .slice(0, 3)
    .map((p) => p[0])
    .join('')
    .toUpperCase();
}
