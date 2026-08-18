import React, { useState, useEffect } from "react";

// Interactive Weather App Component
function WeatherAppDemo() {
  const [city, setCity] = useState("New York");
  const [loading, setLoading] = useState(false);
  const [weather, setWeather] = useState({
    city: "New York",
    description: "Clear sky with gentle breeze",
    temp: "22.5",
    humidity: "58",
    icon: "☀️",
  });

  const cityPresets = {
    "New York": { description: "Clear sky with gentle breeze", temp: "22.5", humidity: "58", icon: "☀️" },
    "San Francisco": { description: "Cool coastal marine layer", temp: "16.8", humidity: "76", icon: "🌫️" },
    "Tokyo": { description: "Scattered light clouds", temp: "26.1", humidity: "62", icon: "⛅" },
    "London": { description: "Light drizzle & overcast", temp: "14.2", humidity: "85", icon: "🌧️" },
    "California": { description: "Sunny & warm", temp: "28.0", humidity: "42", icon: "☀️" },
  };

  const handleFetchWeather = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      const target = city.trim();
      const match = cityPresets[target] || {
        description: "Partly cloudy with steady barometric pressure",
        temp: (15 + (Math.abs(target.split("").reduce((a, c) => a + c.charCodeAt(0), 0)) % 18)).toFixed(1),
        humidity: (40 + (Math.abs(target.split("").reduce((a, c) => a + c.charCodeAt(0), 0)) % 45)).toString(),
        icon: "🌤️",
      };
      setWeather({ city: target || "Custom Location", ...match });
      setLoading(false);
    }, 350);
  };

  return (
    <div
      className="p-5 sm:p-7 rounded-2xl"
      style={{
        background: "radial-gradient(circle at top left, rgba(56, 189, 248, 0.09), rgba(11, 15, 23, 0.98))",
        border: "1px solid rgba(56, 189, 248, 0.22)",
      }}
    >
      <div className="flex flex-wrap items-center justify-between gap-2 mb-5">
        <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
          Live Sandbox (Express + Axios SSR Emulation)
        </span>
        <span className="text-xs font-mono text-slate-400 bg-slate-900/80 px-2 py-0.5 rounded border border-white/10">
          Port :3000
        </span>
      </div>

      <form onSubmit={handleFetchWeather} className="flex flex-col sm:flex-row gap-3 mb-5">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city (e.g. Tokyo, London, Paris)..."
          className="flex-1 px-4 py-2.5 rounded-xl text-xs sm:text-sm bg-slate-950 text-white border border-slate-700/80 focus:outline-none focus:border-cyan-400 transition-colors"
        />
        <button
          type="submit"
          disabled={loading}
          className="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-cyan-500 hover:bg-cyan-400 text-slate-950 transition-all shrink-0 shadow-lg shadow-cyan-500/20"
          style={{ cursor: "pointer" }}
        >
          {loading ? "Fetching..." : "Fetch Weather"}
        </button>
      </form>

      {/* Simulated SSR HTML Response View */}
      <div
        className="p-5 sm:p-6 rounded-xl font-mono text-xs sm:text-sm"
        style={{
          background: "#06080e",
          border: "1px solid rgba(255, 255, 255, 0.08)",
        }}
      >
        <div className="flex items-center justify-between pb-3.5 mb-3.5 border-b border-slate-800/80">
          <span className="text-slate-400 font-bold uppercase tracking-wider text-[11px]">
            SSR HTML Response Stream
          </span>
          <span className="text-3xl">{weather.icon}</span>
        </div>
        <div className="space-y-2 text-slate-200">
          <h3 className="text-base sm:text-lg font-bold text-white mb-2.5">
            Current Weather in <span className="text-cyan-400">{weather.city}</span>
          </h3>
          <p className="leading-relaxed"><strong className="text-slate-400">Description:</strong> {weather.description}</p>
          <p className="leading-relaxed">
            <strong className="text-slate-400">Temperature:</strong>{" "}
            <span className="text-emerald-400 font-bold">{weather.temp}°C</span>{" "}
            <span className="text-slate-400 font-normal">({((parseFloat(weather.temp) * 9/5) + 32).toFixed(1)}°F)</span>
          </p>
          <p className="leading-relaxed">
            <strong className="text-slate-400">Humidity:</strong>{" "}
            <span className="text-cyan-300 font-bold">{weather.humidity}%</span>
          </p>
        </div>
      </div>
    </div>
  );
}

// Interactive Todo App Component
function TodoAppDemo() {
  const [todos, setTodos] = useState([
    { id: 0, title: "Configure Express router & middleware", completed: true },
    { id: 1, title: "Implement RESTful CRUD endpoints", completed: true },
    { id: 2, title: "Deploy microservice to staging container", completed: false },
  ]);
  const [newTodo, setNewTodo] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (!newTodo.trim()) return;
    const item = {
      id: todos.length > 0 ? Math.max(...todos.map((t) => t.id)) + 1 : 0,
      title: newTodo.trim(),
      completed: false,
    };
    setTodos([...todos, item]);
    setNewTodo("");
  };

  const handleToggleTodo = (id) => {
    setTodos(todos.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)));
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((t) => (t.id !== id)));
  };

  const handleStartEdit = (todo) => {
    setEditingId(todo.id);
    setEditText(todo.title);
  };

  const handleSaveEdit = (id) => {
    if (!editText.trim()) return;
    setTodos(todos.map((t) => (t.id === id ? { ...t, title: editText.trim() } : t)));
    setEditingId(null);
  };

  return (
    <div
      className="p-5 sm:p-7 rounded-2xl"
      style={{
        background: "radial-gradient(circle at top left, rgba(16, 185, 129, 0.09), rgba(11, 15, 23, 0.98))",
        border: "1px solid rgba(16, 185, 129, 0.22)",
      }}
    >
      <div className="flex flex-wrap items-center justify-between gap-2 mb-5">
        <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          Live Sandbox (REST API CRUD Emulation)
        </span>
        <span className="text-xs font-mono text-slate-400 bg-slate-900/80 px-2 py-0.5 rounded border border-white/10">
          Port :3001
        </span>
      </div>

      {/* Add Todo (POST /todos) */}
      <form onSubmit={handleAddTodo} className="flex flex-col sm:flex-row gap-3 mb-5">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new task (POST /todos)..."
          className="flex-1 px-4 py-2.5 rounded-xl text-xs sm:text-sm bg-slate-950 text-white border border-slate-700/80 focus:outline-none focus:border-emerald-400 transition-colors"
        />
        <button
          type="submit"
          className="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-emerald-500 hover:bg-emerald-400 text-slate-950 transition-all shrink-0 shadow-lg shadow-emerald-500/20"
          style={{ cursor: "pointer" }}
        >
          Add Task
        </button>
      </form>

      {/* Todo List View (GET /todos, PUT /todos/:id, DELETE /todos/:id) */}
      <div className="space-y-2.5 max-h-60 overflow-y-auto pr-1">
        {todos.length === 0 ? (
          <p className="text-xs text-slate-500 py-4 text-center">No tasks currently registered. Add one above!</p>
        ) : (
          todos.map((todo) => (
            <div
              key={todo.id}
              className="p-3.5 rounded-xl flex items-center justify-between gap-3 text-xs sm:text-sm"
              style={{
                background: "rgba(6, 8, 14, 0.9)",
                border: "1px solid rgba(255, 255, 255, 0.07)",
              }}
            >
              <div className="flex items-center gap-3 flex-1 min-w-0">
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => handleToggleTodo(todo.id)}
                  className="rounded cursor-pointer w-4 h-4 shrink-0"
                />
                <span className="text-slate-500 font-mono text-xs shrink-0">#{todo.id}</span>
                {editingId === todo.id ? (
                  <input
                    type="text"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    className="flex-1 px-2.5 py-1 bg-slate-900 border border-emerald-500 rounded-lg text-white text-xs"
                    autoFocus
                  />
                ) : (
                  <span className={`flex-1 truncate ${todo.completed ? "line-through text-slate-500" : "text-slate-200"}`}>
                    {todo.title}
                  </span>
                )}
              </div>

              <div className="flex items-center gap-2 shrink-0">
                {editingId === todo.id ? (
                  <button
                    onClick={() => handleSaveEdit(todo.id)}
                    className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-emerald-600 hover:bg-emerald-500 text-white transition-colors"
                  >
                    Save
                  </button>
                ) : (
                  <button
                    onClick={() => handleStartEdit(todo)}
                    className="p-1.5 rounded-lg text-xs text-slate-400 hover:text-white bg-slate-800/80 hover:bg-slate-700 transition-colors"
                    title="Edit task (PUT)"
                  >
                    ✏️
                  </button>
                )}
                <button
                  onClick={() => handleDeleteTodo(todo.id)}
                  className="p-1.5 rounded-lg text-xs text-red-400 hover:text-red-300 bg-red-950/40 hover:bg-red-900/60 transition-colors"
                  title="Delete task (DELETE)"
                >
                  ✕
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

// Interactive Chat App Component
function ChatAppDemo() {
  const [messages, setMessages] = useState([
    { id: 1, sender: "System", text: "WebSocket connection established.", time: "10:00 AM" },
    { id: 2, sender: "Client A", text: "Hello! Testing real-time broadcast.", time: "10:01 AM" },
    { id: 3, sender: "Client B", text: "Received with sub-15ms latency!", time: "10:01 AM" },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [activeUser, setActiveUser] = useState("Client A");

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;
    const newMsg = {
      id: Date.now(),
      sender: activeUser,
      text: inputMessage.trim(),
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };
    setMessages((prev) => [...prev, newMsg]);
    setInputMessage("");
  };

  return (
    <div
      className="p-5 sm:p-7 rounded-2xl"
      style={{
        background: "radial-gradient(circle at top left, rgba(168, 85, 247, 0.09), rgba(11, 15, 23, 0.98))",
        border: "1px solid rgba(168, 85, 247, 0.22)",
      }}
    >
      <div className="flex flex-wrap items-center justify-between gap-2 mb-5">
        <span className="text-xs font-bold uppercase tracking-wider text-purple-400 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse"></span>
          Live Sandbox (Socket.IO WebSocket Emulation)
        </span>
        <span className="text-xs font-mono text-slate-400 bg-slate-900/80 px-2 py-0.5 rounded border border-white/10">
          Port :3002
        </span>
      </div>

      {/* User Switcher */}
      <div className="flex items-center gap-2.5 mb-4">
        <span className="text-xs text-slate-400 font-semibold">Active Client:</span>
        {["Client A", "Client B"].map((u) => (
          <button
            key={u}
            onClick={() => setActiveUser(u)}
            className="px-3 py-1 rounded-full text-xs font-bold transition-all"
            style={{
              background: activeUser === u ? "#a855f7" : "rgba(255, 255, 255, 0.06)",
              color: activeUser === u ? "#050608" : "#cbd5e1",
              border: activeUser === u ? "1px solid #a855f7" : "1px solid rgba(255, 255, 255, 0.1)",
              cursor: "pointer",
            }}
          >
            {u}
          </button>
        ))}
      </div>

      {/* Message Feed */}
      <div
        className="p-4 rounded-xl space-y-2.5 max-h-52 overflow-y-auto mb-4"
        style={{
          background: "#06080e",
          border: "1px solid rgba(255, 255, 255, 0.08)",
        }}
      >
        {messages.map((m) => (
          <div
            key={m.id}
            className={`flex flex-col ${m.sender === "System" ? "items-center" : m.sender === activeUser ? "items-end" : "items-start"}`}
          >
            {m.sender === "System" ? (
              <span className="text-xs text-slate-500 font-mono py-1">{m.text}</span>
            ) : (
              <div
                className="max-w-[85%] p-3 rounded-xl text-xs sm:text-sm"
                style={{
                  background: m.sender === activeUser ? "rgba(168, 85, 247, 0.22)" : "rgba(30, 41, 59, 0.65)",
                  border: m.sender === activeUser ? "1px solid rgba(168, 85, 247, 0.4)" : "1px solid rgba(255, 255, 255, 0.08)",
                  color: "#f8fafc",
                }}
              >
                <div className="flex items-center justify-between gap-3 text-[11px] mb-1 opacity-75">
                  <span className="font-bold">{m.sender}</span>
                  <span className="font-mono">{m.time}</span>
                </div>
                <p className="leading-relaxed">{m.text}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Send Message Form */}
      <form onSubmit={handleSendMessage} className="flex flex-col sm:flex-row gap-3">
        <input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          placeholder={`Type message as ${activeUser} (send_message event)...`}
          className="flex-1 px-4 py-2.5 rounded-xl text-xs sm:text-sm bg-slate-950 text-white border border-slate-700/80 focus:outline-none focus:border-purple-400 transition-colors"
        />
        <button
          type="submit"
          className="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-purple-500 hover:bg-purple-400 text-slate-950 transition-all shrink-0 shadow-lg shadow-purple-500/20"
          style={{ cursor: "pointer" }}
        >
          Broadcast
        </button>
      </form>
    </div>
  );
}

export default function ProjectModal({ project, isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState("playground"); // "playground" | "overview" | "code"
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  const handleCopyCode = (codeText) => {
    if (!codeText) return;
    navigator.clipboard.writeText(codeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getModalTheme = () => {
    if (project.id === "weather-app" || project.appType === "weather") {
      return {
        accent: "#38bdf8",
        border: "rgba(0, 242, 254, 0.3)",
        shadow: "0 30px 70px -15px rgba(0, 0, 0, 0.95), 0 0 40px rgba(0, 242, 254, 0.15)",
        badgeBg: "rgba(0, 242, 254, 0.15)",
        badgeColor: "#38bdf8",
        badgeBorder: "rgba(0, 242, 254, 0.35)",
        tabColor: "#38bdf8",
      };
    }
    if (project.id === "todo-crud-app" || project.appType === "todo") {
      return {
        accent: "#34d399",
        border: "rgba(0, 245, 160, 0.3)",
        shadow: "0 30px 70px -15px rgba(0, 0, 0, 0.95), 0 0 40px rgba(0, 245, 160, 0.15)",
        badgeBg: "rgba(0, 245, 160, 0.15)",
        badgeColor: "#34d399",
        badgeBorder: "rgba(0, 245, 160, 0.35)",
        tabColor: "#34d399",
      };
    }
    return {
      accent: "#e879f9",
      border: "rgba(217, 70, 239, 0.3)",
      shadow: "0 30px 70px -15px rgba(0, 0, 0, 0.95), 0 0 40px rgba(217, 70, 239, 0.15)",
      badgeBg: "rgba(217, 70, 239, 0.15)",
      badgeColor: "#e879f9",
      badgeBorder: "rgba(217, 70, 239, 0.35)",
      tabColor: "#e879f9",
    };
  };

  const modalTheme = getModalTheme();

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 overflow-y-auto"
      style={{
        backgroundColor: "rgba(3, 5, 10, 0.88)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        animation: "fadeIn 0.25s ease-out forwards",
      }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl rounded-2xl sm:rounded-3xl overflow-hidden flex flex-col my-auto"
        style={{
          maxHeight: "88vh",
          backgroundColor: "#0a0d14",
          border: `1px solid ${modalTheme.border}`,
          boxShadow: modalTheme.shadow,
          animation: "scaleUp 0.25s ease-out forwards",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div
          className="p-6 sm:p-7 md:p-8 flex items-start justify-between gap-4"
          style={{
            borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
            background: "linear-gradient(to bottom, rgba(14, 19, 30, 0.95), rgba(10, 13, 20, 0.98))",
          }}
        >
          <div className="flex-1 pr-2">
            <div className="flex flex-wrap items-center gap-2.5 mb-2.5">
              <span
                className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider"
                style={{
                  background: modalTheme.badgeBg,
                  color: modalTheme.badgeColor,
                  border: `1px solid ${modalTheme.badgeBorder}`,
                }}
              >
                {project.category || "Full-Stack"}
              </span>
              {project.metrics && (
                <span
                  className="px-3 py-1 rounded-full text-xs font-medium"
                  style={{
                    background: "rgba(16, 185, 129, 0.12)",
                    color: "#34d399",
                    border: "1px solid rgba(16, 185, 129, 0.25)",
                  }}
                >
                  ⚡ {project.metrics}
                </span>
              )}
            </div>
            <h2
              className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white tracking-tight leading-tight"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              {project.title}
            </h2>
          </div>

          <button
            onClick={onClose}
            className="p-2.5 rounded-xl text-slate-400 hover:text-white transition-all hover:bg-slate-800/80 shrink-0"
            style={{
              background: "rgba(255, 255, 255, 0.05)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              cursor: "pointer",
            }}
            aria-label="Close modal"
          >
            <svg style={{ width: "20px", height: "20px" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Tab Navigation */}
        <div
          className="flex items-center px-6 sm:px-8 pt-3 gap-3 overflow-x-auto"
          style={{
            borderBottom: "1px solid rgba(255, 255, 255, 0.06)",
            backgroundColor: "#0a0d14",
          }}
        >
          <button
            onClick={() => setActiveTab("playground")}
            className="px-4 py-2.5 text-xs font-bold uppercase tracking-wider relative transition-all shrink-0"
            style={{
              color: activeTab === "playground" ? modalTheme.tabColor : "#94a3b8",
              borderBottom: activeTab === "playground" ? `2px solid ${modalTheme.tabColor}` : "2px solid transparent",
              cursor: "pointer",
              background: "transparent",
              borderTop: "none",
              borderLeft: "none",
              borderRight: "none",
            }}
          >
            Local Live Demo
          </button>
          <button
            onClick={() => setActiveTab("overview")}
            className="px-4 py-2.5 text-xs font-bold uppercase tracking-wider relative transition-all shrink-0"
            style={{
              color: activeTab === "overview" ? modalTheme.tabColor : "#94a3b8",
              borderBottom: activeTab === "overview" ? `2px solid ${modalTheme.tabColor}` : "2px solid transparent",
              cursor: "pointer",
              background: "transparent",
              borderTop: "none",
              borderLeft: "none",
              borderRight: "none",
            }}
          >
            Architecture & Highlights
          </button>
          {project.codeSnippet && (
            <button
              onClick={() => setActiveTab("code")}
              className="px-4 py-2.5 text-xs font-bold uppercase tracking-wider relative transition-all shrink-0"
              style={{
                color: activeTab === "code" ? modalTheme.tabColor : "#94a3b8",
                borderBottom: activeTab === "code" ? `2px solid ${modalTheme.tabColor}` : "2px solid transparent",
                cursor: "pointer",
                background: "transparent",
                borderTop: "none",
                borderLeft: "none",
                borderRight: "none",
              }}
            >
              Source Code
            </button>
          )}
        </div>

        {/* Content Body with Generous Padding */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-7 flex-1" style={{ color: "#cbd5e1" }}>
          {/* Playground Tab */}
          {activeTab === "playground" && (
            <div className="space-y-6">
              {project.id === "weather-app" && <WeatherAppDemo />}
              {project.id === "todo-crud-app" && <TodoAppDemo />}
              {project.id === "websocket-chat-app" && <ChatAppDemo />}

              {/* Stack Chips */}
              <div className="pt-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-3">
                  Production Stack & Tooling
                </span>
                <div className="flex flex-wrap gap-2">
                  {(project.techStack || []).map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1.5 rounded-lg text-xs font-semibold"
                      style={{
                        background: "rgba(16, 21, 33, 0.9)",
                        color: "#93c5fd",
                        border: "1px solid rgba(56, 189, 248, 0.2)",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Overview Tab */}
          {activeTab === "overview" && (
            <div className="space-y-7">
              {/* Executive Summary */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Executive Overview
                </h4>
                <p className="text-sm sm:text-base leading-relaxed text-slate-200" style={{ lineHeight: "1.75" }}>
                  {project.description}
                </p>
              </div>

              {/* Technical Highlights / Recruiter Keywords */}
              {project.highlights && project.highlights.length > 0 && (
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3.5">
                    Key Architectural Capabilities & Engineering Design
                  </h4>
                  <div className="space-y-3">
                    {project.highlights.map((highlight, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3.5 p-4 rounded-xl text-xs sm:text-sm leading-relaxed"
                        style={{
                          background: "rgba(14, 18, 28, 0.75)",
                          border: "1px solid rgba(255, 255, 255, 0.06)",
                        }}
                      >
                        <span className="text-emerald-400 font-bold mt-0.5 text-sm">✓</span>
                        <span className="text-slate-300">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Technology Stack */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3.5">
                  Verified Technologies & Frameworks
                </h4>
                <div className="flex flex-wrap gap-2">
                  {(project.techStack || []).map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-lg text-xs font-semibold"
                      style={{
                        background: "rgba(16, 21, 33, 0.9)",
                        color: "#93c5fd",
                        border: "1px solid rgba(56, 189, 248, 0.2)",
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Code Tab */}
          {activeTab === "code" && project.codeSnippet && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-slate-400">Production Code</span>
                <button
                  onClick={() => handleCopyCode(project.codeSnippet)}
                  className="px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5"
                  style={{
                    background: copied ? "rgba(16, 185, 129, 0.2)" : "rgba(255, 255, 255, 0.07)",
                    border: copied ? "1px solid #10b981" : "1px solid rgba(255, 255, 255, 0.12)",
                    color: copied ? "#34d399" : "#cbd5e1",
                    cursor: "pointer",
                  }}
                >
                  <span>{copied ? "✓ Copied!" : "📋 Copy Code"}</span>
                </button>
              </div>

              <div
                className="rounded-xl overflow-hidden p-5 font-mono text-xs leading-relaxed overflow-x-auto"
                style={{
                  background: "#05070c",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  maxHeight: "380px",
                  color: "#e2e8f0",
                  whiteSpace: "pre",
                }}
              >
                <code>{project.codeSnippet}</code>
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions (No external anchors) */}
        <div
          className="p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-3.5"
          style={{
            borderTop: "1px solid rgba(255, 255, 255, 0.08)",
            background: "rgba(10, 13, 20, 0.98)",
          }}
        >
          <span className="text-xs text-slate-500 font-mono text-center sm:text-left">
            Hosted & Executed Locally in Portfolio App
          </span>
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-slate-800 hover:bg-slate-700 transition-colors shadow-md"
            style={{
              border: "1px solid rgba(255, 255, 255, 0.15)",
              cursor: "pointer",
            }}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
