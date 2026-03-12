# FortuneWhyte — Developer Portfolio

A modern, animated personal portfolio built with **React** and **Vite**, showcasing my projects, skills, and work experience.

> **Live Site:** *Coming soon*

---

## ✨ Features

- **Smooth Page Transitions** — Framer Motion `AnimatePresence` for seamless route animations
- **Interactive 3D Cube** — CSS 3D-transformed cube spinner displaying tech stack icons
- **Animated Skill Bars** — Progress bars that animate into view as you scroll
- **Glassmorphism UI** — Dark-themed cards with backdrop blur and accent glow effects
- **Responsive Design** — Fully adaptive layout across desktop, tablet, and mobile
- **Contact Form** — Integrated contact page for direct outreach

## 🛠️ Tech Stack

| Category       | Technologies                                |
|----------------|---------------------------------------------|
| **Framework**  | React 19, React Router 7                    |
| **Build Tool** | Vite 7                                      |
| **Animations** | Framer Motion                               |
| **Icons**      | React Icons                                 |
| **Styling**    | Vanilla CSS with CSS Custom Properties      |
| **Linting**    | ESLint with React Hooks & Refresh plugins   |

## 📄 Pages

| Page          | Route         | Description                                              |
|---------------|---------------|----------------------------------------------------------|
| **Home**      | `/`           | Hero section with introduction and call-to-action        |
| **About**     | `/about`      | Bio, work experience, skills with progress bars, 3D cube |
| **Portfolio**  | `/portfolio`  | Project showcase grid with live/GitHub links              |
| **Contact**   | `/contact`    | Contact form for direct communication                    |

## 📂 Project Structure

```
portfolio-dev/
├── public/
│   └── images/            # Project screenshots & assets
├── src/
│   ├── assets/            # Static assets
│   ├── components/        # Reusable components (Navbar, Footer, Hero, ProjectCard)
│   ├── css/               # Modular stylesheets per component/page
│   ├── pages/             # Route-level page components
│   ├── App.jsx            # Root component with animated routing
│   ├── main.jsx           # Entry point
│   └── index.css          # Global styles & CSS variables
├── package.json
└── vite.config.js
```

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18+
- npm or yarn

### Installation

```bash
git clone https://github.com/FortuneWhyte/portfolio-dev.git
cd portfolio-dev
npm install
```

### Development

```bash
npm run dev
```

Opens at `http://localhost:5173`

### Production Build

```bash
npm run build
npm run preview
```

## 📬 Contact

Feel free to reach out through the [Contact page](/) or connect on [GitHub](https://github.com/FortuneWhyte).

---

Built with ☕ and React by **FortuneWhyte**
