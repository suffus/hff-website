export interface FigureProps {
  /** Image path under /public or an absolute URL. */
  src: string;
  alt: string;
  caption?: string;
}

/**
 * Captioned image or diagram for use inside MDX articles.
 *
 * ```mdx
 * <Figure src="/news/my-diagram.svg" alt="..." caption="Figure 1: ..." />
 * ```
 */
export default function Figure({ src, alt, caption }: FigureProps) {
  return (
    <figure className="not-prose my-10">
      <div className="overflow-hidden rounded-2xl bg-white p-4 shadow-sm ring-1 ring-gray-200 sm:p-6">
        {/* Plain <img> so SVGs with embedded styles render unmodified. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} loading="lazy" decoding="async" className="mx-auto block h-auto w-full" />
      </div>
      {caption && (
        <figcaption className="mt-3 text-center text-sm text-gray-500">{caption}</figcaption>
      )}
    </figure>
  );
}
