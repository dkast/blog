# AGENTS.md

## Overview

This is a personal blog built with Next.js 16 (App Router), React 19, TypeScript, and Contentlayer2 for MDX content management. The site is hosted on Vercel and features a modern, minimalist design with animations and responsive layouts.

## Architecture

### Tech Stack

- **Framework**: Next.js 16.1.5 (App Router with Turbopack)
- **UI Library**: React 19.2.4
- **Language**: TypeScript 5.6.2
- **Styling**: Tailwind CSS 3.4.12 with custom design tokens
- **Content**: Contentlayer2 (MDX-based content management)
- **Animations**: Framer Motion 11.18.2
- **Icons**: Lucide React
- **Code Highlighting**: Shiki with rehype-pretty-code
- **Fonts**: Next.js font optimization with Google Fonts (Inter, Averia Serif Libre, JetBrains Mono)

### Project Structure

```
/
├── src/
│   ├── app/              # Next.js App Router pages
│   │   ├── [...slug]/    # Dynamic page routes
│   │   ├── blog/         # Blog section
│   │   │   └── [...slug]/ # Dynamic blog post routes
│   │   ├── api/          # API routes (OG image generation)
│   │   ├── layout.tsx    # Root layout with fonts and navigation
│   │   └── page.tsx      # Homepage
│   ├── components/       # React components
│   │   ├── ui/          # Reusable UI components (Radix UI)
│   │   ├── icons/       # Social media icon components
│   │   ├── mdx.tsx      # MDX content renderer
│   │   ├── hero.tsx     # Homepage hero section
│   │   ├── main-nav.tsx # Navigation component
│   │   ├── footer.tsx   # Footer component
│   │   └── ...
│   └── lib/             # Utility functions and types
├── content/             # MDX content files
│   ├── blog/           # Blog posts
│   └── pages/          # Static pages
├── styles/             # Global styles and CSS modules
├── public/             # Static assets
├── contentlayer.config.ts # Content configuration
├── next.config.mjs     # Next.js configuration
└── tailwind.config.ts  # Tailwind CSS configuration
```

### Key Features

1. **Content Management**: Uses Contentlayer2 to transform MDX files into type-safe content
2. **Server Components**: Leverages React Server Components for optimal performance
3. **Dynamic Routing**: Uses Next.js catch-all routes for blog posts and pages
4. **Code Highlighting**: Syntax highlighting with Shiki and the Vesper theme
5. **Animations**: Smooth page transitions with Framer Motion
6. **Responsive Design**: Mobile-first design with Tailwind CSS
7. **OG Image Generation**: Dynamic Open Graph image generation via API route
8. **Type Safety**: Full TypeScript support with strict mode

### Content Types

#### Post (Blog Posts)
- Located in `content/blog/`
- Fields: title, description, date, published, image, category
- Rendered with syntax highlighting and custom MDX components

#### Page (Static Pages)
- Located in `content/pages/`
- Fields: title
- Simple page layout

### Important Next.js 16 Changes

1. **Async Params**: Route params are now async and must be awaited
   ```typescript
   params: Promise<{ slug: string[] }>
   // Usage:
   const { slug } = await params
   ```

2. **Turbopack**: Default bundler in Next.js 16 (configured with `turbopack: {}`)

3. **React 19**: Upgraded to React 19 with new features and type improvements

4. **ESLint 9**: Required for Next.js 16, though flat config has compatibility issues with some plugins

## Available Commands

### Development

```bash
# Start development server with Turbopack
bun run dev

# Build for production (automatically runs contentlayer2 build first)
bun run build

# Start production server
bun run start

# Build Contentlayer content
bun run build:content
```

### Code Quality

```bash
# Run ESLint
bun run lint

# Run TypeScript type checking
bun run typecheck
```

### Deployment

The site is configured for Vercel deployment. The build process automatically:
1. Runs `bun run build` which first generates content types via `contentlayer2 build`
2. Then creates optimized production build with `next build`
3. Deploys to Vercel with automatic HTTPS and CDN

## Environment Variables

- `NEXT_PUBLIC_APP_URL`: Base URL for the site (used for OG image generation)

## Common Tasks

### Adding a New Blog Post

1. Create a new `.mdx` file in `content/blog/`
2. Add frontmatter with required fields:
   ```yaml
   ---
   title: "Post Title"
   description: "Post description"
   date: 2024-01-01
   published: true
   category: "Category"
   ---
   ```
3. Write content using MDX (Markdown + React components)
4. Run `bun run build:content` to regenerate types
5. The post will automatically appear in the blog list

### Adding a New Static Page

1. Create a new `.mdx` file in `content/pages/`
2. Add frontmatter with title
3. Run `bun run build:content`
4. Access the page at `/{filename}`

### Modifying Components

- UI components use Radix UI primitives (accessible, unstyled)
- Styling is done with Tailwind CSS utility classes
- Client components (using `"use client"`) are used for interactive elements
- Server components are the default for static content

### Updating Dependencies

```bash
# Update all dependencies
bun update

# Check for outdated packages
bun outdated

# Update specific package
bun add <package>@latest
```

## Development Notes

- **Font Loading**: Google Fonts are optimized by Next.js during build. In restricted networks, font loading may fail during build but will work in production.
- **Package Manager**: This project uses Bun as the package manager. Do not commit `package-lock.json` or `yarn.lock` files.
- **Turbopack**: Default bundler for faster development. Use `--webpack` flag if needed: `bun run build -- --webpack`
- **Type Safety**: Run `bun run typecheck` before committing to catch type errors
- **Content Changes**: Always run `bun run build:content` after modifying content structure or adding new content files

## Troubleshooting

### Build Fails with Font Errors
If building in a restricted network environment, fonts may fail to download. This is expected and won't affect production deployments on Vercel.

### Type Errors After Updating Next.js
- Run `bun run build:content` to regenerate Contentlayer types
- Delete `.next` folder and rebuild: `rm -rf .next && bun run build`
- Check that params are properly awaited in async page components

### ESLint Issues
The project uses ESLint 9 with the legacy `.eslintrc.json` format due to compatibility issues with flat config. This is a known limitation and will be resolved as the ecosystem updates.
