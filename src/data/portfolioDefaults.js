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
