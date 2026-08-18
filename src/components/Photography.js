import React, { useState } from "react";
import { usePortfolio } from "../data/ExperienceData";
import Lightbox from "./Lightbox";

export default function Photography() {
  const { data, isAuthenticated, setIsCMSOpen } = usePortfolio();
  const { photos = [] } = data;
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(null);

  const openLightbox = (index) => {
    setSelectedPhotoIndex(index);
  };

  const closeLightbox = () => {
    setSelectedPhotoIndex(null);
  };

  const handlePrev = () => {
    if (selectedPhotoIndex === null) return;
    setSelectedPhotoIndex((prev) => (prev > 0 ? prev - 1 : photos.length - 1));
  };

  const handleNext = () => {
    if (selectedPhotoIndex === null) return;
    setSelectedPhotoIndex((prev) => (prev < photos.length - 1 ? prev + 1 : 0));
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

          {isAuthenticated && (
            <div className="mt-6 flex justify-center">
              <button
                onClick={() => setIsCMSOpen(true)}
                className="px-4 py-2 rounded-full text-xs font-semibold flex items-center gap-1.5"
                style={{
                  background: "rgba(56, 189, 248, 0.1)",
                  border: "1px solid rgba(56, 189, 248, 0.3)",
                  color: "#38bdf8",
                  cursor: "pointer"
                }}
              >
                <span>+ Upload Photos</span>
              </button>
            </div>
          )}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 max-w-7xl mx-auto">
          {photos.map((photo, index) => (
            <div
              key={photo.id || index}
              onClick={() => openLightbox(index)}
              className="relative aspect-square rounded-2xl overflow-hidden glass-card group"
              style={{
                cursor: "pointer",
                padding: "0",
                background: "rgba(11, 14, 21, 0.8)",
                border: "1px solid rgba(255, 255, 255, 0.08)"
              }}
            >
              <img
                src={photo.image}
                alt={photo.alt || "Photography item"}
                loading="lazy"
                className="w-full h-full"
                style={{
                  objectFit: "cover",
                  display: "block",
                  transition: "transform 0.5s ease"
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.06)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      <Lightbox
        isOpen={selectedPhotoIndex !== null}
        photo={selectedPhotoIndex !== null ? photos[selectedPhotoIndex] : null}
        currentIndex={selectedPhotoIndex || 0}
        totalCount={photos.length}
        onClose={closeLightbox}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </section>
  );
}
