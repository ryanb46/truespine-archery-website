# TrueSpine Archery website

Pre-launch website for TrueSpine Archery, a fit-first online archery shop (BIS 375 e-commerce project).
Live site: https://ryanb46.github.io/truespine-archery-website/

## Stack
- React + TypeScript, built with Vite
- Tailwind CSS v4 (brand colors live in `src/index.css`)
- shadcn/ui components in `src/components/ui/` (new-york style, see `components.json`)
- React Router, with `basename` set from Vite's `base` (`/truespine-archery-website/`)
- Hosted on GitHub Pages, deployed by `.github/workflows/deploy.yml` on every push to `main`

## Commands
- `npm install` then `npm run dev` to work locally
- `npm run lint` and `npm run build` must pass before a pull request (CI runs both)

## Brand rules
- Off-white background, forest green (`primary`), target-orange accent (`accent`). Use the theme tokens, not raw hex values, in components.
- Headings use the Archivo display font; body text uses Inter.
- Mobile first: large tap targets, readable at 390px wide.
- Voice: a friendly local pro shop. Plain language, explain archery terms the first time.
- Marketing opt-in checkboxes are never pre-checked.

## Layout
- `src/pages/` one file per page; routes are in `src/App.tsx`
- `src/components/` shared parts (Header, Footer, ProductCard, SignupForm)
- `src/data/` content lists such as `products.ts`; add products there, not in pages
- `src/lib/` helpers and, later, the spine calculator and fit logic

## Commits and pull requests
- Commits are authored by Ryan Bieu. Do not add Co-Authored-By lines or any AI attribution to commits or pull requests.
- One milestone or issue per pull request. Ryan reviews and merges every one.
