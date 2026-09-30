import Link from 'next/link';
import { CATEGORIES, type Category } from '@/lib/news-shared';

const styles: Record<Category, string> = {
  news: 'bg-green-50 text-green-700 ring-green-200 hover:bg-green-100',
  technical: 'bg-sky-50 text-sky-700 ring-sky-200 hover:bg-sky-100',
  financial: 'bg-amber-50 text-amber-800 ring-amber-200 hover:bg-amber-100',
};

interface CategoryBadgeProps {
  category: Category;
  /** Render as a link to the category page (default true). */
  link?: boolean;
  size?: 'sm' | 'md';
}

export default function CategoryBadge({ category, link = true, size = 'sm' }: CategoryBadgeProps) {
  const info = CATEGORIES[category];
  const className = `inline-flex items-center whitespace-nowrap rounded-full font-semibold ring-1 transition-colors ${
    size === 'sm' ? 'px-2.5 py-0.5 text-xs' : 'px-3 py-1 text-sm'
  } ${styles[category]}`;

  if (!link) {
    return <span className={className}>{info.label}</span>;
  }
  return (
    <Link href={info.href} className={className}>
      {info.label}
    </Link>
  );
}
