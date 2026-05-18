# Zico Portfolio

A CMS-powered developer portfolio built as part of the Noroff Agency 2 Resit assignment. Demonstrates frontend–content separation using a React + Vite + Tailwind stack with JSON-based content management.

## Live Site

https://zico-agency.netlify.app/

## Stack

- **Frontend Framework**: React 19 (via Vite)
- **Styling**: Tailwind CSS v4
- **Content Management**: JSON-based content files (git-managed)
- **Deployment**: Netlify (auto-deploys from main branch)

## CMS Approach

This project uses a git-based content management pattern. All portfolio content (hero, skills, projects, contact info) lives as JSON files in `src/content/` and is imported into React components at build time.

**Why this approach over a hosted CMS like Decap/Sanity?**
Within the time constraints of the resit, a JSON-based content layer preserves the core architectural goal of the brief: separation of content from code. Non-technical edits can be made directly to the JSON files via GitHub's web editor, with no code changes needed. The component structure supports adding a CMS GUI layer (such as Decap CMS pointed at the same JSON files) as a next step, without restructuring the application.

## Project Structure

src/
├── content/ # Content layer (CMS-like)
│ ├── hero.json
│ ├── skills.json
│ ├── projects.json
│ └── contact.json
├── App.jsx # Main portfolio component
├── main.jsx # Entry point
└── index.css # Tailwind imports

## Features

- Hero / About section with bio
- Skills grid (CMS-driven)
- Projects gallery (CMS-driven)
- Contact section with form
- Responsive design with mobile hamburger menu
- Smooth-scroll navigation

## Running Locally

```bash
npm install
npm run dev
```

## Build for Production

```bash
npm run build
```

## Editing Content

To update portfolio content without touching code:

1. Open `src/content/[hero|skills|projects|contact].json` on GitHub
2. Edit the values
3. Commit — Netlify auto-rebuilds and deploys

## Planning & Design

- **GitHub Projects board**: [paste your project board link]
- **Figma prototype**: [paste your figma link]

## AI Usage

See `AI_LOG.md` for a record of AI-assisted work on this project.
