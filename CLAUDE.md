# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

**Development server**: `npm run dev` or `yarn dev` - starts development server on localhost:3000
**Build**: `npm run build` - creates production build
**Production start**: `npm start` - starts production server
**Linting**: `npm run lint` - runs ESLint

## Project Architecture

This is a **Next.js 13** personal website with TypeScript, featuring:

### Tech Stack
- **Framework**: Next.js 13 with TypeScript
- **Styling**: Tailwind CSS + Material-UI (MUI) + Emotion
- **Content**: MDX for blog posts with frontmatter support
- **Animations**: Framer Motion for page transitions
- **Graphics**: P5.js integration via @p5-wrapper/next

### Directory Structure
- `src/pages/` - Next.js pages including MDX blog posts under `blog/`
- `src/components/` - React components (13 total)
- `src/styles/` - Global styles and MUI theme configuration
- `src/categories.ts` - Blog post category constants

### Key Architectural Patterns

**Pages & Routing**:
- Uses Next.js Pages Router (not App Router)
- MDX files in `pages/blog/` are automatically routed
- Path aliases: `@/*` maps to `src/*`

**Styling System**:
- Custom Tailwind theme with green color palette (`white: "#1b6a21"`, `brightgreen: "#c6d93b"`, etc.)
- MUI theme integration that pulls colors from Tailwind config
- Custom font: "Bricolage Grotesque" 

**Content Management**:
- Blog posts are MDX files with frontmatter support
- Categories defined as TypeScript constants
- Custom MDXComponent for rendering

**Layout & Navigation**:
- Centralized Layout component with Header
- Page transitions using Framer Motion AnimatePresence
- Progress bar using nextjs-progressbar

### Component Architecture
- Layout wrapper handles page animations and navigation
- BlogLayout for blog post pages
- P5Sketch component for interactive graphics
- Experience components for timeline/portfolio display

### Configuration Notes
- TypeScript with strict mode, but `noImplicitAny: false`
- MDX configured with remark-frontmatter plugin
- Tailwind JIT mode enabled
- PostCSS with autoprefixer

When making changes, follow existing patterns for styling (Tailwind + MUI), component structure, and TypeScript usage.