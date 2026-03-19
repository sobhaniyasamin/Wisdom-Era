# Wisdom Era — Keep Up with the Future

AI-focused tech holding company website built with Next.js 14, Tailwind CSS, and Framer Motion.

## Tech Stack

- **Next.js 14** (App Router) — SSR/SSG, routing, metadata API
- **Tailwind CSS v3** — utility-first styling
- **Framer Motion** — scroll-reveal and page animations
- **Lucide React** — icons
- **TypeScript**

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout (fonts, Navbar, Footer, SEO)
│   ├── page.tsx                # Homepage
│   ├── not-found.tsx           # Custom 404
│   ├── portfolio/[slug]/       # Company detail pages
│   ├── contact/                # Contact page with form
│   └── api/contact/            # Form submission endpoint (stubbed)
├── components/
│   ├── layout/                 # Navbar, MobileMenu, Footer
│   ├── sections/               # Homepage sections (Hero, About, Sectors, etc.)
│   ├── cards/                  # Portfolio, Sector, Approach, Team cards
│   ├── ui/                     # Button, Badge, SectionHeader, ScrollReveal, ContactForm, Logo
│   └── canvas/                 # Hero network animation
├── data/                       # Centralized content (portfolio, sectors, approach, team)
└── lib/                        # Utilities and constants
```

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage with all sections |
| `/portfolio/[slug]` | Company detail pages (torob, modai, baghboon, mori) |
| `/contact` | Contact form |
| `/api/contact` | POST endpoint for form submissions (stubbed) |

## Build

```bash
npm run build
npm start
```
