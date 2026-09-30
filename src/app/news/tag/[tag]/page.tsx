import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Layout from '@/components/Layout';
import NewsFeedClient from '@/components/news/NewsFeedClient';
import TagChips from '@/components/news/TagChips';
import { PILLAR_TAGS, getAllTags, getArticlesByTag, tagHref, tagLabel } from '@/lib/news';
import { absoluteUrl } from '@/lib/site';

interface Params {
  tag: string;
}

// Known tags are prerendered; unknown tags 404 via notFound(). See [slug]/page.tsx.
export const dynamicParams = true;

export function generateStaticParams(): Params[] {
  return getAllTags().map(({ tag }) => ({ tag }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { tag } = await params;
  const label = tagLabel(tag);
  const title = `${label} - News & Analysis - Human Freedom Foundation`;
  const description = `AI news and analysis from the Human Freedom Foundation tagged "${label}".`;
  return {
    title,
    description,
    alternates: { canonical: absoluteUrl(tagHref(tag)) },
    openGraph: { title, description, url: absoluteUrl(tagHref(tag)), type: 'website' },
  };
}

export default async function TagPage({ params }: { params: Promise<Params> }) {
  const { tag } = await params;
  const articles = getArticlesByTag(tag);
  if (articles.length === 0) notFound();

  const label = tagLabel(tag);
  const pillar = PILLAR_TAGS[tag];

  return (
    <Layout>
      <NewsFeedClient
        title={label}
        description={
          pillar
            ? `News and analysis related to our ${pillar.label} focus area.`
            : `Everything we have published about ${label.toLowerCase()}.`
        }
        articles={articles}
        activeCategory={null}
        showFeatured={false}
        aside={
          <div className="flex flex-col gap-4">
            {pillar && (
              <p className="text-sm text-gray-600">
                Read about our work in this area on the{' '}
                <Link href={pillar.href} className="font-semibold text-green-700 hover:text-green-800">
                  {pillar.label} page
                </Link>
                .
              </p>
            )}
            <TagChips tags={getAllTags()} active={tag} />
          </div>
        }
      />
    </Layout>
  );
}
