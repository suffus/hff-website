import type { ReactNode } from 'react';

export interface DataTableProps {
  caption?: string;
  /** Optional source note rendered beneath the table. */
  source?: string;
  children: ReactNode;
}

/**
 * Wrapper that gives a Markdown (GFM) table a consistent card treatment and
 * horizontal scrolling on small screens.
 *
 * ```mdx
 * <DataTable caption="Selected AI funding rounds, Q3" source="Company filings">
 *
 * | Company | Round | Amount |
 * | --- | --- | --- |
 * | Example Labs | Series C | $400M |
 *
 * </DataTable>
 * ```
 */
export default function DataTable({ caption, source, children }: DataTableProps) {
  return (
    <figure className="my-10 overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-200">
      {caption && (
        <figcaption className="border-b border-gray-100 px-6 py-4 text-sm font-semibold text-gray-900">
          {caption}
        </figcaption>
      )}
      <div className="overflow-x-auto px-6 py-2 [&_table]:my-0 [&_table]:w-full [&_thead_th]:whitespace-nowrap [&_tbody_td]:align-top">
        {children}
      </div>
      {source && (
        <div className="border-t border-gray-100 px-6 py-3 text-xs text-gray-500">Source: {source}</div>
      )}
    </figure>
  );
}
