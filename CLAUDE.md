# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
yarn dev          # Start development server
yarn build        # Production build
yarn lint         # Run ESLint
yarn format       # Format code with Prettier
yarn format:check # Check formatting without writing
```

## Commit Message Format

This repo enforces Conventional Commits with custom rules:

- **Subject case**: Sentence-case (capitalize first letter)
- **Subject ends with**: Period (.)
- **Type case**: camelCase
- **Allowed types**: `build`, `chore`, `docs`, `feat`, `fix`, `refactor`, `revert`, `style`, `test`, `createPost`, `updatePost`

Example: `feat: Add dark mode toggle.`

## Architecture

### Blog Post System

Blog posts live in `content/blog/[post-id]/` with two files:

- `index.mdx` - Post content using MDX (Markdown + JSX)
- `metadata.ts` - Typed metadata exported as `metadata` constant

Metadata schema (validated with Zod at runtime via `types.ts`):

```typescript
{
  date: string,           // "YYYY-MM-DD"
  title: string,
  description: string | null,
  categories: string[],
  tags: string[],
  originalPost?: { url: string, isExclusive: boolean }
}
```

Posts are loaded via `utils/getAllPosts.ts` which reads directory names as post IDs and imports metadata dynamically.

### MDX Components

Custom MDX components are defined in `mdx-components.tsx`:

- `h1` throws an error (titles come from metadata)
- `h2`, `h3` render as `CopyableHeader` (anchor links)
- `a` renders as custom `Link` component
- `img` prefixes src with `/images/blog/`
- Custom components available: `CodePen`, `ConnectSection`, `OpenToWork`

### Static Generation

All blog routes are statically generated at build time:

- `app/blog/[id]/page.tsx` uses `generateStaticParams()` to create routes
- `dynamicParams = false` prevents runtime 404 generation
