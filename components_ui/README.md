# Components UI Website

This project is a Next.js website for showcasing reusable UI components, built with TypeScript and Tailwind CSS.

## Features

- Modern, responsive layout
- Example UI components (buttons, cards, modals, etc.)
- Easy to extend with new components
- ESLint and Turbopack enabled

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Run the development server:**
   ```bash
   npm run dev
   ```
3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

- `src/app/` — Main app and pages
- `src/components/` — Reusable UI components (create this folder for your components)

## Adding New Components

1. Create a new file in `src/components/` (e.g., `Button.tsx`).
2. Export your component and use Tailwind CSS for styling.
3. Import and showcase your component in a page (e.g., `src/app/page.tsx`).

## Linting

Run `npm run lint` to check for code quality issues.

---

For more details, see the [Next.js documentation](https://nextjs.org/docs) and [Tailwind CSS docs](https://tailwindcss.com/docs).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
