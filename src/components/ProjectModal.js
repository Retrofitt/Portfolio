import React, { useState, useEffect, useRef } from "react";

// Interactive Weather App Component (Apple-style Refinement)
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

  const cityPresets = [
    { name: "New York", icon: "☀️", desc: "Clear sky with gentle breeze", temp: "22.5", humidity: "58" },
    { name: "San Francisco", icon: "🌫️", desc: "Cool coastal marine layer", temp: "16.8", humidity: "76" },
    { name: "Tokyo", icon: "⛅", desc: "Scattered light clouds", temp: "26.1", humidity: "62" },
    { name: "London", icon: "🌧️", desc: "Light drizzle & overcast", temp: "14.2", humidity: "85" },
    { name: "California", icon: "☀️", desc: "Sunny & warm valley air", temp: "28.0", humidity: "42" },
    { name: "Paris", icon: "🌤️", desc: "Mild & partly sunny", temp: "19.4", humidity: "64" },
  ];

  const fetchWeatherForCity = (cityName) => {
    const target = cityName.trim();
    if (!target) return;
    setLoading(true);
    setTimeout(() => {
      const presetMatch = cityPresets.find((p) => p.name.toLowerCase() === target.toLowerCase());
      if (presetMatch) {
        setWeather({
          city: presetMatch.name,
          description: presetMatch.desc,
          temp: presetMatch.temp,
          humidity: presetMatch.humidity,
          icon: presetMatch.icon,
        });
      } else {
        const hash = Math.abs(target.split("").reduce((a, c) => a + c.charCodeAt(0), 0));
        setWeather({
          city: target,
          description: "Partly cloudy with steady barometric pressure",
          temp: (14 + (hash % 17)).toFixed(1),
          humidity: (40 + (hash % 45)).toString(),
          icon: hash % 2 === 0 ? "🌤️" : "⛅",
        });
      }
      setLoading(false);
    }, 250);
  };

  const handleFetchWeather = (e) => {
    e.preventDefault();
    fetchWeatherForCity(city);
  };

  const handlePresetClick = (presetName) => {
    setCity(presetName);
    fetchWeatherForCity(presetName);
  };

  return (
    <div
      className="p-6 sm:p-8 rounded-3xl relative overflow-hidden"
      style={{
        background: "radial-gradient(120% 120% at 50% 0%, rgba(56, 189, 248, 0.08) 0%, rgba(13, 18, 28, 0.9) 100%)",
        border: "1px solid rgba(255, 255, 255, 0.08)",
      }}
    >
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20">
          <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse"></span>
          <span className="text-xs font-semibold text-sky-300">Live Weather Console</span>
        </div>
        <span className="text-xs font-medium text-slate-400 bg-white/[0.04] px-3 py-1 rounded-full border border-white/[0.08]">
          OpenWeather REST API
        </span>
      </div>

      {/* Location Search Input */}
      <form onSubmit={handleFetchWeather} className="flex flex-col sm:flex-row gap-3 mb-6">
        <div className="relative flex-1">
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Type any city (e.g. Tokyo, London, Miami)..."
            className="w-full pl-5 pr-4 py-3.5 rounded-full text-sm bg-white/[0.05] text-white border border-white/15 focus:outline-none focus:border-sky-400 transition-all placeholder:text-slate-500"
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="px-7 py-3.5 rounded-full text-sm font-bold bg-white hover:bg-slate-100 active:scale-95 transition-all shadow-md shrink-0 flex items-center justify-center gap-2"
          style={{ cursor: "pointer", backgroundColor: "#ffffff", color: "#05070c" }}
        >
          {loading ? "Searching..." : "Fetch Forecast"}
        </button>
      </form>

      {/* Preset Location Pills */}
      <div className="mb-6">
        <span className="text-xs font-medium text-slate-400 block mb-2.5">
          Popular Destinations:
        </span>
        <div className="flex flex-wrap gap-2">
          {cityPresets.map((preset) => {
            const isActive = city.toLowerCase() === preset.name.toLowerCase();
            return (
              <button
                key={preset.name}
                type="button"
                onClick={() => handlePresetClick(preset.name)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium flex items-center gap-1.5 transition-all ${
                  isActive
                    ? "shadow-md font-semibold"
                    : "bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 border border-white/[0.08]"
                }`}
                style={{
                  cursor: "pointer",
                  backgroundColor: isActive ? "#ffffff" : undefined,
                  color: isActive ? "#05070c" : undefined,
                }}
              >
                <span>{preset.icon}</span>
                <span>{preset.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Weather Result Display */}
      <div
        className="p-6 sm:p-8 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6"
        style={{
          background: "rgba(255, 255, 255, 0.03)",
          border: "1px solid rgba(255, 255, 255, 0.06)",
        }}
      >
        <div className="space-y-1.5 text-center sm:text-left">
          <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">
            Current Conditions
          </span>
          <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            {weather.city}
          </h3>
          <p className="text-sm text-slate-300 font-normal">{weather.description}</p>
          <p className="text-xs text-slate-400 pt-1">Humidity: {weather.humidity}%</p>
        </div>

        <div className="text-center sm:text-right shrink-0">
          <div className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            {weather.temp}°<span className="text-2xl text-slate-400 font-normal">C</span>
          </div>
          <span className="text-xs text-slate-400 font-medium mt-1 block">
            {((parseFloat(weather.temp) * 9) / 5 + 32).toFixed(1)}°F
          </span>
        </div>
      </div>
    </div>
  );
}

// Interactive Todo App Component (Apple-style Refinement)
function TodoAppDemo() {
  const [todos, setTodos] = useState([
    { id: 0, title: "Configure Express router & middleware", completed: true },
    { id: 1, title: "Implement RESTful CRUD endpoints", completed: true },
    { id: 2, title: "Deploy microservice to staging container", completed: false },
  ]);
  const [newTodo, setNewTodo] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");
  const [filter, setFilter] = useState("all");

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
    setTodos(todos.filter((t) => t.id !== id));
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

  const filteredTodos = todos.filter((t) => {
    if (filter === "active") return !t.completed;
    if (filter === "completed") return t.completed;
    return true;
  });

  return (
    <div
      className="p-6 sm:p-8 rounded-3xl relative overflow-hidden"
      style={{
        background: "radial-gradient(120% 120% at 50% 0%, rgba(16, 185, 129, 0.08) 0%, rgba(10, 18, 16, 0.9) 100%)",
        border: "1px solid rgba(255, 255, 255, 0.08)",
      }}
    >
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span className="text-xs font-semibold text-emerald-300">REST API Microservice</span>
        </div>
        <span className="text-xs font-medium text-slate-400 bg-white/[0.04] px-3 py-1 rounded-full border border-white/[0.08]">
          CRUD Operations
        </span>
      </div>

      {/* Add Task Input */}
      <form onSubmit={handleAddTodo} className="flex flex-col sm:flex-row gap-3 mb-6">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new task (e.g. Implement WebSocket listener)..."
          className="w-full pl-5 pr-4 py-3.5 rounded-full text-sm bg-white/[0.05] text-white border border-white/15 focus:outline-none focus:border-emerald-400 transition-all placeholder:text-slate-500"
        />
        <button
          type="submit"
          className="px-7 py-3.5 rounded-full text-sm font-bold bg-white hover:bg-slate-100 active:scale-95 transition-all shadow-md shrink-0 flex items-center justify-center"
          style={{ cursor: "pointer", backgroundColor: "#ffffff", color: "#05070c" }}
        >
          Add Task
        </button>
      </form>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 mb-4">
        {["all", "active", "completed"].map((tab) => {
          const isActive = filter === tab;
          return (
            <button
              key={tab}
              type="button"
              onClick={() => setFilter(tab)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium capitalize transition-all ${
                isActive
                  ? "font-semibold shadow-md"
                  : "bg-white/[0.04] hover:bg-white/[0.08] text-slate-400 border border-white/[0.06]"
              }`}
              style={{
                cursor: "pointer",
                backgroundColor: isActive ? "#ffffff" : undefined,
                color: isActive ? "#05070c" : undefined,
              }}
            >
              {tab}
            </button>
          );
        })}
      </div>

      {/* Todo List Items */}
      <div className="space-y-2.5 max-h-72 overflow-y-auto pr-1">
        {filteredTodos.length === 0 ? (
          <p className="text-sm text-slate-500 py-8 text-center">No tasks found. Add a task above to test!</p>
        ) : (
          filteredTodos.map((todo) => (
            <div
              key={todo.id}
              className="p-4 rounded-2xl flex items-center justify-between gap-3 transition-all"
              style={{
                background: "rgba(255, 255, 255, 0.03)",
                border: "1px solid rgba(255, 255, 255, 0.06)",
              }}
            >
              <div className="flex items-center gap-3 flex-1 min-w-0">
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => handleToggleTodo(todo.id)}
                  className="rounded-full w-5 h-5 shrink-0 accent-emerald-400 cursor-pointer"
                />
                {editingId === todo.id ? (
                  <input
                    type="text"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    className="flex-1 px-3 py-1 rounded-lg bg-black text-white border border-white/20 text-xs"
                    autoFocus
                  />
                ) : (
                  <span
                    className={`text-sm break-words flex-1 ${
                      todo.completed ? "line-through text-slate-500" : "text-slate-200 font-medium"
                    }`}
                  >
                    {todo.title}
                  </span>
                )}
              </div>

              <div className="flex items-center gap-1.5 shrink-0">
                {editingId === todo.id ? (
                  <button
                    type="button"
                    onClick={() => handleSaveEdit(todo.id)}
                    className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-400 text-black"
                  >
                    Save
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => handleStartEdit(todo)}
                    className="px-3 py-1 rounded-full text-xs font-medium text-slate-400 hover:text-white bg-white/[0.05]"
                  >
                    Edit
                  </button>
                )}
                <button
                  type="button"
                  onClick={() => handleDeleteTodo(todo.id)}
                  className="px-2.5 py-1 rounded-full text-xs text-rose-400 hover:text-rose-300 bg-rose-500/10"
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

// Interactive Real-Time Clicker Game Component (Fixed button text sizing & Apple styling)
function ClickerGameDemo() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(48);
  const [gameState, setGameState] = useState("idle");
  const [username] = useState(() => "Player_" + Math.floor(Math.random() * 900 + 100));
  const [timeLeftMs, setTimeLeftMs] = useState(2500);
  const [particles, setParticles] = useState([]);
  const [clickEffect, setClickEffect] = useState(false);
  const [leaderboard, setLeaderboard] = useState([
    { username: "Alex_Dev", score: 84, badge: "🥇" },
    { username: "ByteNinja", score: 62, badge: "🥈" },
    { username: "PixelRunner", score: 51, badge: "🥉" },
  ]);

  const lastClickRef = useRef(null);
  const INACTIVITY_TIMEOUT = 2500;

  useEffect(() => {
    if (gameState !== "running") return;
    const interval = setInterval(() => {
      const elapsed = Date.now() - (lastClickRef.current || Date.now());
      const remaining = Math.max(0, INACTIVITY_TIMEOUT - elapsed);
      setTimeLeftMs(remaining);

      if (remaining <= 0) {
        setGameState("ended");
        setHighScore((prev) => {
          const newHigh = Math.max(prev, score);
          setLeaderboard((l) =>
            [...l.filter((p) => p.username !== username), { username, score, badge: "✨" }]
              .sort((a, b) => b.score - a.score)
              .slice(0, 5)
          );
          return newHigh;
        });
      }
    }, 50);
    return () => clearInterval(interval);
  }, [gameState, score, username]);

  const handleClick = () => {
    const now = Date.now();
    lastClickRef.current = now;
    setTimeLeftMs(INACTIVITY_TIMEOUT);

    if (gameState === "idle" || gameState === "ended") {
      setScore(1);
      setGameState("running");
    } else {
      setScore((s) => s + 1);
    }

    setClickEffect(true);
    setTimeout(() => setClickEffect(false), 120);

    const newParticle = {
      id: Date.now() + Math.random(),
      text: "+1",
      x: (Math.random() - 0.5) * 60,
    };
    setParticles((p) => [...p.slice(-6), newParticle]);
    setTimeout(() => {
      setParticles((p) => p.filter((item) => item.id !== newParticle.id));
    }, 700);
  };

  const handleStartNewRun = () => {
    setScore(0);
    setGameState("idle");
    setTimeLeftMs(INACTIVITY_TIMEOUT);
  };

  return (
    <div
      className="p-6 sm:p-8 rounded-3xl relative overflow-hidden"
      style={{
        background: "radial-gradient(120% 120% at 50% 0%, rgba(217, 70, 239, 0.08) 0%, rgba(18, 10, 24, 0.9) 100%)",
        border: "1px solid rgba(255, 255, 255, 0.08)",
      }}
    >
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/20">
          <span className="w-2 h-2 rounded-full bg-fuchsia-400 animate-pulse"></span>
          <span className="text-xs font-semibold text-fuchsia-300">WebSocket Multiplayer Engine</span>
        </div>
        <span className="text-xs font-medium text-slate-400 bg-white/[0.04] px-3 py-1 rounded-full border border-white/[0.08]">
          Session: {username}
        </span>
      </div>

      <div className="grid md:grid-cols-12 gap-6 items-center">
        {/* Clicker Area (7 cols) */}
        <div className="md:col-span-7 flex flex-col items-center justify-center text-center p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
          <span className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-1">
            {gameState === "ended" ? "Final Run Score" : "Current Score"}
          </span>
          <div className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight mb-4">
            {score} <span className="text-lg font-normal text-fuchsia-400">pts</span>
          </div>

          {/* Sizable Apple-style Click Button (Text completely contained) */}
          <div className="relative flex items-center justify-center my-3">
            {particles.map((p) => (
              <span
                key={p.id}
                className="absolute font-bold text-sm text-fuchsia-300 pointer-events-none select-none z-20"
                style={{
                  left: `calc(50% + ${p.x}px)`,
                  bottom: "80%",
                  animation: "floatParticle 0.65s ease-out forwards",
                }}
              >
                {p.text}
              </span>
            ))}

            <button
              type="button"
              onClick={handleClick}
              className="w-36 h-36 sm:w-44 sm:h-44 rounded-full font-bold text-white flex flex-col items-center justify-center gap-1 shadow-xl select-none active:scale-95 transition-all duration-150 shrink-0"
              style={{
                background: "linear-gradient(135deg, #d946ef 0%, #9333ea 100%)",
                boxShadow: clickEffect
                  ? "0 0 40px rgba(217, 70, 239, 0.7), 0 0 15px #ffffff"
                  : "0 15px 35px rgba(217, 70, 239, 0.35)",
                border: "2px solid rgba(255, 255, 255, 0.4)",
                cursor: "pointer",
              }}
            >
              <span className="text-3xl sm:text-4xl">⚡</span>
              <span className="text-xs sm:text-sm font-extrabold tracking-wider uppercase px-2 text-center">
                {gameState === "ended" ? "Play Again" : "Click Me!"}
              </span>
              <span className="text-[10px] text-fuchsia-200 opacity-80">+1 pt</span>
            </button>
          </div>

          {gameState === "ended" && (
            <button
              type="button"
              onClick={handleStartNewRun}
              className="mt-3 px-5 py-2 rounded-full text-xs font-bold shadow-md hover:bg-slate-100 transition-all"
              style={{ cursor: "pointer", backgroundColor: "#ffffff", color: "#05070c" }}
            >
              Start New Run
            </button>
          )}
        </div>

        {/* Live Leaderboard (5 cols) */}
        <div className="md:col-span-5 p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex flex-col justify-between h-full">
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 flex items-center justify-between">
              <span>🏆 Live Leaderboard</span>
              <span className="text-[10px] text-emerald-400 font-normal">● Live</span>
            </h4>
            <div className="space-y-2">
              {leaderboard.map((p, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-2.5 rounded-xl text-xs bg-white/[0.03] border border-white/[0.05]"
                >
                  <span className="text-slate-200 font-medium">
                    {p.badge} {p.username}
                  </span>
                  <span className="font-bold text-fuchsia-300">{p.score} pts</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-white/5 text-[11px] text-slate-400 text-center">
            Inactivity timer concludes session automatically after 2.5s idle.
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProjectModal({ project, isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState("playground");
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

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8 overflow-y-auto"
      style={{
        backgroundColor: "rgba(3, 5, 10, 0.85)",
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
      }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl rounded-2xl overflow-hidden flex flex-col my-auto box-border"
        style={{
          maxHeight: "90vh",
          backgroundColor: "#0e0e0e",
          border: "1px solid rgba(255, 255, 255, 0.12)",
          boxShadow: "inset 0 1px 0 0 rgba(255, 255, 255, 0.15), 0 40px 80px -20px rgba(0, 0, 0, 0.9)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div
          className="p-6 sm:p-8 flex items-start justify-between gap-4 shrink-0"
          style={{
            borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
            background: "linear-gradient(180deg, rgba(22, 22, 22, 0.9) 0%, rgba(14, 14, 14, 0.98) 100%)",
          }}
        >
          <div className="flex-1 pr-2">
            <div className="flex items-center gap-2 mb-2">
              <span className="px-3 py-1 rounded-full text-xs font-semibold tracking-wide text-slate-300 bg-white/[0.06] border border-white/10">
                {project.category || "Full-Stack"}
              </span>
              {project.metrics && (
                <span className="px-3 py-1 rounded-full text-xs font-medium text-slate-300 bg-white/[0.04] border border-white/[0.08]">
                  ⚡ {project.metrics}
                </span>
              )}
            </div>
            <h2
              className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              {project.title}
            </h2>
          </div>

          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full text-slate-400 hover:text-white transition-all bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 flex items-center justify-center shrink-0"
            style={{ cursor: "pointer" }}
            aria-label="Close modal"
          >
            <svg style={{ width: "16px", height: "16px" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Apple-style Tab Bar with Distinct Highlighted Active Tab */}
        <div
          className="px-6 sm:px-8 pt-3 flex items-center gap-2 overflow-x-auto shrink-0 border-b border-white/10"
          style={{
            backgroundColor: "#0a0a0a",
          }}
        >
          <div className="flex items-center gap-1.5 -mb-px">
            <button
              onClick={() => setActiveTab("playground")}
              className={`px-4 sm:px-5 py-2.5 rounded-t-xl text-xs sm:text-sm font-semibold transition-all duration-150 flex items-center gap-2 border-t border-x ${
                activeTab === "playground"
                  ? "bg-[#141414] text-white border-white/15 border-b-2 border-b-[#141414] shadow-sm"
                  : "bg-transparent text-slate-400 hover:text-slate-200 border-transparent hover:bg-white/[0.04]"
              }`}
              style={{ cursor: "pointer" }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{
                  backgroundColor: activeTab === "playground" ? "#dc2626" : "#64748b",
                  boxShadow: activeTab === "playground" ? "0 0 6px rgba(220, 38, 38, 0.4)" : "none"
                }}
              ></span>
              <span>Interactive Sandbox</span>
            </button>

            <button
              onClick={() => setActiveTab("overview")}
              className={`px-4 sm:px-5 py-2.5 rounded-t-xl text-xs sm:text-sm font-semibold transition-all duration-150 flex items-center gap-2 border-t border-x ${
                activeTab === "overview"
                  ? "bg-[#141414] text-white border-white/15 border-b-2 border-b-[#141414] shadow-sm"
                  : "bg-transparent text-slate-400 hover:text-slate-200 border-transparent hover:bg-white/[0.04]"
              }`}
              style={{ cursor: "pointer" }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{
                  backgroundColor: activeTab === "overview" ? "#f3f4f6" : "#64748b",
                  boxShadow: activeTab === "overview" ? "0 0 6px rgba(255, 255, 255, 0.3)" : "none"
                }}
              ></span>
              <span>Architecture & Details</span>
            </button>

            {project.codeSnippet && (
              <button
                onClick={() => setActiveTab("code")}
                className={`px-4 sm:px-5 py-2.5 rounded-t-xl text-xs sm:text-sm font-semibold transition-all duration-150 flex items-center gap-2 border-t border-x ${
                  activeTab === "code"
                    ? "bg-[#141414] text-white border-white/15 border-b-2 border-b-[#141414] shadow-sm"
                    : "bg-transparent text-slate-400 hover:text-slate-200 border-transparent hover:bg-white/[0.04]"
                }`}
                style={{ cursor: "pointer" }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{
                    backgroundColor: activeTab === "code" ? "#f3f4f6" : "#64748b",
                    boxShadow: activeTab === "code" ? "0 0 6px rgba(255, 255, 255, 0.3)" : "none"
                  }}
                ></span>
                <span>Source Code</span>
              </button>
            )}
          </div>
        </div>

        {/* Modal Body with Generous Spacing */}
        <div className="p-6 sm:p-8 md:p-10 overflow-y-auto space-y-8 flex-1">
          {/* Playground Tab */}
          {activeTab === "playground" && (
            <div className="space-y-8">
              {project.id === "weather-app" && <WeatherAppDemo />}
              {project.id === "todo-crud-app" && <TodoAppDemo />}
              {(project.id === "clicker-game" || project.appType === "clicker" || project.id === "websocket-chat-app") && (
                <ClickerGameDemo />
              )}

              {/* Verified Production Stack Section (Spaced away from edges) */}
              <div
                className="p-6 rounded-2xl"
                style={{
                  background: "rgba(255, 255, 255, 0.02)",
                  border: "1px solid rgba(255, 255, 255, 0.06)",
                }}
              >
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-3.5">
                  Production Stack & Tooling
                </span>
                <div className="flex flex-wrap gap-2">
                  {(project.techStack || []).map((t) => (
                    <span
                      key={t}
                      className="px-3.5 py-1.5 rounded-full text-xs font-medium text-slate-200"
                      style={{
                        background: "rgba(255, 255, 255, 0.05)",
                        border: "1px solid rgba(255, 255, 255, 0.1)",
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
            <div className="space-y-8">
              <div
                className="p-6 sm:p-8 rounded-2xl"
                style={{
                  background: "rgba(255, 255, 255, 0.02)",
                  border: "1px solid rgba(255, 255, 255, 0.06)",
                }}
              >
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Executive Overview
                </h4>
                <p className="text-sm sm:text-base leading-relaxed text-slate-300 font-normal">
                  {project.description}
                </p>
              </div>

              {/* Highlights */}
              {project.highlights && project.highlights.length > 0 && (
                <div
                  className="p-6 sm:p-8 rounded-2xl"
                  style={{
                    background: "rgba(255, 255, 255, 0.02)",
                    border: "1px solid rgba(255, 255, 255, 0.06)",
                  }}
                >
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
                    Key Architectural Capabilities
                  </h4>
                  <div className="space-y-3">
                    {project.highlights.map((highlight, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 p-4 rounded-xl text-sm leading-relaxed text-slate-300"
                        style={{
                          background: "rgba(255, 255, 255, 0.03)",
                          border: "1px solid rgba(255, 255, 255, 0.05)",
                        }}
                      >
                        <span className="text-emerald-400 font-bold mt-0.5">✓</span>
                        <span className="flex-1">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Stack */}
              <div
                className="p-6 rounded-2xl"
                style={{
                  background: "rgba(255, 255, 255, 0.02)",
                  border: "1px solid rgba(255, 255, 255, 0.06)",
                }}
              >
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3.5">
                  Verified Technologies & Frameworks
                </h4>
                <div className="flex flex-wrap gap-2">
                  {(project.techStack || []).map((tech) => (
                    <span
                      key={tech}
                      className="px-3.5 py-1.5 rounded-full text-xs font-medium text-slate-200"
                      style={{
                        background: "rgba(255, 255, 255, 0.05)",
                        border: "1px solid rgba(255, 255, 255, 0.1)",
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
                <span className="text-xs font-medium text-slate-400">Production Code</span>
                <button
                  onClick={() => handleCopyCode(project.codeSnippet)}
                  className="px-4 py-2 rounded-full text-xs font-bold hover:bg-slate-100 transition-all flex items-center gap-1.5 shadow-sm"
                  style={{ cursor: "pointer", backgroundColor: "#ffffff", color: "#05070c" }}
                >
                  <span style={{ color: "#05070c" }}>{copied ? "✓ Copied" : "Copy Code"}</span>
                </button>
              </div>

              <div
                className="rounded-2xl overflow-x-auto p-5 font-mono text-xs leading-relaxed"
                style={{
                  background: "#04060a",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  maxHeight: "400px",
                  color: "#e2e8f0",
                }}
              >
                <code style={{ display: "block", whiteSpace: "pre" }}>{project.codeSnippet}</code>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div
          className="p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0"
          style={{
            borderTop: "1px solid rgba(255, 255, 255, 0.08)",
            background: "rgba(8, 11, 18, 0.98)",
          }}
        >
          <span className="text-xs text-slate-400 font-medium">
            Executed locally inside React Sandbox Environment
          </span>
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-7 py-2.5 rounded-full text-xs font-semibold text-white bg-white/[0.08] hover:bg-white/[0.15] border border-white/15 transition-all"
            style={{ cursor: "pointer" }}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
