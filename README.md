# oberdorf.tech

Personal site for **Justin Oberdorf** — Lustre / HPC storage expert, DDN TAM for strategic accounts, late-night tinkerer.

## Stack

- [Next.js](https://nextjs.org/) (App Router, static export)
- [Tailwind CSS](https://tailwindcss.com/)
- Markdown blog under `content/blog/`
- Editable profile data under `src/content/`

## Develop

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build (static)

```bash
npm run build
```

Output lands in `out/` — ready for GitHub Pages or any static host.

## Deploy: GitHub Pages + Cloudflare DNS

1. Push this repo to GitHub (e.g. `flipfloptech/oberdorf.tech` or `flipfloptech/my-site`).
2. **Settings → Pages → Build and deployment**: Source = **GitHub Actions**.
3. Push to `main` (or run the **Deploy to GitHub Pages** workflow).
4. After the first deploy, note the Pages URL, then in Cloudflare DNS for `oberdorf.tech`:
   - **Apex** `oberdorf.tech`: A records to GitHub Pages IPs  
     `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`  
     (or CNAME flattening to `flipfloptech.github.io` if you use a user/org site).
   - **www** (optional): CNAME → `flipfloptech.github.io` (or your project pages host).
5. In the repo **Settings → Pages → Custom domain**, add `oberdorf.tech` (CNAME file is already in `public/`).
6. Prefer Cloudflare SSL mode **Full** once GitHub cert is active; enable **Always Use HTTPS**.

### Alternative: Cloudflare Pages

Point the same `out/` build at Cloudflare Pages (connect the GitHub repo, build command `npm run build`, output directory `out`). Custom domain is then one click in the Cloudflare dashboard.

## Content

| Path | Purpose |
|------|---------|
| `src/content/site.ts` | Name, bio, links, nav |
| `src/content/experience.ts` | Roles / timeline |
| `src/content/projects.ts` | Project cards |
| `src/content/skills.ts` | Skill groups |
| `src/content/security.ts` | Advisories |
| `src/content/interests.ts` | Type-R, Funwheel, etc. |
| `content/blog/*.md` | Blog posts (frontmatter: title, description, date, tags) |

## License

Private / personal use unless you say otherwise.
