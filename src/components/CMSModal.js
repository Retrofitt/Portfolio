import React, { useState } from "react";
import { usePortfolio } from "../data/ExperienceData";

export default function CMSModal() {
  const {
    data,
    isAuthenticated,
    isCMSOpen,
    setIsCMSOpen,
    login,
    logout,
    updateProfile,
    addPhoto,
    deletePhoto,
    addProject,
    deleteProject,
    addExperience,
    deleteExperience,
    resetDefaults,
    exportDataJSON,
    importDataJSON,
  } = usePortfolio();

  const [activeTab, setActiveTab] = useState("profile");

  // Login form state
  const [usernameInput, setUsernameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  // Profile edit local state
  const [profileForm, setProfileForm] = useState(data.profile);

  // New photo local state
  const [newPhoto, setNewPhoto] = useState({
    title: "",
    category: "California",
    alt: "",
    image: "",
  });

  // New project local state
  const [newProject, setNewProject] = useState({
    title: "",
    category: "Full-Stack",
    description: "",
    image: "",
    techStack: "React, Node.js, Tailwind CSS",
    githubUrl: "",
    liveUrl: "",
    metrics: "High performance & clean architecture",
  });

  // New experience state
  const [newExp, setNewExp] = useState({
    role: "",
    company: "",
    period: "2024 — Present",
    location: "California",
    description: "",
    highlights: "Engineered high-scale web systems\nOptimized frontend responsiveness",
    technologies: "React, TypeScript, Tailwind, Node.js",
  });

  // Import JSON text state
  const [importJsonText, setImportJsonText] = useState("");

  if (!isCMSOpen) return null;

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    login(usernameInput, passwordInput);
  };

  const handleProfileSave = (e) => {
    e.preventDefault();
    updateProfile(profileForm);
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (uploadEvent) => {
        setNewPhoto((prev) => ({
          ...prev,
          image: uploadEvent.target.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddPhotoSubmit = (e) => {
    e.preventDefault();
    if (!newPhoto.image) {
      alert("Please select or paste an image first!");
      return;
    }
    addPhoto(newPhoto);
    setNewPhoto({ title: "", category: "California", alt: "", image: "" });
  };

  const handleAddProjectSubmit = (e) => {
    e.preventDefault();
    if (!newProject.title) return;
    addProject(newProject);
    setNewProject({
      title: "",
      category: "Full-Stack",
      description: "",
      image: "",
      techStack: "React, Node.js, Tailwind CSS",
      githubUrl: "",
      liveUrl: "",
      metrics: "High performance & clean architecture",
    });
  };

  const handleAddExpSubmit = (e) => {
    e.preventDefault();
    if (!newExp.role || !newExp.company) return;
    addExperience(newExp);
    setNewExp({
      role: "",
      company: "",
      period: "2024 — Present",
      location: "California",
      description: "",
      highlights: "Engineered high-scale web systems\nOptimized frontend responsiveness",
      technologies: "React, TypeScript, Tailwind, Node.js",
    });
  };

  const handleImportSubmit = (e) => {
    e.preventDefault();
    if (importJsonText) {
      importDataJSON(importJsonText);
      setImportJsonText("");
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto modal-overlay"
      style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0 }}
    >
      {/* Background click */}
      <div className="fixed inset-0" onClick={() => setIsCMSOpen(false)}></div>

      <div
        className="relative z-10 w-full max-w-5xl rounded-2xl flex flex-col modal-content my-auto"
        style={{
          background: "rgba(9, 11, 16, 0.95)",
          border: "1px solid rgba(56, 189, 248, 0.2)",
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.9)",
          maxHeight: "92vh"
        }}
      >
        {/* Modal Top Header */}
        <div
          className="flex items-center justify-between px-6 py-4 rounded-t-2xl"
          style={{
            background: "rgba(6, 8, 12, 0.9)",
            borderBottom: "1px solid rgba(255, 255, 255, 0.08)"
          }}
        >
          <div className="flex items-center gap-3">
            <div
              style={{
                width: "2rem",
                height: "2rem",
                borderRadius: "0.5rem",
                background: "rgba(56, 189, 248, 0.15)",
                border: "1px solid rgba(56, 189, 248, 0.3)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#38bdf8",
                fontWeight: "bold",
                fontSize: "0.875rem"
              }}
            >
              CMS
            </div>
            <div>
              <h3 className="text-base font-bold text-white leading-tight">
                Portfolio CMS Studio
              </h3>
              <p className="text-xs text-slate-400">
                {isAuthenticated
                  ? "Admin Session Active"
                  : "Authentication Required"}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {isAuthenticated && (
              <button
                onClick={logout}
                className="btn-danger text-xs px-3 py-1"
              >
                Sign Out
              </button>
            )}
            <button
              onClick={() => setIsCMSOpen(false)}
              className="flex items-center justify-center rounded-lg"
              style={{
                width: "2rem",
                height: "2rem",
                background: "rgba(15, 20, 30, 0.8)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                color: "#cbd5e1",
                cursor: "pointer"
              }}
              aria-label="Close CMS"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Auth Gate if not authenticated */}
        {!isAuthenticated ? (
          <div className="p-8 sm:p-12 flex flex-col items-center justify-center text-center max-w-md mx-auto">
            <div
              style={{
                width: "3.5rem",
                height: "3.5rem",
                borderRadius: "1rem",
                background: "rgba(56, 189, 248, 0.1)",
                border: "1px solid rgba(56, 189, 248, 0.3)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#38bdf8",
                marginBottom: "1.5rem"
              }}
            >
              <svg style={{ width: "28px", height: "28px" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zM10 7a2 2 0 114 0v4H10V7z" />
              </svg>
            </div>
            <h4 className="text-xl font-bold text-white mb-2">CMS Admin Login</h4>
            <p className="text-xs text-slate-400 mb-6 leading-relaxed">
              Enter your credentials to access the portfolio content editor.
            </p>

            <form onSubmit={handleLoginSubmit} className="w-full space-y-4 text-left">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Username
                </label>
                <input
                  type="text"
                  required
                  placeholder="Username"
                  value={usernameInput}
                  onChange={(e) => setUsernameInput(e.target.value)}
                  className="glass-input w-full text-sm font-mono"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Password
                </label>
                <input
                  type="password"
                  required
                  placeholder="Password"
                  value={passwordInput}
                  onChange={(e) => setPasswordInput(e.target.value)}
                  className="glass-input w-full text-sm font-mono"
                />
              </div>

              <button type="submit" className="btn-primary w-full text-sm font-bold mt-2" style={{ width: "100%" }}>
                Sign In
              </button>
            </form>
          </div>
        ) : (
          /* Authenticated CMS Dashboard */
          <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
            {/* Sidebar Navigation */}
            <div
              className="w-full md:w-56 p-3 flex md:flex-col gap-1 overflow-x-auto shrink-0"
              style={{
                background: "rgba(6, 8, 12, 0.8)",
                borderRight: "1px solid rgba(255, 255, 255, 0.08)"
              }}
            >
              {[
                { id: "profile", label: "Profile & Text", icon: "👤" },
                { id: "photos", label: "Photo Studio", icon: "📷", count: data.photos.length },
                { id: "projects", label: "Projects", icon: "🚀", count: data.projects.length },
                { id: "experience", label: "Experience", icon: "💼", count: data.experience.length },
                { id: "backup", label: "Data Backup", icon: "💾" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className="flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold shrink-0"
                  style={{
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                    background: activeTab === tab.id ? "#38bdf8" : "transparent",
                    color: activeTab === tab.id ? "#050608" : "#cbd5e1",
                    border: "none"
                  }}
                >
                  <span className="flex items-center gap-2">
                    <span>{tab.icon}</span>
                    <span>{tab.label}</span>
                  </span>
                  {tab.count !== undefined && (
                    <span
                      className="text-xs px-1.5 py-0.5 rounded-full"
                      style={{
                        fontSize: "10px",
                        background: activeTab === tab.id ? "rgba(0, 0, 0, 0.2)" : "rgba(255, 255, 255, 0.1)",
                        color: activeTab === tab.id ? "#000" : "#94a3b8"
                      }}
                    >
                      {tab.count}
                    </span>
                  )}
                </button>
              ))}
            </div>

            {/* Main Content Workspace */}
            <div className="flex-1 p-6 overflow-y-auto space-y-6">
              {/* TAB 1: PROFILE & TEXT */}
              {activeTab === "profile" && (
                <form onSubmit={handleProfileSave} className="space-y-6">
                  <div>
                    <h4 className="text-base font-bold text-white mb-1">
                      Hero &amp; Profile Information
                    </h4>
                    <p className="text-xs text-slate-400">
                      Update your headline, role title, and availability badge across the site.
                    </p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        value={profileForm.name || ""}
                        onChange={(e) =>
                          setProfileForm({ ...profileForm, name: e.target.value })
                        }
                        className="glass-input w-full text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Role / Title
                      </label>
                      <input
                        type="text"
                        value={profileForm.role || ""}
                        onChange={(e) =>
                          setProfileForm({ ...profileForm, role: e.target.value })
                        }
                        className="glass-input w-full text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Status Pill Badge
                      </label>
                      <input
                        type="text"
                        value={profileForm.statusBadge || ""}
                        onChange={(e) =>
                          setProfileForm({ ...profileForm, statusBadge: e.target.value })
                        }
                        className="glass-input w-full text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={profileForm.email || ""}
                        onChange={(e) =>
                          setProfileForm({ ...profileForm, email: e.target.value })
                        }
                        className="glass-input w-full text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Hero Bio Lead
                    </label>
                    <textarea
                      rows="3"
                      value={profileForm.bioLead || ""}
                      onChange={(e) =>
                        setProfileForm({ ...profileForm, bioLead: e.target.value })
                      }
                      className="glass-input w-full text-sm"
                    />
                  </div>

                  <div className="pt-4" style={{ borderTop: "1px solid rgba(255, 255, 255, 0.08)" }}>
                    <h5 className="text-sm font-bold text-white mb-3">About Page Stories</h5>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1">
                          Story Paragraph 1 (Engineering Philosophy)
                        </label>
                        <textarea
                          rows="3"
                          value={profileForm.aboutStory1 || ""}
                          onChange={(e) =>
                            setProfileForm({ ...profileForm, aboutStory1: e.target.value })
                          }
                          className="glass-input w-full text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1">
                          Story Paragraph 2 (Architecture &amp; Artistry)
                        </label>
                        <textarea
                          rows="3"
                          value={profileForm.aboutStory2 || ""}
                          onChange={(e) =>
                            setProfileForm({ ...profileForm, aboutStory2: e.target.value })
                          }
                          className="glass-input w-full text-sm"
                        />
                      </div>
                    </div>
                  </div>

                  <button type="submit" className="btn-primary" style={{ padding: "0.75rem 1.5rem" }}>
                    Save Profile Changes
                  </button>
                </form>
              )}

              {/* TAB 2: PHOTO STUDIO */}
              {activeTab === "photos" && (
                <div className="space-y-6">
                  {/* Upload Card */}
                  <div
                    className="p-5 rounded-2xl"
                    style={{
                      background: "rgba(11, 14, 21, 0.8)",
                      border: "1px solid rgba(56, 189, 248, 0.2)"
                    }}
                  >
                    <h4 className="text-sm font-bold text-white mb-1">Upload New Photo</h4>
                    <p className="text-xs text-slate-400 mb-4">
                      Upload from your device or paste an image URL to add to your photography gallery.
                    </p>

                    <form onSubmit={handleAddPhotoSubmit} className="space-y-4">
                      <div className="grid sm:grid-cols-3 gap-4">
                        <div>
                          <label className="block text-xs font-semibold text-slate-300 mb-1">
                            Photo Title
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="e.g. Pacific Coast Twilight"
                            value={newPhoto.title}
                            onChange={(e) =>
                              setNewPhoto({ ...newPhoto, title: e.target.value })
                            }
                            className="glass-input w-full text-xs"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-slate-300 mb-1">
                            Category
                          </label>
                          <input
                            type="text"
                            placeholder="e.g. Cinematic, Urban, California"
                            value={newPhoto.category}
                            onChange={(e) =>
                              setNewPhoto({ ...newPhoto, category: e.target.value })
                            }
                            className="glass-input w-full text-xs"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-slate-300 mb-1">
                            Image File (Upload)
                          </label>
                          <input
                            type="file"
                            accept="image/*"
                            onChange={handlePhotoUpload}
                            className="block w-full text-xs text-slate-400"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1">
                          Or Direct Image URL
                        </label>
                        <input
                          type="url"
                          placeholder="https://images.unsplash.com/..."
                          value={newPhoto.image}
                          onChange={(e) =>
                            setNewPhoto({ ...newPhoto, image: e.target.value })
                          }
                          className="glass-input w-full text-xs font-mono"
                        />
                      </div>

                      {newPhoto.image && (
                        <div
                          className="p-2 rounded-xl flex items-center gap-4"
                          style={{
                            background: "rgba(6, 8, 14, 0.9)",
                            border: "1px solid rgba(255, 255, 255, 0.1)"
                          }}
                        >
                          <img
                            src={newPhoto.image}
                            alt="Preview"
                            style={{ width: "4rem", height: "4rem", objectFit: "cover", borderRadius: "0.5rem" }}
                          />
                          <span className="text-xs text-cyan-400 font-medium">
                            ✓ Image ready for publishing
                          </span>
                        </div>
                      )}

                      <button type="submit" className="btn-primary text-xs" style={{ padding: "0.6rem 1.2rem" }}>
                        Publish Photo to Gallery
                      </button>
                    </form>
                  </div>

                  {/* Photo List & Delete */}
                  <div>
                    <h5 className="text-sm font-bold text-white mb-3">
                      Current Gallery Photos ({data.photos.length})
                    </h5>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                      {data.photos.map((photo) => (
                        <div
                          key={photo.id}
                          className="glass-card p-2 rounded-xl flex flex-col justify-between"
                          style={{ background: "rgba(11, 14, 21, 0.7)" }}
                        >
                          <div
                            className="aspect-square rounded-lg overflow-hidden mb-2"
                            style={{ background: "#050608" }}
                          >
                            <img
                              src={photo.image}
                              alt={photo.title}
                              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                            />
                          </div>
                          <div>
                            <p className="text-xs font-bold text-white truncate">{photo.title}</p>
                            <span className="text-xs text-cyan-400">{photo.category}</span>
                          </div>
                          <button
                            onClick={() => {
                              if (window.confirm(`Delete photo "${photo.title}"?`)) {
                                deletePhoto(photo.id);
                              }
                            }}
                            className="btn-danger text-xs mt-2"
                            style={{ width: "100%", padding: "0.35rem" }}
                          >
                            Delete
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 3: PROJECTS */}
              {activeTab === "projects" && (
                <div className="space-y-6">
                  <div
                    className="p-5 rounded-2xl"
                    style={{
                      background: "rgba(11, 14, 21, 0.8)",
                      border: "1px solid rgba(56, 189, 248, 0.2)"
                    }}
                  >
                    <h4 className="text-sm font-bold text-white mb-1">Add New Project</h4>
                    <p className="text-xs text-slate-400 mb-4">
                      Publish a new production engineering project to your showcase.
                    </p>

                    <form onSubmit={handleAddProjectSubmit} className="space-y-4">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold text-slate-300 mb-1">
                            Project Title *
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="e.g. AI-Powered Analytics Dashboard"
                            value={newProject.title}
                            onChange={(e) =>
                              setNewProject({ ...newProject, title: e.target.value })
                            }
                            className="glass-input w-full text-xs"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-slate-300 mb-1">
                            Category
                          </label>
                          <select
                            value={newProject.category}
                            onChange={(e) =>
                              setNewProject({ ...newProject, category: e.target.value })
                            }
                            className="glass-input w-full text-xs"
                          >
                            <option value="Full-Stack">Full-Stack</option>
                            <option value="Frontend">Frontend</option>
                            <option value="Web App">Web App</option>
                            <option value="Mobile / API">Mobile / API</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-slate-300 mb-1">
                            GitHub Repository URL
                          </label>
                          <input
                            type="url"
                            placeholder="https://github.com/Retrofitt/..."
                            value={newProject.githubUrl}
                            onChange={(e) =>
                              setNewProject({ ...newProject, githubUrl: e.target.value })
                            }
                            className="glass-input w-full text-xs"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-slate-300 mb-1">
                            Live Demo URL
                          </label>
                          <input
                            type="url"
                            placeholder="https://..."
                            value={newProject.liveUrl}
                            onChange={(e) =>
                              setNewProject({ ...newProject, liveUrl: e.target.value })
                            }
                            className="glass-input w-full text-xs"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1">
                          Tech Stack (comma separated)
                        </label>
                        <input
                          type="text"
                          placeholder="React, TypeScript, Node.js, Tailwind"
                          value={newProject.techStack}
                          onChange={(e) =>
                            setNewProject({ ...newProject, techStack: e.target.value })
                          }
                          className="glass-input w-full text-xs font-mono"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1">
                          Project Description
                        </label>
                        <textarea
                          rows="2"
                          placeholder="Key problem solved, architectural decisions, and capabilities..."
                          value={newProject.description}
                          onChange={(e) =>
                            setNewProject({ ...newProject, description: e.target.value })
                          }
                          className="glass-input w-full text-xs"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1">
                          Image URL or Cover
                        </label>
                        <input
                          type="text"
                          placeholder="https://..."
                          value={newProject.image}
                          onChange={(e) =>
                            setNewProject({ ...newProject, image: e.target.value })
                          }
                          className="glass-input w-full text-xs font-mono"
                        />
                      </div>

                      <button type="submit" className="btn-primary text-xs" style={{ padding: "0.6rem 1.2rem" }}>
                        Add Project
                      </button>
                    </form>
                  </div>

                  <div>
                    <h5 className="text-sm font-bold text-white mb-3">
                      Current Projects ({data.projects.length})
                    </h5>
                    <div className="space-y-3">
                      {data.projects.map((proj) => (
                        <div
                          key={proj.id}
                          className="glass-card p-4 rounded-xl flex items-center justify-between gap-4"
                          style={{ background: "rgba(11, 14, 21, 0.7)" }}
                        >
                          <div className="flex items-center gap-3">
                            {proj.image && (
                              <img
                                src={proj.image}
                                alt={proj.title}
                                style={{ width: "3rem", height: "3rem", borderRadius: "0.5rem", objectFit: "cover" }}
                              />
                            )}
                            <div>
                              <h6 className="text-sm font-bold text-white">{proj.title}</h6>
                              <span className="text-xs text-cyan-400">{proj.category}</span>
                            </div>
                          </div>
                          <button
                            onClick={() => {
                              if (window.confirm(`Delete project "${proj.title}"?`)) {
                                deleteProject(proj.id);
                              }
                            }}
                            className="btn-danger text-xs px-3 py-1"
                          >
                            Delete
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 4: EXPERIENCE */}
              {activeTab === "experience" && (
                <div className="space-y-6">
                  <div
                    className="p-5 rounded-2xl"
                    style={{
                      background: "rgba(11, 14, 21, 0.8)",
                      border: "1px solid rgba(56, 189, 248, 0.2)"
                    }}
                  >
                    <h4 className="text-sm font-bold text-white mb-1">Add Work Experience</h4>
                    <form onSubmit={handleAddExpSubmit} className="space-y-4 mt-4">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold text-slate-300 mb-1">
                            Role / Job Title *
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="Senior Web Developer"
                            value={newExp.role}
                            onChange={(e) => setNewExp({ ...newExp, role: e.target.value })}
                            className="glass-input w-full text-xs"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-slate-300 mb-1">
                            Company Name *
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="Tech Solutions Inc."
                            value={newExp.company}
                            onChange={(e) => setNewExp({ ...newExp, company: e.target.value })}
                            className="glass-input w-full text-xs"
                          />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold text-slate-300 mb-1">
                            Period (Dates)
                          </label>
                          <input
                            type="text"
                            placeholder="2022 — Present"
                            value={newExp.period}
                            onChange={(e) => setNewExp({ ...newExp, period: e.target.value })}
                            className="glass-input w-full text-xs"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-slate-300 mb-1">
                            Location
                          </label>
                          <input
                            type="text"
                            placeholder="California / Remote"
                            value={newExp.location}
                            onChange={(e) => setNewExp({ ...newExp, location: e.target.value })}
                            className="glass-input w-full text-xs"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1">
                          Bullet Highlights (one per line)
                        </label>
                        <textarea
                          rows="3"
                          value={newExp.highlights}
                          onChange={(e) => setNewExp({ ...newExp, highlights: e.target.value })}
                          className="glass-input w-full text-xs font-mono"
                        />
                      </div>

                      <button type="submit" className="btn-primary text-xs" style={{ padding: "0.6rem 1.2rem" }}>
                        Add Experience
                      </button>
                    </form>
                  </div>

                  <div>
                    <h5 className="text-sm font-bold text-white mb-3">
                      Current Roles ({data.experience.length})
                    </h5>
                    <div className="space-y-3">
                      {data.experience.map((exp) => (
                        <div
                          key={exp.id}
                          className="glass-card p-4 rounded-xl flex items-center justify-between gap-4"
                          style={{ background: "rgba(11, 14, 21, 0.7)" }}
                        >
                          <div>
                            <h6 className="text-sm font-bold text-white">{exp.role}</h6>
                            <p className="text-xs text-cyan-400">
                              {exp.company} • {exp.period}
                            </p>
                          </div>
                          <button
                            onClick={() => {
                              if (window.confirm(`Delete experience "${exp.role}"?`)) {
                                deleteExperience(exp.id);
                              }
                            }}
                            className="btn-danger text-xs px-3 py-1"
                          >
                            Delete
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 5: BACKUP & PRESETS */}
              {activeTab === "backup" && (
                <div className="space-y-6">
                  <div
                    className="p-6 rounded-2xl space-y-4"
                    style={{
                      background: "rgba(11, 14, 21, 0.7)",
                      border: "1px solid rgba(255, 255, 255, 0.08)"
                    }}
                  >
                    <h4 className="text-base font-bold text-white">Export &amp; Portability</h4>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Download a complete JSON snapshot of your current portfolio, photos, and project data for instant backup or migration.
                    </p>
                    <button
                      onClick={exportDataJSON}
                      className="btn-primary text-xs flex items-center gap-2"
                      style={{ padding: "0.65rem 1.2rem" }}
                    >
                      <span>📥 Download Full JSON Backup</span>
                    </button>
                  </div>

                  <div
                    className="p-6 rounded-2xl space-y-4"
                    style={{
                      background: "rgba(11, 14, 21, 0.7)",
                      border: "1px solid rgba(255, 255, 255, 0.08)"
                    }}
                  >
                    <h4 className="text-base font-bold text-white">Import Backup JSON</h4>
                    <p className="text-xs text-slate-300">
                      Paste a previously exported JSON backup to instantly restore all portfolio state.
                    </p>
                    <textarea
                      rows="4"
                      placeholder="Paste valid portfolio JSON snapshot..."
                      value={importJsonText}
                      onChange={(e) => setImportJsonText(e.target.value)}
                      className="glass-input w-full text-xs font-mono"
                    />
                    <button
                      onClick={handleImportSubmit}
                      className="btn-secondary text-xs"
                      style={{ padding: "0.5rem 1rem" }}
                    >
                      Import &amp; Overwrite State
                    </button>
                  </div>

                  <div
                    className="p-6 rounded-2xl space-y-4"
                    style={{
                      background: "rgba(20, 10, 15, 0.7)",
                      border: "1px solid rgba(239, 68, 68, 0.25)"
                    }}
                  >
                    <h4 className="text-base font-bold text-red-400">Restore Factory Defaults</h4>
                    <p className="text-xs text-slate-400">
                      Reset all photos, projects, bio texts, and experience back to the curated initial California portfolio configuration.
                    </p>
                    <button
                      onClick={() => {
                        if (window.confirm("Are you sure you want to reset all portfolio data to factory defaults?")) {
                          resetDefaults();
                        }
                      }}
                      className="btn-danger text-xs"
                      style={{ padding: "0.5rem 1rem" }}
                    >
                      Reset Everything to Defaults
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
