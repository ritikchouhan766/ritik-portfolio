# Ritik Chouhan — Portfolio

Python Backend Engineer portfolio built with Next.js 14, Tailwind CSS, and TypeScript.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Fonts**: Syne (display), DM Sans (body), JetBrains Mono (code)
- **Deployment**: Vercel (zero-config)

## Project Structure

```
.
├── app/
│   ├── globals.css       # Global styles, CSS variables, animation utilities
│   ├── layout.tsx        # Root layout with SEO metadata
│   └── page.tsx          # Main page composition
├── components/
│   ├── Navbar.tsx        # Fixed navigation with scroll-aware styling
│   ├── Hero.tsx          # Landing section with stats
│   ├── About.tsx         # Profile + highlight cards
│   ├── Skills.tsx        # Grouped tech skill matrix
│   ├── Experience.tsx    # Work history with metrics
│   ├── Projects.tsx      # Project showcase with achievements
│   ├── Contact.tsx       # Contact links + message form
│   └── Footer.tsx        # Minimal footer
├── public/
│   └── Ritik_Chouhan_Resume.pdf   # ← Place your resume here
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Local Development

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Open http://localhost:3000
```

### Production Build

```bash
npm run build
npm start
```

---

## Deploy to Vercel (Recommended)

### Option A — Vercel CLI

```bash
# Install Vercel CLI globally
npm i -g vercel

# Deploy from project root
vercel

# Follow prompts:
# - Link to existing project or create new
# - Root directory: ./
# - Build command: next build (auto-detected)
# - Output directory: .next (auto-detected)
```

### Option B — GitHub Integration (Easiest)

1. Push this project to a GitHub repository
2. Go to [vercel.com](https://vercel.com) and sign in
3. Click **"Add New Project"**
4. Import your GitHub repository
5. Vercel auto-detects Next.js — click **Deploy**
6. Done. Every push to `main` triggers a new deploy.

### Environment Variables (Optional)

If you add an email API (e.g., Resend, EmailJS, Formspree), set:

```
RESEND_API_KEY=re_xxxxxxxxxxxx
```

Add via Vercel Dashboard → Project Settings → Environment Variables

---

## Customization

### Add Resume PDF

Place your resume at:

```
public/Ritik_Chouhan_Resume.pdf
```

The "Resume" buttons in Navbar and Hero will automatically trigger a download.

### Update Personal Links

Edit `components/Contact.tsx` to update LinkedIn URL with your actual profile slug.

### Update GitHub Links

In `components/Projects.tsx`, replace the `github` field in each project with your actual repo URLs.

### Custom Domain

In Vercel Dashboard → Project → Settings → Domains → Add your domain.

---

## Performance Optimizations

- **Fonts**: Loaded via Google Fonts with `display=swap` for CLS prevention
- **Images**: No heavy images — pure CSS backgrounds and SVG icons
- **Animations**: CSS-only IntersectionObserver fade-ups, no heavy libraries
- **Bundle**: Zero animation libraries, no runtime CSS-in-JS
- **Compression**: `compress: true` in `next.config.js`
- **Headers**: `poweredByHeader: false` removes X-Powered-By

### Lighthouse Targets

- Performance: 95+
- Accessibility: 90+
- SEO: 100
- Best Practices: 95+

---

## SEO Configuration

Metadata is configured in `app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: 'Ritik Chouhan — Python Backend Engineer',
  description: '...',
  openGraph: { ... },
  twitter: { ... },
}
```

Update `metadataBase` URL once you have a custom domain:

```typescript
metadataBase: new URL('https://your-domain.com'),
```

---

## License

Personal portfolio — all rights reserved by Ritik Chouhan.
