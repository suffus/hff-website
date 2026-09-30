import Link from 'next/link';
import { tagHref, tagLabel } from '@/lib/news-shared';

interface TagChipsProps {
  tags: { tag: string; count: number }[];
  active?: string;
  label?: string;
}

export default function TagChips({ tags, active, label = 'Topics' }: TagChipsProps) {
  if (tags.length === 0) return null;
  return (
    <div className="flex flex-wrap items-center gap-2 text-sm">
      <span className="mr-1 font-medium text-gray-500">{label}:</span>
      {tags.map(({ tag, count }) => {
        const isActive = tag === active;
        return (
          <Link
            key={tag}
            href={tagHref(tag)}
            aria-current={isActive ? 'page' : undefined}
            className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium transition-colors ${
              isActive
                ? 'bg-gray-900 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-green-100 hover:text-green-700'
            }`}
          >
            {tagLabel(tag)}
            <span className={isActive ? 'text-gray-300' : 'text-gray-400'}>{count}</span>
          </Link>
        );
      })}
    </div>
  );
}
