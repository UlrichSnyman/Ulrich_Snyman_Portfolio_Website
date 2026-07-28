# Ulrich Snyman — Portfolio Website

A React portfolio website featuring fluid animations, responsive design, and a data-driven content architecture.

## Live site

<https://ulsnportfolio.netlify.app>

---

## How to update portfolio content

All content lives in **one of two places**. You never need to touch component templates just to add a new entry.

### 1. Profile & contact details, professional skills, languages

Edit **`src/data/portfolioData.js`**:

| What you want to change | Where in the file |
|---|---|
| Name, headline, location, email, phone, portfolio URL | `profile` object |
| Professional summary paragraph | `profile.professionalSummary` |
| Spoken languages | `profile.languages` array |
| IT Support / Microsoft / Customer & Admin skill groups | `professionalSkills` array |

To **add a new skill group** (e.g. "Project Management"), append an object to `professionalSkills`:

```js
{
  title: 'Project Management',
  icon: '📋',
  skills: ['Agile basics', 'Kanban', 'Sprint planning'],
},
```

### 2. Projects

Edit the `projects` array at the top of **`src/components/PortfolioSection.js`**.

Each entry looks like:

```js
{
  title: "My New Project",
  description: "Short description.",
  technologies: ["React", "Node.js"],
  imageUrl: require('../assets/images/my_screenshot.png'),
  projectUrl: "https://live-url.example.com",
  githubUrl: "https://github.com/UlrichSnyman/my-repo"
},
```

### 3. Certificates

Edit the `certificates` array at the top of **`src/components/CertificatesSection.js`**.

Drop the PDF into `src/assets/certs/` and add:

```js
{
  title: "New Certificate",
  file: require('../assets/certs/Ulrich_Snyman_NewCert.pdf'),
  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/something/something-original.svg"
},
```

Leave `file` out (or set it to `null`) for a "Coming Soon" placeholder.

### 4. Technology stack (banner)

Edit `techCategories` in **`src/components/TechnologiesBanner.js`**.

Add a new icon to an existing category, or add a new `key: [...]` object for a whole new category row.

---

## Development

```bash
cd portfolio
npm install
npm start        # dev server at http://localhost:3000
npm run build    # production build
npm test         # run tests
```

> The app was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
> See the CRA docs for advanced configuration, code-splitting, PWA, and deployment details.
