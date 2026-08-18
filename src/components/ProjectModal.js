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
          Interactive Demo
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
          Interactive Demo
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
          placeholder="Add a new task..."
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

      {/* Todo List View */}
      <div className="space-y-2.5 max-h-60 overflow-y-auto pr-1">
        {todos.length === 0 ? (
          <p className="text-xs text-slate-500 py-4 text-center">No tasks registered. Add one above!</p>
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
                    title="Edit task"
                  >
                    ✏️
                  </button>
                )}
                <button
                  onClick={() => handleDeleteTodo(todo.id)}
                  className="p-1.5 rounded-lg text-xs text-red-400 hover:text-red-300 bg-red-950/40 hover:bg-red-900/60 transition-colors"
                  title="Delete task"
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

// Interactive Multiplayer Clicker Game Component
function ClickerGameDemo() {
  const [score, setScore] = useState(0);
  const [username, setUsername] = useState(() => "Player_" + Math.floor(10 + Math.random() * 90));
  const [isEditingName, setIsEditingName] = useState(false);
  const [tempName, setTempName] = useState("");
  const [combo, setCombo] = useState(0);
  const [clicksPerSec, setClicksPerSec] = useState(0);
  const [lastClickTime, setLastClickTime] = useState(Date.now());
  const [decayActive, setDecayActive] = useState(false);
  const [clickEffect, setClickEffect] = useState(false);

  // Simulated Live Leaderboard with AI players
  const [leaderboard, setLeaderboard] = useState([
    { username: "Retrofitt", score: 85, badge: "🥇" },
    { username: "CyberPulse", score: 62, badge: "🥈" },
    { username: "NeonKnight", score: 44, badge: "🥉" },
    { username: "DevMentee", score: 28, badge: "4" },
  ]);

  // Live Socket.IO Packet Log
  const [socketLogs, setSocketLogs] = useState([
    { id: 1, text: "WSS connected to :3002 • Room 'multiplayer-clicker'", type: "system" },
    { id: 2, text: "REST GET /api/leaderboard -> 200 OK (4 players loaded)", type: "api" },
  ]);

  // Score Decay Timer upon Inactivity (Decays by 1 every second after 1.5s idle)
  useEffect(() => {
    const decayInterval = setInterval(() => {
      const timeSinceClick = Date.now() - lastClickTime;
      if (timeSinceClick > 1500) {
        setDecayActive(true);
        setCombo(0);
        setClicksPerSec(0);
        setScore((prev) => {
          if (prev > 0) {
            return prev - 1;
          }
          setDecayActive(false);
          return 0;
        });
      } else {
        setDecayActive(false);
      }
    }, 1000);

    return () => clearInterval(decayInterval);
  }, [lastClickTime]);

  // Sync Current User Score to Leaderboard
  useEffect(() => {
    setLeaderboard((prev) => {
      const exists = prev.some((p) => p.username === username);
      let updated;
      if (exists) {
        updated = prev.map((p) => (p.username === username ? { ...p, score } : p));
      } else {
        updated = [...prev, { username, score, badge: "" }];
      }
      // Sort descending
      return updated.sort((a, b) => b.score - a.score).map((item, idx) => ({
        ...item,
        badge: idx === 0 ? "🥇" : idx === 1 ? "🥈" : idx === 2 ? "🥉" : `${idx + 1}`,
      }));
    });
  }, [score, username]);

  // Simulate Occasional Multiplayer Socket Events from Other Active Players
  useEffect(() => {
    const opponentInterval = setInterval(() => {
      const opponents = ["Retrofitt", "CyberPulse", "NeonKnight", "DevMentee"];
      const randomOpponent = opponents[Math.floor(Math.random() * opponents.length)];
      if (randomOpponent !== username) {
        setLeaderboard((prev) =>
          prev.map((p) => (p.username === randomOpponent ? { ...p, score: p.score + 1 } : p))
        );
        setSocketLogs((prev) => [
          ...prev.slice(-7),
          {
            id: Date.now(),
            text: `[WSS IN] receive_click from '${randomOpponent}' • Leaderboard refreshed`,
            type: "opponent",
          },
        ]);
      }
    }, 4000);

    return () => clearInterval(opponentInterval);
  }, [username]);

  // Handle Main Click Event
  const handleClick = () => {
    const now = Date.now();
    setLastClickTime(now);
    setScore((prev) => prev + 1);
    setCombo((prev) => prev + 1);
    setClickEffect(true);
    setTimeout(() => setClickEffect(false), 120);

    // Calculate approximate click speed
    setClicksPerSec((prev) => Math.min(15, prev + 1));

    // Emit simulated socket packet
    setSocketLogs((prev) => [
      ...prev.slice(-7),
      {
        id: Date.now(),
        text: `[WSS OUT] send_click { user: '${username}', score: ${score + 1} }`,
        type: "client",
      },
    ]);
  };

  const handleSaveName = (e) => {
    e.preventDefault();
    if (tempName.trim()) {
      setUsername(tempName.trim());
    }
    setIsEditingName(false);
  };

  return (
    <div
      className="p-5 sm:p-7 rounded-2xl"
      style={{
        background: "radial-gradient(circle at top left, rgba(217, 70, 239, 0.09), rgba(11, 15, 23, 0.98))",
        border: "1px solid rgba(217, 70, 239, 0.25)",
      }}
    >
      {/* Top Header Controls */}
      <div className="flex flex-wrap items-center justify-between gap-2 mb-6">
        <span className="text-xs font-bold uppercase tracking-wider text-fuchsia-400 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-fuchsia-400 animate-pulse"></span>
          Live Multiplayer Sandbox
        </span>
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono text-slate-400 bg-slate-900/80 px-2.5 py-0.5 rounded border border-white/10">
            Socket.IO Port :3002
          </span>
          <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-500/30">
            ● 4 Connected
          </span>
        </div>
      </div>

      {/* Main Game Interface: 2-Column Responsive Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Interactive Clicker Stage (7 cols) */}
        <div className="lg:col-span-7 flex flex-col justify-between space-y-5">
          {/* Player Profile & Active Status */}
          <div
            className="p-4 rounded-xl flex items-center justify-between gap-3"
            style={{ background: "#06080e", border: "1px solid rgba(255, 255, 255, 0.08)" }}
          >
            <div className="flex items-center gap-2.5 min-w-0">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs"
                style={{ background: "linear-gradient(135deg, #d946ef, #a855f7)", color: "#050608" }}
              >
                🎮
              </div>
              <div className="min-w-0">
                {isEditingName ? (
                  <form onSubmit={handleSaveName} className="flex items-center gap-1.5">
                    <input
                      type="text"
                      value={tempName}
                      onChange={(e) => setTempName(e.target.value)}
                      className="px-2 py-0.5 rounded bg-slate-900 border border-fuchsia-400 text-white text-xs"
                      autoFocus
                    />
                    <button type="submit" className="px-2 py-0.5 bg-fuchsia-500 text-slate-950 rounded text-xs font-bold">
                      Save
                    </button>
                  </form>
                ) : (
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-extrabold text-white truncate">{username}</span>
                    <button
                      onClick={() => {
                        setTempName(username);
                        setIsEditingName(true);
                      }}
                      className="text-[10px] text-fuchsia-400 hover:text-fuchsia-300 underline cursor-pointer"
                    >
                      (edit)
                    </button>
                  </div>
                )}
                <span className="text-[10px] text-slate-400 font-mono">Status: Connected</span>
              </div>
            </div>

            {/* Inactivity Decay Indicator */}
            <div className="flex items-center gap-1.5 text-[11px] font-mono">
              <span
                className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                  decayActive
                    ? "bg-red-500/20 text-red-400 border border-red-500/30"
                    : "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                }`}
              >
                {decayActive ? "⚠️ Score Decay Active" : "⚡ Clicker Ready"}
              </span>
            </div>
          </div>

          {/* Central Clicker Hero Box */}
          <div
            className="p-6 rounded-2xl flex flex-col items-center justify-center text-center relative overflow-hidden"
            style={{
              background: "linear-gradient(180deg, rgba(20, 14, 30, 0.95) 0%, rgba(10, 8, 18, 0.98) 100%)",
              border: "1px solid rgba(217, 70, 239, 0.25)",
              boxShadow: clickEffect
                ? "0 0 35px rgba(217, 70, 239, 0.4), inset 0 0 20px rgba(217, 70, 239, 0.2)"
                : "0 10px 30px rgba(0, 0, 0, 0.6)",
              transition: "all 0.15s ease",
            }}
          >
            {/* Score Display */}
            <span className="text-[11px] font-bold uppercase tracking-widest text-fuchsia-400 mb-1">
              Current Player Score
            </span>
            <div
              className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-2 select-none"
              style={{
                fontFamily: "'Outfit', sans-serif",
                textShadow: "0 0 25px rgba(217, 70, 239, 0.5)",
              }}
            >
              {score} <span className="text-xl text-fuchsia-400 font-normal">pts</span>
            </div>

            {/* Combo & Speed Badges */}
            <div className="flex items-center gap-2 mb-6">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-fuchsia-950/80 text-fuchsia-300 border border-fuchsia-500/30">
                Combo: x{combo}
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono text-slate-400 bg-slate-900 border border-white/10">
                Speed: {clicksPerSec} cps
              </span>
            </div>

            {/* Massive Tactile Interactive Click Button */}
            <button
              onClick={handleClick}
              className="w-44 h-44 rounded-full font-extrabold text-white flex flex-col items-center justify-center gap-1 shadow-2xl transition-all select-none hover:scale-105 active:scale-95"
              style={{
                background: "linear-gradient(135deg, #d946ef 0%, #a855f7 50%, #7c3aed 100%)",
                boxShadow: clickEffect
                  ? "0 0 50px rgba(217, 70, 239, 0.8), 0 0 20px #ffffff"
                  : "0 15px 35px rgba(217, 70, 239, 0.4), inset 0 2px 4px rgba(255, 255, 255, 0.4)",
                border: "3px solid rgba(255, 255, 255, 0.3)",
                cursor: "pointer",
              }}
            >
              <span className="text-3xl">⚡</span>
              <span className="text-base tracking-wider uppercase font-black">CLICK ME!</span>
              <span className="text-[10px] font-mono opacity-80">+1 pt / emit</span>
            </button>

            <p className="text-[11px] text-slate-400 mt-5 max-w-xs leading-relaxed">
              Click rapidly to accumulate points! Stop clicking and your score decays by 1 pt/sec automatically.
            </p>
          </div>
        </div>

        {/* Right Column: Live Leaderboard & Socket Stream (5 cols) */}
        <div className="lg:col-span-5 flex flex-col space-y-4">
          {/* Live Leaderboard Card */}
          <div
            className="p-4 rounded-xl flex-1 flex flex-col"
            style={{ background: "#06080e", border: "1px solid rgba(255, 255, 255, 0.08)" }}
          >
            <div className="flex items-center justify-between pb-2.5 mb-3 border-b border-slate-800/80">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
                <span>🏆</span> Live Leaderboard
              </h4>
              <span className="text-[10px] font-mono text-fuchsia-400 bg-fuchsia-950/60 px-2 py-0.5 rounded border border-fuchsia-500/20">
                REST /api/leaderboard
              </span>
            </div>

            {/* Players List */}
            <div className="space-y-2 flex-1">
              {leaderboard.map((player, idx) => {
                const isCurrent = player.username === username;
                return (
                  <div
                    key={idx}
                    className={`flex items-center justify-between p-2.5 rounded-lg text-xs transition-all ${
                      isCurrent
                        ? "bg-fuchsia-500/15 border border-fuchsia-500/40 text-white font-bold"
                        : "bg-slate-900/60 border border-white/5 text-slate-300"
                    }`}
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <span className="text-xs font-mono w-4 text-center shrink-0">{player.badge}</span>
                      <span className="truncate">{player.username} {isCurrent && "(You)"}</span>
                    </div>
                    <span className="font-mono font-bold text-fuchsia-300 shrink-0">
                      {player.score} pts
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Socket.IO Event Packet Console */}
          <div
            className="p-3.5 rounded-xl font-mono text-[10px] space-y-1.5 max-h-36 overflow-y-auto"
            style={{ background: "#040508", border: "1px solid rgba(255, 255, 255, 0.06)" }}
          >
            <div className="text-slate-400 font-bold uppercase tracking-wider text-[9px] pb-1 border-b border-slate-800 flex items-center justify-between">
              <span>WSS Event Packet Stream</span>
              <span className="text-emerald-400">● LIVE</span>
            </div>
            {socketLogs.map((log) => (
              <div
                key={log.id}
                className={`truncate ${
                  log.type === "client"
                    ? "text-fuchsia-400"
                    : log.type === "opponent"
                    ? "text-cyan-400"
                    : log.type === "api"
                    ? "text-emerald-400"
                    : "text-slate-400"
                }`}
              >
                {log.text}
              </div>
            ))}
          </div>
        </div>
      </div>
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
              {(project.id === "clicker-game" || project.appType === "clicker" || project.id === "websocket-chat-app") && (
                <ClickerGameDemo />
              )}

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
