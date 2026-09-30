/**
 * Site-wide constants.
 *
 * SITE_URL is used wherever an absolute URL is required (RSS feed, sitemap,
 * OpenGraph metadata). Set NEXT_PUBLIC_SITE_URL at build time to override the
 * placeholder fallback.
 */
export const SITE_NAME = 'Human Freedom Foundation';

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://humanfreedomfoundation.org'
).replace(/\/+$/, '');

export function absoluteUrl(path: string): string {
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
}
