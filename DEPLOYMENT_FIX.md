# 🔧 DEPLOYMENT FIX INSTRUCTIONS

## Problem

Your portfolio shows **404 NOT_FOUND** because the Next.js app is in a nested `ritik-portfolio/` subdirectory, but Vercel expects it at the root.

## Two Solutions

### ✅ SOLUTION 1 (RECOMMENDED & FASTEST) - Set Root Directory in Vercel Dashboard

1. Go to: **Vercel Dashboard → ritik-portfolio project**
2. Click: **Settings → General**
3. Find: **Root Directory** (currently set to `./`)
4. Change it to: `./ritik-portfolio`
5. Click: **Save**
6. Then: **Deployments → Redeploy**

**Done!** Vercel will rebuild and your site will be live.

---

### 🔄 SOLUTION 2 (CLEANER) - Move Project to Root

Move all files from `ritik-portfolio/` to the root directory:

- `ritik-portfolio/app/` → `./app/`
- `ritik-portfolio/components/` → `./components/`
- `ritik-portfolio/public/` → `./public/`
- `ritik-portfolio/package.json` → `./package.json`
- etc.

Then delete the empty `ritik-portfolio/` folder.

**Pros:** Cleaner repository structure, standard Next.js setup
**Cons:** More work

---

## Recommendation

👉 Use **SOLUTION 1** now (1 minute fix), then consider **SOLUTION 2** later if you want a cleaner structure.
