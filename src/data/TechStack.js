/**
 * TechStack Data Structure
 *
 * Clean, favicon-esque SVGs powered by SimpleIcons CDN (https://cdn.simpleicons.org/<slug>).
 * Single distinct technologies with no merged names (e.g., CSS3 and Tailwind CSS are separate).
 * Grouped into recruiter-positive, high-impact categories.
 */

export const coreTechnologies = [
  {
    name: "React.js",
    subtitle: "Frontend UI Library",
    icon: "https://cdn.simpleicons.org/react",
    link: "https://react.dev",
    tags: [{ name: "Frontend" }, { name: "SPA" }]
  },
  {
    name: "JavaScript",
    subtitle: "ES6+ Modern Engine",
    icon: "https://cdn.simpleicons.org/javascript",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    tags: [{ name: "Language" }, { name: "Full-Stack" }]
  },
  {
    name: "TypeScript",
    subtitle: "Typed JavaScript",
    icon: "https://cdn.simpleicons.org/typescript",
    link: "https://www.typescriptlang.org",
    tags: [{ name: "Language" }, { name: "Type-Safety" }]
  },
  {
    name: "WordPress",
    subtitle: "Custom Themes & CMS",
    icon: "https://cdn.simpleicons.org/wordpress",
    link: "https://wordpress.org",
    tags: [{ name: "CMS" }, { name: "Theme Architecture" }]
  },
  {
    name: "PHP",
    subtitle: "Backend Server Logic",
    icon: "https://cdn.simpleicons.org/php",
    link: "https://www.php.net",
    tags: [{ name: "Backend" }, { name: "Server" }]
  },
  {
    name: "HTML5",
    subtitle: "Semantic Structure",
    icon: "https://cdn.simpleicons.org/html5",
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    tags: [{ name: "Frontend" }, { name: "Semantics" }]
  },
  {
    name: "CSS3",
    subtitle: "Responsive Styling",
    icon: "/icons/css3.svg",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    tags: [{ name: "Frontend" }, { name: "Layout" }]
  },
  {
    name: "Tailwind CSS",
    subtitle: "Utility-First Design",
    icon: "https://cdn.simpleicons.org/tailwindcss",
    link: "https://tailwindcss.com",
    tags: [{ name: "Frontend" }, { name: "Styling" }]
  },
  {
    name: "Node.js",
    subtitle: "Asynchronous Runtime",
    icon: "https://cdn.simpleicons.org/nodedotjs",
    link: "https://nodejs.org",
    tags: [{ name: "Backend" }, { name: "Runtime" }]
  },
  {
    name: "Express.js",
    subtitle: "REST API Framework",
    icon: "https://cdn.simpleicons.org/express/white",
    link: "https://expressjs.com",
    tags: [{ name: "Backend" }, { name: "Routing" }]
  },
  {
    name: "PostgreSQL",
    subtitle: "Relational SQL Database",
    icon: "https://cdn.simpleicons.org/postgresql",
    link: "https://www.postgresql.org",
    tags: [{ name: "Database" }, { name: "SQL" }]
  },
  {
    name: "Redux",
    subtitle: "Global State Management",
    icon: "https://cdn.simpleicons.org/redux",
    link: "https://redux.js.org",
    tags: [{ name: "State" }, { name: "Store" }]
  },
  {
    name: "Python",
    subtitle: "Scripting & Backend Logic",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    link: "https://www.python.org",
    tags: [{ name: "Language" }, { name: "Backend" }]
  },
  {
    name: "Next.js",
    subtitle: "React Production Framework",
    icon: "https://cdn.simpleicons.org/nextdotjs/white",
    link: "https://nextjs.org",
    tags: [{ name: "Full-Stack" }, { name: "SSR/SSG" }]
  },
  {
    name: "Vite",
    subtitle: "Frontend Build Tooling",
    icon: "https://cdn.simpleicons.org/vite",
    link: "https://vitejs.dev",
    tags: [{ name: "Tooling" }, { name: "Bundler" }]
  }
];

export const architectureAndSystems = [
  {
    name: "RESTful APIs",
    subtitle: "Endpoint Architecture",
    icon: "/icons/rest-api.svg",
    link: null,
    tags: [{ name: "Backend" }, { name: "Architecture" }]
  },
  {
    name: "Postman",
    subtitle: "API Testing & Inspection",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
    link: "https://www.postman.com",
    tags: [{ name: "API" }, { name: "Testing" }]
  },
  {
    name: "GraphQL",
    subtitle: "Data Query Language",
    icon: "https://cdn.simpleicons.org/graphql",
    link: "https://graphql.org",
    tags: [{ name: "API" }, { name: "Schema" }]
  },
  {
    name: "WebSockets",
    subtitle: "Real-Time Bi-Directional",
    icon: "https://cdn.simpleicons.org/socketdotio",
    link: "https://socket.io",
    tags: [{ name: "Real-Time" }, { name: "Events" }]
  },
  {
    name: "Git",
    subtitle: "Version Control",
    icon: "https://cdn.simpleicons.org/git",
    link: "https://git-scm.com",
    tags: [{ name: "DevOps" }, { name: "VCS" }]
  },
  {
    name: "GitHub",
    subtitle: "CI/CD & Collaboration",
    icon: "https://cdn.simpleicons.org/github/white",
    link: "https://github.com",
    tags: [{ name: "DevOps" }, { name: "Automation" }]
  },
  {
    name: "Docker",
    subtitle: "Container Environments",
    icon: "https://cdn.simpleicons.org/docker",
    link: "https://www.docker.com",
    tags: [{ name: "DevOps" }, { name: "Containers" }]
  },
  {
    name: "npm",
    subtitle: "Package & Module Ecosystem",
    icon: "https://cdn.simpleicons.org/npm",
    link: "https://www.npmjs.com",
    tags: [{ name: "Packages" }, { name: "Dependencies" }]
  },
  {
    name: "Vercel",
    subtitle: "Cloud Edge Deployment",
    icon: "https://cdn.simpleicons.org/vercel/white",
    link: "https://vercel.com",
    tags: [{ name: "Cloud" }, { name: "Hosting" }]
  },
  {
    name: "Netlify",
    subtitle: "JAMstack & Serverless",
    icon: "https://cdn.simpleicons.org/netlify",
    link: "https://netlify.com",
    tags: [{ name: "Cloud" }, { name: "CI/CD" }]
  },
  {
    name: "SEO & Web Vitals",
    subtitle: "Performance & Indexing",
    icon: "/icons/lighthouse.svg",
    link: "https://web.dev/vitals/",
    tags: [{ name: "Optimization" }, { name: "Audit" }]
  },
  {
    name: "VS Code",
    subtitle: "IDE & Debugging",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
    link: "https://code.visualstudio.com",
    tags: [{ name: "Tooling" }]
  }
];

export const creativeAndDesign = [
  {
    name: "Figma",
    subtitle: "UI/UX & Prototyping",
    icon: "https://cdn.simpleicons.org/figma",
    link: "https://www.figma.com",
    tags: [{ name: "Design" }, { name: "Prototyping" }]
  },
  {
    name: "Adobe Photoshop",
    subtitle: "Asset & Graphic Editing",
    icon: "/icons/photoshop.svg",
    link: "https://www.adobe.com/products/photoshop.html",
    tags: [{ name: "Creative" }, { name: "Raster" }]
  },
  {
    name: "Adobe Lightroom",
    subtitle: "Color Grading & Photo",
    icon: "/icons/lightroom.svg",
    link: "https://www.adobe.com/products/photoshop-lightroom.html",
    tags: [{ name: "Visual Arts" }, { name: "Grading" }]
  },
  {
    name: "Adobe Creative Cloud",
    subtitle: "Design Ecosystem",
    icon: "/icons/adobe-cc.svg",
    link: "https://www.adobe.com/creativecloud.html",
    tags: [{ name: "Creative Suite" }]
  },
  {
    name: "User Interface (UI)",
    subtitle: "Design Systems & Tokens",
    icon: "/icons/ui.svg",
    link: null,
    tags: [{ name: "Design Systems" }, { name: "Accessibility" }]
  },
  {
    name: "User Experience (UX)",
    subtitle: "User Flows & Layouts",
    icon: "/icons/ux.svg",
    link: null,
    tags: [{ name: "User Research" }, { name: "Hierarchy" }]
  },
  {
    name: "Web Accessibility",
    subtitle: "WCAG & a11y Standards",
    icon: "/icons/accessibility.svg",
    link: "https://www.w3.org/WAI/standards-guidelines/wcag/",
    tags: [{ name: "Standards" }, { name: "Compliance" }]
  }
];

/**
 * Grouped sections for modular loop rendering
 */
export const techStackSections = [
  {
    id: "core-engineering",
    badge: "Core Stack",
    title: "Software Engineering & Web Development",
    description: "Languages, runtimes, and frameworks used to build high-performance client websites and scalable applications.",
    items: coreTechnologies
  },
  {
    id: "architecture-systems",
    badge: "Architecture & DevOps",
    title: "Systems, APIs & Infrastructure",
    description: "Architectural standards, protocols, cloud platforms, and developer tooling for dependable production systems.",
    items: architectureAndSystems
  },
  {
    id: "design-creative",
    badge: "Creative Direction",
    title: "Product Design & Creative Suite",
    description: "Digital design software, design systems, visual arts, and wireframing for balanced and polished user experiences.",
    items: creativeAndDesign
  }
];

export const TechStack = [
  ...coreTechnologies,
  ...architectureAndSystems,
  ...creativeAndDesign
];

export default techStackSections;
