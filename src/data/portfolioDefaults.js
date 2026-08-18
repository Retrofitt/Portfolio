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
      id: "realtime-chat-engine",
      title: "Real-Time WebSocket Chat Engine",
      category: "Full-Stack",
      featured: true,
      description: "High-concurrency, event-driven messaging platform engineered with Node.js, Express, and Socket.IO. Delivers full-duplex bi-directional communication, sub-15ms event broadcasting, automated connection lifecycle management, and scalable real-time state synchronization.",
      image: water,
      techStack: ["Node.js", "Express.js", "Socket.IO", "WebSockets", "Event-Driven Architecture", "ES6+ JavaScript", "HTML5"],
      githubUrl: "https://github.com/Retrofitt/ChatApp",
      liveUrl: "#",
      metrics: "Sub-15ms Event Latency • Full-Duplex Bi-Directional Broadcasting",
      highlights: [
        "Architected an event-driven WebSocket communication layer using Socket.IO for low-latency bi-directional messaging.",
        "Implemented graceful connection lifecycle state management (connect, disconnect, broadcast) preventing packet loss.",
        "Configured scalable Express server integration with environment-variable port bindings and static asset distribution."
      ],
      codeSnippet: `const express = require('express');
const socketIO = require('socket.io');
require("dotenv").config();
const app = express();

const server = app.listen(process.env.PORT || 3002, () => {
    console.log(\`Chat app listening at http://localhost:\${process.env.PORT || 3002}\`);
});

app.use(express.static('public'));

const io = socketIO(server);

io.on('connection', (socket) => {
    console.log('New client connected');

    socket.on('disconnect', () => {
        console.log('Client disconnected');
    });

    socket.on('send_message', (data) => {
        io.emit('receive_message', data);
    });
});`
    },
    {
      id: "restful-task-api",
      title: "RESTful Task & Microservice API",
      category: "Backend",
      featured: true,
      description: "Production-grade RESTful CRUD microservice built with Express.js and Node.js. Implements strict HTTP response code standards (200, 201, 400, 404), parameterized route handling, JSON body parsing, and defensive parameter validation for scalable data mutations.",
      image: ghb,
      techStack: ["Node.js", "Express.js", "REST APIs", "CRUD", "Body-Parser", "JSON Schema", "Microservices"],
      githubUrl: "https://github.com/Retrofitt/TodoApp",
      liveUrl: "#",
      metrics: "100% REST Standard Compliance • Strict Status Code Contract (200, 201, 400, 404)",
      highlights: [
        "Engineered RESTful API endpoints supporting deterministic CRUD mutations (GET, POST, PUT, DELETE /todos/:id).",
        "Enforced defensive input validation, integer sanitization, and graceful 400/404 HTTP error response handling.",
        "Integrated JSON payload body-parser middleware with in-memory state manipulation architecture."
      ],
      codeSnippet: `const express = require('express');
require("dotenv").config();
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

let todos = [];

app.get('/todos', (req, res) => {
    res.send(todos);
});

app.post('/todos', (req, res) => {
    const todo = req.body;
    todos.push(todo);
    res.status(201).send(\`Todo created with ID: \${todos.length - 1}\`);
});

app.put('/todos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    if (!Number.isNaN(id)) {
        const todoIndex = todos.findIndex((todo) => todo.id === id);
        if (todoIndex >= 0) {
            const updatedTodo = { ...todos[todoIndex], ...req.body };
            todos[todoIndex] = updatedTodo;
            res.send(\`Todo with ID: \${id} has been updated\`);
        } else {
            res.status(404).send('Todo not found');
        }
    } else {
        res.status(400).send('Invalid ID');
    }
});

app.delete('/todos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    if (!Number.isNaN(id)) {
        const todoIndex = todos.findIndex((todo) => todo.id === id);
        if (todoIndex >= 0) {
            todos.splice(todoIndex, 1);
            res.send(\`Todo with ID: \${id} has been deleted\`);
        } else {
            res.status(404).send('Todo not found');
        }
    } else {
        res.status(400).send('Invalid ID');
    }
});

const port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log(\`Todo app listening at http://localhost:\${port}\`);
});`
    },
    {
      id: "weather-ssr-engine",
      title: "Dynamic Weather API & SSR Dashboard",
      category: "Full-Stack",
      featured: true,
      description: "Asynchronous weather forecasting service integrating OpenWeatherMap REST API with Node.js, Express, and Axios. Features server-side rendering (SSR), dynamic query parameter parsing, secure environment credential isolation via Dotenv, and resilient 500 error catching.",
      image: raq,
      techStack: ["Node.js", "Express.js", "Axios", "REST API", "SSR", "Dotenv", "OpenWeatherMap"],
      githubUrl: "https://github.com/Retrofitt/WeatherApp",
      liveUrl: "#",
      metrics: "Server-Side Rendered Output • Secure External REST API Aggregation",
      highlights: [
        "Implemented asynchronous external REST API consumption using Axios with metric unit conversion.",
        "Isolated sensitive API keys and configuration using dotenv environment variables.",
        "Built resilient dynamic server-side template generation with fallback query defaulting and centralized error handling."
      ],
      codeSnippet: `const express = require('express');
require("dotenv").config();
const axios = require('axios');

const app = express();
app.use(express.static('public'));

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    const city = req.query.city || 'New York';
    
    axios.get(\`https://api.openweathermap.org/data/2.5/weather?q=\${city}&appid=\${process.env.WEATHER_API_KEY}&units=metric\`)
        .then(response => {
            const weatherData = response.data;
            res.send(\`
                <!DOCTYPE html>
                <html lang="en">
                    <head>
                        <meta charset="UTF-8">
                        <title>Weather App</title>
                    </head>
                    <body>
                        <h1>Current Weather in \${city}</h1>
                        <p><strong>Description:</strong> \${weatherData.weather[0].description}</p>
                        <p><strong>Temperature:</strong> \${weatherData.main.temp}°C</p>
                        <p><strong>Humidity:</strong> \${weatherData.main.humidity}%</p>
                    </body>
                </html>
            \`);
        })
        .catch(error => {
            console.error(error);
            res.status(500).send('Error fetching weather data');
        });
});

app.listen(port, () => {
    console.log(\`Weather app listening at http://localhost:\${port}\`);
});`
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
