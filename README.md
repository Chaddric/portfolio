# Cedric Mandawe — Portfolio

A hand-written static portfolio site (HTML, CSS, vanilla JavaScript).
No framework, no build step, no dependencies — it publishes directly with **GitHub Pages**.

## What's inside

| File | Purpose |
| --- | --- |
| `index.html` | Home: intro, focus areas, selected work |
| `about.html` | Background, skills, education, what I'm looking for |
| `projects.html` | UniMart, Honey I'm Home, and the AI career assessment |
| `contact.html` | Email, GitHub, details, message form (opens your email app) |
| `style.css` | Layout, colours, dark theme, responsive rules |
| `script.js` | Theme switch, mobile menu, scroll reveal, form behaviour |
| `images/` | Portrait, three project screenshots, favicon |
| `robots.txt` | Allows search engines to index the site |
| `README.md` | This file |

## 1. Preview it locally

Double-click `index.html`, or right-click it in VS Code with the **Live Preview**
extension and choose *Show Preview*.

Test at phone width: the sidebar becomes a top bar with a menu button.

## 2. Before publishing

The content is filled in. Three optional improvements:

### LinkedIn URL

The contact page currently shows the name **CJR Mandawe** as plain text. When the
profile URL is known, replace that line in `contact.html`:

```html
<li>
  <span class="label">LinkedIn</span>
  <a href="https://www.linkedin.com/in/YOUR-PROFILE" target="_blank" rel="noopener">CJR Mandawe</a>
</li>
```

### Project contributions

The project pages describe each project (overview, highlights, tools) but do **not**
claim a specific role. If you want a "My role" or "What I worked on" block, add it
inside any `<div class="project-body">` in `projects.html`:

```html
<h3 class="detail-label">My role</h3>
<p class="project-summary">One or two honest sentences about what you did.</p>
```

### Screenshots

The three images are real captures of the projects. If you have your own, overwrite
them with the same file names so no code changes are needed:

- `images/project-1.png` — UniMart
- `images/project-2.jpg` — Honey, I'm Home
- `images/project-3.png` — AI career assessment

## 3. Publish with GitHub Pages

1. Sign in at github.com as **Chaddric**.
2. **+ → New repository**, name it `portfolio`, set it **Public**, don't add a README.
3. **Add file → Upload files**, then drag in the four HTML files, `style.css`,
   `script.js`, `robots.txt`, `README.md`, and the `images` folder (the contents,
   not the folder around them).
4. **Commit changes**.
5. **Settings → Pages** → Source: *Deploy from a branch* → Branch `main`, folder `/ (root)`
   → **Save**.
6. Wait a minute, then open `https://chaddric.github.io/portfolio/`.

Update later by uploading changed files to the same paths and committing again.

### Troubleshooting

| Symptom | Check |
| --- | --- |
| 404 | Repo is public, Pages set to `main` / root, `index.html` at the top level |
| No styles or images | File names and case must match exactly |
| Changes not showing | Wait for the build, then refresh in a private window |

## Notes

- **Email:** `cjrmandawe@gmail.com` (also set in `script.js` as `CONTACT_EMAIL`).
- **GitHub:** `https://github.com/Chaddric`
- **Hosting:** GitHub Pages (free)
- **AI use:** layout, CSS, and JavaScript were drafted with AI assistance, then
  reviewed and tested at desktop and phone widths.
- The site has no analytics, cookies, or tracking. Google Fonts is the only external
  request; system fonts are used if it is blocked.
