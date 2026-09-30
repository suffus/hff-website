/**
 * Pure, dependency-free news helpers and types.
 *
 * Safe to import from both server and client components. Anything that touches
 * the filesystem lives in ./news.ts (server-only).
 */

// ---------------------------------------------------------------------------
// Taxonomy
// ---------------------------------------------------------------------------

export const CATEGORY_IDS = ['news', 'technical', 'financial'] as const;
export type Category = (typeof CATEGORY_IDS)[number];

export interface CategoryInfo {
  id: Category;
  label: string;
  shortLabel: string;
  description: string;
  href: string;
}

export const CATEGORIES: Record<Category, CategoryInfo> = {
  news: {
    id: 'news',
    label: 'Industry News',
    shortLabel: 'News',
    description:
      'Curated developments across the AI industry, with the Human Freedom Foundation perspective on what they mean for people.',
    href: '/news/category/news',
  },
  technical: {
    id: 'technical',
    label: 'Technical Analysis',
    shortLabel: 'Technical',
    description:
      'Deeper looks at models, tools, architectures and research, written for readers who want to understand how the technology actually works.',
    href: '/news/category/technical',
  },
  financial: {
    id: 'financial',
    label: 'Financial Analysis',
    shortLabel: 'Financial',
    description:
      'Commentary on funding, markets, business models and the economics shaping who builds AI and who benefits from it.',
    href: '/news/category/financial',
  },
};

export const CATEGORY_LIST: CategoryInfo[] = CATEGORY_IDS.map((id) => CATEGORIES[id]);

export const FORMAT_IDS = ['brief', 'analysis'] as const;
export type ArticleFormat = (typeof FORMAT_IDS)[number];

/** Tags that map onto the site's existing focus-area pages. */
export const PILLAR_TAGS: Record<string, { label: string; href: string }> = {
  coding: { label: 'AI Coding', href: '/coding' },
  creative: { label: 'Creative AI', href: '/creative' },
  accessibility: { label: 'Accessibility', href: '/accessibility' },
  medical: { label: 'Medical AI', href: '/medical' },
};

export const DEFAULT_AUTHOR = 'Human Freedom Foundation';

/** Display labels for tags whose auto-generated title case would be wrong. */
export const TAG_LABELS: Record<string, string> = {
  rag: 'RAG',
  mcp: 'MCP',
  llm: 'LLMs',
  llms: 'LLMs',
  ai: 'AI',
  'open-source': 'Open source',
  'open-weights': 'Open weights',
};

export function isCategory(value: string): value is Category {
  return (CATEGORY_IDS as readonly string[]).includes(value);
}

export function tagLabel(tag: string): string {
  return (
    PILLAR_TAGS[tag]?.label ??
    TAG_LABELS[tag] ??
    tag.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())
  );
}

export function tagHref(tag: string): string {
  return `/news/tag/${encodeURIComponent(tag)}`;
}

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface ArticleSource {
  title: string;
  url: string;
}

/** Serializable article metadata (safe to pass to client components). */
export interface ArticleMeta {
  slug: string;
  title: string;
  /** ISO 8601 date string. */
  date: string;
  summary: string;
  category: Category;
  format: ArticleFormat;
  tags: string[];
  author: string;
  heroImage?: string;
  sources?: ArticleSource[];
  draft: boolean;
  readingTimeMinutes: number;
  href: string;
}

// ---------------------------------------------------------------------------
// Formatting
// ---------------------------------------------------------------------------

export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  });
}

export function formatDateShort(iso: string): string {
  return new Date(iso).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC',
  });
}
