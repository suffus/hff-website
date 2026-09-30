import { CATEGORIES, getAllArticles } from '@/lib/news';
import { SITE_NAME, absoluteUrl } from '@/lib/site';

export const dynamic = 'force-static';

const FEED_TITLE = `${SITE_NAME} - News & Analysis`;
const FEED_DESCRIPTION =
  'AI industry news, technical explainers and financial analysis from the Human Freedom Foundation.';
const MAX_ITEMS = 50;

function escapeXml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

export function GET(): Response {
  const articles = getAllArticles()
    .filter((article) => !article.draft)
    .slice(0, MAX_ITEMS);

  const lastBuildDate = (articles[0] ? new Date(articles[0].date) : new Date()).toUTCString();

  const items = articles
    .map((article) => {
      const url = absoluteUrl(article.href);
      const categories = [
        `<category>${escapeXml(CATEGORIES[article.category].label)}</category>`,
        ...article.tags.map((tag) => `<category>${escapeXml(tag)}</category>`),
      ].join('');
      return [
        '<item>',
        `<title>${escapeXml(article.title)}</title>`,
        `<link>${escapeXml(url)}</link>`,
        `<guid isPermaLink="true">${escapeXml(url)}</guid>`,
        `<pubDate>${new Date(article.date).toUTCString()}</pubDate>`,
        `<dc:creator>${escapeXml(article.author)}</dc:creator>`,
        `<description>${escapeXml(article.summary)}</description>`,
        categories,
        '</item>',
      ].join('');
    })
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:dc="http://purl.org/dc/elements/1.1/">
<channel>
<title>${escapeXml(FEED_TITLE)}</title>
<link>${escapeXml(absoluteUrl('/news'))}</link>
<description>${escapeXml(FEED_DESCRIPTION)}</description>
<language>en</language>
<lastBuildDate>${lastBuildDate}</lastBuildDate>
<atom:link href="${escapeXml(absoluteUrl('/news/rss.xml'))}" rel="self" type="application/rss+xml"/>
${items}
</channel>
</rss>
`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
