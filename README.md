# tommasolorenzon

Personal portfolio for Tommaso Lorenzon.  
Live at: https://tommasolorenzon.github.io

## Tech stack

- **React 18** — UI components
- **Vite** — build tool and dev server
- **Tailwind CSS** — utility-first styling
- **react-markdown** — Markdown rendering inside project descriptions
- **GitHub Actions** — automated deploy to GitHub Pages on push to `main`

## Project structure

```
src/
  data.js            ← all content: bio, publications, projects, experience, skills
  components/        ← one file per section
  │  Hero.jsx
  │  About.jsx
  │  Research.jsx
  │  Projects.jsx
  │  Experience.jsx
  │  Skills.jsx
  │  Navbar.jsx
  │  Footer.jsx
  hooks/
  │  useInView.js
  App.jsx
  main.jsx
  index.css
public/
  projects/          ← images referenced from data.js
index.html
vite.config.js
tailwind.config.js
```

## Editing content

All personal data lives in a single file: **`src/data.js`**.

It exports the following objects — edit them to update any section of the site:

| Export | Section |
|---|---|
| `meta` | Name, title, contact links |
| `about` | Bio paragraphs |
| `stats` | Highlight numbers (years, publications…) |
| `research` | Published papers |
| `projects` | Project cards with descriptions and images |
| `experience` | Work and education bento cards |
| `skills` | Technical skill groups |

Images go in `public/projects/` and are referenced in `data.js` as:
```js
src: `${import.meta.env.BASE_URL}projects/your-image.png`
```

## Local development

```bash
npm install
npm run dev
```

## Deploy to GitHub Pages

Deploy is fully automatic. Push to `main` and GitHub Actions builds and publishes the site:

```bash
git push origin main
```

The workflow lives in [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

> In the repo settings → **Pages**, set the source to **GitHub Actions**.
