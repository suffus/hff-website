#!/usr/bin/env node
/**
 * Scaffold a new News & Analysis article.
 *
 *   npm run new-article -- "Article title" --category news|technical|financial
 *       [--tags coding,medical] [--author "Name"] [--brief] [--date YYYY-MM-DD] [--slug custom-slug]
 *
 * Creates content/news/<slug>.mdx with `draft: true` so it is visible in
 * `npm run dev` but excluded from production builds until you flip it.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const CATEGORIES = ['news', 'technical', 'financial'];
const PILLAR_TAGS = ['coding', 'creative', 'accessibility', 'medical'];
const DEFAULT_AUTHOR = 'Human Freedom Foundation';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const contentDir = path.join(root, 'content', 'news');

// ---------------------------------------------------------------------------
// Argument parsing
// ---------------------------------------------------------------------------

function usage(message) {
  if (message) console.error(`\nError: ${message}\n`);
  console.error(`Usage:
  npm run new-article -- "Article title" --category <${CATEGORIES.join('|')}> [options]

Options:
  --tags a,b,c       Comma-separated lowercase-kebab-case tags (pillars: ${PILLAR_TAGS.join(', ')})
  --author "Name"    Byline (default: "${DEFAULT_AUTHOR}")
  --brief            Short news-brief format (default: long-form analysis)
  --date YYYY-MM-DD  Publication date (default: today)
  --slug my-slug     Override the slug derived from the title
  --publish          Set draft: false immediately
  -h, --help         Show this help
`);
  process.exit(message ? 1 : 0);
}

function parseArgs(argv) {
  const opts = { positional: [], tags: [], brief: false, publish: false };
  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    const next = () => {
      const value = argv[i + 1];
      if (value === undefined || value.startsWith('--')) usage(`${arg} requires a value`);
      i += 1;
      return value;
    };
    switch (arg) {
      case '-h':
      case '--help':
        usage();
        break;
      case '--category':
        opts.category = next();
        break;
      case '--tags':
        opts.tags = next()
          .split(',')
          .map((t) => t.trim())
          .filter(Boolean);
        break;
      case '--author':
        opts.author = next();
        break;
      case '--date':
        opts.date = next();
        break;
      case '--slug':
        opts.slug = next();
        break;
      case '--brief':
        opts.brief = true;
        break;
      case '--publish':
        opts.publish = true;
        break;
      default:
        if (arg.startsWith('--')) usage(`Unknown option ${arg}`);
        opts.positional.push(arg);
    }
  }
  return opts;
}

function slugify(text) {
  return text
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 80)
    .replace(/-+$/g, '');
}

function yamlString(value) {
  return JSON.stringify(value);
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

const opts = parseArgs(process.argv.slice(2));

const title = opts.positional.join(' ').trim();
if (!title) usage('A title is required (wrap it in quotes)');
if (!opts.category) usage('--category is required');
if (!CATEGORIES.includes(opts.category)) {
  usage(`--category must be one of ${CATEGORIES.join(', ')}`);
}

const slugPattern = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const slug = opts.slug ?? slugify(title);
if (!slugPattern.test(slug)) usage(`Could not derive a valid slug from "${title}"; pass --slug`);

for (const tag of opts.tags) {
  if (!slugPattern.test(tag)) usage(`Tag "${tag}" must be lowercase-kebab-case`);
}

const date = opts.date ?? new Date().toISOString().slice(0, 10);
if (!/^\d{4}-\d{2}-\d{2}$/.test(date) || Number.isNaN(Date.parse(date))) {
  usage('--date must be YYYY-MM-DD');
}

const author = opts.author ?? DEFAULT_AUTHOR;
const format = opts.brief ? 'brief' : 'analysis';

fs.mkdirSync(contentDir, { recursive: true });
const filePath = path.join(contentDir, `${slug}.mdx`);
if (fs.existsSync(filePath)) {
  console.error(`\nError: content/news/${slug}.mdx already exists. Choose another title or pass --slug.\n`);
  process.exit(1);
}

const tagsYaml = opts.tags.length > 0 ? `[${opts.tags.join(', ')}]` : '[]';
const authorLine =
  author === DEFAULT_AUTHOR
    ? `# author: ${yamlString(DEFAULT_AUTHOR)}   # uncomment and change to add a named byline`
    : `author: ${yamlString(author)}`;

const frontmatter = `---
title: ${yamlString(title)}
date: ${date}
summary: "TODO: one or two sentences shown in the feed, RSS and social previews."
category: ${opts.category}            # news | technical | financial
format: ${format}${format === 'analysis' ? '          # analysis (long-form) | brief (short news item)' : '             # brief (short news item) | analysis (long-form)'}
tags: ${tagsYaml}${opts.tags.length === 0 ? '                  # e.g. [coding, medical] - pillar tags link to focus-area pages' : ''}
${authorLine}
# heroImage: /news/${slug}.jpg   # optional; place the file under /public
sources:
  - title: "TODO: primary source"
    url: "https://example.com"
# aiAssisted: true            # uncomment if AI models were used to author the text
draft: ${opts.publish ? 'false' : 'true'}                 # set to false to publish
---
`;

const briefBody = `**What happened.** TODO: two or three sentences stating the facts.

**Why it matters.** TODO: the human impact, not the vendor framing.

**HFF view.** TODO: our position in a sentence or two.

<SourceList />
`;

const analysisBody = `TODO: opening paragraph that says why this matters to people.

## Section heading

TODO: body text. Standard Markdown works, including GFM tables.

<Callout title="HFF view" tone="info">
TODO: a short, clearly-labelled opinion paragraph.
</Callout>
${
  opts.category === 'financial'
    ? `
<KeyNumbers title="At a glance">
  <KeyNumber value="TODO" label="Headline figure" note="Context" />
  <KeyNumber value="TODO" label="Second figure" />
</KeyNumbers>

<DataTable caption="TODO: table caption" source="TODO: where the numbers come from">

| Column | Column | Value |
| --- | --- | ---: |
| TODO | TODO | 0 |

</DataTable>

_A financial disclaimer is added automatically to every article in the financial category._
`
    : ''
}
## What we would watch next

- TODO
- TODO

<SourceList />
`;

fs.writeFileSync(filePath, frontmatter + '\n' + (opts.brief ? briefBody : analysisBody), 'utf8');

console.log(`
Created content/news/${slug}.mdx

  Title:     ${title}
  Category:  ${opts.category}
  Format:    ${format}
  Tags:      ${opts.tags.length > 0 ? opts.tags.join(', ') : '(none)'}
  Author:    ${author}
  Draft:     ${opts.publish ? 'no (will publish on next build)' : 'yes (visible in dev only)'}

Preview at http://localhost:3000/news/${slug} with \`npm run dev\`.
Set \`draft: false\` when it is ready to publish.
`);
