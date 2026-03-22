# DevOps Portfolio Website for Harshan

Build a complete Astro.js static portfolio site per the user's detailed spec.

## Proposed Changes

### Scaffolding

#### [NEW] [package.json](file:///d:/Desktop/portfolio/package.json)
Astro v4+, `@astrojs/cloudflare` adapter. GSAP + Three.js as dependencies.

#### [NEW] [astro.config.mjs](file:///d:/Desktop/portfolio/astro.config.mjs)
Hybrid output mode, Cloudflare adapter, content collections for blog.

#### [NEW] [wrangler.toml](file:///d:/Desktop/portfolio/wrangler.toml)
Cloudflare Pages config pointing to `dist/`.

---

### Design System & Styles

#### [NEW] [global.css](file:///d:/Desktop/portfolio/src/styles/global.css)
Full design system: CSS variables, reset, typography (JetBrains Mono + Inter via Google Fonts), marquee keyframes, cursor styles, loader, snackbar, scroll bar, responsive breakpoints.

#### [NEW] [blog.css](file:///d:/Desktop/portfolio/src/styles/blog.css)
Blog page styling: markdown content, code blocks with `#111111` bg, headings in green.

---

### Components (14 Astro components)

All in `src/components/`. Each contains HTML + scoped `<style>` + `<script>` as needed:

- `Loader.astro` — fullscreen dark loader with terminal boot text
- `Cursor.astro` — GSAP magnetic cursor (dot + ring)
- `ScrollBar.astro` — 2px progress bar at top
- `Snackbar.astro` — toast system with `showToast()` on window
- `Navbar.astro` — fixed nav with mobile hamburger
- `Hero.astro` — hero left content, typewriter, CTAs
- `HeroCanvas.astro` — Three.js 3D orbiting DevOps icons
- `About.astro` — terminal card + bio + stats
- `Skills.astro` — 3-row CSS marquee with devicon pills
- `Projects.astro` — project cards grid with tilt effect
- `Blog.astro` — blog preview cards from content collection
- `Contact.astro` — WhatsApp CTA + email copy
- `Footer.astro` — simple footer

---

### Pages & Content

#### [NEW] [index.astro](file:///d:/Desktop/portfolio/src/pages/index.astro)
Main page assembling all section components.

#### [NEW] [[slug].astro](file:///d:/Desktop/portfolio/src/pages/blog/[slug].astro)
Dynamic blog posts from content collection.

#### [NEW] Blog posts
- `src/content/blog/k8s-ingress-guide.md`
- `src/content/blog/terraform-basics.md`

#### [NEW] [config.ts](file:///d:/Desktop/portfolio/src/content/config.ts)
Content collection schema for blog frontmatter.

---

### CI/CD & Assets

#### [NEW] [deploy.yml](file:///d:/Desktop/portfolio/.github/workflows/deploy.yml)
GitHub Actions: checkout → Node 20 → install → build → deploy to Cloudflare Pages.

#### [NEW] [favicon.svg](file:///d:/Desktop/portfolio/public/favicon.svg)
Simple terminal-style favicon.

---

## Verification Plan

### Automated Tests
1. Run `npm run build` in `d:\Desktop\portfolio` — expect zero errors
2. Open dev server with `npm run dev` and verify in browser:
   - All sections render correctly
   - No console errors
   - Loader animation plays
   - Navigation works
   - Blog posts load at `/blog/[slug]`
