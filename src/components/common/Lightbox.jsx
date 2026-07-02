"use client";

import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect } from "react";
import { createPortal } from "react-dom";

export default function Lightbox({
  images,
  currentIndex,
  setCurrentIndex,
  onClose,
  title,
}) {
  const currentImage = images[currentIndex];

  const showPrevious = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  const showNext = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") showPrevious();
      if (event.key === "ArrowRight") showNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  });

  return createPortal(
    <div className="fixed inset-0 z-[9999] bg-black/95 px-4 py-8 text-white">
      <button
        onClick={onClose}
        className="absolute right-6 top-6 z-20 rounded-full border border-white/20 bg-white/10 p-3 transition hover:bg-red-600"
        aria-label="Close gallery"
      >
        <X />
      </button>

      <button
        onClick={showPrevious}
        className="absolute left-6 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/20 bg-white/10 p-3 transition hover:bg-red-600"
        aria-label="Previous image"
      >
        <ChevronLeft />
      </button>

      <button
        onClick={showNext}
        className="absolute right-6 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/20 bg-white/10 p-3 transition hover:bg-red-600"
        aria-label="Next image"
      >
        <ChevronRight />
      </button>

      <div className="mx-auto flex h-full max-w-7xl flex-col items-center justify-center">
        <div className="relative h-[82vh] w-full">
          <Image
            src={currentImage}
            alt={`${title} image ${currentIndex + 1}`}
            fill
            className="object-contain"
          />
        </div>

        <div className="mt-4 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-red-500">
            {title}
          </p>
          <p className="mt-2 text-gray-300">
            {currentIndex + 1} / {images.length}
          </p>
        </div>
      </div>
    </div>,
    document.body
  );
}