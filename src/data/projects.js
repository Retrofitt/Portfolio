import ghb from "../assets/projects/githubapi.jpg";
import raq from "../assets/projects/randomanimequote.jpg";
import water from "../assets/projects/watermyplants.png";

export const projectsData = [
  {
    id: "weather-app",
    title: "Weather App with API Integration",
    description:
      "Asynchronous weather forecasting service engineered with Node.js, Express, and Axios. Features live external OpenWeatherMap REST API integration, dynamic Server-Side Rendering (SSR), query parameter sanitation, and secure dotenv credential isolation.",
    image: raq,
    techStack: ["Node.js", "Express.js", "Axios", "REST API", "SSR", "Dotenv", "OpenWeatherMap"],
    metrics: "Live REST API Ingestion • Dynamic Server-Side HTML Rendering",
  },
  {
    id: "todo-crud-app",
    title: "Todo List with CRUD Operations",
    description:
      "Full-cycle RESTful task management microservice engineered with Express.js and Node.js. Delivers deterministic CRUD endpoints (Create, Read, Update, Delete), strict HTTP status code semantics (200, 201, 400, 404), JSON body parsing, and route parameter validation.",
    image: ghb,
    techStack: ["Node.js", "Express.js", "REST APIs", "CRUD Operations", "Body-Parser", "JSON Protocol"],
    metrics: "100% REST Compliance • Strict Status Code Contract (200, 201, 400, 404)",
  },
  {
    id: "websocket-chat-app",
    title: "Simple Chat Application with WebSockets",
    description:
      "Low-latency real-time communication platform powered by Node.js, Express, and Socket.IO. Implements full-duplex WebSocket channels, bi-directional event emission pipelines, active connection lifecycle handling, and instant broadcast synchronization.",
    image: water,
    techStack: ["Node.js", "Express.js", "Socket.IO", "WebSockets", "Event-Driven", "HTML5 / DOM"],
    metrics: "Sub-15ms Latency • Bi-Directional Full-Duplex Broadcasting",
  },
];
