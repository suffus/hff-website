import { Children, type ReactNode } from 'react';

export interface KeyNumberProps {
  /** The headline figure, e.g. "$2.4B" or "38%". */
  value: string;
  /** What the figure is. */
  label: string;
  /** Optional context, e.g. "up from $1.1B in 2024". */
  note?: string;
}

export function KeyNumber({ value, label, note }: KeyNumberProps) {
  return (
    <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-gray-200">
      <div className="text-3xl font-bold tracking-tight text-green-700">{value}</div>
      <div className="mt-1 text-sm font-semibold text-gray-900">{label}</div>
      {note && <div className="mt-1 text-xs leading-relaxed text-gray-500">{note}</div>}
    </div>
  );
}

export interface KeyNumbersProps {
  title?: string;
  children: ReactNode;
}

/**
 * A grid of headline figures, typically used at the top of a financial piece.
 *
 * ```mdx
 * <KeyNumbers title="At a glance">
 *   <KeyNumber value="$2.4B" label="Round size" note="Series D" />
 *   <KeyNumber value="12x" label="Revenue multiple" />
 * </KeyNumbers>
 * ```
 */
export default function KeyNumbers({ title, children }: KeyNumbersProps) {
  // Four figures sit better as a 2x2 grid than as a row of three plus an orphan.
  const count = Children.count(children);
  const columns = count === 4 ? 'sm:grid-cols-2' : 'sm:grid-cols-2 lg:grid-cols-3';
  return (
    <section className="not-prose my-10">
      {title && (
        <h4 className="mb-4 text-sm font-semibold uppercase tracking-wide text-gray-500">{title}</h4>
      )}
      <div className={`grid grid-cols-1 gap-4 ${columns}`}>{children}</div>
    </section>
  );
}
