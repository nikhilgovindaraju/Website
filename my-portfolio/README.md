# Nikhil Govindaraju — Developer Portfolio

A production-grade personal portfolio built with React, Vite, and Framer Motion. Features a steel blue dark theme, smooth animations, and a fully responsive layout designed to impress recruiters and hiring managers.

---

## Tech Stack

- **React 18** — component-based UI
- **Vite** — fast dev server and build tool
- **Framer Motion** — page and scroll animations
- **CSS Modules** — scoped, component-level styling
- **EmailJS** — contact form without a backend 
- **Devicons** — tech stack icons
- **React Icons** — UI icons (Feather set)
- **GitHub Pages** — deployment

---

## Project Structure

```
src/
├── assets/
│   ├── certifications/     # Cert images
│   └── *.png               # Project + company + education logos
├── components/
│   ├── navbar.jsx
│   ├── hero.jsx
│   ├── about.jsx
│   ├── experience.jsx
│   ├── projects.jsx
│   ├── skills.jsx
│   ├── Certifications.jsx
│   ├── contact.jsx
│   └── footer.jsx
├── styles/
│   └── *.module.css        # One CSS module per component
├── hooks/
│   └── useScrollReveal.js  # Scroll-triggered animation hook
├── context/
│   └── ThemeContext.jsx     # Dark / light mode toggle
├── App.jsx
├── main.jsx
└── index.css               # Global design tokens + CSS variables

public/
└── NikhilGovindaraju.pdf   # Resume — replace to update
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Install dependencies

```bash
npm install
```

### Run locally

```bash
npm run dev
```

Opens at `http://localhost:5173/Website/`

### Build for production

```bash
npm run build
```

Output goes to the `dist/` folder.

---

## Deployment — GitHub Pages

This project is configured to deploy to GitHub Pages using the `gh-pages` package.

### First-time setup

**1. Install gh-pages** (if not already installed):
```bash
npm install --save-dev gh-pages
```

**2. Check `vite.config.js`** has the correct base path:
```js
export default {
  base: '/Website/',
  plugins: [react()],
}
```
Replace `Website` with your actual GitHub repo name if different.

**3. Check `package.json`** has these two entries:
```json
{
  "homepage": "https://YOUR_GITHUB_USERNAME.github.io/Website",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```
Replace `YOUR_GITHUB_USERNAME` and `Website` with your actual values.

### Deploy

```bash
npm run deploy
```

This will:
1. Run `npm run build` automatically
2. Push the `dist/` folder to the `gh-pages` branch
3. GitHub Pages will serve it at `https://YOUR_GITHUB_USERNAME.github.io/Website`

### After deploying

- Wait **1–2 minutes** for GitHub Pages to update
- Hard refresh the live URL: `Cmd + Shift + R` (Mac) or `Ctrl + Shift + R` (Windows)
- If the site doesn't update, go to **GitHub → Settings → Pages** and confirm the source is set to the `gh-pages` branch

---

## Updating Content

| What to update | Where |
|---|---|
| Resume PDF | Replace `public/NikhilGovindaraju.pdf` |
| Hero text / roles | `src/components/hero.jsx` — `roles` array |
| About bio + stats | `src/components/about.jsx` |
| Work experience | `src/components/experience.jsx` — `experiences` array |
| Projects | `src/components/projects.jsx` — `projects` array |
| Skills | `src/components/skills.jsx` — `categories` array |
| Certifications | `src/components/Certifications.jsx` — `featured` + `rest` arrays |
| Contact details | `src/components/contact.jsx` — `socials` array |
| EmailJS config | `src/components/contact.jsx` — `handleSubmit` function |
| Profile photo | Replace `public/profile-pic.png` |

---

## EmailJS Setup

To make the contact form send real emails:

1. Create a free account at [emailjs.com](https://www.emailjs.com)
2. Create a **Service** and note the Service ID
3. Create an **Email Template** and note the Template ID
4. Get your **Public Key** from Account → API Keys
5. In `src/components/contact.jsx`, replace:

```js
emailjs.sendForm(
  'YOUR_SERVICE_ID',
  'YOUR_TEMPLATE_ID',
  formRef.current,
  'YOUR_PUBLIC_KEY'
)
```

---

## Design System

All design tokens are defined as CSS variables in `src/index.css`:

| Token | Value | Usage |
|---|---|---|
| `--accent-primary` | `#4f8ef7` | Steel blue — buttons, links, highlights |
| `--accent-secondary` | `#7eb3ff` | Lighter blue — tags, secondary elements |
| `--accent-tertiary` | `#38bdf8` | Sky blue — gradient endpoint |
| `--bg-primary` | `#080b0f` | Main background |
| `--bg-secondary` | `#0d1117` | Cards, inputs |
| `--text-primary` | `#f0f6fc` | Headings |
| `--text-muted` | `#8b949e` | Subtitles, metadata |

---

## License

This project is personal and not open-sourced for reuse. Feel free to take inspiration but please don't copy the content directly.
