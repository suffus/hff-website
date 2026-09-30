import type { ArticleSource } from '@/lib/news-shared';

export interface SourceListProps {
  title?: string;
  /** Usually injected from article frontmatter by the article page. */
  sources?: ArticleSource[];
}

/**
 * Renders the article's `sources` frontmatter as a "Sources" list.
 *
 * Place `<SourceList />` anywhere in the body to control its position. If it is
 * omitted, the article page appends it automatically after the body.
 */
export default function SourceList({ title = 'Sources', sources }: SourceListProps) {
  if (!sources || sources.length === 0) return null;

  return (
    <section className="not-prose my-10 rounded-2xl border border-gray-200 bg-gray-50 p-6">
      <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide text-gray-500">{title}</h4>
      <ol className="space-y-2 text-sm">
        {sources.map((source, index) => (
          <li key={source.url} className="flex gap-3">
            <span className="w-5 shrink-0 text-right tabular-nums text-gray-400">{index + 1}.</span>
            <a
              href={source.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-green-700 underline decoration-green-300 underline-offset-2 hover:text-green-800 hover:decoration-green-500"
            >
              {source.title}
              <span className="ml-1 text-gray-400" aria-hidden="true">
                &#8599;
              </span>
            </a>
          </li>
        ))}
      </ol>
    </section>
  );
}
