import type { ReactNode } from 'react';

type Tone = 'info' | 'note' | 'warning' | 'success';

const tones: Record<Tone, { box: string; title: string; icon: string }> = {
  info: {
    box: 'border-emerald-200 bg-gradient-to-r from-green-50 to-emerald-50',
    title: 'text-green-900',
    icon: 'bg-green-600',
  },
  note: {
    box: 'border-gray-200 bg-gray-50',
    title: 'text-gray-900',
    icon: 'bg-gray-500',
  },
  warning: {
    box: 'border-amber-200 bg-amber-50',
    title: 'text-amber-900',
    icon: 'bg-amber-500',
  },
  success: {
    box: 'border-emerald-200 bg-emerald-50',
    title: 'text-emerald-900',
    icon: 'bg-emerald-600',
  },
};

export interface CalloutProps {
  title?: string;
  tone?: Tone;
  children: ReactNode;
}

/**
 * Highlighted aside for use inside MDX articles.
 *
 * ```mdx
 * <Callout title="HFF view" tone="info">Our take on this.</Callout>
 * ```
 */
export default function Callout({ title, tone = 'info', children }: CalloutProps) {
  const style = tones[tone];
  return (
    <aside className={`not-prose my-8 rounded-2xl border p-6 ${style.box}`}>
      {title && (
        <div className="mb-2 flex items-center gap-2">
          <span className={`inline-block h-2 w-2 rounded-full ${style.icon}`} aria-hidden="true" />
          <h4 className={`text-sm font-semibold uppercase tracking-wide ${style.title}`}>{title}</h4>
        </div>
      )}
      <div className="text-sm leading-relaxed text-gray-700 [&>p]:mb-3 [&>p:last-child]:mb-0">
        {children}
      </div>
    </aside>
  );
}
