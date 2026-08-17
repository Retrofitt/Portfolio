import React, { useEffect } from "react";

export default function Lightbox({ isOpen, photo, onClose, onPrev, onNext, currentIndex, totalCount }) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose, onPrev, onNext]);

  if (!isOpen || !photo) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 modal-overlay"
      style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0 }}
    >
      {/* Background click to close */}
      <div className="absolute inset-0" onClick={onClose}></div>

      {/* Top Bar Controls */}
      <div
        className="absolute z-20 flex items-center justify-between"
        style={{ top: "1rem", left: "1rem", right: "1rem", pointerEvents: "none" }}
      >
        <div
          className="px-3.5 py-1.5 rounded-full text-xs font-semibold"
          style={{
            pointerEvents: "auto",
            background: "rgba(9, 12, 18, 0.9)",
            border: "1px solid rgba(255, 255, 255, 0.15)",
            color: "#cbd5e1",
            backdropFilter: "blur(12px)"
          }}
        >
          <span>{currentIndex + 1}</span> / <span>{totalCount}</span>
        </div>

        <button
          onClick={onClose}
          className="flex items-center justify-center rounded-full"
          style={{
            pointerEvents: "auto",
            width: "2.5rem",
            height: "2.5rem",
            background: "rgba(9, 12, 18, 0.9)",
            border: "1px solid rgba(255, 255, 255, 0.15)",
            color: "#ffffff",
            cursor: "pointer",
            backdropFilter: "blur(12px)"
          }}
          aria-label="Close Lightbox"
        >
          <svg style={{ width: "20px", height: "20px" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Prev / Next Buttons */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="absolute z-20 flex items-center justify-center rounded-full"
        style={{
          left: "1rem",
          top: "50%",
          transform: "translateY(-50%)",
          width: "3rem",
          height: "3rem",
          background: "rgba(9, 12, 18, 0.85)",
          border: "1px solid rgba(255, 255, 255, 0.15)",
          color: "#ffffff",
          cursor: "pointer",
          backdropFilter: "blur(12px)"
        }}
        aria-label="Previous Photo"
      >
        <svg style={{ width: "24px", height: "24px" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute z-20 flex items-center justify-center rounded-full"
        style={{
          right: "1rem",
          top: "50%",
          transform: "translateY(-50%)",
          width: "3rem",
          height: "3rem",
          background: "rgba(9, 12, 18, 0.85)",
          border: "1px solid rgba(255, 255, 255, 0.15)",
          color: "#ffffff",
          cursor: "pointer",
          backdropFilter: "blur(12px)"
        }}
        aria-label="Next Photo"
      >
        <svg style={{ width: "24px", height: "24px" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Lightbox Content Container */}
      <div
        className="relative z-10 flex flex-col items-center modal-content"
        style={{ maxWidth: "80rem", maxHeight: "85vh" }}
      >
        <img
          src={photo.image}
          alt={photo.alt || photo.title}
          style={{
            maxHeight: "75vh",
            width: "auto",
            objectFit: "contain",
            borderRadius: "0.75rem",
            border: "1px solid rgba(255, 255, 255, 0.15)",
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.9)"
          }}
        />

        {/* Caption & Category */}
        <div className="mt-4 text-center">
          <h4 className="text-base font-bold text-white mb-0.5">
            {photo.title || "Visual Artistry"}
          </h4>
          {photo.category && (
            <span className="text-xs text-cyan-400 font-medium">
              {photo.category}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
