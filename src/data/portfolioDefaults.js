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
    location: "Corona, CA",
    email: "RafaelMendozaJr94@gmail.com",
    headline: "Engineering High-Performance Web Systems, Resilient Frontends & Modern Digital Experiences",
    bioLead: "4+ years of professional production engineering experience. Specializing in modern HTML5, CSS3/Tailwind, JavaScript (ES6+), custom WordPress theme architecture, PHP backend logic, React.js, and Node.js REST/WebSocket APIs.",
    aboutStory1: "With over 4 years of production software engineering experience at Doctor Genius and freelance studios, I specialize in architecting high-performance client websites, dynamic landing systems, and scalable full-stack applications. My day-to-day focuses on HTML5, CSS3, modern JavaScript, custom WordPress theme development, and PHP backend logic, maintaining a 100% on-time milestone delivery record and 99.9% uptime.",
    aboutStory2: "I balance a pixel-perfect, artistic eye for creative UI/UX engineering with the critical-thinking rigor required for backend API design, WebSockets, and data management. Whether engineering custom animations, optimizing Core Web Vitals (sub-second LCP), or building RESTful microservices, I build software that performs reliably and feels effortless to use.",
    disciplines: [
      "Frontend & UI/UX Engineering",
      "WordPress & PHP Architecture",
      "JavaScript & React.js",
      "RESTful APIs & WebSockets",
      "Performance & Core Web Vitals",
      "Creative Direction & Photography"
    ],
    stats: [
      { label: "Years Production Exp", value: "4+" },
      { label: "Client Sites Delivered", value: "100+" },
      { label: "Core Technologies", value: "20+" },
      { label: "On-Time Milestone Rate", value: "100%" }
    ],
    resumeUrl: "/Rafael_Mendoza_Resume.pdf"
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
      url: "mailto:RafaelMendozaJr94@gmail.com",
      icon: "email"
    }
  ],
  skills: [
    { name: "HTML5 / Semantic Web", category: "Frontend", level: 98, icon: "html" },
    { name: "CSS3 / Tailwind CSS / SCSS", category: "Frontend", level: 96, icon: "tailwind" },
    { name: "JavaScript (ES6+)", category: "Frontend", level: 95, icon: "javascript" },
    { name: "React.js", category: "Frontend", level: 94, icon: "react" },
    { name: "WordPress (Theme Dev & CMS)", category: "Frontend", level: 95, icon: "figma" },
    { name: "UI/UX & Responsive Design", category: "Frontend", level: 94, icon: "figma" },
    { name: "Redux & Context API", category: "Frontend", level: 88, icon: "redux" },
    
    { name: "PHP", category: "Backend", level: 90, icon: "php" },
    { name: "Node.js", category: "Backend", level: 90, icon: "node" },
    { name: "Express.js", category: "Backend", level: 92, icon: "express" },
    { name: "RESTful APIs", category: "Backend", level: 95, icon: "api" },
    { name: "WebSockets (Socket.IO)", category: "Backend", level: 90, icon: "graphql" },
    { name: "PostgreSQL & SQL", category: "Backend", level: 85, icon: "postgres" },
    
    { name: "Git & GitHub CI/CD", category: "Tools & DevOps", level: 94, icon: "git" },
    { name: "VS Code & Debugging", category: "Tools & DevOps", level: 95, icon: "test" },
    { name: "SEO & Core Web Vitals", category: "Tools & DevOps", level: 92, icon: "cloud" },
    { name: "Vercel / Netlify", category: "Tools & DevOps", level: 95, icon: "cloud" },
    { name: "Docker", category: "Tools & DevOps", level: 82, icon: "docker" },
    { name: "Figma", category: "Tools & DevOps", level: 90, icon: "figma" }
  ],
  experience: [
    {
      id: "exp-1",
      role: "Production Software Engineer & Web Developer",
      company: "Doctor Genius",
      period: "March 2022 — Present",
      location: "Irvine, CA",
      description: "Spearheaded client web development, custom feature engineering, and ongoing maintenance for high-volume client websites, ensuring 100% on-time milestone delivery and 99.9% uptime.",
      highlights: [
        "Engineered reusable frontend components, custom landing pages, and responsive UI layouts using HTML5, CSS3, and modern vanilla JavaScript.",
        "Developed, customized, and maintained robust WordPress themes, templates, and PHP backend logic to streamline dynamic content rendering and client requests.",
        "Managed ongoing CMS architecture, automated content pipelines, monthly digital content syndication, and SEO optimization to elevate client search visibility.",
        "Resolved critical cross-browser compatibility issues, optimized Core Web Vitals (sub-second LCP, CLS reduction), and refactored legacy codebases."
      ],
      technologies: ["WordPress", "HTML5", "CSS3", "JavaScript", "PHP", "SEO", "Core Web Vitals"]
    },
    {
      id: "exp-2",
      role: "Freelance Software Engineer & Web Developer",
      company: "W Brand Studio",
      period: "January 2022 — Present",
      location: "Costa Mesa, CA",
      description: "Architected and delivered bespoke web applications and interactive client websites utilizing WordPress, PHP, JavaScript, React.js, and CSS3.",
      highlights: [
        "Collaborated closely with creative directors and stakeholders to translate Figma design mockups into pixel-perfect, accessible, and performant web interfaces.",
        "Integrated RESTful APIs, third-party webhook automations, and custom form handlers, boosting client lead capture efficiency by over 30%.",
        "Maintained client web infrastructure, providing continuous performance profiling and rapid turnaround for feature enhancements."
      ],
      technologies: ["WordPress", "React", "PHP", "JavaScript", "CSS3", "Figma", "REST APIs"]
    },
    {
      id: "exp-3",
      role: "Full-Stack Software Engineering Graduate",
      company: "BloomTech (FKA Lambda School)",
      period: "June 2021 — December 2021",
      location: "Remote",
      description: "Completed 1,000+ hours of intensive full-stack software engineering training covering React, Redux, Node.js, Express, PostgreSQL, data structures, and algorithms.",
      highlights: [
        "Built full-stack web applications with authentication, relational databases, state management, and continuous deployment.",
        "Collaborated in cross-functional agile scrums, conducting daily standups, peer code reviews, and sprint retrospectives."
      ],
      technologies: ["React", "Redux", "Node.js", "Express", "PostgreSQL", "Git", "Jest"]
    },
    {
      id: "exp-4",
      role: "Frontend Software Engineer & Fellow",
      company: "Underdog Devs (Project Underdog)",
      period: "2021 — 2022",
      location: "Remote",
      description: "Selected for the competitive Project Underdog fellowship in partnership with Bloom Institute of Technology, collaborating with senior industry mentors and building community web applications.",
      highlights: [
        "Engineered the Underdog Devs open-source web application using React.js, JavaScript, and CSS3 to facilitate member scheduling, 1:1 mentorship tracking, and community communication.",
        "Implemented dynamic role-based navigation sidebars, user authentication flows, and administrative modal dialogs to filter and manage members.",
        "Participated in 40+ hours/week of rigorous pair programming, technical deep dives, and code reviews alongside engineering peers and senior mentors."
      ],
      technologies: ["React.js", "JavaScript", "CSS3", "Ant-Design", "Pair Programming", "Agile/Scrum", "Git"]
    }
  ],
  projects: [
    {
      id: "weather-app",
      title: "Weather App with API Integration",
      category: "API & SSR",
      featured: true,
      appType: "weather",
      description: "Asynchronous weather forecasting service engineered with Node.js, Express, and Axios. Features live external OpenWeatherMap REST API integration, dynamic Server-Side Rendering (SSR), query parameter sanitation, and secure dotenv credential isolation.",
      image: raq,
      techStack: ["Node.js", "Express.js", "Axios", "OpenWeatherMap API", "REST API", "SSR", "Dotenv"],
      metrics: "Live REST API Ingestion • Dynamic Server-Side HTML Rendering",
      highlights: [
        "Architected asynchronous Promise-based API hydration using Axios with automatic metric unit conversion.",
        "Engineered server-side rendered HTML generation with city-level query parameter defaults and graceful 500 error catching.",
        "Implemented strict environment variable abstraction (dotenv) for zero-exposure API credential management."
      ],
      codeSnippet: `// WeatherApp.js
const express = require('express');
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
    },
    {
      id: "todo-crud-app",
      title: "Todo List with CRUD Operations",
      category: "RESTful API",
      featured: true,
      appType: "todo",
      description: "Full-cycle RESTful task management microservice engineered with Express.js and Node.js. Delivers deterministic CRUD endpoints (Create, Read, Update, Delete), strict HTTP status code semantics (200, 201, 400, 404), JSON body parsing, and route parameter validation.",
      image: ghb,
      techStack: ["Node.js", "Express.js", "REST APIs", "CRUD Operations", "Body-Parser", "JSON Middleware", "Microservices"],
      metrics: "100% REST Compliance • Strict Status Code Contract (200, 201, 400, 404)",
      highlights: [
        "Engineered RESTful endpoints supporting parameterized route mutations (GET, POST, PUT, DELETE /todos/:id).",
        "Implemented defensive input validation, ID type casting, and structured 400/404 HTTP error handling.",
        "Integrated body-parser JSON middleware for robust in-memory payload mutations ready for database adapters."
      ],
      codeSnippet: `// TodoApp.js
const express = require('express');
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
      id: "websocket-chat-app",
      title: "Simple Chat Application with WebSockets",
      category: "WebSockets",
      featured: true,
      appType: "chat",
      description: "Low-latency real-time communication platform powered by Node.js, Express, and Socket.IO. Implements full-duplex WebSocket channels, bi-directional event emission pipelines, active connection lifecycle handling, and instant broadcast synchronization.",
      image: water,
      techStack: ["Node.js", "Express.js", "Socket.IO", "WebSockets", "Event-Driven", "JavaScript", "HTML5"],
      metrics: "Sub-15ms Latency • Bi-Directional Full-Duplex Broadcasting",
      highlights: [
        "Architected an event-driven WebSocket communication layer using Socket.IO for low-latency bi-directional messaging.",
        "Implemented connection lifecycle hooks (connection, disconnect, send_message, receive_message) with instant broadcasting.",
        "Constructed client-side event listeners dynamically hydrating chat message list with zero layout shift."
      ],
      codeSnippet: `// ChatApp.js
const express = require('express');
const socketIO = require('socket.io');
require("dotenv").config();
const app = express();

const server = app.listen(process.env.PORT || 3002, () => {
    console.log(\`Chat app listening at http://localhost:\${process.env.PORT}\`);
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
});

// public/index.html
/*
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Simple Chat</title>
</head>
<body>
  <h1>Chat App</h1>
  <input type="text" id="messageInput" placeholder="Type a message...">
  <button onclick="sendMessage()">Send</button>
  <ul id="messages"></ul>

  <script src="/socket.io/socket.io.js"></script>
  <script>
    const socket = io();

    function sendMessage() {
      const input = document.getElementById('messageInput');
      if (input.value) {
        socket.emit('send_message', { message: input.value });
        input.value = '';
      }
    }

    socket.on('receive_message', data => {
      const messagesList = document.getElementById('messages');
      const item = document.createElement('li');
      item.textContent = data.message;
      messagesList.appendChild(item);
    });
  </script>
</body>
</html>
*/`
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
