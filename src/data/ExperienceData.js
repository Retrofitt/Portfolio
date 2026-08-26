import React, { createContext, useContext, useState, useEffect } from "react";

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
    role: "Full-Stack Software Engineer & Frontend Web Developer",
    statusBadge: "Based in Long Beach, CA • Open to Hybrid & Remote Roles",
    location: "Long Beach, CA",
    phoneNote: "Phone number available upon request",
    email: "rafaelmendozajr94.coding@gmail.com",
    headline: "Building Clean Web Applications, Custom Frontends & Reliable Web Solutions",
    bioLead: "Software engineer with 4+ years of professional experience building and maintaining web applications for clients. Focused on JavaScript, HTML, CSS, WordPress, PHP, React, and Node.js.",
    aboutStory1: "I'm a web developer based in Long Beach, California with over 4 years of experience building and maintaining client websites at Doctor Genius and through freelance projects. My primary work centers around modern JavaScript, HTML5, CSS3, custom WordPress themes, and PHP backend logic, where I focus on delivering clean code, reliable site performance, and on-time launches.",
    aboutStory2: "I enjoy both sides of development — crafting clean, responsive user interfaces and building straightforward backend APIs and integrations. When I'm not coding, I pursue landscape and street photography, which gives me an appreciation for clean layout, visual balance, and attention to detail.",
    disciplines: [
      "Full-Stack Software Engineer",
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
    resumeUrl: "/Rafael_Mendoza_Resume-2608.pdf"
  },
  socials: [
    {
      name: "GitHub",
      url: "https://github.com/Retrofitt",
      icon: "github"
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/rafael-mendoza-29a142215/",
      icon: "linkedin"
    },
    {
      name: "Email",
      url: "mailto:rafaelmendozajr94.coding@gmail.com",
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
      role: "Production Engineer / Web Developer",
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
      description: "Partnered through BloomTech to gain hands-on field experience building web applications under senior mentorship.",
      highlights: [
        "Partnered through BloomTech to gain hands-on field experience building web applications under senior mentorship.",
        "Built UI components, navigation sidebars, and modal dialogs for the open-source Underdog Devs platform in React.",
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
      id: "clicker-game",
      title: "Multiplayer Real-Time Clicker Game",
      category: "WebSockets / Full-Stack",
      featured: true,
      appType: "clicker",
      description: "A real-time multiplayer clicker game built with React, Node.js, and Socket.IO. Features instant bi-directional click synchronization, automated score degradation timers upon inactivity, and live leaderboard API integration.",
      image: null,
      techStack: ["React.js", "Node.js", "Express.js", "Socket.IO", "WebSockets", "REST APIs", "Event-Driven"],
      metrics: "Socket.IO WebSockets • Real-Time Leaderboard & Score Decay",
      highlights: [
        "Engineered real-time client-to-server click synchronization using Socket.IO events (send_click / receive_click).",
        "Implemented an active countdown timer that triggers score decay upon user inactivity to encourage rapid gameplay.",
        "Built an asynchronous REST API endpoint (/api/leaderboard) to fetch and broadcast real-time player leaderboards."
      ],
      codeSnippet: `// ClickerGame.jsx
import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const ClickerGame = () => {
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(null);
  const [username, setUsername] = useState('User' + Math.floor(Math.random() * 100));
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    const socket = io('http://localhost:3002');

    socket.on('receive_click', (data) => {
      fetchLeaderboard();
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const handleClick = () => {
    setScore((prev) => prev + 1);
    resetTimer();

    socket.emit('send_click', { username, score: score + 1 });
  };

  const resetTimer = () => {
    clearTimeout(timer);
    setTimer(
      setTimeout(() => {
        setScore((prev) => Math.max(0, prev - 1));
        resetTimer();
      }, 1000)
    );
  };

  useEffect(() => {
    fetchLeaderboard();
  }, [score]);

  const fetchLeaderboard = async () => {
    try {
      const response = await fetch('/api/leaderboard');
      const data = await response.json();
      setLeaderboard(data);
    } catch (error) {
      console.error('Error fetching leaderboard:', error);
    }
  };

  return (
    <div className="clicker-game-container">
      <h2>Multiplayer Clicker Game</h2>
      <div className="player-badge">Player: {username}</div>
      <div className="score-display">Score: {score}</div>
      <button className="click-btn" onClick={handleClick}>⚡ Click Me!</button>
      <div className="leaderboard">
        <h3>Top Players</h3>
        <ul>
          {leaderboard.map((player, idx) => (
            <li key={idx}>{player.username}: {player.score} pts</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ClickerGame;`
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

const STORAGE_KEY = "retro_portfolio_data_v16";
const AUTH_KEY = "retro_cms_auth_session";

const PortfolioContext = createContext(null);

export function PortfolioProvider({ children }) {
  const [data, setData] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        // Merge with initial in case keys were added
        return {
          ...initialPortfolioData,
          ...parsed,
          profile: { ...initialPortfolioData.profile, ...(parsed.profile || {}) },
        };
      }
    } catch (e) {
      console.error("Failed to parse stored portfolio data:", e);
    }
    return initialPortfolioData;
  });

  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    try {
      return sessionStorage.getItem(AUTH_KEY) === "true";
    } catch (e) {
      return false;
    }
  });

  const [isCMSOpen, setIsCMSOpen] = useState(false);
  const [toast, setToast] = useState({ show: false, message: "", type: "info" });

  // Persist data updates to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (e) {
      console.warn("Storage quota exceeded or storage unavailable:", e);
    }
  }, [data]);

  const showToast = (message, type = "success") => {
    setToast({ show: true, message, type });
    setTimeout(() => {
      setToast({ show: false, message: "", type: "info" });
    }, 3500);
  };

  // Auth Handler
  const login = (username, password) => {
    const cleanUser = (username || "").trim();
    const cleanPass = (password || "").trim();
    if (cleanUser === "retro1" && cleanPass === "1234") {
      setIsAuthenticated(true);
      sessionStorage.setItem(AUTH_KEY, "true");
      showToast("CMS Studio unlocked.", "success");
      return true;
    }
    showToast("Invalid username or password.", "error");
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem(AUTH_KEY);
    showToast("Signed out of CMS Studio.", "info");
  };

  // Profile Updates
  const updateProfile = (fields) => {
    setData((prev) => ({
      ...prev,
      profile: {
        ...prev.profile,
        ...fields,
      },
    }));
    showToast("Profile & bio successfully updated!");
  };

  // Photo Management
  const addPhoto = (photoData) => {
    const newPhoto = {
      id: `photo_${Date.now()}_${Math.random().toString(36).substr(2, 5)}`,
      title: photoData.title || "Untitled Capture",
      category: photoData.category || "General",
      alt: photoData.alt || photoData.title || "Photography Capture",
      image: photoData.image,
    };
    setData((prev) => ({
      ...prev,
      photos: [newPhoto, ...prev.photos],
    }));
    showToast("New photo added to your gallery!");
    return newPhoto;
  };

  const updatePhoto = (id, updatedFields) => {
    setData((prev) => ({
      ...prev,
      photos: prev.photos.map((p) => (p.id === id ? { ...p, ...updatedFields } : p)),
    }));
    showToast("Photo details saved.");
  };

  const deletePhoto = (id) => {
    setData((prev) => ({
      ...prev,
      photos: prev.photos.filter((p) => p.id !== id),
    }));
    showToast("Photo removed from gallery.", "info");
  };

  // Project Management
  const addProject = (projectData) => {
    const newProject = {
      id: `project_${Date.now()}_${Math.random().toString(36).substr(2, 5)}`,
      title: projectData.title || "New Project",
      category: projectData.category || "Full-Stack",
      featured: projectData.featured ?? true,
      description: projectData.description || "",
      image: projectData.image || "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
      techStack: Array.isArray(projectData.techStack)
        ? projectData.techStack
        : (projectData.techStack || "").split(",").map((s) => s.trim()).filter(Boolean),
      githubUrl: projectData.githubUrl || "https://github.com/Retrofitt",
      liveUrl: projectData.liveUrl || "#",
      metrics: projectData.metrics || "Production Grade System",
    };
    setData((prev) => ({
      ...prev,
      projects: [newProject, ...prev.projects],
    }));
    showToast("New project published to showcase!");
    return newProject;
  };

  const updateProject = (id, updatedFields) => {
    setData((prev) => ({
      ...prev,
      projects: prev.projects.map((proj) => {
        if (proj.id === id) {
          const techStack = Array.isArray(updatedFields.techStack)
            ? updatedFields.techStack
            : typeof updatedFields.techStack === "string"
            ? updatedFields.techStack.split(",").map((s) => s.trim()).filter(Boolean)
            : proj.techStack;
          return { ...proj, ...updatedFields, techStack };
        }
        return proj;
      }),
    }));
    showToast("Project changes updated!");
  };

  const deleteProject = (id) => {
    setData((prev) => ({
      ...prev,
      projects: prev.projects.filter((proj) => proj.id !== id),
    }));
    showToast("Project deleted from portfolio.", "info");
  };

  // Experience Management
  const addExperience = (expData) => {
    const newExp = {
      id: `exp_${Date.now()}_${Math.random().toString(36).substr(2, 5)}`,
      role: expData.role || "Software Engineer",
      company: expData.company || "Company Name",
      period: expData.period || "2023 — Present",
      location: expData.location || "California",
      description: expData.description || "",
      highlights: Array.isArray(expData.highlights)
        ? expData.highlights
        : (expData.highlights || "").split("\n").map((h) => h.trim()).filter(Boolean),
      technologies: Array.isArray(expData.technologies)
        ? expData.technologies
        : (expData.technologies || "").split(",").map((t) => t.trim()).filter(Boolean),
    };
    setData((prev) => ({
      ...prev,
      experience: [newExp, ...prev.experience],
    }));
    showToast("Experience record added!");
  };

  const updateExperience = (id, updatedFields) => {
    setData((prev) => ({
      ...prev,
      experience: prev.experience.map((exp) => {
        if (exp.id === id) {
          const highlights = Array.isArray(updatedFields.highlights)
            ? updatedFields.highlights
            : typeof updatedFields.highlights === "string"
            ? updatedFields.highlights.split("\n").map((h) => h.trim()).filter(Boolean)
            : exp.highlights;
          const technologies = Array.isArray(updatedFields.technologies)
            ? updatedFields.technologies
            : typeof updatedFields.technologies === "string"
            ? updatedFields.technologies.split(",").map((t) => t.trim()).filter(Boolean)
            : exp.technologies;
          return { ...exp, ...updatedFields, highlights, technologies };
        }
        return exp;
      }),
    }));
    showToast("Experience timeline updated!");
  };

  const deleteExperience = (id) => {
    setData((prev) => ({
      ...prev,
      experience: prev.experience.filter((exp) => exp.id !== id),
    }));
    showToast("Experience record removed.", "info");
  };

  // Reset & Backup Handlers
  const resetDefaults = () => {
    setData(initialPortfolioData);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (e) {}
    showToast("Portfolio data restored to default preset.", "info");
  };

  const exportDataJSON = () => {
    const dataStr = JSON.stringify(data, null, 2);
    const blob = new Blob([dataStr], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `portfolio-backup-${new Date().toISOString().slice(0, 10)}.json`;
    link.click();
    URL.revokeObjectURL(url);
    showToast("Portfolio backup JSON downloaded!");
  };

  const importDataJSON = (jsonString) => {
    try {
      const parsed = JSON.parse(jsonString);
      if (!parsed.profile || !parsed.projects) {
        throw new Error("Invalid schema format");
      }
      setData(parsed);
      showToast("Portfolio data imported successfully!", "success");
      return true;
    } catch (err) {
      showToast(`Import failed: ${err.message}`, "error");
      return false;
    }
  };

  return (
    <PortfolioContext.Provider
      value={{
        data,
        isAuthenticated,
        isCMSOpen,
        toast,
        setIsCMSOpen,
        login,
        logout,
        showToast,
        updateProfile,
        addPhoto,
        updatePhoto,
        deletePhoto,
        addProject,
        updateProject,
        deleteProject,
        addExperience,
        updateExperience,
        deleteExperience,
        resetDefaults,
        exportDataJSON,
        importDataJSON,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
}

export function usePortfolio() {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error("usePortfolio must be used within a PortfolioProvider");
  }
  return context;
}
