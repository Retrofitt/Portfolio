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
    // Find index in filtered list
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
    <section id="photography" className="py-24 bg-[#080d1a] relative overflow-hidden border-t border-white/5">
      {/* Background glow */}
      <div className="glow-orb w-[400px] h-[400px] bg-purple-500/5 left-1/3 top-1/2"></div>

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
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all ${
                activeCategory === cat
                  ? "bg-emerald-500 text-slate-950 font-bold shadow-lg shadow-emerald-500/25"
                  : "bg-slate-900/90 text-slate-400 hover:text-white border border-white/10 hover:border-white/20"
              }`}
            >
              {cat}
            </button>
          ))}
          {isAuthenticated && (
            <button
              onClick={() => setIsCMSOpen(true)}
              className="px-3.5 py-2 rounded-full text-xs font-semibold bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/20 flex items-center gap-1.5"
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
              className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer bg-slate-950 border border-white/10 hover:border-emerald-500/50 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-emerald-500/10"
            >
              <img
                src={photo.image}
                alt={photo.alt || photo.title}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />

              {/* Gradient & Hover Information */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-4">
                <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider mb-1">
                  {photo.category || "Photography"}
                </span>
                <p className="text-sm font-bold text-white leading-tight">
                  {photo.title || "Capture View"}
                </p>
                <div className="mt-2 flex items-center gap-1 text-[11px] text-slate-300 font-medium">
                  <svg className="w-3.5 h-3.5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                  </svg>
                  <span>Click to view</span>
                </div>
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
