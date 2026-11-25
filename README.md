# Fresh Air Duct Cleaning — Business Website

Marketing website for an air duct cleaning company: home, services and contact pages with a validated quote request form.

## Features

- Three pages (Home, Services, Contact) with shared header, footer and layout, using React Router.
- Contact / quote form built with **React Hook Form** and **Zod** validation.
- Scroll and entrance animations with **Framer Motion**.
- Reusable UI components (button, input, textarea, card) in the shadcn/ui style, using `class-variance-authority` and `tailwind-merge`.
- Fully responsive layout with Tailwind CSS.
- Deployed as static assets on **Cloudflare Workers** with Wrangler.

## Tech stack

React 18 · TypeScript · Vite · Tailwind CSS · React Router · React Hook Form · Zod · Framer Motion · lucide-react · Cloudflare (Wrangler)

## Run locally

```bash
npm install
npm run dev
npm run build     # type-check + production build
npm run deploy    # build and deploy to Cloudflare
```

## Structure

```
src/
  pages/              Home.tsx, Services.tsx, Contact.tsx
  components/layout/  Header, Footer, Layout
  components/ui/      button, input, textarea, card
  lib/utils.ts        className helper
```
