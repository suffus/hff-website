import Link from 'next/link';
import type { AnchorHTMLAttributes, ComponentProps } from 'react';
import type { MDXComponents } from 'mdx/types';
import Callout from './Callout';
import DataTable from './DataTable';
import Figure from './Figure';
import KeyNumbers, { KeyNumber } from './KeyNumbers';
import SourceList from './SourceList';

function MdxLink({ href = '', children, ...rest }: AnchorHTMLAttributes<HTMLAnchorElement>) {
  const isInternal = href.startsWith('/') || href.startsWith('#');
  if (isInternal) {
    return (
      <Link href={href} {...rest}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" {...rest}>
      {children}
    </a>
  );
}

function MdxImage(props: ComponentProps<'img'>) {
  // Articles may reference arbitrary remote images; use a plain <img> so we do
  // not need to whitelist every host in next.config.js.
  // eslint-disable-next-line @next/next/no-img-element
  return <img loading="lazy" decoding="async" {...props} alt={props.alt ?? ''} />;
}

/**
 * Components available inside every article body. Element overrides restyle
 * standard Markdown output; named components are usable as `<Callout>` etc.
 */
export const mdxComponents: MDXComponents = {
  a: MdxLink,
  img: MdxImage,
  Callout,
  DataTable,
  Figure,
  KeyNumbers,
  KeyNumber,
  SourceList,
};
