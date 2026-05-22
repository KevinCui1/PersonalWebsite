# Personal Portfolio

Built with React, Vite, and Tailwind CSS v3.

## Local Development

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Production Build

```bash
npm run build
npm run preview
```

## Deploy to Vercel

1. Push this repo to GitHub.
2. Import the repository in the Vercel dashboard.
3. Vercel auto-detects Vite. Build command: `vite build`, output directory: `dist`.
4. Deploy. The `vercel.json` handles SPA routing rewrites automatically.

Or via CLI:

```bash
npm i -g vercel
vercel
```
