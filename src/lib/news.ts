import 'server-only';
import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { z } from 'zod';
import {
  CATEGORY_IDS,
  DEFAULT_AUTHOR,
  FORMAT_IDS,
  type ArticleMeta,
  type Category,
} from './news-shared';

export * from './news-shared';

// ---------------------------------------------------------------------------
// Frontmatter schema
// ---------------------------------------------------------------------------

const slugPattern = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

const sourceSchema = z.object({
  title: z.string().min(1),
  url: z.url(),
});

const frontmatterSchema = z.object({
  title: z.string().min(1, 'title is required'),
  date: z.coerce.date(),
  summary: z.string().min(1, 'summary is required'),
  category: z.enum(CATEGORY_IDS),
  format: z.enum(FORMAT_IDS).default('analysis'),
  tags: z
    .array(z.string().regex(slugPattern, 'tags must be lowercase-kebab-case'))
    .default([]),
  author: z.string().min(1).default(DEFAULT_AUTHOR),
  heroImage: z.string().optional(),
  sources: z.array(sourceSchema).optional(),
  /** Adds the "AI models were used in the authoring of this article." notice. */
  aiAssisted: z.boolean().default(false),
  draft: z.boolean().default(false),
});

export type ArticleFrontmatter = z.infer<typeof frontmatterSchema>;

export interface Article extends ArticleMeta {
  /** Raw MDX body (without frontmatter). */
  content: string;
}

// ---------------------------------------------------------------------------
// Loading
// ---------------------------------------------------------------------------

export const CONTENT_DIR = path.join(process.cwd(), 'content', 'news');

const WORDS_PER_MINUTE = 220;

function readingTime(markdown: string): number {
  const words = markdown
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/<[^>]+>/g, ' ')
    .split(/\s+/)
    .filter(Boolean).length;
  return Math.max(1, Math.round(words / WORDS_PER_MINUTE));
}

function includeDrafts(): boolean {
  return process.env.NODE_ENV !== 'production' || process.env.NEWS_INCLUDE_DRAFTS === '1';
}

function parseArticle(filePath: string): Article {
  const slug = path.basename(filePath, '.mdx');
  if (!slugPattern.test(slug)) {
    throw new Error(
      `[news] Invalid article filename "${path.basename(filePath)}": use lowercase-kebab-case.mdx`,
    );
  }

  const raw = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(raw);
  const parsed = frontmatterSchema.safeParse(data);

  if (!parsed.success) {
    const issues = parsed.error.issues
      .map((issue) => `  - ${issue.path.join('.') || '(root)'}: ${issue.message}`)
      .join('\n');
    throw new Error(`[news] Invalid frontmatter in content/news/${slug}.mdx:\n${issues}`);
  }

  const fm = parsed.data;

  return {
    slug,
    title: fm.title,
    date: fm.date.toISOString(),
    summary: fm.summary,
    category: fm.category,
    format: fm.format,
    tags: fm.tags,
    author: fm.author,
    heroImage: fm.heroImage,
    sources: fm.sources,
    aiAssisted: fm.aiAssisted,
    draft: fm.draft,
    readingTimeMinutes: readingTime(content),
    href: `/news/${slug}`,
    content,
  };
}

let cache: Article[] | null = null;

function loadAll(): Article[] {
  if (cache && process.env.NODE_ENV === 'production') return cache;

  if (!fs.existsSync(CONTENT_DIR)) {
    cache = [];
    return cache;
  }

  const files = fs
    .readdirSync(CONTENT_DIR)
    .filter((name) => name.endsWith('.mdx') && !name.startsWith('_'));

  const articles = files
    .map((name) => parseArticle(path.join(CONTENT_DIR, name)))
    .filter((article) => includeDrafts() || !article.draft)
    .sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : a.slug.localeCompare(b.slug)));

  cache = articles;
  return articles;
}

function toMeta(article: Article): ArticleMeta {
  // Strip the MDX body so lists stay small and client-safe.
  const { content: _content, ...meta } = article;
  void _content;
  return meta;
}

// ---------------------------------------------------------------------------
// Public API
// ---------------------------------------------------------------------------

export function getAllArticles(): ArticleMeta[] {
  return loadAll().map(toMeta);
}

export function getArticleBySlug(slug: string): Article | undefined {
  return loadAll().find((article) => article.slug === slug);
}

export function getArticlesByCategory(category: Category): ArticleMeta[] {
  return loadAll()
    .filter((article) => article.category === category)
    .map(toMeta);
}

export function getArticlesByTag(tag: string, limit?: number): ArticleMeta[] {
  const list = loadAll()
    .filter((article) => article.tags.includes(tag))
    .map(toMeta);
  return typeof limit === 'number' ? list.slice(0, limit) : list;
}

export function getLatestArticles(limit = 3): ArticleMeta[] {
  return loadAll().slice(0, limit).map(toMeta);
}

/** Articles sharing the most tags with `article`, falling back to same category. */
export function getRelatedArticles(article: ArticleMeta, limit = 3): ArticleMeta[] {
  const others = loadAll().filter((candidate) => candidate.slug !== article.slug);

  const scored = others
    .map((candidate) => {
      const shared = candidate.tags.filter((tag) => article.tags.includes(tag)).length;
      const sameCategory = candidate.category === article.category ? 0.5 : 0;
      return { candidate, score: shared + sameCategory };
    })
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score || (a.candidate.date < b.candidate.date ? 1 : -1));

  return scored.slice(0, limit).map(({ candidate }) => toMeta(candidate));
}

export function getAllTags(): { tag: string; count: number }[] {
  const counts = new Map<string, number>();
  for (const article of loadAll()) {
    for (const tag of article.tags) {
      counts.set(tag, (counts.get(tag) ?? 0) + 1);
    }
  }
  return [...counts.entries()]
    .map(([tag, count]) => ({ tag, count }))
    .sort((a, b) => b.count - a.count || a.tag.localeCompare(b.tag));
}

export function getAllSlugs(): string[] {
  return loadAll().map((article) => article.slug);
}
