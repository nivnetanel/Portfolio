# Niv Netanel — Portfolio

Personal portfolio website of Niv Netanel, Full Stack Developer.

**[👋 Live Demo](https://nivnetanel.com/)**

## Tech Stack

- [React 17](https://reactjs.org/) (Create React App)
- [AOS](https://michalsnik.github.io/aos/) — scroll animations
- [react-scroll](https://www.npmjs.com/package/react-scroll) — smooth section navigation
- [Formspree](https://formspree.io/) — contact form backend
- [Font Awesome](https://fontawesome.com/) — social icons
- Deployed automatically to GitHub Pages via GitHub Actions on every push to `main`

## Sections

- **Home** — intro with typing animation
- **About** — profile, technical skills and contact details
- **Portfolio** — project cards (defined in `src/components/Project_card.js`)
- **Contact** — contact form powered by Formspree

## Getting Started

```bash
npm install
npm start        # dev server at http://localhost:3000
```

## Scripts

| Command         | Description                    |
| --------------- | ------------------------------ |
| `npm start`     | Run the dev server             |
| `npm test`      | Run tests in watch mode        |
| `npm run build` | Production build into `build/` |

Deployment is automatic: every push to `main` builds and publishes the site
to GitHub Pages via [deploy.yml](.github/workflows/deploy.yml).

## Adding a Project

Add an entry to the array in `src/components/Project_card.js`:

```js
{
  id: 7,
  project_name: "My New Project",
  technologies: "ReactJS",
  animation_effect: "zoom-in-left",
  project_link: "https://example.com/",
  thumb: require("../images/portfolio/proj7.png"),
}
```
