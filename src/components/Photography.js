import React, { useState, Suspense, lazy } from "react";
import { usePortfolio } from "../data/ExperienceData";

const Lightbox = lazy(() => import("./Lightbox"));

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
        backgroundColor: "var(--bg-secondary)",
        borderTop: "1px solid rgba(255, 255, 255, 0.06)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.06)"
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
                  background: "rgba(22, 22, 22, 0.9)",
                  border: "1px solid rgba(255, 255, 255, 0.12)",
                  color: "#f3f4f6",
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
                background: "rgba(22, 22, 22, 0.8)",
                border: "1px solid rgba(255, 255, 255, 0.08)"
              }}
            >
              <img
                src={photo.image}
                alt={photo.alt || "Photography item"}
                loading="lazy"
                decoding="async"
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
      {selectedPhotoIndex !== null && (
        <Suspense fallback={null}>
          <Lightbox
            isOpen={selectedPhotoIndex !== null}
            photo={photos[selectedPhotoIndex]}
            currentIndex={selectedPhotoIndex}
            totalCount={photos.length}
            onClose={closeLightbox}
            onPrev={handlePrev}
            onNext={handleNext}
          />
        </Suspense>
      )}
    </section>
  );
}
