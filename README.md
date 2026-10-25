# Gamal Farag · Interactive Project Portfolio v2

This is a static HTML / CSS / JavaScript project portfolio. It can be deployed to Cloudflare Pages, Netlify, or GitHub Pages without a build step.

## Added in v2

- 12 selected projects, including a separate private-villa case study.
- Interactive case studies for Lekhwiya, Aspire Zone, Private Residential Villa, Diriyah Square, Souq Al Najada and Tower 404.
- Click-to-switch technical exhibits: interactive line/S-curves, workstream comparisons and relative Gantt logic.
- The villa **planned-only** S-curve is reconstructed from the supplied workbook; the dates and identities are stripped.
- Lekhwiya and Gold Souq examples display **illustrative/synthetic** progress data, explicitly labelled.
- Aspire and Diriyah timelines are normalized illustrations of project workstream order, not contractual milestone dates. The two Aspire documents are related to Aspire Zone but describe distinct West Zone baseline and athletics tender scopes; they are not presumed to be the same contract.
- The Tower 404 standalone schedule / cladding source was not separately identifiable in the submitted file set; this case uses previously supplied CV-level scope.

## Before publishing – important

The website intentionally does NOT include original client BOQs, tender PDFs, spreadsheets, PowerPoint presentations, sensitive facility layouts, or progress photographs. Consult your employer / client about their publishing policies before adding any original material or exact commercial figures.

**Lekhwiya** is a restricted government project: only generalized planning methods and synthetic visuals are published; do not upload original source slides/images to a public web host.

**Private villa** planned curve has relative weeks, no dates or cost figures. If even normalized data requires permission, replace the series in `case-studies.js` with an illustrative example.

## Customize

- Edit `projects.js` for project text and case order.
- Edit `case-studies.js` for public-safe technical visualizations.
- Edit `index.html` for general site copy.
- Edit `styles.css` for colors and layout.
- Update `assets/Gamal_Farag_CV.pdf` with your latest approved CV if necessary.

## Deployment

Cloudflare Pages: create a Pages project > Direct Upload > upload the **contents of this folder** or the deployment ZIP. `index.html` must be at the site root. Set no build command.

Netlify: drag the folder to the deploy interface.

GitHub Pages: push all files to the root of a public repository, then enable Pages > Deploy from branch. Note that public repository files become available to everyone.

No paid packages, dependencies, analytics or tracking scripts are used.

---

# Gamal Farag — Planning Engineer Portfolio

A responsive, interactive, static project portfolio built from the supplied CV. No subscription, database, npm install, or server is required.

## Files

- `index.html` — page layout, headings, contact details, and HTML meta tags.
- `styles.css` — colors, typography, layout, mobile styling.
- `projects.js` — **edit your project entries here** (11 currently included).
- `app.js` — search, category filters, project dialog, mobile menu, and copy-email button.
- `assets/Gamal_Farag_CV.pdf` — downloadable CV.
- `assets/favicon.svg` — browser tab icon.

## Preview locally

Double-click `index.html` in a modern browser. No internet connection or web server is needed. Alternatively, use `python -m http.server 8000` from this folder, then visit `http://localhost:8000`.

## Publish for free — easiest: Cloudflare Pages

1. Sign up / sign in at https://dash.cloudflare.com/.
2. Go to **Workers & Pages** and choose **Create application** / **Pages** / **Direct Upload** (dashboard labels can evolve).
3. Upload the extracted project folder **or the supplied ZIP** using drag-and-drop. The root of the upload must contain `index.html`.
4. Set an available project name, then click **Deploy**. Cloudflare gives you a free `*.pages.dev` address.
5. To update the site, upload the updated files in a new deployment.

Cloudflare documentation: https://developers.cloudflare.com/pages/get-started/direct-upload/

## Publish for free — GitHub Pages

1. Make a GitHub account and create a **public repository** (e.g., `planning-portfolio`).
2. Upload the *contents* of this folder at the repository root and commit.
3. Open **Settings → Pages**, choose **Deploy from a branch**, select `main` and `/ (root)`, then save.
4. The site will be available at `https://YOUR-USERNAME.github.io/planning-portfolio/` once deployed.

GitHub documentation: https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site

## Customize before publishing

- In `projects.js`, edit names, sectors, descriptions, deliverables, regions, and optionally add verified scope facts.
- In `index.html`, edit the email, profile summary, contact links, job titles, and educational information if desired.
- Replace `assets/Gamal_Farag_CV.pdf` with your approved public-facing CV using the same filename.
- When you have permission to publish actual project photographs, you can add these later to custom gallery sections.
- Prefer *accurate* outcomes: do not publish unverifiable delay-reduction percentages, savings, or personal project leadership claims.
- **Confidentiality review is essential:** royal, security-related, and private developments may have contractual restrictions. Confirm every named project and visual is safe to disclose publicly before deployment. This version uses illustrative linework, not actual drawings.
- The site includes the contact email and a downloadable CV that includes your phone number. Remove these before publishing if you do not want them publicly visible.
- A paid custom domain is optional, not required. Static site hosting is free within the providers' published plan limits.

## Features

- 11 project cards with sector filters and instant search
- Detailed project view, keyboard-accessible dialog and next-project navigation
- Responsive desktop / tablet / mobile navigation
- Experience timeline, process and skills sections, working CV link
- Contact email copy and email-client link
- Offline-capable and dependency-free: only HTML, CSS, and JavaScript

**Editorial note:** project descriptions and dates are taken from the provided CV. The illustration graphics are conceptual, not real site photography or design drawings. Project exposure is presented as planning-related experience, not a claim to be the architect or main contractor.
