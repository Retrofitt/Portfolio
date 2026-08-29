/**
 * TechStack Data Structure
 *
 * Each object adheres to the schema:
 * - name: String (required) - Name of the technology/tool
 * - subtitle: String | null (optional) - Subtitle or focus area (e.g. "Theme Dev & CMS")
 * - icon: String | null (optional) - Path/URL to custom icon (default: null)
 * - link: String | null (optional) - Anchor URL for documentation or reference
 * - tags: Array<{ name: String, [key: String]: any }> - Array of tag objects (0 or more)
 */

export const TechStack = [
  {
    name: "React.js",
    subtitle: "Frontend Library",
    icon: null,
    link: "https://react.dev",
    tags: [
      { name: "Frontend" },
      { name: "UI Architecture" }
    ]
  },
  {
    name: "JavaScript",
    subtitle: "ES6+ Modern Syntax",
    icon: null,
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    tags: [
      { name: "Language" },
      { name: "Full-Stack" }
    ]
  },
  {
    name: "WordPress",
    subtitle: "Theme Dev & CMS",
    icon: null,
    link: "https://wordpress.org",
    tags: [
      { name: "CMS" },
      { name: "PHP" },
      { name: "Theme Architecture" }
    ]
  },
  {
    name: "PHP",
    subtitle: "Server & Backend",
    icon: null,
    link: "https://www.php.net",
    tags: [
      { name: "Backend" },
      { name: "Server-Side" }
    ]
  },
  {
    name: "HTML5",
    subtitle: "Semantic Web & Accessibility",
    icon: null,
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    tags: [
      { name: "Frontend" },
      { name: "Semantic" }
    ]
  },
  {
    name: "CSS3 / Tailwind",
    subtitle: "Modern Responsive Styling",
    icon: null,
    link: "https://tailwindcss.com",
    tags: [
      { name: "Frontend" },
      { name: "Styling" },
      { name: "UI/UX" }
    ]
  },
  {
    name: "Node.js",
    subtitle: "JavaScript Runtime",
    icon: null,
    link: "https://nodejs.org",
    tags: [
      { name: "Backend" },
      { name: "Runtime" }
    ]
  },
  {
    name: "Express.js",
    subtitle: "REST API Framework",
    icon: null,
    link: "https://expressjs.com",
    tags: [
      { name: "Backend" },
      { name: "REST API" }
    ]
  },
  {
    name: "RESTful APIs",
    subtitle: "Endpoint Architecture",
    icon: null,
    link: null,
    tags: [
      { name: "Backend" },
      { name: "Architecture" }
    ]
  },
  {
    name: "WebSockets",
    subtitle: "Socket.IO Real-Time",
    icon: null,
    link: "https://socket.io",
    tags: [
      { name: "Real-Time" },
      { name: "Networking" }
    ]
  },
  {
    name: "PostgreSQL",
    subtitle: "Relational SQL Databases",
    icon: null,
    link: "https://www.postgresql.org",
    tags: [
      { name: "Database" },
      { name: "SQL" }
    ]
  },
  {
    name: "Git & GitHub",
    subtitle: "Version Control & CI/CD",
    icon: null,
    link: "https://github.com",
    tags: [
      { name: "DevOps" },
      { name: "Tools" }
    ]
  },
  {
    name: "Redux",
    subtitle: "State Management",
    icon: null,
    link: "https://redux.js.org",
    tags: [
      { name: "Frontend" },
      { name: "State" }
    ]
  },
  {
    name: "Docker",
    subtitle: "Containerization",
    icon: null,
    link: "https://www.docker.com",
    tags: [
      { name: "DevOps" },
      { name: "Containers" }
    ]
  },
  {
    name: "Figma",
    subtitle: "UI/UX & Wireframing",
    icon: null,
    link: "https://www.figma.com",
    tags: [
      { name: "Design" },
      { name: "Prototyping" }
    ]
  },
  {
    name: "Vercel / Netlify",
    subtitle: "Cloud Deployment",
    icon: null,
    link: "https://vercel.com",
    tags: [
      { name: "Cloud" },
      { name: "Hosting" }
    ]
  },
  {
    name: "SEO & Web Vitals",
    subtitle: "Performance & Search",
    icon: null,
    link: null,
    tags: [
      { name: "Optimization" },
      { name: "Core Web Vitals" }
    ]
  },
  {
    name: "VS Code",
    subtitle: "Debugging & Tooling",
    icon: null,
    link: "https://code.visualstudio.com",
    tags: [
      { name: "Tools" }
    ]
  }
];

export default TechStack;
