// Every piece of copy on the site lives here. Edit this file to change the
// page -- none of the components hold content of their own.

export const identity = {
    logo: "FORTUNE WHYTE // SYST_01",
    headingTop: "FULLSTACK",
    headingBottom: "FROM DB TO PIXEL.",
    meta: [
        { label: "IDENTITY:01", value: "FORTUNE WHYTE" },
        { label: "PROTOCOL:02", value: "SOFTWARE DEVELOPER & CREATIVE FULLSTACK ENGINEER" },
        { label: "LOCATION:03", value: "REGINA, SASKATCHEWAN [CANADA]" }
    ]
};

export const marqueeWord = "Build · Ship · Iterate";

// Resolves the template's <a href="#about"> nav link, which pointed at a
// section the design never included.
export const about = {
    label: "MODULE_01 // OPERATOR_PROFILE",
    body: "I am a motivated software developer with an Associate Degree in Computer Science. My diverse background has strengthened my ability to collaborate effectively, communicate clearly, and approach technical challenges with strong analytical and problem-solving skills. I have a deep passion for building robust backends and stunning interactive frontends."
};

export const work = {
    label: "MODULE_02 // SYSTEM_ARTIFACTS",
    projects: [
        {
            title: "LUXESTYLE_BRAIDS",
            image: "/images/luxestylebraids.jpg",
            tags: ["React", "Prisma", "TypeScript"],
            liveLink: "https://luxestylebraids.com",
            githubLink: "https://github.com/FortuneWhyte"
        },
        {
            title: "LUMI_COSMETICS",
            image: "/images/lumicosmetics.jpg",
            tags: ["React", "TypeScript", "Vite", "Tailwind"],
            liveLink: null,
            githubLink: "https://github.com/FortuneWhyte/LuMicosmetics"
        },
        {
            title: "EXAM_PLANNER",
            image: "/images/homepage.jpg",
            tags: ["React", "Express", "Node.js"],
            liveLink: "https://ur-exam-planner.vercel.app/",
            githubLink: "https://github.com/FortuneWhyte/UR-exam-planner-frontend"
        },
        {
            title: "EVAL_LENS",
            image: "/images/evallens.png",
            tags: ["Python", "FastAPI", "SQLModel", "OpenAI SDK"],
            liveLink: null,
            githubLink: "https://github.com/FortuneWhyte"
        }
    ]
};

export const stack = {
    label: "MODULE_03 // CORE_ENGINE",
    items: [
        { name: "LANGUAGES", details: "C++ / PYTHON / TYPESCRIPT / SQL" },
        { name: "FRONTEND ARCHITECTURE", details: "REACT / VITE / FRAMER MOTION / GSAP" },
        { name: "BACKEND & DATA", details: "NODE.JS / EXPRESS / FASTAPI / POSTGRESQL" },
        { name: "TOOLING", details: "GIT / PRISMA / TAILWIND / NETLIFY" }
    ]
};

// TODO(Fortune): supply your real roles, employers and years. These are
// placeholders and must not ship as-is -- see PLACEHOLDER flag below.
export const experience = {
    label: "MODULE_04 // VOYAGE_LOG",
    placeholder: true,
    entries: [
        { year: "20XX", title: "ROLE @ EMPLOYER", body: "What you were responsible for, and what changed because you were there." },
        { year: "20XX", title: "ROLE @ EMPLOYER", body: "What you were responsible for, and what changed because you were there." }
    ]
};

export const contact = {
    label: "INITIATE_TRANSMISSION",
    headingTop: "READY TO",
    headingBottom: "EXPLORE?",
    submitLabel: "TRANSMIT REQUEST ↗",
    colophon: "© 2026 VOYAGE PHASE 3. ALL SYSTEMS OPTIMAL.",
    web3formsKey: "eed7dc77-4c40-4288-8489-d45b092c9cc3"
};

export const navLinks = [
    { name: "Work", href: "#work" },
    { name: "About", href: "#about" },
    { name: "Stack", href: "#stack" },
    { name: "Log", href: "#experience" },
    { name: "Contact", href: "#contact" }
];
