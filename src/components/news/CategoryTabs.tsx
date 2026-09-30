import Link from 'next/link';
import { CATEGORY_LIST, type Category } from '@/lib/news-shared';

interface CategoryTabsProps {
  active: Category | null;
}

export default function CategoryTabs({ active }: CategoryTabsProps) {
  const tabs: { label: string; href: string; id: Category | null }[] = [
    { label: 'All', href: '/news', id: null },
    ...CATEGORY_LIST.map((c) => ({ label: c.label, href: c.href, id: c.id as Category | null })),
  ];

  return (
    <nav aria-label="Article categories" className="flex flex-wrap gap-2">
      {tabs.map((tab) => {
        const isActive = tab.id === active;
        return (
          <Link
            key={tab.href}
            href={tab.href}
            aria-current={isActive ? 'page' : undefined}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
              isActive
                ? 'bg-green-600 text-white shadow-sm'
                : 'bg-white text-gray-700 ring-1 ring-gray-200 hover:bg-green-50 hover:text-green-700 hover:ring-green-200'
            }`}
          >
            {tab.label}
          </Link>
        );
      })}
    </nav>
  );
}
