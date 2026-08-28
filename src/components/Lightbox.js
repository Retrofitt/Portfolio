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
        className="absolute z-30 flex items-center justify-between"
        style={{ top: "1.5rem", left: "1.5rem", right: "1.5rem", pointerEvents: "none" }}
      >
        <div
          className="px-4 py-1.5 rounded-full text-xs font-semibold"
          style={{
            pointerEvents: "auto",
            background: "rgba(20, 20, 20, 0.9)",
            border: "1px solid rgba(255, 255, 255, 0.15)",
            color: "#f3f4f6",
            backdropFilter: "blur(16px)",
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.5)"
          }}
        >
          <span>{currentIndex + 1}</span> / <span>{totalCount}</span>
        </div>

        <button
          onClick={onClose}
          className="flex items-center justify-center rounded-full transition-all"
          style={{
            pointerEvents: "auto",
            width: "2.75rem",
            height: "2.75rem",
            background: "rgba(20, 20, 20, 0.9)",
            border: "1px solid rgba(255, 255, 255, 0.15)",
            color: "#ffffff",
            cursor: "pointer",
            backdropFilter: "blur(16px)",
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.5)"
          }}
          aria-label="Close Lightbox"
        >
          <svg style={{ width: "20px", height: "20px", display: "block" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Prev / Next Buttons (Strict Absolute Vertical Centering) */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="flex items-center justify-center rounded-full transition-all"
        style={{
          position: "absolute",
          top: "50%",
          left: "1rem",
          transform: "translateY(-50%)",
          zIndex: 30,
          width: "3rem",
          height: "3rem",
          background: "rgba(20, 20, 20, 0.88)",
          border: "1px solid rgba(255, 255, 255, 0.15)",
          color: "#ffffff",
          cursor: "pointer",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.7)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
        aria-label="Previous Photo"
      >
        <svg style={{ width: "22px", height: "22px", display: "block" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="flex items-center justify-center rounded-full transition-all"
        style={{
          position: "absolute",
          top: "50%",
          right: "1rem",
          transform: "translateY(-50%)",
          zIndex: 30,
          width: "3rem",
          height: "3rem",
          background: "rgba(20, 20, 20, 0.88)",
          border: "1px solid rgba(255, 255, 255, 0.15)",
          color: "#ffffff",
          cursor: "pointer",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.7)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
        aria-label="Next Photo"
      >
        <svg style={{ width: "22px", height: "22px", display: "block" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Lightbox Content Container */}
      <div
        className="relative z-10 flex flex-col items-center justify-center modal-content"
        style={{ maxWidth: "80rem", maxHeight: "85vh" }}
      >
        <img
          src={photo.image}
          alt={photo.alt || "Photography item"}
          style={{
            maxHeight: "75vh",
            maxWidth: "90vw",
            width: "auto",
            objectFit: "contain",
            borderRadius: "0.75rem",
            border: "1px solid rgba(255, 255, 255, 0.12)",
            boxShadow: "0 25px 60px -15px rgba(0, 0, 0, 0.95)"
          }}
        />
      </div>
    </div>
  );
}
