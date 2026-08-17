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
    <div className="fixed inset-0 z-50 flex items-center justify-center modal-overlay p-4 sm:p-8">
      {/* Background click to close */}
      <div className="absolute inset-0" onClick={onClose}></div>

      {/* Top Bar Controls */}
      <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between pointer-events-none">
        <div className="pointer-events-auto px-3.5 py-1.5 rounded-full bg-slate-950/80 border border-white/15 text-xs font-semibold text-slate-300 backdrop-blur-md">
          <span>{currentIndex + 1}</span> / <span>{totalCount}</span>
        </div>

        <button
          onClick={onClose}
          className="pointer-events-auto w-10 h-10 rounded-full bg-slate-950/80 hover:bg-red-500/80 text-white border border-white/15 flex items-center justify-center transition-all backdrop-blur-md"
          aria-label="Close Lightbox"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-slate-950/70 hover:bg-emerald-500 hover:text-slate-950 text-white border border-white/15 flex items-center justify-center transition-all backdrop-blur-md"
        aria-label="Previous Photo"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-slate-950/70 hover:bg-emerald-500 hover:text-slate-950 text-white border border-white/15 flex items-center justify-center transition-all backdrop-blur-md"
        aria-label="Next Photo"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Lightbox Content Container */}
      <div className="relative z-10 max-w-5xl max-h-[85vh] flex flex-col items-center modal-content">
        <img
          src={photo.image}
          alt={photo.alt || photo.title}
          className="max-h-[75vh] w-auto object-contain rounded-xl shadow-2xl shadow-black border border-white/10"
        />

        {/* Caption & Category */}
        <div className="mt-4 text-center">
          <h4 className="text-base font-bold text-white mb-0.5">
            {photo.title || "Visual Artistry"}
          </h4>
          {photo.category && (
            <span className="text-xs text-emerald-400 font-medium">
              {photo.category}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
