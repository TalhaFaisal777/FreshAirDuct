# Fresh Air Duct Cleaning

Website for an air duct cleaning business. It has three pages (home, services, contact) and a quote request form.

Built with React, TypeScript and Vite. Styling is Tailwind, with a few small shadcn-style components (button, input, textarea, card). The quote form uses React Hook Form with Zod for validation, and the animations are Framer Motion. It's deployed as static assets on Cloudflare with Wrangler.

## Running it locally

```bash
npm install
npm run dev
npm run build     # type-check and build
npm run deploy    # build and deploy to Cloudflare
```

Pages are in `src/pages`, the header/footer/layout in `src/components/layout`, and the UI components in `src/components/ui`.
