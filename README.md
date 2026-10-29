# teaganpal.github.io

My portfolio site — React + TypeScript + Tailwind CSS, built with Vite and hosted on GitHub Pages.

## Editing content

Almost everything you'll want to change lives in **`src/data/portfolio.ts`**:
profile links, projects (and their case studies), experience, skills, education, fun facts and photos.
Anything marked `[PLACEHOLDER]` still needs real content.

- **Images / resume:** put files in `public/` (e.g. `public/images/me.jpg`, `public/resume.pdf`)
  and reference them as `/images/me.jpg`, `/resume.pdf`.
- **Page sections / layout:** `src/components/portfolio/Sections.tsx` (one function per section)
  and `src/components/portfolio/Nav.tsx`.
- **Colors, fonts, little effects:** `src/styles.css` — the palette is the `:root` block near the top.
- **Pages:** `src/routes/` — `index.tsx` is the home page, `projects.$slug.tsx` is the case-study page
  that's generated for every project in the data file.

## Running locally

Requires [Node.js](https://nodejs.org) 20.19+ (22 recommended).

```sh
npm install      # first time only
npm run dev      # opens a live-reloading dev server at http://localhost:5173
```

`npm run build` makes the production version in `dist/`; `npm run preview` serves that build locally.
`npm run typecheck` checks for TypeScript errors (optional — builds and deploys don't require it to pass).

## Deploying

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site and publishes it to
https://teaganpal.github.io.

One-time setup: on GitHub go to the repo's **Settings → Pages → Build and deployment → Source** and
choose **GitHub Actions**.

## Notes

- `src/routeTree.gen.ts` is generated automatically from `src/routes/` when you run dev/build — don't edit it.
- GitHub Pages has no server, so `npm run build` copies `index.html` to `404.html`; that lets
  links like `/projects/project-one` load correctly when opened directly.
