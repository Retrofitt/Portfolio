import photo1 from "../assets/photos/photo1.jpg";
import photo2 from "../assets/photos/photo2.jpg";
import photo3 from "../assets/photos/photo3.jpg";
import photo4 from "../assets/photos/photo4.jpg";
import photo5 from "../assets/photos/photo5.jpg";
import photo6 from "../assets/photos/photo6.jpg";
import photo7 from "../assets/photos/photo7.jpg";
import photo8 from "../assets/photos/photo8.jpg";

export const initialPortfolioData = {
  profile: {
    name: "Rafael Mendoza",
    role: "Full-Stack Web Developer & Frontend Engineer",
    statusBadge: "Based in Long Beach, CA • Open to Hybrid & Remote Roles",
    location: "Long Beach, CA",
    phoneNote: "Phone number available upon request",
    email: "RafaelMendozaJr94@gmail.com",
    headline: "Building Clean Web Applications, Custom Frontends & Reliable Web Solutions",
    bioLead: "Software engineer with 4+ years of professional experience building and maintaining web applications for clients. Focused on JavaScript, HTML, CSS, WordPress, PHP, React, and Node.js.",
    aboutStory1: "I'm a web developer based in Long Beach, California with over 4 years of experience building and maintaining client websites at Doctor Genius and through freelance projects. My primary work centers around modern JavaScript, HTML5, CSS3, custom WordPress themes, and PHP backend logic, where I focus on delivering clean code, reliable site performance, and on-time launches.",
    aboutStory2: "I enjoy both sides of development — crafting clean, responsive user interfaces and building straightforward backend APIs and integrations. When I'm not coding, I pursue landscape and street photography, which gives me an appreciation for clean layout, visual balance, and attention to detail.",
    disciplines: [
      "Frontend Web Development",
      "WordPress & PHP Development",
      "JavaScript & React.js",
      "Node.js & REST APIs",
      "Responsive UI Design",
      "Web Performance & SEO"
    ],
    stats: [
      { label: "Years Experience", value: "4+" },
      { label: "Client Sites Delivered", value: "100+" },
      { label: "Core Technologies", value: "15+" },
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
    { name: "Responsive UI Design", category: "Frontend", level: 94, icon: "figma" },
    { name: "Redux & Context API", category: "Frontend", level: 88, icon: "redux" },
    
    { name: "PHP", category: "Backend", level: 90, icon: "php" },
    { name: "Node.js", category: "Backend", level: 90, icon: "node" },
    { name: "Express.js", category: "Backend", level: 92, icon: "express" },
    { name: "RESTful APIs", category: "Backend", level: 95, icon: "api" },
    { name: "WebSockets (Socket.IO)", category: "Backend", level: 90, icon: "graphql" },
    { name: "PostgreSQL & SQL", category: "Backend", level: 85, icon: "postgres" },
    
    { name: "Git & GitHub", category: "Tools & DevOps", level: 94, icon: "git" },
    { name: "VS Code & Debugging", category: "Tools & DevOps", level: 95, icon: "test" },
    { name: "Web Performance & SEO", category: "Tools & DevOps", level: 92, icon: "cloud" },
    { name: "Vercel / Netlify", category: "Tools & DevOps", level: 95, icon: "cloud" },
    { name: "Docker", category: "Tools & DevOps", level: 82, icon: "docker" },
    { name: "Figma", category: "Tools & DevOps", level: 90, icon: "figma" }
  ],
  experience: [
    {
      id: "exp-1",
      role: "Software Engineer / Web Developer",
      company: "Doctor Genius",
      period: "March 2022 — Present",
      location: "Irvine, CA",
      description: "Responsible for developing, maintaining, and updating client websites on WordPress. Build custom frontend components, handle client-requested feature updates, optimize page load performance, and ensure on-time delivery.",
      highlights: [
        "Built and maintained client websites using HTML, CSS, JavaScript, PHP, and WordPress.",
        "Developed custom page templates, styling adjustments, and dynamic features based on client requirements.",
        "Handled monthly site content updates and maintained SEO best practices across client portfolios.",
        "Fixed cross-browser layout bugs and improved Core Web Vitals performance scores."
      ],
      technologies: ["WordPress", "HTML5", "CSS3", "JavaScript", "PHP", "SEO", "Core Web Vitals"]
    },
    {
      id: "exp-2",
      role: "Freelance Web Developer",
      company: "W Brand Studio",
      period: "January 2022 — Present",
      location: "Costa Mesa, CA",
      description: "Built and maintained responsive client websites and landing pages using WordPress, React, PHP, and modern CSS.",
      highlights: [
        "Turned design mockups into responsive, fast-loading web pages and custom WordPress themes.",
        "Integrated contact forms, third-party APIs, and automation webhooks to streamline client workflows.",
        "Provided ongoing website maintenance, bug fixes, and performance updates."
      ],
      technologies: ["WordPress", "React", "PHP", "JavaScript", "CSS3", "Figma", "REST APIs"]
    },
    {
      id: "exp-3",
      role: "Frontend Software Engineer & Mentee",
      company: "Underdog Devs (BloomTech Partnership)",
      period: "November 2021 — December 2021",
      location: "Remote",
      description: "Bloom Institute of Technology (then Lambda School) partnered with Underdog Devs, providing the opportunity to work under senior engineering mentorship to gain real-world field experience developing a community web application, pair programming, and shipping production code.",
      highlights: [
        "Contributed frontend engineering to the Underdog Devs open-source web application using React.js, JavaScript, and CSS3 to support member scheduling and mentorship tracking.",
        "Implemented dynamic role-based navigation sidebars, user authentication flows, and administrative modal dialogs to filter and manage members.",
        "Participated in active 1:1 pair programming, code reviews, and collaborative engineering sprints with industry mentors."
      ],
      technologies: ["React.js", "JavaScript", "CSS3", "Ant-Design", "Pair Programming", "Agile/Scrum", "Git"]
    },
    {
      id: "exp-4",
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
    }
  ],
  projects: [
    {
      id: "weather-app",
      title: "Weather Forecast Web App",
      category: "Full-Stack / API",
      featured: true,
      appType: "weather",
      description: "A weather forecasting web application built with Node.js, Express, and Axios. Fetches live weather data from OpenWeatherMap and renders clean HTML templates on the server with environment variable protection.",
      image: null,
      techStack: ["Node.js", "Express.js", "Axios", "OpenWeatherMap API", "REST API", "SSR", "Dotenv"],
      metrics: "OpenWeatherMap REST API • Server-Side Rendered Templates",
      highlights: [
        "Fetched real-time weather data using Axios and handled API query parameters cleanly.",
        "Rendered server-side HTML views with temperature conversions and weather conditions.",
        "Kept API keys and configuration secure using dotenv environment variables."
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
      title: "Todo List REST API",
      category: "Backend / API",
      featured: true,
      appType: "todo",
      description: "A RESTful Todo API microservice built with Node.js and Express. Implements standard CRUD operations (Create, Read, Update, Delete) with JSON request parsing and structured error handling.",
      image: null,
      techStack: ["Node.js", "Express.js", "REST APIs", "CRUD Operations", "Body-Parser", "JSON Middleware", "Microservices"],
      metrics: "Full CRUD Endpoints • JSON Request Validation",
      highlights: [
        "Implemented REST routes for GET, POST, PUT, and DELETE operations.",
        "Used Express and body-parser to parse JSON payloads and validate incoming request data.",
        "Returned appropriate HTTP status codes (200, 201, 400, 404) for reliable client communication."
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
      title: "Real-Time Chat Application",
      category: "WebSockets",
      featured: true,
      appType: "chat",
      description: "A real-time messaging application built with Node.js, Express, and Socket.IO. Enables instant, bi-directional communication between connected browser clients.",
      image: null,
      techStack: ["Node.js", "Express.js", "Socket.IO", "WebSockets", "Event-Driven", "JavaScript", "HTML5"],
      metrics: "Socket.IO WebSockets • Real-Time Event Broadcasting",
      highlights: [
        "Set up Socket.IO WebSocket connections for instant client-to-server and server-to-client messaging.",
        "Broadcasted new chat messages immediately to all active users without page reloads.",
        "Handled client connection and disconnection lifecycle events gracefully."
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
  <button id="sendButton">Send</button>
  <ul id="messagesList"></ul>
  <script src="/socket.io/socket.io.js"></script>
  <script>
    const socket = io();
    const input = document.getElementById('messageInput');
    const button = document.getElementById('sendButton');
    const list = document.getElementById('messagesList');

    button.addEventListener('click', () => {
      if (input.value.trim()) {
        socket.emit('send_message', { message: input.value });
        input.value = '';
      }
    });

    socket.on('receive_message', (data) => {
      const li = document.createElement('li');
      li.textContent = data.message;
      list.appendChild(li);
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
