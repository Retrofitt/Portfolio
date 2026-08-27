import React, { useState, useEffect, useRef } from "react";

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
    }, 280);
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
      className="p-4 sm:p-7 rounded-2xl"
      style={{
        background: "radial-gradient(circle at top left, rgba(56, 189, 248, 0.09), rgba(11, 15, 23, 0.98))",
        border: "1px solid rgba(56, 189, 248, 0.22)",
      }}
    >
      <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
        <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
          Interactive Weather Console
        </span>
        <span className="text-xs font-mono text-slate-400 bg-slate-900/80 px-2 py-0.5 rounded border border-white/10">
          Port :3000
        </span>
      </div>

      {/* Location Input Area with Prominent Interactive Affordance */}
      <div className="mb-4">
        <label className="block text-[11px] font-bold uppercase tracking-wider text-cyan-300 mb-1.5 flex items-center gap-1.5">
          <span>📍</span> Location Search (Editable Field)
        </label>
        <form onSubmit={handleFetchWeather} className="flex flex-col sm:flex-row gap-2.5">
          <div className="relative flex-1">
            <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-sm pointer-events-none">
              🔍
            </span>
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="Type any city (e.g. Tokyo, London, Miami)..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl text-xs sm:text-sm bg-slate-950 text-white border border-cyan-500/40 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20 transition-all placeholder:text-slate-500 shadow-inner"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-cyan-500 hover:bg-cyan-400 active:bg-cyan-600 text-slate-950 transition-all shrink-0 shadow-lg shadow-cyan-500/20 flex items-center justify-center gap-1.5"
            style={{ cursor: "pointer", minHeight: "42px" }}
          >
            {loading ? "Searching..." : "Fetch Weather"}
          </button>
        </form>
      </div>

      {/* Quick-Select Location Pills (1-Tap for Mobile) */}
      <div className="mb-5">
        <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block mb-1.5">
          Quick Preset Locations:
        </span>
        <div className="flex flex-wrap gap-1.5">
          {cityPresets.map((preset) => (
            <button
              key={preset.name}
              type="button"
              onClick={() => handlePresetClick(preset.name)}
              className={`px-2.5 py-1 rounded-lg text-xs font-semibold flex items-center gap-1 transition-all ${
                city.toLowerCase() === preset.name.toLowerCase()
                  ? "bg-cyan-500/25 border border-cyan-400 text-cyan-200 shadow-sm shadow-cyan-500/30"
                  : "bg-slate-900/80 hover:bg-slate-800 border border-white/10 text-slate-300"
              }`}
              style={{ cursor: "pointer" }}
            >
              <span>{preset.icon}</span>
              <span>{preset.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Simulated SSR HTML Response View */}
      <div
        className="p-4 sm:p-6 rounded-xl font-mono text-xs sm:text-sm"
        style={{
          background: "#06080e",
          border: "1px solid rgba(255, 255, 255, 0.08)",
        }}
      >
        <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800/80">
          <span className="text-slate-400 font-bold uppercase tracking-wider text-[11px]">
            SSR HTML Response Stream
          </span>
          <span className="text-3xl">{weather.icon}</span>
        </div>
        <div className="space-y-2 text-slate-200">
          <h3 className="text-base sm:text-lg font-bold text-white mb-2 break-words">
            Current Weather in <span className="text-cyan-400">{weather.city}</span>
          </h3>
          <p className="leading-relaxed">
            <strong className="text-slate-400">Description:</strong> {weather.description}
          </p>
          <p className="leading-relaxed">
            <strong className="text-slate-400">Temperature:</strong>{" "}
            <span className="text-emerald-400 font-bold">{weather.temp}°C</span>{" "}
            <span className="text-slate-400 font-normal">
              ({((parseFloat(weather.temp) * 9) / 5 + 32).toFixed(1)}°F)
            </span>
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
  const [filter, setFilter] = useState("all"); // "all" | "active" | "completed"

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
      className="p-4 sm:p-7 rounded-2xl"
      style={{
        background: "radial-gradient(circle at top left, rgba(16, 185, 129, 0.09), rgba(11, 15, 23, 0.98))",
        border: "1px solid rgba(16, 185, 129, 0.22)",
      }}
    >
      <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
        <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          Interactive Task Manager (CRUD)
        </span>
        <span className="text-xs font-mono text-slate-400 bg-slate-900/80 px-2 py-0.5 rounded border border-white/10">
          Port :3001
        </span>
      </div>

      {/* Add Todo (POST /todos) with Prominent Interactive Affordance */}
      <form onSubmit={handleAddTodo} className="flex flex-col sm:flex-row gap-2.5 mb-4">
        <div className="relative flex-1">
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="Add a new task (e.g. Implement WebSocket listener)..."
            className="w-full px-4 py-2.5 rounded-xl text-xs sm:text-sm bg-slate-950 text-white border border-emerald-500/40 focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-500/20 transition-all placeholder:text-slate-500 shadow-inner"
          />
        </div>
        <button
          type="submit"
          className="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-emerald-500 hover:bg-emerald-400 active:bg-emerald-600 text-slate-950 transition-all shrink-0 shadow-lg shadow-emerald-500/20"
          style={{ cursor: "pointer", minHeight: "42px" }}
        >
          + Add Task
        </button>
      </form>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 mb-3">
        {["all", "active", "completed"].map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => setFilter(tab)}
            className={`px-3 py-1 rounded-lg text-xs font-semibold capitalize transition-all ${
              filter === tab
                ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40"
                : "bg-slate-900/60 text-slate-400 border border-white/5 hover:text-white"
            }`}
            style={{ cursor: "pointer" }}
          >
            {tab} ({tab === "all" ? todos.length : tab === "active" ? todos.filter((t) => !t.completed).length : todos.filter((t) => t.completed).length})
          </button>
        ))}
      </div>

      {/* Todo List View */}
      <div className="space-y-2 max-h-64 overflow-y-auto pr-1">
        {filteredTodos.length === 0 ? (
          <p className="text-xs text-slate-500 py-6 text-center">No tasks in this view. Add one above!</p>
        ) : (
          filteredTodos.map((todo) => (
            <div
              key={todo.id}
              className="p-3 rounded-xl flex items-center justify-between gap-2.5 text-xs sm:text-sm"
              style={{
                background: "rgba(6, 8, 14, 0.9)",
                border: "1px solid rgba(255, 255, 255, 0.07)",
              }}
            >
              <div className="flex items-center gap-2.5 flex-1 min-w-0">
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => handleToggleTodo(todo.id)}
                  className="rounded cursor-pointer w-5 h-5 shrink-0 accent-emerald-500"
                />
                <span className="text-slate-500 font-mono text-[11px] shrink-0">#{todo.id}</span>
                {editingId === todo.id ? (
                  <input
                    type="text"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    className="flex-1 px-2.5 py-1 bg-slate-900 border border-emerald-400 rounded-lg text-white text-xs"
                    autoFocus
                  />
                ) : (
                  <span
                    className={`flex-1 truncate ${
                      todo.completed ? "line-through text-slate-500" : "text-slate-200"
                    }`}
                  >
                    {todo.title}
                  </span>
                )}
              </div>

              <div className="flex items-center gap-1.5 shrink-0">
                {editingId === todo.id ? (
                  <>
                    <button
                      onClick={() => handleSaveEdit(todo.id)}
                      className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-emerald-600 hover:bg-emerald-500 text-white transition-colors"
                      style={{ minHeight: "36px" }}
                    >
                      Save
                    </button>
                    <button
                      onClick={() => setEditingId(null)}
                      className="px-2 py-1 rounded-lg text-xs font-semibold bg-slate-800 text-slate-300 hover:text-white"
                      style={{ minHeight: "36px" }}
                    >
                      Cancel
                    </button>
                  </>
                ) : (
                  <button
                    onClick={() => handleStartEdit(todo)}
                    className="p-2 rounded-lg text-xs text-slate-400 hover:text-white bg-slate-800/80 hover:bg-slate-700 transition-colors"
                    title="Edit task"
                    style={{ minWidth: "36px", minHeight: "36px" }}
                  >
                    ✏️
                  </button>
                )}
                <button
                  onClick={() => handleDeleteTodo(todo.id)}
                  className="p-2 rounded-lg text-xs text-red-400 hover:text-red-300 bg-red-950/40 hover:bg-red-900/60 transition-colors"
                  title="Delete task"
                  style={{ minWidth: "36px", minHeight: "36px" }}
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

// Interactive Multiplayer Cookie / Arcade Clicker Game Component
function ClickerGameDemo() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(85);
  const [gameState, setGameState] = useState("idle"); // "idle" | "running" | "ended"
  const [username, setUsername] = useState(() => "Player_" + Math.floor(10 + Math.random() * 90));
  const [isEditingName, setIsEditingName] = useState(false);
  const [tempName, setTempName] = useState("");
  const [combo, setCombo] = useState(0);
  const [maxCombo, setMaxCombo] = useState(0);
  const [clicksPerSec, setClicksPerSec] = useState(0);
  const [peakCPS, setPeakCPS] = useState(0);
  const [lastClickTime, setLastClickTime] = useState(null);
  const [timeLeftMs, setTimeLeftMs] = useState(2500); // 2.5s inactivity timer
  const [clickEffect, setClickEffect] = useState(false);
  const [particles, setParticles] = useState([]);
  const clickCountRef = useRef(0);

  const INACTIVITY_LIMIT_MS = 2500;

  // Live Leaderboard
  const [leaderboard, setLeaderboard] = useState([
    { username: "Retrofitt", score: 85, badge: "🥇" },
    { username: "CyberPulse", score: 62, badge: "🥈" },
    { username: "NeonKnight", score: 44, badge: "🥉" },
    { username: "DevMentee", score: 28, badge: "4" },
  ]);

  // Live Socket.IO Packet Log
  const [socketLogs, setSocketLogs] = useState([
    { id: 1, text: "WSS connected to :3002 • Room 'multiplayer-clicker'", type: "system" },
    { id: 2, text: "REST GET /api/leaderboard -> 200 OK (Leaderboard synced)", type: "api" },
  ]);

  // Inactivity countdown & Run End Timer (NO SCORE DECAY: run ends, score is saved, high score updated)
  useEffect(() => {
    if (gameState !== "running") return;

    const interval = setInterval(() => {
      if (!lastClickTime) return;
      const elapsed = Date.now() - lastClickTime;
      const remaining = Math.max(0, INACTIVITY_LIMIT_MS - elapsed);
      setTimeLeftMs(remaining);

      if (remaining <= 0) {
        // Run has ended due to inactivity!
        setGameState("ended");
        setClicksPerSec(0);
        setTimeLeftMs(0);

        // Update high score if current run score is higher
        setHighScore((prevHigh) => {
          const finalBest = Math.max(prevHigh, score);
          // Sync to leaderboard with finalized score
          setLeaderboard((prevLeader) => {
            const exists = prevLeader.some((p) => p.username === username);
            let updated;
            if (exists) {
              updated = prevLeader.map((p) =>
                p.username === username ? { ...p, score: finalBest } : p
              );
            } else {
              updated = [...prevLeader, { username, score: finalBest, badge: "" }];
            }
            return updated
              .sort((a, b) => b.score - a.score)
              .map((item, idx) => ({
                ...item,
                badge: idx === 0 ? "🥇" : idx === 1 ? "🥈" : idx === 2 ? "🥉" : `${idx + 1}`,
              }));
          });
          return finalBest;
        });

        // Emit run completed socket packet
        setSocketLogs((prev) => [
          ...prev.slice(-6),
          {
            id: Date.now(),
            text: `[WSS OUT] run_ended { user: '${username}', finalScore: ${score}, combo: ${combo} }`,
            type: "client",
          },
          {
            id: Date.now() + 1,
            text: `[SERVER] Run concluded (2.5s idle). Final Score: ${score} pts recorded.`,
            type: "system",
          },
        ]);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [gameState, lastClickTime, score, username, combo]);

  // Simulate Occasional Multiplayer Socket Events from Other Active Players
  useEffect(() => {
    const opponentInterval = setInterval(() => {
      const opponents = ["Retrofitt", "CyberPulse", "NeonKnight", "DevMentee"];
      const randomOpponent = opponents[Math.floor(Math.random() * opponents.length)];
      if (randomOpponent !== username) {
        setLeaderboard((prev) =>
          prev
            .map((p) => (p.username === randomOpponent ? { ...p, score: p.score + 1 } : p))
            .sort((a, b) => b.score - a.score)
            .map((item, idx) => ({
              ...item,
              badge: idx === 0 ? "🥇" : idx === 1 ? "🥈" : idx === 2 ? "🥉" : `${idx + 1}`,
            }))
        );
        setSocketLogs((prev) => [
          ...prev.slice(-6),
          {
            id: Date.now(),
            text: `[WSS IN] receive_click from '${randomOpponent}' • Leaderboard refreshed`,
            type: "opponent",
          },
        ]);
      }
    }, 4500);

    return () => clearInterval(opponentInterval);
  }, [username]);

  // Handle Main Click Event
  const handleClick = () => {
    const now = Date.now();

    // If previous run ended or game is idle, start fresh run
    if (gameState === "ended" || gameState === "idle") {
      setScore(1);
      setCombo(1);
      setMaxCombo(1);
      setGameState("running");
      setLastClickTime(now);
      setTimeLeftMs(INACTIVITY_LIMIT_MS);
      clickCountRef.current = 1;
    } else {
      // Run is currently running: increment score & combo
      setScore((prev) => prev + 1);
      setCombo((prev) => {
        const next = prev + 1;
        setMaxCombo((m) => Math.max(m, next));
        return next;
      });
      setLastClickTime(now);
      setTimeLeftMs(INACTIVITY_LIMIT_MS);
      clickCountRef.current += 1;
    }

    // Visual tactile feedback
    setClickEffect(true);
    setTimeout(() => setClickEffect(false), 120);

    // Approximate CPS calculation
    const currentCPS = Math.min(20, Math.floor(1000 / Math.max(60, now - (lastClickTime || now - 200))));
    setClicksPerSec(currentCPS);
    setPeakCPS((p) => Math.max(p, currentCPS));

    // Spawn floating particle
    const particleId = Date.now() + Math.random();
    const particleText = combo > 10 ? `+1 🔥 x${combo}` : "+1";
    setParticles((prev) => [
      ...prev.slice(-5),
      {
        id: particleId,
        text: particleText,
        x: Math.random() * 40 - 20,
      },
    ]);
    setTimeout(() => {
      setParticles((prev) => prev.filter((p) => p.id !== particleId));
    }, 650);

    // Emit live socket packet
    setSocketLogs((prev) => [
      ...prev.slice(-6),
      {
        id: Date.now(),
        text: `[WSS OUT] send_click { user: '${username}', score: ${gameState === "ended" ? 1 : score + 1} }`,
        type: "client",
      },
    ]);
  };

  const handleStartNewRun = () => {
    setScore(0);
    setCombo(0);
    setGameState("idle");
    setTimeLeftMs(INACTIVITY_LIMIT_MS);
    setLastClickTime(null);
  };

  const handleSaveName = (e) => {
    e.preventDefault();
    if (tempName.trim()) {
      setUsername(tempName.trim());
    }
    setIsEditingName(false);
  };

  const timerPercent = (timeLeftMs / INACTIVITY_LIMIT_MS) * 100;

  return (
    <div
      className="p-4 sm:p-7 rounded-2xl"
      style={{
        background: "radial-gradient(circle at top left, rgba(217, 70, 239, 0.09), rgba(11, 15, 23, 0.98))",
        border: "1px solid rgba(217, 70, 239, 0.25)",
      }}
    >
      {/* Top Header Controls */}
      <div className="flex flex-wrap items-center justify-between gap-2 mb-5">
        <span className="text-xs font-bold uppercase tracking-wider text-fuchsia-400 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-fuchsia-400 animate-pulse"></span>
          Live Multiplayer Clicker Arcade
        </span>
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono text-slate-400 bg-slate-900/80 px-2.5 py-0.5 rounded border border-white/10">
            Socket.IO Port :3002
          </span>
          <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-500/30">
            ● 4 Online
          </span>
        </div>
      </div>

      {/* Main Game Interface: Responsive Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* Left Column: Interactive Clicker Stage (7 cols) */}
        <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
          {/* Player Profile & Active Status with Clear Edit Affordance */}
          <div
            className="p-3.5 sm:p-4 rounded-xl flex items-center justify-between gap-3"
            style={{ background: "#06080e", border: "1px solid rgba(255, 255, 255, 0.08)" }}
          >
            <div className="flex items-center gap-2.5 min-w-0 flex-1">
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center font-bold text-base shrink-0"
                style={{ background: "linear-gradient(135deg, #d946ef, #a855f7)", color: "#050608" }}
              >
                🍪
              </div>
              <div className="min-w-0 flex-1">
                {isEditingName ? (
                  <form onSubmit={handleSaveName} className="flex items-center gap-1.5">
                    <input
                      type="text"
                      value={tempName}
                      onChange={(e) => setTempName(e.target.value)}
                      className="px-2 py-1 rounded-lg bg-slate-900 border border-fuchsia-400 text-white text-xs w-full max-w-[140px]"
                      placeholder="Player Name"
                      autoFocus
                    />
                    <button
                      type="submit"
                      className="px-2.5 py-1 bg-fuchsia-500 hover:bg-fuchsia-400 text-slate-950 rounded-lg text-xs font-bold shrink-0"
                    >
                      Save
                    </button>
                  </form>
                ) : (
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-xs sm:text-sm font-extrabold text-white truncate">
                      {username}
                    </span>
                    <button
                      onClick={() => {
                        setTempName(username);
                        setIsEditingName(true);
                      }}
                      className="px-2 py-0.5 rounded text-[10px] font-semibold text-fuchsia-300 bg-fuchsia-950/60 hover:bg-fuchsia-900 border border-fuchsia-500/30 flex items-center gap-1 transition-all"
                      title="Click to change your player name"
                      style={{ cursor: "pointer" }}
                    >
                      <span>✏️</span>
                      <span>Edit Name</span>
                    </button>
                  </div>
                )}
                <div className="flex items-center gap-2 mt-0.5 text-[10px] text-slate-400 font-mono">
                  <span>Best Run: <strong className="text-emerald-400 font-bold">{highScore} pts</strong></span>
                </div>
              </div>
            </div>

            {/* Run State Indicator */}
            <div className="shrink-0">
              <span
                className={`px-2.5 py-1 rounded-lg text-[10px] sm:text-xs font-mono font-bold ${
                  gameState === "running"
                    ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 animate-pulse"
                    : gameState === "ended"
                    ? "bg-red-500/20 text-red-400 border border-red-500/40"
                    : "bg-slate-800 text-slate-300 border border-white/10"
                }`}
              >
                {gameState === "running" ? "🔥 Run Active" : gameState === "ended" ? "🏁 Run Ended" : "⚡ Ready"}
              </span>
            </div>
          </div>

          {/* Central Clicker Hero Box */}
          <div
            className="p-5 sm:p-6 rounded-2xl flex flex-col items-center justify-center text-center relative overflow-hidden"
            style={{
              background: "linear-gradient(180deg, rgba(20, 14, 30, 0.95) 0%, rgba(10, 8, 18, 0.98) 100%)",
              border: "1px solid rgba(217, 70, 239, 0.25)",
              boxShadow: clickEffect
                ? "0 0 35px rgba(217, 70, 239, 0.45), inset 0 0 20px rgba(217, 70, 239, 0.25)"
                : "0 10px 30px rgba(0, 0, 0, 0.6)",
              transition: "all 0.15s ease",
            }}
          >
            {/* Inactivity Countdown Progress Bar (Shows how much time remains before run concludes) */}
            <div className="w-full mb-3 px-1">
              <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-1">
                <span>
                  {gameState === "running"
                    ? `⏱️ Inactivity Timer: ${(timeLeftMs / 1000).toFixed(1)}s`
                    : gameState === "ended"
                    ? "⏱️ Run Concluded (Idle)"
                    : "⏱️ Inactivity Timeout: 2.5s"}
                </span>
                <span className={gameState === "running" && timeLeftMs < 1000 ? "text-red-400 font-bold" : "text-slate-400"}>
                  {gameState === "running" ? `${Math.round(timerPercent)}%` : "Ready"}
                </span>
              </div>
              <div className="w-full h-2 rounded-full bg-slate-900 border border-white/10 overflow-hidden">
                <div
                  className="h-full transition-all duration-75"
                  style={{
                    width: `${gameState === "running" ? timerPercent : gameState === "ended" ? 0 : 100}%`,
                    background:
                      timerPercent > 50
                        ? "linear-gradient(90deg, #10b981, #38bdf8)"
                        : timerPercent > 25
                        ? "linear-gradient(90deg, #facc15, #f97316)"
                        : "linear-gradient(90deg, #ef4444, #dc2626)",
                  }}
                ></div>
              </div>
            </div>

            {/* Score Display */}
            <span className="text-[11px] font-bold uppercase tracking-widest text-fuchsia-400 mb-0.5">
              {gameState === "ended" ? "Final Run Score" : "Current Run Score"}
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
            <div className="flex items-center gap-2 mb-5">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-fuchsia-950/80 text-fuchsia-300 border border-fuchsia-500/30">
                Combo: x{combo}
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono text-slate-400 bg-slate-900 border border-white/10">
                Speed: {clicksPerSec} cps
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-500/30">
                Best: {highScore} pts
              </span>
            </div>

            {/* Tactile Interactive Click Button with Floating Particles */}
            <div className="relative flex items-center justify-center my-1">
              {/* Floating particles */}
              {particles.map((p) => (
                <span
                  key={p.id}
                  className="absolute font-extrabold text-xs sm:text-sm text-fuchsia-300 pointer-events-none select-none z-20"
                  style={{
                    left: `calc(50% + ${p.x}px)`,
                    bottom: "75%",
                    animation: "floatParticle 0.65s cubic-bezier(0.16, 1, 0.3, 1) forwards",
                    textShadow: "0 0 10px rgba(217, 70, 239, 0.9)",
                  }}
                >
                  {p.text}
                </span>
              ))}

              <button
                onClick={handleClick}
                className="clicker-btn-mobile w-36 h-36 sm:w-44 sm:h-44 rounded-full font-extrabold text-white flex flex-col items-center justify-center gap-1 shadow-2xl select-none active:scale-95 transition-transform"
                style={{
                  background: "linear-gradient(135deg, #d946ef 0%, #a855f7 50%, #7c3aed 100%)",
                  boxShadow: clickEffect
                    ? "0 0 50px rgba(217, 70, 239, 0.85), 0 0 20px #ffffff"
                    : "0 15px 35px rgba(217, 70, 239, 0.4), inset 0 2px 4px rgba(255, 255, 255, 0.4)",
                  border: "3px solid rgba(255, 255, 255, 0.35)",
                  cursor: "pointer",
                }}
              >
                <span className="text-3xl sm:text-4xl">🍪</span>
                <span className="text-xs sm:text-sm tracking-wider uppercase font-black">
                  {gameState === "ended" ? "PLAY AGAIN" : "CLICK ME!"}
                </span>
                <span className="text-[10px] font-mono opacity-80">+1 pt / click</span>
              </button>
            </div>

            {/* Run Ended Banner (Clear Feedback & Easy Restart) */}
            {gameState === "ended" && (
              <div
                className="mt-4 p-3 rounded-xl w-full max-w-sm flex flex-col items-center gap-2 animate-fadeIn"
                style={{
                  background: "rgba(239, 68, 68, 0.12)",
                  border: "1px solid rgba(239, 68, 68, 0.35)",
                }}
              >
                <div className="text-xs text-red-300 font-bold">
                  🏁 Run Ended (Inactivity Timeout)! Score: <span className="text-white font-extrabold">{score} pts</span>
                </div>
                <div className="text-[11px] text-slate-300">
                  Your final score was saved to the leaderboard.
                </div>
                <button
                  type="button"
                  onClick={handleStartNewRun}
                  className="px-4 py-1.5 rounded-lg text-xs font-bold bg-fuchsia-500 hover:bg-fuchsia-400 text-slate-950 transition-all shadow-md"
                  style={{ cursor: "pointer" }}
                >
                  🚀 Start New Run
                </button>
              </div>
            )}

            <p className="text-[11px] text-slate-400 mt-4 max-w-xs leading-relaxed">
              Click rapidly to build your score! If you stop clicking for 2.5 seconds, your run ends, your score is finalized to the leaderboard, and you can start a fresh run.
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
                      <span className="truncate">
                        {player.username} {isCurrent && "(You)"}
                      </span>
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
      className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-5 md:p-8 overflow-y-auto"
      style={{
        backgroundColor: "rgba(3, 5, 10, 0.88)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        animation: "fadeIn 0.25s ease-out forwards",
      }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl rounded-2xl sm:rounded-3xl overflow-hidden flex flex-col my-auto"
        style={{
          maxHeight: "92vh",
          backgroundColor: "#0a0d14",
          border: `1px solid ${modalTheme.border}`,
          boxShadow: modalTheme.shadow,
          animation: "scaleUp 0.25s ease-out forwards",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div
          className="p-4 sm:p-7 md:p-8 flex items-start justify-between gap-3"
          style={{
            borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
            background: "linear-gradient(to bottom, rgba(14, 19, 30, 0.95), rgba(10, 13, 20, 0.98))",
          }}
        >
          <div className="flex-1 pr-1 min-w-0">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span
                className="px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider"
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
                  className="px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs font-medium truncate max-w-[240px] sm:max-w-none"
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
              className="text-lg sm:text-2xl md:text-3xl font-extrabold text-white tracking-tight leading-tight break-words"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              {project.title}
            </h2>
          </div>

          <button
            onClick={onClose}
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl text-slate-400 hover:text-white transition-all hover:bg-slate-800/80 flex items-center justify-center shrink-0"
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

        {/* Tab Navigation (Touch Scrollable on Mobile) */}
        <div
          className="flex items-center px-4 sm:px-8 pt-2 gap-2 overflow-x-auto no-scrollbar"
          style={{
            borderBottom: "1px solid rgba(255, 255, 255, 0.06)",
            backgroundColor: "#0a0d14",
          }}
        >
          <button
            onClick={() => setActiveTab("playground")}
            className="px-3 sm:px-4 py-2.5 text-xs font-bold uppercase tracking-wider relative transition-all shrink-0"
            style={{
              color: activeTab === "playground" ? modalTheme.tabColor : "#94a3b8",
              borderBottom: activeTab === "playground" ? `2px solid ${modalTheme.tabColor}` : "2px solid transparent",
              cursor: "pointer",
              background: "transparent",
              borderTop: "none",
              borderLeft: "none",
              borderRight: "none",
              minHeight: "42px",
            }}
          >
            Local Live Demo
          </button>
          <button
            onClick={() => setActiveTab("overview")}
            className="px-3 sm:px-4 py-2.5 text-xs font-bold uppercase tracking-wider relative transition-all shrink-0"
            style={{
              color: activeTab === "overview" ? modalTheme.tabColor : "#94a3b8",
              borderBottom: activeTab === "overview" ? `2px solid ${modalTheme.tabColor}` : "2px solid transparent",
              cursor: "pointer",
              background: "transparent",
              borderTop: "none",
              borderLeft: "none",
              borderRight: "none",
              minHeight: "42px",
            }}
          >
            Architecture & Highlights
          </button>
          {project.codeSnippet && (
            <button
              onClick={() => setActiveTab("code")}
              className="px-3 sm:px-4 py-2.5 text-xs font-bold uppercase tracking-wider relative transition-all shrink-0"
              style={{
                color: activeTab === "code" ? modalTheme.tabColor : "#94a3b8",
                borderBottom: activeTab === "code" ? `2px solid ${modalTheme.tabColor}` : "2px solid transparent",
                cursor: "pointer",
                background: "transparent",
                borderTop: "none",
                borderLeft: "none",
                borderRight: "none",
                minHeight: "42px",
              }}
            >
              Source Code
            </button>
          )}
        </div>

        {/* Content Body with Generous Padding */}
        <div className="p-4 sm:p-7 md:p-8 overflow-y-auto space-y-6 flex-1" style={{ color: "#cbd5e1" }}>
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
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2.5">
                  Production Stack & Tooling
                </span>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {(project.techStack || []).map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-lg text-xs font-semibold"
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
            <div className="space-y-6">
              {/* Executive Summary */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                  Executive Overview
                </h4>
                <p className="text-xs sm:text-sm md:text-base leading-relaxed text-slate-200" style={{ lineHeight: "1.75" }}>
                  {project.description}
                </p>
              </div>

              {/* Technical Highlights */}
              {project.highlights && project.highlights.length > 0 && (
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                    Key Architectural Capabilities & Engineering Design
                  </h4>
                  <div className="space-y-2.5">
                    {project.highlights.map((highlight, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 p-3.5 rounded-xl text-xs sm:text-sm leading-relaxed"
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
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
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
                    minHeight: "36px",
                  }}
                >
                  <span>{copied ? "✓ Copied!" : "📋 Copy Code"}</span>
                </button>
              </div>

              <div
                className="rounded-xl overflow-hidden p-4 sm:p-5 font-mono text-xs leading-relaxed overflow-x-auto"
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

        {/* Footer Actions */}
        <div
          className="p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-3"
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
            className="w-full sm:w-auto px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-slate-800 hover:bg-slate-700 active:bg-slate-900 transition-colors shadow-md flex items-center justify-center"
            style={{
              border: "1px solid rgba(255, 255, 255, 0.15)",
              cursor: "pointer",
              minHeight: "42px",
            }}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
