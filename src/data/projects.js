import ghb from "../assets/projects/githubapi.jpg";
import raq from "../assets/projects/randomanimequote.jpg";
import water from "../assets/projects/watermyplants.png";

export const projectsData = [
  {
    id: "realtime-chat-engine",
    title: "Real-Time WebSocket Chat Engine",
    description:
      "High-concurrency, event-driven messaging platform engineered with Node.js, Express, and Socket.IO. Delivers full-duplex bi-directional communication, sub-15ms event broadcasting, automated connection lifecycle management, and scalable real-time state synchronization.",
    image: water,
    techStack: ["Node.js", "Express.js", "Socket.IO", "WebSockets", "Event-Driven", "HTML5"],
    githubUrl: "https://github.com/Retrofitt/ChatApp",
    liveUrl: "#",
    metrics: "Sub-15ms Event Latency • Full-Duplex Bi-Directional Broadcasting",
  },
  {
    id: "restful-task-api",
    title: "RESTful Task & Microservice API",
    description:
      "Production-grade RESTful CRUD microservice built with Express.js and Node.js. Implements strict HTTP response code standards (200, 201, 400, 404), parameterized route handling, JSON body parsing, and defensive parameter validation.",
    image: ghb,
    techStack: ["Node.js", "Express.js", "REST APIs", "CRUD", "Body-Parser", "Microservices"],
    githubUrl: "https://github.com/Retrofitt/TodoApp",
    liveUrl: "#",
    metrics: "100% REST Standard Compliance • Strict Status Code Contract",
  },
  {
    id: "weather-ssr-engine",
    title: "Dynamic Weather API & SSR Dashboard",
    description:
      "Asynchronous weather forecasting service integrating OpenWeatherMap REST API with Node.js, Express, and Axios. Features server-side rendering (SSR), dynamic query parameter parsing, and secure dotenv credential isolation.",
    image: raq,
    techStack: ["Node.js", "Express.js", "Axios", "REST API", "SSR", "Dotenv"],
    githubUrl: "https://github.com/Retrofitt/WeatherApp",
    liveUrl: "#",
    metrics: "Server-Side Rendered Output • Secure External REST API Aggregation",
  },
];
