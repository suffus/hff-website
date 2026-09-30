import type { MetadataRoute } from 'next';
import { CATEGORY_LIST, getAllArticles, getAllTags, tagHref } from '@/lib/news';
import { absoluteUrl } from '@/lib/site';

export const dynamic = 'force-static';

const STATIC_PAGES: { path: string; priority: number; changeFrequency: 'weekly' | 'monthly' }[] = [
  { path: '/', priority: 1, changeFrequency: 'weekly' },
  { path: '/about', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/advocacy', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/vision', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/coding', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/creative', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/accessibility', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/medical', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/contact', priority: 0.5, changeFrequency: 'monthly' },
  { path: '/news', priority: 0.9, changeFrequency: 'weekly' },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const articles = getAllArticles().filter((article) => !article.draft);
  const newest = articles[0] ? new Date(articles[0].date) : new Date();

  const staticEntries: MetadataRoute.Sitemap = STATIC_PAGES.map((page) => ({
    url: absoluteUrl(page.path),
    lastModified: page.path === '/news' || page.path === '/' ? newest : undefined,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));

  const categoryEntries: MetadataRoute.Sitemap = CATEGORY_LIST.map((category) => ({
    url: absoluteUrl(category.href),
    lastModified: newest,
    changeFrequency: 'weekly',
    priority: 0.7,
  }));

  const tagEntries: MetadataRoute.Sitemap = getAllTags().map(({ tag }) => ({
    url: absoluteUrl(tagHref(tag)),
    lastModified: newest,
    changeFrequency: 'weekly',
    priority: 0.5,
  }));

  const articleEntries: MetadataRoute.Sitemap = articles.map((article) => ({
    url: absoluteUrl(article.href),
    lastModified: new Date(article.date),
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  return [...staticEntries, ...categoryEntries, ...tagEntries, ...articleEntries];
}
