import React from "react";
import { PortfolioProvider, usePortfolio } from "./context/PortfolioContext";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import CMSModal from "./components/CMSModal";
import "./index.css";
import "./styles/styles.css";

function ToastBanner() {
  const { toast } = usePortfolio();
  if (!toast.show) return null;

  return (
    <div
      className={`toast-banner ${
        toast.type === "error"
          ? "border-red-500/40 text-red-300"
          : toast.type === "info"
          ? "border-cyan-500/40 text-cyan-300"
          : "border-emerald-500/40 text-emerald-300"
      }`}
    >
      <span className="text-base">
        {toast.type === "error" ? "⚠️" : toast.type === "info" ? "ℹ️" : "✓"}
      </span>
      <span className="text-xs font-semibold">{toast.message}</span>
    </div>
  );
}

function PortfolioApp() {
  return (
    <div className="min-h-screen bg-[#060913] text-slate-100 flex flex-col font-sans selection:bg-emerald-500/30 selection:text-emerald-300">
      <Navbar />
      <Home />
      <Footer />
      <CMSModal />
      <ToastBanner />
    </div>
  );
}

function App() {
  return (
    <PortfolioProvider>
      <PortfolioApp />
    </PortfolioProvider>
  );
}

export default App;
