# MKO Website — Targeted Women's Organization

The official website for MKO (Targeted Women's Organization), a Swedish non-profit based in Kristinehamn, Värmland County, dedicated to empowering women, girls, youth, and immigrant families.

Built with React 19, Vite, and Tailwind CSS.

## Prerequisites

- **Node.js** 20 or later (this project was built and tested on Node 24)
- **npm** 10 or later (comes with Node)

Check your versions:

```bash
node -v
npm -v
```

## 1. Install dependencies

From the project root:

```bash
npm install
```

## 2. Set up contact form email delivery

The contact form sends submissions straight to an inbox via [Web3Forms](https://web3forms.com) — no backend required.

1. Go to [web3forms.com](https://web3forms.com) and enter the email address that should receive contact form messages. No account or password needed — they'll email you an access key instantly.
2. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```
3. Paste your access key into `.env`:
   ```
   VITE_WEB3FORMS_ACCESS_KEY=your-access-key-here
   ```
4. Restart the dev server if it's already running, so Vite picks up the new environment variable.

`.env` is gitignored — each environment (your machine, staging, production) sets its own key.

## 3. Run the development server

```bash
npm run dev
```

This starts Vite's dev server with hot module reloading. It will print a local URL in the terminal, typically:

```
http://localhost:5173/
```

Open that URL in your browser. The page updates automatically as you edit files.

## 4. Build for production

```bash
npm run build
```

This bundles and optimizes the app into the `dist/` folder — minified JS/CSS, code-split by route, ready to deploy.

## 5. Preview the production build locally

```bash
npm run preview
```

Serves the contents of `dist/` locally so you can sanity-check the production build before deploying.

## 6. Lint the code

```bash
npm run lint
```

Runs Oxlint across the project.

## Project structure

```
src/
├── assets/          Images, videos, icons, logos (source files, not yet imported)
├── components/
│   ├── layout/      Navbar, Footer, ScrollToTop
│   ├── home/        Hero, Statistics, Programs, Partners, Testimonials, etc.
│   ├── gallery/      Gallery grid + filter
│   ├── contact/      Contact form + shared contact section
│   └── common/       Button, Card, SectionTitle, Seo, PageHeader, etc.
├── pages/            One file per route: Home, About, Programs, Events, Gallery, News, Contact
├── services/         api.js — Axios client for the future Django backend
├── data/             Static content: programs, events, testimonials, gallery, site config
├── utils/            Small helpers (e.g. icon lookup maps)
├── App.jsx           Route definitions
└── main.jsx          App entry point (Router, Helmet, StrictMode)
```

## Replacing placeholder content

Placeholder media lives under `public/images/placeholders/` and `public/videos/placeholders/`. To swap in real photos/videos, replace the files there (keep the same filenames) or update the paths referenced in `src/data/*.js`.

Organization details (address, phone, email, social links, mission, vision, values, etc.) are centralized in `src/data/siteConfig.js` — update that file rather than hunting through components.

## Connecting the backend

The contact form currently sends through Web3Forms (see step 2 above), wired up in `src/services/api.js`. Once a Django REST Framework backend exists, `submitContactForm` in that file can be swapped to POST to `/api/contact/` instead — `ContactForm.jsx` doesn't need any changes, since it just calls `submitContactForm(...)`.

## Deploying

`npm run build` produces a static `dist/` folder that can be deployed to any static host (Netlify, Vercel, S3/CloudFront, etc.) or served behind the Django backend once it's ready. This is a client-side routed SPA, so the host must be configured to redirect unknown paths to `index.html`.
