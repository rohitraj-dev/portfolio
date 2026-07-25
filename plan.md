# Rohit Kumar — Portfolio Website Plan

---

## 🎯 Goal
A professional, visually stunning personal portfolio website targeting:
- Recruiters & internship opportunities
- Clients for freelance projects
- Academic showcase (BIT Mesra, BCA)

---

## 🛠️ Tech Stack
| Layer | Tool |
|-------|------|
| Framework | React + Vite |
| Styling | Tailwind CSS |
| Animations | Framer Motion |
| Routing | React Router DOM |
| Icons | Lucide React / React Icons |
| Forms | EmailJS (free contact form) |
| Font | Inter + Space Grotesk |

---

## 🎨 Design Language
- **Theme:** Glassmorphism + Futuristic dark
- **Colors:** Deep navy/black bg, cyan/purple accent, white text
- **Effects:** Frosted glass cards, glowing borders, particle/gradient animated bg
- **Feel:** Premium, modern, developer-grade

---

## 🧰 Tools Used
| Tool | Purpose |
|------|---------|
| Cursor | Main AI-powered IDE (vibe coding) |
| GitHub Copilot | Inline code suggestions (free via Student Pack) |
| Vercel | Hosting + auto-deploy from GitHub |
| GitHub Student Pack | Free `.tech` domain + Copilot |

---

## 📄 Pages & Sections

### 1. `/` — Home (Single Page)
- **Hero** — Name, animated tagline, CTA buttons (View Work / Contact), particle/gradient background
- **About/Brief** — Photo, bio, BIT Mesra info, fun facts, personality blurb
- **Skills** — Categorized cards: Languages, Frameworks, Tools, AI/ML, currently learning
- **Projects** — Grid of project cards (title, description, tags, GitHub + Live links)
- **Education & Timeline** — BIT Mesra BCA, milestones, vertical timeline
- **Certifications** — Badge-style cards
- **Contact** — Email form (EmailJS) + GitHub, LinkedIn, Twitter/X socials

### 2. `/projects/:id` — Project Detail Page
Each project gets its own page with:
- Hero banner (project name + tagline)
- Overview / problem statement
- Tech stack used
- Key features (with screenshots/mockups)
- Challenges & learnings
- GitHub + Live demo links

---

## 🗂️ Projects to Feature
| Project | Stack | Status |
|---------|-------|--------|
| ExamIQ | React, AI API | Done |
| AI Meal Planner | Python, Streamlit, Genetic Algorithm | Done |
| MarketPulse | Python, yfinance, LSTM/XGBoost | In Progress |
| Vakalat (Legal Tech) | React, FastAPI | In Progress |

---

## 📁 Folder Structure
```
portfolio/
├── public/
│   └── assets/ (images, resume PDF)
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── Timeline.jsx
│   │   ├── Certifications.jsx
│   │   └── Contact.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   └── ProjectDetail.jsx
│   ├── data/
│   │   ├── projects.js
│   │   ├── skills.js
│   │   └── timeline.js
│   ├── App.jsx
│   └── main.jsx
├── .env (EmailJS keys)
├── tailwind.config.js
├── vite.config.js
└── package.json
```

---

## ✅ Task Order

| # | Task | Tool |
|---|------|------|
| 1 | Init GitHub repo + Vite + React project | Terminal / Cursor |
| 2 | Install dependencies (Tailwind, Framer Motion, Router) | Terminal |
| 3 | Setup base layout, fonts, global styles | Cursor + Copilot |
| 4 | Build Navbar (sticky, glassmorphism) | Cursor |
| 5 | Build Hero section (animated bg, tagline) | Cursor |
| 6 | Build About/Brief section | Cursor |
| 7 | Build Skills section | Cursor |
| 8 | Build Projects grid + cards | Cursor |
| 9 | Build Project Detail pages (routing) | Cursor |
| 10 | Build Timeline/Education section | Cursor |
| 11 | Build Certifications section | Cursor |
| 12 | Build Contact section (EmailJS) | Cursor |
| 13 | Global polish — animations, responsiveness, dark mode | Cursor |
| 14 | Deploy to Vercel | Vercel CLI / Dashboard |
| 15 | Connect `.tech` domain (GitHub Student Pack) | Vercel + Domain registrar |

---

## 🌐 Deployment
1. Push code to GitHub repo (`rohitkumar-portfolio`)
2. Connect repo to Vercel → auto deploys on every push
3. Claim free `.tech` domain via GitHub Student Pack (edu.github.com)
4. Point domain DNS to Vercel
5. Live at `rohitkumar.tech` ✅

---

## 📌 Notes
- Keep all data (projects, skills, timeline) in `/src/data/` files — easy to update
- Resume PDF stored in `/public/` — direct download link in Hero
- EmailJS free tier = 200 emails/month (sufficient)
- Vercel free tier = unlimited for personal projects
- GitHub Copilot free via Student Pack (verify at edu.github.com/pack)
