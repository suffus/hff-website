# News & Analysis content

Each `.mdx` file in this directory is one article at `/news/<filename-without-extension>`.
Filenames must be lowercase-kebab-case. Files starting with `_` are ignored.

Create a new article with:

```bash
npm run new-article -- "Article title" --category news|technical|financial [--tags coding,medical] [--author "Name"] [--brief]
```

## Frontmatter

| Field       | Required | Notes |
| ----------- | -------- | ----- |
| `title`     | yes      | |
| `date`      | yes      | `YYYY-MM-DD`. Controls ordering. |
| `summary`   | yes      | One or two sentences; shown in feeds, RSS and social previews. |
| `category`  | yes      | `news`, `technical` or `financial`. Financial articles get an automatic disclaimer. |
| `format`    | no       | `analysis` (default) or `brief`. Briefs render compactly in the feed. |
| `tags`      | no       | Lowercase-kebab-case. `coding`, `creative`, `accessibility`, `medical` link the article to the matching focus-area page. |
| `author`    | no       | Defaults to "Human Freedom Foundation". |
| `heroImage` | no       | Path under `/public` or absolute URL. |
| `sources`   | no       | List of `{ title, url }`. Rendered where `<SourceList />` appears, or after the body if omitted. |
| `aiAssisted` | no      | `true` adds the notice "AI models were used in the authoring of this article." under the byline and at the end of the body. Use it whenever an AI model drafted or substantially contributed to the text; the article is still attributed to `author`. |
| `draft`     | no       | `true` hides the article from production builds (still visible in `npm run dev`). |

## Components available in the body

- `<Callout title="..." tone="info|note|warning|success">...</Callout>`
- `<KeyNumbers title="..."><KeyNumber value="..." label="..." note="..." /></KeyNumbers>`
- `<DataTable caption="..." source="...">` wrapping a Markdown table (leave blank lines around the table)
- `<SourceList />`

Standard Markdown, GFM tables, and images all work.
