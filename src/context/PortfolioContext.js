import React, { createContext, useContext, useState, useEffect } from "react";
import { initialPortfolioData } from "../data/portfolioDefaults";

const STORAGE_KEY = "retro_portfolio_data_v7";
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
      showToast("Welcome back, Rafael! CMS Studio unlocked.", "success");
      return true;
    }
    showToast("Invalid credentials. Try username: retro1 / password: 1234", "error");
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
      image: photoData.image, // Base64 data URL or external URL
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
      role: expData.role || "Senior Software Engineer",
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
