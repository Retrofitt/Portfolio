import React, { useState } from "react";
import { usePortfolio } from "../context/PortfolioContext";
import Lightbox from "./Lightbox";

export default function Photography() {
  const { data, isAuthenticated, setIsCMSOpen } = usePortfolio();
  const { photos } = data;
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", ...Array.from(new Set(photos.map((p) => p.category || "General")))];

  const filteredPhotos = activeCategory === "All"
    ? photos
    : photos.filter((p) => (p.category || "General") === activeCategory);

  const openLightbox = (index) => {
    setSelectedPhotoIndex(index);
  };

  const closeLightbox = () => {
    setSelectedPhotoIndex(null);
  };

  const handlePrev = () => {
    if (selectedPhotoIndex === null) return;
    setSelectedPhotoIndex((prev) => (prev > 0 ? prev - 1 : filteredPhotos.length - 1));
  };

  const handleNext = () => {
    if (selectedPhotoIndex === null) return;
    setSelectedPhotoIndex((prev) => (prev < filteredPhotos.length - 1 ? prev + 1 : 0));
  };

  return (
    <section
      id="photography"
      className="py-24 relative overflow-hidden"
      style={{
        backgroundColor: "#07090e",
        borderTop: "1px solid rgba(255, 255, 255, 0.05)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.05)"
      }}
    >
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="section-tag">Creative Direction</span>
          <h2 className="section-heading mt-2">Visual Photography</h2>
          <p className="section-subheading mt-3">
            Capturing composition, atmospheric contrast, and California landscapes through the camera lens.
          </p>
        </div>

        {/* Filter Tabs & CMS upload button */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="px-4 py-2 rounded-full text-xs font-semibold tracking-wide"
              style={{
                cursor: "pointer",
                transition: "all 0.2s ease",
                backgroundColor: activeCategory === cat ? "#38bdf8" : "rgba(13, 17, 26, 0.8)",
                color: activeCategory === cat ? "#050608" : "#94a3b8",
                border: activeCategory === cat ? "1px solid #38bdf8" : "1px solid rgba(255, 255, 255, 0.08)",
                boxShadow: activeCategory === cat ? "0 0 15px rgba(56, 189, 248, 0.3)" : "none"
              }}
            >
              {cat}
            </button>
          ))}
          {isAuthenticated && (
            <button
              onClick={() => setIsCMSOpen(true)}
              className="px-3.5 py-2 rounded-full text-xs font-semibold flex items-center gap-1.5"
              style={{
                background: "rgba(56, 189, 248, 0.1)",
                border: "1px solid rgba(56, 189, 248, 0.3)",
                color: "#38bdf8",
                cursor: "pointer"
              }}
            >
              <span>+ Upload Photos</span>
            </button>
          )}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 max-w-7xl mx-auto">
          {filteredPhotos.map((photo, index) => (
            <div
              key={photo.id || index}
              onClick={() => openLightbox(index)}
              className="relative aspect-square rounded-2xl overflow-hidden glass-card"
              style={{
                cursor: "pointer",
                padding: "0",
                background: "rgba(11, 14, 21, 0.8)",
                border: "1px solid rgba(255, 255, 255, 0.08)"
              }}
            >
              <img
                src={photo.image}
                alt={photo.alt || photo.title}
                loading="lazy"
                className="w-full h-full"
                style={{
                  objectFit: "cover",
                  display: "block",
                  transition: "transform 0.5s ease"
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.08)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
              />

              {/* Gradient & Hover Caption */}
              <div
                className="absolute inset-0 flex flex-col justify-end p-4"
                style={{
                  background: "linear-gradient(to top, rgba(5, 7, 12, 0.9) 0%, rgba(5, 7, 12, 0.1) 60%, transparent 100%)",
                  pointerEvents: "none"
                }}
              >
                <span
                  className="text-xs font-bold uppercase tracking-wider mb-1"
                  style={{ color: "#38bdf8", fontSize: "10px" }}
                >
                  {photo.category || "Photography"}
                </span>
                <p className="text-sm font-bold text-white leading-tight">
                  {photo.title || "Capture View"}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      <Lightbox
        isOpen={selectedPhotoIndex !== null}
        photo={selectedPhotoIndex !== null ? filteredPhotos[selectedPhotoIndex] : null}
        currentIndex={selectedPhotoIndex || 0}
        totalCount={filteredPhotos.length}
        onClose={closeLightbox}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </section>
  );
}
