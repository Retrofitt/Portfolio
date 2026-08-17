import photo1 from "../assets/photos/photo1.jpg";
import photo2 from "../assets/photos/photo2.jpg";
import photo3 from "../assets/photos/photo3.jpg";
import photo4 from "../assets/photos/photo4.jpg";
import photo5 from "../assets/photos/photo5.jpg";
import photo6 from "../assets/photos/photo6.jpg";
import photo7 from "../assets/photos/photo7.jpg";
import photo8 from "../assets/photos/photo8.jpg";

import ghb from "../assets/projects/githubapi.jpg";
import raq from "../assets/projects/randomanimequote.jpg";
import water from "../assets/projects/watermyplants.png";

export const initialPortfolioData = {
  profile: {
    name: "Rafael Mendoza",
    role: "Full-Stack Software Engineer & Creative Developer",
    statusBadge: "Available for CA & Remote Roles",
    location: "California, USA",
    email: "mendoza.rafael28@gmail.com",
    headline: "Engineering High-Performance Web Systems & Modern Digital Experiences",
    bioLead: "4+ years crafting resilient, performant full-stack web applications and fluid interactive interfaces. Specializing in modern React, TypeScript, Node.js, and cloud architectures.",
    aboutStory1: "With over 4 years of engineering and production experience, I bridge the gap between robust engineering architecture and modern, pixel-perfect user experiences. My focus is delivering production-ready applications that load instantly, scale reliably, and convert users.",
    aboutStory2: "I treat code like architecture — carefully structured, modular, and optimized for peak maintainability. Outside of engineering, I bring an artistic eye through photography, UI/UX design, and creative direction, allowing me to build products that look world-class and feel effortless to use.",
    disciplines: ["Full-Stack Architecture", "UI/UX Engineering", "Creative Direction", "Performance Optimization", "Photography & Media"],
    stats: [
      { label: "Years Experience", value: "4+" },
      { label: "Production Apps", value: "15+" },
      { label: "Core Technologies", value: "25+" },
      { label: "Client Satisfaction", value: "100%" }
    ],
    resumeUrl: "#contact"
  },
  socials: [
    {
      name: "GitHub",
      url: "https://github.com/Retrofitt",
      icon: "github"
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/rafael-mendoza-webdev/",
      icon: "linkedin"
    },
    {
      name: "Email",
      url: "mailto:mendoza.rafael28@gmail.com",
      icon: "email"
    }
  ],
  skills: [
    { name: "React", category: "Frontend", level: 95, icon: "react" },
    { name: "JavaScript (ES6+)", category: "Frontend", level: 95, icon: "javascript" },
    { name: "TypeScript", category: "Frontend", level: 90, icon: "typescript" },
    { name: "HTML5 / Semantic Web", category: "Frontend", level: 98, icon: "html" },
    { name: "CSS3 / Tailwind CSS", category: "Frontend", level: 96, icon: "tailwind" },
    { name: "Redux & Context API", category: "Frontend", level: 90, icon: "redux" },
    { name: "Next.js", category: "Frontend", level: 85, icon: "next" },
    
    { name: "Node.js", category: "Backend", level: 90, icon: "node" },
    { name: "Express.js", category: "Backend", level: 92, icon: "express" },
    { name: "PHP", category: "Backend", level: 88, icon: "php" },
    { name: "RESTful APIs", category: "Backend", level: 95, icon: "api" },
    { name: "GraphQL", category: "Backend", level: 82, icon: "graphql" },
    
    { name: "PostgreSQL", category: "Databases", level: 88, icon: "postgres" },
    { name: "MongoDB", category: "Databases", level: 86, icon: "mongodb" },
    { name: "SQLite", category: "Databases", level: 90, icon: "sqlite" },
    { name: "Redis", category: "Databases", level: 80, icon: "redis" },
    
    { name: "Git & GitHub CI/CD", category: "Tools & DevOps", level: 94, icon: "git" },
    { name: "Docker", category: "Tools & DevOps", level: 82, icon: "docker" },
    { name: "Vercel / Netlify", category: "Tools & DevOps", level: 95, icon: "cloud" },
    { name: "Jest / RTL", category: "Tools & DevOps", level: 85, icon: "test" },
    { name: "Figma", category: "Tools & DevOps", level: 90, icon: "figma" }
  ],
  experience: [
    {
      id: "exp-1",
      role: "Lead Web Developer & Production Engineer",
      company: "Freelance & Production Studio",
      period: "2021 — Present",
      location: "California",
      description: "Designed, engineered, and shipped high-performance web systems and dynamic digital applications for tech companies, creative agencies, and startups across California.",
      highlights: [
        "Architected custom React & responsive frontends with sub-second page loads and 98+ Google Lighthouse scores.",
        "Built secure REST APIs, automated workflows, and integrated CMS solutions to streamline client content updates.",
        "Conducted UI/UX design audits and implemented modern design tokens, elevating brand conversion rates by over 35%."
      ],
      technologies: ["React", "JavaScript", "Tailwind CSS", "Node.js", "PHP", "Figma", "REST APIs"]
    },
    {
      id: "exp-2",
      role: "Full-Stack Software Engineer",
      company: "Bloom Institute of Technology (Lambda School)",
      period: "2020 — 2021",
      location: "Remote",
      description: "Intensive computer science and software engineering program emphasizing production software development, data structures, algorithms, and agile team collaboration.",
      highlights: [
        "Built and deployed full-stack web applications with authentication, relational databases, and state management.",
        "Collaborated in cross-functional agile scrums, conducting peer code reviews and sprint retrospectives.",
        "Engineered scalable backends using Node.js, Express, and JWT security."
      ],
      technologies: ["React", "Redux", "Node.js", "Express", "PostgreSQL", "Jest", "Git"]
    }
  ],
  projects: [
    {
      id: "water-my-plants",
      title: "Water My Plants",
      category: "Full-Stack",
      featured: true,
      description: "A full-stack plant care scheduling platform with robust JWT authentication, SQLite/PostgreSQL relational database, automated push reminders, and responsive state management.",
      image: water,
      techStack: ["Node.js", "Express", "SQLite", "JWT", "React", "Tailwind"],
      githubUrl: "https://github.com/LambdaBuildWeekWaterMyPlants/watermyplants-backend",
      liveUrl: "https://water-myplants-frontend.netlify.app/",
      metrics: "Sub-200ms API response time • 100% test coverage for auth endpoints"
    },
    {
      id: "github-card",
      title: "GitHub Developer Insights Card",
      category: "Frontend",
      featured: true,
      description: "A fast React application interacting with the GitHub REST API to render real-time developer profiles, follower analytics, and repo metrics with smooth interactive cards.",
      image: ghb,
      techStack: ["React", "JavaScript", "REST API", "Tailwind CSS"],
      githubUrl: "https://github.com/Retrofitt/web-module-project-lifecycle/tree/rafael-mendoza",
      liveUrl: "https://retrosghbusinesscard.vercel.app/",
      metrics: "Live REST API hydration • Instant client search"
    },
    {
      id: "anime-quote",
      title: "Anime Quote Engine & Redux State",
      category: "Web App",
      featured: true,
      description: "An asynchronous state-driven application leveraging Redux Thunk and async actions to fetch, cache, and curate dynamic quotes with responsive typography.",
      image: raq,
      techStack: ["React", "Redux", "Async/Await", "REST API", "Tailwind"],
      githubUrl: "https://github.com/Retrofitt/web-module-project-async-redux/tree/main",
      liveUrl: "https://random-anime-quote.vercel.app/",
      metrics: "Global async state management • Zero layout shift"
    }
  ],
  photos: [
    { id: "p1", image: photo1, title: "Urban Golden Hour", category: "Urban & Architecture", alt: "Urban Golden Hour Photography" },
    { id: "p2", image: photo2, title: "Cinematic Atmosphere", category: "Cinematic", alt: "Cinematic Atmosphere Photography" },
    { id: "p3", image: photo3, title: "Moody Neon Nocturne", category: "Night & Neon", alt: "Moody Neon Night Photography" },
    { id: "p4", image: photo4, title: "Natural Geometry", category: "Landscape", alt: "Natural Landscape Photography" },
    { id: "p5", image: photo5, title: "Perspective & Depth", category: "Architecture", alt: "Perspective Photography" },
    { id: "p6", image: photo6, title: "Street Vignette", category: "Street", alt: "Street Vignette Photography" },
    { id: "p7", image: photo7, title: "Contrast & Shadow", category: "Cinematic", alt: "Contrast & Shadow Photography" },
    { id: "p8", image: photo8, title: "Pacific Coastline Horizon", category: "California", alt: "California Coast Photography" }
  ]
};
